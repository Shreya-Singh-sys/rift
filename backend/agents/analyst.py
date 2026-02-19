"""
Analyst Agent - Clones repository and runs pytest to capture errors
"""
import os
import stat
import subprocess
import shutil
from pathlib import Path
from typing import Optional
from state import AgentState
import time

# Put cloned repos OUTSIDE backend/ so uvicorn WatchFiles never triggers on them
_WORKSPACE_DIR = str(Path(__file__).resolve().parent.parent.parent / "cloned_repos")


class AnalystAgent:
    def __init__(self, workspace_dir: str = _WORKSPACE_DIR):
        self.workspace_dir = workspace_dir
        os.makedirs(workspace_dir, exist_ok=True)
    
    @staticmethod
    def _force_remove(path: str):
        """Remove directory tree even if files are read-only (Windows git pack files)."""
        def _on_error(func, fpath, exc_info):
            # Make the file/dir writable then retry
            os.chmod(fpath, stat.S_IWRITE)
            func(fpath)
        shutil.rmtree(path, onerror=_on_error)

    @staticmethod
    def sanitize_repo_url(repo_url: str) -> str:
        """Convert browser GitHub URLs to a valid clone URL."""
        import re
        # Strip trailing slash
        repo_url = repo_url.rstrip("/")
        # Remove /tree/<branch>, /blob/<branch>/..., /commit/... suffixes
        repo_url = re.sub(r"/(tree|blob|commit|releases|issues|pulls)(/.*)?$", "", repo_url)
        # Ensure .git suffix
        if not repo_url.endswith(".git"):
            repo_url = repo_url + ".git"
        return repo_url

    def clone_repository(self, repo_url: str, team_name: str, skip_clone: bool = False) -> Optional[str]:
        """Clone the GitHub repository"""
        try:
            repo_url = self.sanitize_repo_url(repo_url)
            print(f"  📎 Resolved clone URL: {repo_url}")
            # Create a unique directory for this repo
            repo_name = repo_url.split("/")[-1].replace(".git", "")
            repo_path = os.path.join(self.workspace_dir, f"{team_name}_{repo_name}")

            if skip_clone and os.path.exists(repo_path):
                print(f"  ♻️  Reusing existing clone: {repo_path}")
                return repo_path

            # Remove if exists
            if os.path.exists(repo_path):
                self._force_remove(repo_path)
            
            # Clone the repository
            result = subprocess.run(
                ["git", "clone", repo_url, repo_path],
                capture_output=True,
                text=True,
                timeout=300
            )
            
            if result.returncode != 0:
                print(f"Clone failed: {result.stderr}")
                return None
            
            return repo_path
        except Exception as e:
            print(f"Error cloning repository: {e}")
            return None
    
    def scan_syntax_errors(self, repo_path: str) -> list:
        """Directly scan all .py files for syntax errors using py_compile"""
        import py_compile, ast, re
        errors = []
        seen = set()

        py_files = []
        for root, dirs, files in os.walk(repo_path):
            # Skip hidden dirs and venv
            dirs[:] = [d for d in dirs if not d.startswith('.') and d not in ('venv', '__pycache__', 'node_modules')]
            for f in files:
                if f.endswith('.py') and not f.startswith('test_'):
                    py_files.append(os.path.join(root, f))

        for filepath in py_files:
            rel = os.path.relpath(filepath, repo_path).replace("\\", "/")
            try:
                with open(filepath, 'r', encoding='utf-8', errors='replace') as fh:
                    source = fh.read()
                ast.parse(source, filename=filepath)
            except SyntaxError as e:
                key = (rel, e.lineno or 1)
                if key not in seen:
                    seen.add(key)
                    errors.append({
                        "file": rel,
                        "bug_type": "SYNTAX",
                        "line": e.lineno or 1,
                        "description": f"SyntaxError: {e.msg} (line {e.lineno}): {(e.text or '').strip()}"
                    })
                    print(f"  🔴 SyntaxError in {rel} at line {e.lineno}: {e.msg}")
        return errors

    def run_tests(self, repo_path: str) -> tuple[str, list]:
        """Run pytest and capture output; fall back to static syntax scan if 0 errors found"""
        original_dir = os.getcwd()
        try:
            os.chdir(repo_path)
            print(f"  📂 Repo contents: {os.listdir(repo_path)}")

            result = subprocess.run(
                ["pytest", "-v", "--tb=long", "--no-header",
                 "--import-mode=importlib"],
                capture_output=True,
                text=True,
                timeout=300
            )
            os.chdir(original_dir)

            output = result.stdout + "\n" + result.stderr
            errors = self.parse_test_output(output, repo_path)

            # Fallback: if pytest found nothing, do direct AST syntax scan
            if not errors:
                print("  ⚠️  pytest found 0 errors — running direct AST syntax scan...")
                errors = self.scan_syntax_errors(repo_path)

            return output, errors
        except subprocess.TimeoutExpired:
            os.chdir(original_dir)
            return "Test execution timed out", []
        except Exception as e:
            os.chdir(original_dir)
            return f"Error running tests: {str(e)}", []
    
    def parse_test_output(self, output: str, repo_path: str) -> list:
        """Parse pytest output to extract error information"""
        import re
        errors = []
        seen = set()  # deduplicate by (file, line)
        lines = output.split("\n")

        print(f"\n📋 Raw pytest output:\n{output[:2000]}\n")  # debug log

        for i, line in enumerate(lines):
            # Match pytest traceback file references: "path/file.py:42: ErrorType"
            # Also matches "  File "path/file.py", line 42"
            m = re.search(r'([^\s"]+\.py)["\s]*[,:][\s]*(?:line\s*)?(\d+)', line)
            if not m:
                continue

            raw_file = m.group(1).strip()
            line_no = int(m.group(2))

            # Only accept files inside the repo
            try:
                abs_file = os.path.abspath(raw_file)
                abs_repo = os.path.abspath(repo_path)
                if not abs_file.startswith(abs_repo):
                    continue
            except Exception:
                continue

            rel_file = abs_file.replace(abs_repo, "").lstrip("/\\")

            # Skip test files — fix the source file
            if os.path.basename(rel_file).startswith("test_"):
                continue

            # Determine bug type from surrounding context
            context = "\n".join(lines[max(0, i-3):min(len(lines), i+5)])
            if "SyntaxError" in context or "invalid syntax" in context or "deff" in context:
                bug_type = "SYNTAX"
            elif "TypeError" in context or "NameError" in context or "AttributeError" in context:
                bug_type = "TYPE_ERROR"
            elif "AssertionError" in context or "assert" in context.lower():
                bug_type = "LOGIC"
            else:
                bug_type = "SYNTAX"

            # Get description from nearby error lines
            desc_lines = [l.strip() for l in lines[max(0, i-2):min(len(lines), i+3)]
                          if l.strip() and not l.strip().startswith("_")]
            description = " | ".join(desc_lines)[:200]

            key = (rel_file, line_no)
            if key not in seen and rel_file:
                seen.add(key)
                errors.append({
                    "file": rel_file,
                    "bug_type": bug_type,
                    "line": line_no,
                    "description": description
                })

        # Fallback: if pytest couldn't even collect (pure SyntaxError at top level)
        # scan for "SyntaxError" or "invalid syntax" with a file reference
        if not errors:
            for i, line in enumerate(lines):
                if "SyntaxError" in line or "invalid syntax" in line:
                    # Look in nearby lines for a file path
                    for j in range(max(0, i-5), min(len(lines), i+5)):
                        m = re.search(r'([^\s"]+\.py)["\s]*[,:][\s]*(?:line\s*)?(\d+)', lines[j])
                        if m:
                            raw_file = m.group(1).strip()
                            line_no = int(m.group(2))
                            try:
                                abs_file = os.path.abspath(raw_file)
                                abs_repo = os.path.abspath(repo_path)
                                if not abs_file.startswith(abs_repo):
                                    continue
                                rel_file = abs_file.replace(abs_repo, "").lstrip("/\\")
                                if not os.path.basename(rel_file).startswith("test_"):
                                    key = (rel_file, line_no)
                                    if key not in seen:
                                        seen.add(key)
                                        errors.append({
                                            "file": rel_file,
                                            "bug_type": "SYNTAX",
                                            "line": line_no,
                                            "description": line.strip()[:200]
                                        })
                                        break
                            except Exception:
                                continue

        return errors
    
    def extract_error_details(self, lines: list, index: int, bug_type: str, repo_path: str) -> dict:
        """Extract detailed error information"""
        error_line = lines[index]

        # Try to find file and line number
        file_path = ""
        line_number = 0
        description = error_line.strip()

        # Look backwards for file path — prefer source files over test files
        candidates = []
        for i in range(max(0, index - 10), index + 1):
            if ".py" in lines[i] and ":" in lines[i]:
                parts = lines[i].split(":")
                if len(parts) >= 2:
                    fp = parts[0].strip().lstrip("E ").strip()
                    try:
                        ln = int(parts[1].strip())
                    except:
                        ln = 1
                    if fp.endswith(".py"):
                        candidates.append((fp, ln))

        # Prefer non-test source files (app.py, main.py etc) over test_*.py
        # CRITICAL: only accept files inside the repo (filter out site-packages, pytest internals etc)
        def is_repo_file(fp):
            try:
                return os.path.abspath(fp).startswith(os.path.abspath(repo_path))
            except:
                return False

        repo_candidates = [(f, l) for f, l in candidates if is_repo_file(f)]
        source = [(f, l) for f, l in repo_candidates if not os.path.basename(f).startswith("test_")]
        chosen = source[-1] if source else (repo_candidates[-1] if repo_candidates else (None, 1))
        if chosen[0]:
            file_path = chosen[0]
            line_number = chosen[1]
        
        return {
            "file": file_path.replace(repo_path, "").lstrip("/\\"),
            "bug_type": bug_type,
            "line": line_number if line_number > 0 else 1,
            "description": description[:200]  # Limit description length
        }
    
    def analyze(self, state: AgentState) -> AgentState:
        """Main analysis function - entry point for LangGraph"""
        print(f"\n🔍 Analyst Agent: Analyzing repository {state['repo_url']}")
        
        # Only initialize on the very first call, not on retries
        if state.get("iteration", 0) == 0:
            state["execution_start_time"] = time.time()
            state["iteration"] = 1
            state["total_commits"] = 0
        
        # Clone repository (skip re-clone on retries — reuse existing checkout)
        is_retry = state.get("iteration", 1) > 1
        repo_path = self.clone_repository(state["repo_url"], state["team_name"], skip_clone=is_retry)
        if not repo_path:
            state["status"] = "failed_clone"
            return state
        
        state["repo_path"] = repo_path
        print(f"✅ Repository cloned to: {repo_path}")
        
        # Run tests
        test_output, errors = self.run_tests(repo_path)
        state["test_output"] = test_output
        state["errors_found"] = errors
        
        print(f"📊 Found {len(errors)} errors")
        
        if len(errors) == 0:
            state["status"] = "no_errors"
        else:
            state["status"] = "errors_found"
        
        return state


# Node function for LangGraph
def analyst_node(state: AgentState) -> AgentState:
    """LangGraph node wrapper"""
    agent = AnalystAgent()
    return agent.analyze(state)
