"""
Git Manager Agent - Commits fixes and manages branches
"""
import subprocess
import os
from pathlib import Path
from dotenv import load_dotenv
from state import AgentState, FixStatus
from agents.coder import CoderAgent

load_dotenv(dotenv_path=Path(__file__).resolve().parent.parent / ".env")


class GitManagerAgent:
    def __init__(self):
        self.coder = CoderAgent()
    
    def configure_git(self, repo_path: str):
        """Configure git user for commits"""
        try:
            subprocess.run(
                ["git", "config", "user.name", "AI-Healing-Agent"],
                cwd=repo_path,
                check=True
            )
            subprocess.run(
                ["git", "config", "user.email", "ai-agent@rift2026.dev"],
                cwd=repo_path,
                check=True
            )
        except Exception as e:
            print(f"Error configuring git: {e}")
    
    def create_branch(self, repo_path: str, team_name: str, leader_name: str) -> str:
        """Create AI fix branch with required naming convention"""
        # Format: TEAM_NAME_LEADER_NAME_AI_Fix (all caps, underscores for spaces)
        branch_name = f"{team_name.upper().replace(' ', '_')}_{leader_name.upper().replace(' ', '_')}_AI_Fix"
        
        try:
            # Create and checkout new branch
            subprocess.run(
                ["git", "checkout", "-b", branch_name],
                cwd=repo_path,
                check=True,
                capture_output=True
            )
            print(f"✅ Created branch: {branch_name}")
            return branch_name
        except Exception as e:
            print(f"Error creating branch: {e}")
            return ""
    
    def commit_fix(self, repo_path: str, fix: dict) -> bool:
        """Commit a single fix"""
        try:
            # Stage the file
            subprocess.run(
                ["git", "add", fix['file']],
                cwd=repo_path,
                check=True,
                capture_output=True
            )

            # Show diff before committing
            diff_result = subprocess.run(
                ["git", "diff", "--cached", "--stat"],
                cwd=repo_path,
                capture_output=True,
                text=True
            )
            diff_detail = subprocess.run(
                ["git", "diff", "--cached"],
                cwd=repo_path,
                capture_output=True,
                text=True
            )
            if diff_result.stdout.strip():
                print(f"  📝 Changes: {diff_result.stdout.strip()}")
                for line in diff_detail.stdout.splitlines():
                    if line.startswith(('+', '-')) and not line.startswith(('+++', '---')):
                        prefix = '  \033[32m+\033[0m' if line.startswith('+') else '  \033[31m-\033[0m'
                        print(f"  {'[+]' if line.startswith('+') else '[-]'} {line[1:]}")
            else:
                print(f"  ⚠️  No changes detected in {fix['file']} — fix may not have applied correctly")
                return False

            # Commit with AI-AGENT prefix
            subprocess.run(
                ["git", "commit", "-m", fix['commit_message']],
                cwd=repo_path,
                check=True,
                capture_output=True
            )

            print(f"  ✓ Committed: {fix['commit_message']}")
            return True
        except Exception as e:
            print(f"  ✗ Commit failed: {e}")
            return False
    
    def push_branch(self, repo_path: str, branch_name: str, repo_url: str) -> bool:
        """Push branch to GitHub using PAT for auth"""
        try:
            import re
            github_token = os.getenv("GITHUB_TOKEN") or os.getenv("OPENAI_API_KEY", "")
            # Sanitize: strip /tree/..., /blob/... etc from browser URL
            repo_url = repo_url.rstrip("/")
            repo_url = re.sub(r"/(tree|blob|commit|releases|issues|pulls)(/.*)?$", "", repo_url)
            if not repo_url.endswith(".git"):
                repo_url += ".git"

            # Embed token into remote URL: https://<token>@github.com/user/repo.git
            if "github.com" in repo_url and github_token:
                authed_url = repo_url.replace(
                    "https://", f"https://{github_token}@"
                )
                subprocess.run(
                    ["git", "remote", "set-url", "origin", authed_url],
                    cwd=repo_path, check=True, capture_output=True
                )

            result = subprocess.run(
                ["git", "push", "-u", "origin", branch_name],
                cwd=repo_path,
                capture_output=True,
                text=True,
                timeout=60
            )
            if result.returncode == 0:
                print(f"  🚀 Pushed branch '{branch_name}' to GitHub!")
                return True
            else:
                print(f"  ✗ Push failed: {result.stderr.strip()}")
                return False
        except Exception as e:
            print(f"  ✗ Push error: {e}")
            return False

    def manage(self, state: AgentState) -> AgentState:
        """Main git management function - entry point for LangGraph"""
        print(f"\n🔧 Git Manager: Applying and committing fixes")
        
        repo_path = state['repo_path']
        
        # Configure git
        self.configure_git(repo_path)
        
        # Create branch
        branch_name = self.create_branch(repo_path, state['team_name'], state['leader_name'])
        state['branch_name'] = branch_name
        
        # Apply and commit each fix
        commit_count = 0
        for fix in state['fixes']:
            # Apply the fix
            if self.coder.apply_fix(fix, repo_path):
                # Commit the fix
                if self.commit_fix(repo_path, fix):
                    fix['status'] = FixStatus.SUCCESS
                    commit_count += 1
                else:
                    fix['status'] = FixStatus.FAILED
            else:
                fix['status'] = FixStatus.FAILED
        
        state['total_commits'] = commit_count
        state['status'] = 'fixes_committed'

        print(f"📊 Successfully committed {commit_count}/{len(state['fixes'])} fixes")

        # Push to GitHub
        if commit_count > 0:
            self.push_branch(repo_path, branch_name, state.get('repo_url', ''))

        return state


# Node function for LangGraph
def git_manager_node(state: AgentState) -> AgentState:
    """LangGraph node wrapper"""
    agent = GitManagerAgent()
    return agent.manage(state)
