"""
Coder Agent - Generates fixes for identified bugs using AI
"""
import os
import time
from pathlib import Path
from state import AgentState, Fix, BugType, FixStatus
from langchain_groq import ChatGroq
from langchain_core.prompts import ChatPromptTemplate
from dotenv import load_dotenv

# Load .env from parent (backend/) directory
load_dotenv(dotenv_path=Path(__file__).resolve().parent.parent / ".env")


class CoderAgent:
    def __init__(self):
        model = os.getenv("GROQ_MODEL", "llama-3.3-70b-versatile")
        api_key = os.getenv("GROQ_API_KEY")

        self.llm = ChatGroq(
            model=model,
            api_key=api_key,
            temperature=0.2
        )
        
        self.fix_prompt = ChatPromptTemplate.from_messages([
            ("system", """You are an expert code fixer. Fix the bug and return ONLY the corrected file content.

Bug Types:
- LINTING: Code style, formatting, unused imports
- SYNTAX: Missing colons, parentheses, indentation errors
- LOGIC: Wrong logic, failed assertions, incorrect algorithms
- TYPE_ERROR: Type mismatches, undefined variables, attribute errors

CRITICAL RULES:
- Return ONLY the fixed Python code, no explanations, no markdown fences (no ```).
- Do NOT add duplicate functions, imports, or any extra code.
- Only fix the exact bug mentioned at the given line, leave everything else exactly as-is.
- Output must be valid, runnable Python."""),
            ("user", """File: {file}
Bug Type: {bug_type}
Line: {line}
Error: {description}

File content (fix the bug at line {line}):
{code_section}

Return the complete fixed file content only:""")
        ])
    
    def read_file_section(self, file_path: str, line: int, context: int = 5) -> str:
        """Read entire file but cap at 150 lines to stay within token limits"""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                all_lines = f.readlines()

            total = len(all_lines)
            if total <= 150:
                return ''.join(all_lines)

            # Send 150 lines centred around the error line
            half = 75
            start = max(0, line - half - 1)
            end = min(total, start + 150)
            start = max(0, end - 150)  # re-adjust if near EOF
            return ''.join(all_lines[start:end])
        except Exception as e:
            return f"# Error reading file: {e}"

    def _invoke_with_retry(self, messages, max_retries: int = 5) -> str:
        """Invoke LLM with exponential backoff on rate limit errors."""
        delay = 10  # start with 10 seconds
        for attempt in range(max_retries):
            try:
                response = self.llm.invoke(messages)
                return response.content.strip()
            except Exception as e:
                err = str(e).lower()
                is_rate_limit = any(x in err for x in [
                    "429", "too many requests", "rate limit", "ratelimit",
                    "quota", "scraping"
                ])
                if is_rate_limit and attempt < max_retries - 1:
                    wait = delay * (2 ** attempt)  # 10s, 20s, 40s, 80s, 160s
                    print(f"  ⏳ Rate limited. Waiting {wait}s before retry ({attempt+1}/{max_retries})...")
                    time.sleep(wait)
                else:
                    raise
    
    def generate_fix(self, error: dict, repo_path: str) -> Fix:
        """Generate a fix for a single error"""
        file_path = os.path.join(repo_path, error['file'])
        
        # Read code section
        code_section = self.read_file_section(file_path, error['line'])
        
        try:
            # Generate fix using LLM with retry on rate limits
            messages = self.fix_prompt.format_messages(
                file=error['file'],
                bug_type=error['bug_type'],
                line=error['line'],
                description=error['description'],
                code_section=code_section
            )
            
            fix_code = self._invoke_with_retry(messages)

            # Strip markdown code fences (```python ... ``` or ``` ... ```)
            if fix_code.startswith("```"):
                lines = fix_code.split('\n')
                lines = lines[1:]
                if lines and lines[-1].strip() == '```':
                    lines = lines[:-1]
                fix_code = '\n'.join(lines)

            # Preview first 8 lines of generated fix
            preview = '\n'.join(fix_code.splitlines()[:8])
            print(f"  📄 Fix preview ({error['file']}):\n" + '\n'.join(f'     {l}' for l in preview.splitlines()))
            
            return {
                "file": error['file'],
                "bug_type": error['bug_type'],
                "line": error['line'],
                "description": error['description'],
                "fix_code": fix_code,
                "commit_message": f"[AI-AGENT] Fixed {error['bug_type']} in {error['file']} at line {error['line']}",
                "status": FixStatus.PENDING
            }
        except Exception as e:
            print(f"Error generating fix: {e}")
            return {
                "file": error['file'],
                "bug_type": error['bug_type'],
                "line": error['line'],
                "description": error['description'],
                "fix_code": "",
                "commit_message": f"[AI-AGENT] Failed to fix {error['bug_type']} in {error['file']}",
                "status": FixStatus.FAILED
            }
    
    def apply_fix(self, fix: Fix, repo_path: str) -> bool:
        """Apply the generated fix to the file (writes entire fixed file)"""
        file_path = os.path.join(repo_path, fix['file'])
        
        try:
            if not fix['fix_code'].strip():
                return False
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fix['fix_code'])
            
            return True
        except Exception as e:
            print(f"Error applying fix: {e}")
            return False
    
    def code(self, state: AgentState) -> AgentState:
        """Main coding function - entry point for LangGraph"""
        print(f"\n💻 Coder Agent: Generating fixes for {len(state['errors_found'])} errors")
        
        fixes = []
        for error in state['errors_found']:
            fix = self.generate_fix(error, state['repo_path'])
            fixes.append(fix)
            print(f"  ✓ Generated fix for {error['bug_type']} in {error['file']}")
        
        state['fixes'] = fixes
        state['status'] = 'fixes_generated'
        
        return state


# Node function for LangGraph
def coder_node(state: AgentState) -> AgentState:
    """LangGraph node wrapper"""
    agent = CoderAgent()
    return agent.code(state)

