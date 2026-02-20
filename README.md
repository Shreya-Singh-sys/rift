#  Aline.AI — Autonomous CI/CD Healing Agent
### RIFT 2026 Hackathon  Agentic Systems Track

> An intelligent multi-agent system that **automatically clones, analyzes, fixes, commits, and pushes** broken Python repositories — zero human intervention.

---

##  Hackathon Compliance Checklist

| Requirement | Status |
|---|---|
| Multi-agent architecture (LangGraph) |  |
| Branch format: `TEAM_LEADER_AI_Fix` |  |
| All commits prefixed with `[AI-AGENT]` |  |
| Never pushes to `main` |  |
| 6 bug types detected |  |
| Sandboxed execution (Docker) |  |
| `results.json` output schema |  |
| Live dashboard |  |
| Predictive Impact Analysis |  |
| Auto Documentation Update |  |

---

##  Agent Architecture

```

                   LangGraph Workflow                    
                                                         
            
    ANALYST      CODER      GIT MANAGER    
                                                   
    Clone          Groq           Create        
     repo            LLaMA-          branch        
    Run             3.3-70B        git add       
     pytest         Generate       git commit    
    AST scan        fix             [AI-AGENT]    
    Detect         Apply          git push      
     6 types         patch          Open PR       
            
                                                        
          SCORER            
                    Score = 100 + bonus                  
                                                         
    Iterates up to N times until all errors fixed      

```

| Agent | File | Role |
|---|---|---|
| **Analyst** | `agents/analyst.py` | Clones repo  runs `pytest`  AST fallback  classifies 6 bug types |
| **Coder** | `agents/coder.py` | Calls Groq LLaMA-3.3-70B  generates fix  writes patched file |
| **Git Manager** | `agents/git_manager.py` | Creates `TEAM_LEADER_AI_Fix` branch  commits `[AI-AGENT]` prefix  pushes  PR |
| **Scorer** | `graph.py` | Calculates final score with time bonus and commit penalty |

---

##  Project Structure

```
rift2day/

 backend/                        # Python Multi-Agent System
    agents/
       analyst.py              # Repo cloning, pytest, AST scanning
       coder.py                # LLM-based fix generation
       git_manager.py          # Branch, commit, push, PR
       __init__.py
    main.py                     # FastAPI app — /heal and /results endpoints
    graph.py                    # LangGraph StateGraph workflow
    state.py                    # AgentState TypedDict + BugType enum
    requirements.txt
    .env.example                # GROQ_API_KEY template

 frontend2/                      # React 19 Dashboard (Create React App)
    public/
       index.html
    src/
       App.js                  # Landing page (Aline.AI homepage)
       index.js                # Path-based router (/ /login /dashboard)
       pages/
           LoginPage.jsx       # Authentication (localStorage)
           LoginPage.css
           DashboardPage.jsx   # Main healing dashboard + results
           DashboardPage.css
    package.json                # proxy  http://localhost:8000
    tailwind.config.js

 Dockerfile                      # Sandboxed backend execution
 .gitignore
 README.md
```

---

##  Setup Instructions

### Prerequisites

