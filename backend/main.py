"""
FastAPI Main Application
REST API for the CI/CD Healing Agent
"""
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
import os
import orjson
from pathlib import Path
from dotenv import load_dotenv
from graph import healing_graph
from state import AgentState

# Load .env from the backend directory regardless of CWD
_env_path = Path(__file__).resolve().parent / ".env"
load_dotenv(dotenv_path=_env_path)

_model = os.getenv("GROQ_MODEL", "llama-3.3-70b-versatile")
print(f"🤖 Using model: {_model} via Groq")


app = FastAPI(
    title="Autonomous CI/CD Healing Agent",
    description="RIFT 2026 Hackathon - Multi-Agent Code Healing System",
    version="1.0.0"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class HealRequest(BaseModel):
    repo_url: str
    team_name: str
    leader_name: str
    max_iterations: int = 5


class HealResponse(BaseModel):
    team_name: str
    leader_name: str
    repo_url: str
    branch_name: str = ""
    total_commits: int = 0
    execution_time_minutes: float = 0.0
    final_score: int = 0
    fixes: list = []
    status: str
    total_failures: int = 0
    iterations_completed: int = 0


@app.get("/")
async def root():
    """Health check endpoint"""
    return {
        "service": "Autonomous CI/CD Healing Agent",
        "status": "operational",
        "version": "1.0.0"
    }


@app.post("/heal", response_model=HealResponse)
async def heal_repository(request: HealRequest):
    """
    Main endpoint to trigger the healing process
    
    This will:
    1. Clone the repository
    2. Run tests to identify errors
    3. Generate and apply fixes
    4. Commit fixes with AI-AGENT prefix
    5. Calculate final score
    """
    try:
        # Initialize state
        initial_state: AgentState = {
            "repo_url": request.repo_url,
            "team_name": request.team_name,
            "leader_name": request.leader_name,
            "repo_path": None,
            "branch_name": None,
            "test_output": None,
            "errors_found": [],
            "fixes": [],
            "total_commits": 0,
            "iteration": 0,
            "max_iterations": request.max_iterations,
            "execution_start_time": None,
            "execution_time_minutes": None,
            "final_score": None,
            "total_failures": None,
            "iterations_completed": None,
            "status": "initialized"
        }
        
        # Run the healing graph
        print(f"\n🚀 Starting healing process for {request.repo_url}")
        final_state = healing_graph.invoke(initial_state)
        
        # Save results to JSON
        results = {
            "team_name": final_state["team_name"],
            "leader_name": final_state["leader_name"],
            "repo_url": final_state["repo_url"],
            "branch_name": final_state.get("branch_name") or "",
            "total_commits": final_state.get("total_commits") or 0,
            "execution_time_minutes": final_state.get("execution_time_minutes") or 0.0,
            "final_score": final_state.get("final_score") or 0,
            "fixes": [
                {
                    "file": fix["file"],
                    "bug_type": fix["bug_type"],
                    "line": fix["line"],
                    "commit_message": fix["commit_message"],
                    "status": fix["status"]
                }
                for fix in final_state["fixes"]
            ],
            "status": final_state["status"],
            "total_failures": final_state.get("total_failures") or 0,
            "iterations_completed": final_state.get("iterations_completed") or final_state.get("iteration") or 1,
        }
        
        # Write results.json
        with open("results.json", "wb") as f:
            f.write(orjson.dumps(results, option=orjson.OPT_INDENT_2))
        
        print(f"\n✅ Healing completed! Results saved to results.json")
        
        return results
    
    except Exception as e:
        print(f"\n❌ Error during healing process: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/results")
async def get_results():
    """Retrieve the latest results.json"""
    try:
        if not os.path.exists("results.json"):
            raise HTTPException(status_code=404, detail="No results found")
        
        with open("results.json", "rb") as f:
            results = orjson.loads(f.read())
        
        return results
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        reload_excludes=["cloned_repos/*", "results.json"],
    )
