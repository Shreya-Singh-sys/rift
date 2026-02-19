"""
LangGraph Workflow Definition
Orchestrates the multi-agent healing process
"""
from typing import Literal
from langgraph.graph import StateGraph, END
from state import AgentState
from agents.analyst import analyst_node
from agents.coder import coder_node
from agents.git_manager import git_manager_node
import time


def should_continue(state: AgentState) -> Literal["coder", "end"]:
    """Decision function: Continue if errors found and iterations remain"""
    if state["status"] == "no_errors":
        return "end"
    
    if state["status"] == "failed_clone":
        return "end"
    
    if state["iteration"] >= state["max_iterations"]:
        return "end"
    
    if state["status"] == "errors_found":
        return "coder"
    
    return "end"


def should_retry(state: AgentState) -> Literal["analyst", "scorer"]:
    """Decision function: Retry analysis or proceed to scoring"""
    if state["status"] == "fixes_committed":
        state["iteration"] += 1
        
        # Check if we should retry
        if state["iteration"] < state["max_iterations"]:
            print(f"\n🔄 Iteration {state['iteration']}/{state['max_iterations']} - Retrying analysis")
            return "analyst"
    
    return "scorer"


def scorer_node(state: AgentState) -> AgentState:
    """Calculate final score based on hackathon criteria"""
    print(f"\n📊 Scorer: Calculating final score")
    
    # Calculate execution time
    if state["execution_start_time"]:
        execution_time = (time.time() - state["execution_start_time"]) / 60
        state["execution_time_minutes"] = round(execution_time, 2)
    else:
        state["execution_time_minutes"] = 0
    
    # Base score
    score = 100
    
    # Time bonus: +10 if < 5 minutes
    if state["execution_time_minutes"] < 5:
        score += 10
        print(f"  ⚡ Time bonus: +10 (completed in {state['execution_time_minutes']} min)")
    
    # Commit penalty: -2 per commit over 20
    if state["total_commits"] > 20:
        penalty = (state["total_commits"] - 20) * 2
        score -= penalty
        print(f"  ⚠️  Commit penalty: -{penalty} ({state['total_commits']} commits)")
    
    state["final_score"] = max(0, score)  # Ensure non-negative
    state["status"] = "completed"
    
    print(f"  🎯 Final Score: {state['final_score']}")
    
    return state


def build_graph() -> StateGraph:
    """Build the LangGraph workflow"""
    
    # Create the graph
    workflow = StateGraph(AgentState)
    
    # Add nodes
    workflow.add_node("analyst", analyst_node)
    workflow.add_node("coder", coder_node)
    workflow.add_node("git_manager", git_manager_node)
    workflow.add_node("scorer", scorer_node)
    
    # Set entry point
    workflow.set_entry_point("analyst")
    
    # Add edges
    workflow.add_conditional_edges(
        "analyst",
        should_continue,
        {
            "coder": "coder",
            "end": "scorer"
        }
    )
    
    workflow.add_edge("coder", "git_manager")
    
    workflow.add_conditional_edges(
        "git_manager",
        should_retry,
        {
            "analyst": "analyst",
            "scorer": "scorer"
        }
    )
    
    workflow.add_edge("scorer", END)
    
    return workflow.compile()


# Singleton graph instance — recursion_limit covers max_iterations * 4 nodes + buffer
healing_graph = build_graph()
healing_graph.config = {"recursion_limit": 100}
