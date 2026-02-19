# 📊 System Architecture & Flow Diagram
## Autonomous CI/CD Healing Agent - RIFT 2026

---

## 🏗️ High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER INTERFACE                          │
│                    (React + Vite Frontend)                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│  │  Input   │  │  Score   │  │ Timeline │  │  Fixes   │      │
│  │ Section  │  │Breakdown │  │   View   │  │  Table   │      │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘      │
│                           ↕ HTTP/REST API                       │
└─────────────────────────────────────────────────────────────────┘
                                ↓
┌─────────────────────────────────────────────────────────────────┐
│                       BACKEND API SERVER                        │
│                      (FastAPI + Python)                         │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │                    POST /heal                             │ │
│  │  • Receives repo URL, team name, leader name             │ │
│  │  • Initializes agent state                               │ │
│  │  • Triggers LangGraph workflow                           │ │
│  └───────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
                                ↓
┌─────────────────────────────────────────────────────────────────┐
│                    LANGGRAPH WORKFLOW ENGINE                    │
│                     (Multi-Agent Orchestration)                 │
│                                                                 │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐        │
│  │   ANALYST   │ → │    CODER    │ → │ GIT MANAGER │        │
│  │    AGENT    │    │    AGENT    │    │    AGENT    │        │
│  └─────────────┘    └─────────────┘    └─────────────┘        │
│         ↓                  ↓                   ↓                │
│  • Clone repo       • Analyze errors    • Apply fixes          │
│  • Run pytest       • Generate fixes    • Git commit           │
│  • Parse errors     • Use GPT-4        • Create branch         │
│                                                                 │
│                         ↓ (retry loop)                          │
│                                                                 │
│                    ┌─────────────┐                              │
│                    │   SCORER    │                              │
│                    │    AGENT    │                              │
│                    └─────────────┘                              │
│                          ↓                                       │
│                   • Calculate score                             │
│                   • Generate results.json                       │
└─────────────────────────────────────────────────────────────────┘
                                ↓
┌─────────────────────────────────────────────────────────────────┐
│                      EXTERNAL SERVICES                          │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐                 │
│  │  GitHub  │    │ OpenAI   │    │  Docker  │                 │
│  │   API    │    │   API    │    │ Container│                 │
│  └──────────┘    └──────────┘    └──────────┘                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🔄 Detailed Agent Workflow

```
START
  ↓
┌─────────────────────────────────────────┐
│         1. ANALYST AGENT                │
├─────────────────────────────────────────┤
│ Input: repo_url, team_name, leader_name │
│                                         │
│ Actions:                                │
│  1. git clone <repo_url>                │
│  2. cd cloned_repo                      │
│  3. pytest -v --tb=short                │
│  4. Parse test output                   │
│                                         │
│ Output:                                 │
│  • repo_path                            │
│  • test_output                          │
│  • errors_found[]                       │
│    - file: "src/app.py"                 │
│    - bug_type: "SYNTAX"                 │
│    - line: 42                           │
│    - description: "Missing colon"       │
└─────────────────────────────────────────┘
  ↓
┌─────────────────────────────────────────┐
│  Decision: Errors Found?                │
├─────────────────────────────────────────┤
│  NO  → Skip to SCORER                   │
│  YES → Continue to CODER                │
└─────────────────────────────────────────┘
  ↓ YES
┌─────────────────────────────────────────┐
│         2. CODER AGENT                  │
├─────────────────────────────────────────┤
│ Input: errors_found[]                   │
│                                         │
│ Actions:                                │
│  FOR EACH error:                        │
│    1. Read file section (±5 lines)      │
│    2. Call GPT-4 with prompt:           │
│       "Fix {bug_type} at line {line}"   │
│    3. Generate fix_code                 │
│    4. Create commit message:            │
│       "[AI-AGENT] Fixed {bug_type}..."  │
│                                         │
│ Output:                                 │
│  • fixes[]                              │
│    - file: "src/app.py"                 │
│    - bug_type: "SYNTAX"                 │
│    - line: 42                           │
│    - fix_code: "def main():"            │
│    - commit_message: "[AI-AGENT]..."    │
│    - status: "pending"                  │
└─────────────────────────────────────────┘
  ↓
┌─────────────────────────────────────────┐
│         3. GIT MANAGER AGENT            │
├─────────────────────────────────────────┤
│ Input: fixes[], repo_path               │
│                                         │
│ Actions:                                │
│  1. Configure git user                  │
│     git config user.name "AI-Agent"     │
│                                         │
│  2. Create branch                       │
│     git checkout -b                     │
│     TEAM_NAME_LEADER_NAME_AI_Fix        │
│                                         │
│  3. FOR EACH fix:                       │
│     a. Apply fix to file                │
│     b. git add <file>                   │
│     c. git commit -m "[AI-AGENT]..."    │
│     d. Update fix.status = "success"    │
│                                         │
│ Output:                                 │
│  • branch_name                          │
│  • total_commits                        │
│  • updated fixes[] with status          │
└─────────────────────────────────────────┘
  ↓
┌─────────────────────────────────────────┐
│  Decision: Retry?                       │
├─────────────────────────────────────────┤
│  IF iteration < max_iterations:         │
│    → Return to ANALYST (retest)         │
│  ELSE:                                  │
│    → Continue to SCORER                 │
└─────────────────────────────────────────┘
  ↓
┌─────────────────────────────────────────┐
│         4. SCORER AGENT                 │
├─────────────────────────────────────────┤
│ Input: All state data                   │
│                                         │
│ Actions:                                │
│  1. Calculate execution_time            │
│     time_delta = end - start            │
│                                         │
│  2. Calculate score:                    │
│     base_score = 100                    │
│     time_bonus = 10 if time < 5 min     │
│     commit_penalty = -2 * (commits-20)  │
│     final_score = 100 + bonus + penalty │
│                                         │
│  3. Generate results.json               │
│                                         │
│ Output:                                 │
│  • final_score                          │
│  • execution_time_minutes               │
│  • results.json file                    │
└─────────────────────────────────────────┘
  ↓
END (Return to Frontend)
```

