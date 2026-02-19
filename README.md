# 🤖 Autonomous CI/CD Healing Agent
## RIFT 2026 Hackathon Submission

An intelligent multi-agent system that automatically clones, analyzes, fixes, and commits code using LangGraph and AI.

---

## 📦 Installation Instructions

### Backend Setup (Python)
```bash
cd backend
pip install -r requirements.txt
```

### Frontend Setup (React + Vite)
```bash
cd frontend
npm install
```

### Docker Setup (Sandboxed Environment)
```bash
docker build -t ci-cd-healing-agent .
docker run -p 8000:8000 ci-cd-healing-agent
```

---

## 🚀 Running the Project

### Start Backend
```bash
cd backend
python -m uvicorn main:app --reload --port 8000
```

### Start Frontend
```bash
cd frontend
npm run dev
```

---

## 🏗️ Project Structure

```
rift2day/
├── backend/              # Python Multi-Agent System
│   ├── agents/          # LangGraph Agents
│   │   ├── analyst.py   # Clones repo & runs tests
│   │   ├── coder.py     # Generates fixes
│   │   └── git_manager.py  # Commits & branches
│   ├── main.py          # FastAPI entry point
│   ├── graph.py         # LangGraph workflow
│   ├── requirements.txt
│   └── results.json     # Output schema
├── frontend/            # React Dashboard
│   ├── src/
│   │   ├── components/  # UI Components
│   │   ├── store/       # Zustand state
│   │   └── App.tsx
│   └── package.json
├── Dockerfile           # Sandboxed execution
└── README.md
```

---

## 🎯 Scoring Logic

- **Base Score:** 100
- **Time Bonus:** +10 if execution < 5 minutes
- **Commit Penalty:** -2 per commit over 20
- **Formula:** `final_score = 100 + time_bonus + commit_penalty`

---

## 🧠 Multi-Agent Workflow

1. **Analyst Agent:** Clones GitHub repo → Runs pytest → Captures errors
2. **Coder Agent:** Analyzes errors → Generates fixes for LINTING, SYNTAX, LOGIC, TYPE_ERROR
3. **Git Manager Agent:** Commits with `[AI-AGENT]` prefix → Creates branch `TEAM_NAME_LEADER_NAME_AI_Fix`

---

## 📊 Results Schema (results.json)

```json
{
  "team_name": "string",
  "leader_name": "string",
  "repo_url": "string",
  "branch_name": "string",
  "total_commits": 0,
  "execution_time_minutes": 0,
  "final_score": 100,
  "fixes": [
    {
      "file": "path/to/file.py",
      "bug_type": "SYNTAX",
      "line": 42,
      "commit_message": "[AI-AGENT] Fixed syntax error",
      "status": "success"
    }
  ]
}
```

---

## 🛠️ Technology Stack

- **Backend:** Python, LangGraph, FastAPI, pytest
- **Frontend:** React, Vite, TypeScript, Tailwind CSS, Framer Motion, Zustand
- **DevOps:** Docker, Git
- **AI:** LangChain, OpenAI API

---

## 📝 License

MIT License - RIFT 2026 Hackathon