- Python 3.10+
- Node.js 18+
- Git configured with push access to target repos
- [Groq API Key](https://console.groq.com) — free tier works

---

### 1. Backend Setup

```bash
cd backend
pip install -r requirements.txt
```

Create `.env` from the example:

```bash
# Linux / Mac
cp .env.example .env

# Windows
copy .env.example .env
```

Edit `.env`:

```env
GROQ_API_KEY=your_groq_api_key_here
GROQ_MODEL=llama-3.3-70b-versatile
```

Start the backend:

```bash
cd backend
python -m uvicorn main:app --reload --port 8000
```

API live at: `http://localhost:8000`

---

### 2. Frontend Setup

```bash
cd frontend2
npm install
npm start
```

Dashboard opens at: `http://localhost:3000`

> The frontend proxies all `/heal` API calls to `http://localhost:8000` automatically via `package.json` proxy config.

---

### 3. Docker (Sandboxed Execution)

```bash
docker build -t aline-ai .
docker run -p 8000:8000 --env GROQ_API_KEY=your_key aline-ai
```

---

##  How to Use

1. Open `http://localhost:3000`  **Create Account** or **Sign In**
2. On the Dashboard, fill in:
   - **GitHub Repo URL** — the broken Python repo to heal
   - **Team Name** — your hackathon team name
   - **Leader Name** — team leader's name
   - **Max Iterations** — how many fix cycles (1–10)
   - **Update Documentation** toggle — appends fix summary to `README.md` and pushes it
3. Click **START ANALYSIS**
4. The agent runs fully automatically:
   - Clones the repo
   - Runs `pytest` (falls back to AST scan if no tests)
   - Generates an AI fix per error using Groq LLaMA-3.3-70B
   - Commits each fix as `[AI-AGENT] Fixed <BUG_TYPE> in <file> at line <n>`
   - Pushes to `TEAM_LEADER_AI_Fix` branch — never touches `main`
5. Dashboard shows: CI/CD badge, score breakdown, iteration timeline, fixes table, impact analysis

---

##  Supported Bug Types

| Bug Type | Detection | Dashboard Color |
|---|---|---|
| `SYNTAX` | `SyntaxError` via `compile()` / AST |  Red |
| `TYPE_ERROR` | pytest `TypeError` output |  Orange |
| `LOGIC` | pytest assertion failures |  Yellow |
| `LINTING` | `flake8` style violations |  Blue |
| `IMPORT` | `ImportError` / `ModuleNotFoundError` |  Purple |
| `INDENTATION` | `IndentationError` via AST |  Pink |

---

##  Scoring Logic

```
Final Score  =  100  +  Time Bonus    Commit Penalty

Time Bonus      = +10   if execution_time < 5 minutes
Commit Penalty  = 2    per commit over 20
Maximum Score   = 110
```

---

##  Output Schema (`results.json`)

```json
{
  "team_name": "INFERNOX",
  "leader_name": "Shreya",
  "repo_url": "https://github.com/user/broken-repo",
  "branch_name": "INFERNOX_SHREYA_AI_Fix",
  "total_commits": 2,
  "execution_time_minutes": 0.16,
  "final_score": 110,
  "total_failures": 2,
  "iterations_completed": 1,
  "affected_files": ["utils.py"],
  "docs_updated": true,
  "fixes": [
    {
      "file": "app.py",
      "bug_type": "INDENTATION",
      "line": 2,
      "commit_message": "[AI-AGENT] Fixed INDENTATION in app.py at line 2",
      "status": "success"
    },
    {
      "file": "main.py",
      "bug_type": "SYNTAX",
      "line": 2,
      "commit_message": "[AI-AGENT] Fixed SYNTAX in main.py at line 2",
      "status": "success"
    }
  ],
  "status": "completed"
}
```

---

##  API Reference

### `POST /heal`

Trigger the full healing pipeline.

**Request:**
```json
{
  "repo_url": "https://github.com/user/repo",
  "team_name": "INFERNOX",
  "leader_name": "Shreya",
  "max_iterations": 5,
  "update_docs": false
}
```

**Response:** Full `results.json` schema (see above)

---

### `GET /results`

Returns the latest `results.json` from disk.

---

### `GET /`

Health check — returns `{ "status": "operational" }`.

---

##  Unique Features

###  Predictive Impact Analysis
After fixing files, the agent scans the entire repo for files that `import` the modified modules and reports them as **potentially affected** — a side-effect report before merging the PR.

###  Auto Documentation Update
With the **Update Documentation** toggle ON, the agent appends a Markdown fix-summary table to `README.md`, commits it as `[AI-AGENT] Updated documentation with fix summary`, and pushes it to the AI-fix branch on GitHub.

---

##  Technology Stack

| Layer | Technology |
|---|---|
| Agent Orchestration | LangGraph (StateGraph) |
| LLM | Groq API  LLaMA-3.3-70B-Versatile |
| Backend API | FastAPI + Uvicorn |
| Test Runner | pytest + AST fallback (`compile()`) |
| Frontend | React 19, Framer Motion, Tailwind CSS, Lucide React |
| Auth | localStorage-based |
| Containerization | Docker |
| Version Control | Git — all commits `[AI-AGENT]` prefixed, never on `main` |

---

##  Team

**Team:** INFERNOX  
**Track:** Agentic Systems  
**Hackathon:** RIFT 2026