---

## 📦 Data Flow Diagram

```
┌──────────┐
│  Browser │ Input: {repo_url, team_name, leader_name}
└────┬─────┘
     │ HTTP POST /heal
     ↓
┌────────────┐
│  FastAPI   │ Initialize: AgentState
└────┬───────┘
     │
     ↓
┌────────────────────────────────────────────────────┐
│              LANGGRAPH STATE MACHINE               │
├────────────────────────────────────────────────────┤
│                                                    │
│  State = {                                         │
│    repo_url: str                                   │
│    team_name: str                                  │
│    leader_name: str                                │
│    repo_path: str | None                           │
│    branch_name: str | None                         │
│    test_output: str | None                         │
│    errors_found: List[dict]                        │
│    fixes: List[Fix]                                │
│    total_commits: int                              │
│    iteration: int                                  │
│    max_iterations: int                             │
│    execution_start_time: float | None              │
│    execution_time_minutes: float | None            │
│    final_score: int | None                         │
│    status: str                                     │
│  }                                                 │
│                                                    │
└────────────────────────────────────────────────────┘
     │
     ↓
┌────────────┐      ┌────────────┐      ┌────────────┐
│  Analyst   │  →   │   Coder    │  →   │ Git Mgr    │
│   Agent    │      │   Agent    │      │   Agent    │
└────────────┘      └────────────┘      └────────────┘
     │                   │                    │
     ↓                   ↓                    ↓
  Updates            Updates              Updates
   State              State                State
     │                   │                    │
     └───────────────────┴────────────────────┘
                         │
                         ↓
                  ┌────────────┐
                  │   Scorer   │
                  │   Agent    │
                  └─────┬──────┘
                        │
                        ↓
                  results.json
                        │
                        ↓
                  ┌────────────┐
                  │  FastAPI   │ HTTP Response
                  └─────┬──────┘
                        │
                        ↓
                  ┌────────────┐
                  │  Browser   │ Display Results
                  └────────────┘
```

---

## 🎯 Scoring Logic Flow

```
                     START
                       │
                       ↓
          ┌─────────────────────────┐
          │   Base Score = 100      │
          └────────────┬────────────┘
                       │
                       ↓
          ┌─────────────────────────┐
          │ execution_time < 5 min? │
          └────────┬────────────────┘
                   │
         ┌─────────┴──────────┐
         │                    │
        YES                   NO
         │                    │
         ↓                    ↓
    Time Bonus            Time Bonus
      = +10                  = 0
         │                    │
         └─────────┬──────────┘
                   │
                   ↓
          ┌─────────────────────────┐
          │  total_commits > 20?    │
          └────────┬────────────────┘
                   │
         ┌─────────┴──────────┐
         │                    │
        YES                   NO
         │                    │
         ↓                    ↓
  Commit Penalty        Commit Penalty
= -(commits-20)*2           = 0
         │                    │
         └─────────┬──────────┘
                   │
                   ↓
          ┌─────────────────────────┐
          │ final_score = 100 +     │
          │   time_bonus +          │
          │   commit_penalty        │
          └────────────┬────────────┘
                       │
                       ↓
          ┌─────────────────────────┐
          │ Ensure score >= 0       │
          └────────────┬────────────┘
                       │
                       ↓
                     RETURN
                  final_score

Examples:
─────────
Scenario 1: Fast execution, few commits
  • Time: 3 min → Bonus: +10
  • Commits: 15 → Penalty: 0
  • Score: 100 + 10 + 0 = 110 ✨

Scenario 2: Slow execution, many commits
  • Time: 7 min → Bonus: 0
  • Commits: 30 → Penalty: -20
  • Score: 100 + 0 - 20 = 80 ⚠️

Scenario 3: Balanced
  • Time: 4.5 min → Bonus: +10
  • Commits: 25 → Penalty: -10
  • Score: 100 + 10 - 10 = 100 ✅
```

