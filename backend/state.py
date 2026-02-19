"""
Multi-Agent State Schema for LangGraph
Defines the shared state structure across all agents
"""
from typing import TypedDict, List, Optional
from enum import Enum


class BugType(str, Enum):
    LINTING = "LINTING"
    SYNTAX = "SYNTAX"
    LOGIC = "LOGIC"
    TYPE_ERROR = "TYPE_ERROR"
    IMPORT = "IMPORT"
    INDENTATION = "INDENTATION"


class FixStatus(str, Enum):
    PENDING = "pending"
    SUCCESS = "success"
    FAILED = "failed"


class Fix(TypedDict):
    file: str
    bug_type: BugType
    line: int
    description: str
    fix_code: str
    commit_message: str
    status: FixStatus


class AgentState(TypedDict):
    # Input
    repo_url: str
    team_name: str
    leader_name: str
    
    # Repository state
    repo_path: Optional[str]
    branch_name: Optional[str]
    
    # Analysis results
    test_output: Optional[str]
    errors_found: List[dict]
    
    # Fixes
    fixes: List[Fix]
    total_commits: int
    
    # Execution metadata
    iteration: int
    max_iterations: int
    execution_start_time: Optional[float]
    execution_time_minutes: Optional[float]
    
    # Final results
    final_score: Optional[int]
    total_failures: Optional[int]
    iterations_completed: Optional[int]
    status: str