---

## 🔄 Retry Loop Mechanism

```
                  ITERATION 1
                      │
                      ↓
            ┌──────────────────┐
            │  Run Tests       │
            └────────┬─────────┘
                     │
         ┌───────────┴───────────┐
         │                       │
    Errors Found            No Errors
         │                       │
         ↓                       ↓
    Apply Fixes               END
         │                  (Success!)
         ↓
    Commit Fixes
         │
         ↓
  ┌──────────────────┐
  │ iteration++       │
  │ iteration < max?  │
  └───────┬──────────┘
          │
    ┌─────┴─────┐
   YES          NO
    │            │
    ↓            ↓
ITERATION 2    END
    │        (Max reached)
    ↓
[Repeat cycle]

Maximum Iterations: 5 (configurable)
```

---

## 🗂️ File Organization

```
Frontend Components Hierarchy:
────────────────────────────────
App.tsx
├── Header
│   ├── Logo + Title
│   └── "AI-Powered" Badge
├── ErrorDisplay (conditional)
├── InputSection
│   ├── Repo URL Input
│   ├── Team Name Input
│   ├── Leader Name Input
│   ├── Max Iterations Input
│   └── Submit Button
└── Results (conditional on completion)
    ├── ScoreBreakdown
    │   ├── Base Score Card
    │   ├── Time Bonus Card
    │   ├── Commit Penalty Card
    │   ├── Final Score Card
    │   └── Formula Explanation
    ├── Timeline
    │   ├── Iteration Cards (1-5)
    │   ├── Progress Bars
    │   └── Branch Info
    └── FixesTable
        ├── Table Header
        ├── Fix Rows (animated)
        │   ├── File Path
        │   ├── Bug Type Badge
        │   ├── Line Number
        │   ├── Commit Message
        │   └── Status Icon
        └── Summary Stats
            ├── Successful Fixes
            ├── Failed Fixes
            └── Total Commits

Backend Module Hierarchy:
─────────────────────────
main.py (FastAPI app)
├── /heal endpoint
│   └── Calls healing_graph.invoke()
├── /results endpoint
│   └── Returns results.json
└── / (health check)

graph.py (LangGraph workflow)
├── analyst_node
├── coder_node
├── git_manager_node
├── scorer_node
├── should_continue (decision)
├── should_retry (decision)
└── healing_graph (compiled)

agents/
├── analyst.py
│   ├── AnalystAgent class
│   │   ├── clone_repository()
│   │   ├── run_tests()
│   │   └── parse_test_output()
│   └── analyst_node() → wrapper
├── coder.py
│   ├── CoderAgent class
│   │   ├── generate_fix()
│   │   ├── apply_fix()
│   │   └── LLM integration
│   └── coder_node() → wrapper
└── git_manager.py
    ├── GitManagerAgent class
    │   ├── create_branch()
    │   ├── commit_fix()
    │   └── configure_git()
    └── git_manager_node() → wrapper

state.py (Shared types)
├── AgentState (TypedDict)
├── Fix (TypedDict)
├── BugType (Enum)
└── FixStatus (Enum)
```

---

## 🚀 Deployment Options

```
┌─────────────────────────────────────────────┐
│           DEPLOYMENT OPTIONS                │
├─────────────────────────────────────────────┤
│                                             │
│  1. LOCAL DEVELOPMENT                       │
│     Backend: localhost:8000                 │
│     Frontend: localhost:5173                │
│                                             │
│  2. DOCKER CONTAINER                        │
│     docker run -p 8000:8000 ...             │
│     Backend only (API mode)                 │
│                                             │
│  3. PRODUCTION                              │
│     Backend: Deployed to cloud              │
│     Frontend: Static hosting (Vercel, etc.) │
│     Database: Optional (results.json)       │
│                                             │
└─────────────────────────────────────────────┘
```

---

## 📊 Performance Metrics

```
Expected Performance:
─────────────────────
Clone Repository:     5-30 seconds
Run pytest:           10-60 seconds
Generate Fix (GPT-4): 2-5 seconds per fix
Apply Fix:            < 1 second per fix
Git Commit:           < 1 second per commit

Total Time (typical): 2-5 minutes
Max Iterations:       5
Max Commits:          20 (recommended)
```

---

## 🎨 UI Components Color Scheme

```
Color Palette:
──────────────
Background:     #020617 (dark-950)
Card BG:        #0f172a (dark-900)
Borders:        #1e293b (dark-800)
Primary:        #0ea5e9 (blue)
Success:        #22c55e (green)
Error:          #ef4444 (red)
Warning:        #f59e0b (yellow)
Info:           #8b5cf6 (purple)

Bug Type Colors:
────────────────
SYNTAX:         Red (#ef4444)
TYPE_ERROR:     Orange (#f97316)
LOGIC:          Yellow (#eab308)
LINTING:        Blue (#3b82f6)
```

---

This completes the system architecture documentation! 🎉
