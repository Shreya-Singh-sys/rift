# 🤖 Autonomous CI/CD Healing Agent
## Complete Project Overview - RIFT 2026 Hackathon

---

## 📋 Table of Contents
1. [Project Architecture](#project-architecture)
2. [Libraries You Must Install](#libraries-you-must-install)
3. [Quick Start](#quick-start)
4. [Features](#features)
5. [How It Works](#how-it-works)
6. [API Documentation](#api-documentation)

---

## 🏗️ Project Architecture

```
rift2day/
├── backend/                      # Python Multi-Agent System
│   ├── agents/                   # LangGraph Agents
│   │   ├── __init__.py
│   │   ├── analyst.py           # Clones repo & runs pytest
│   │   ├── coder.py             # Generates AI fixes
│   │   └── git_manager.py       # Commits & manages branches
│   ├── main.py                  # FastAPI server
│   ├── graph.py                 # LangGraph workflow
│   ├── state.py                 # Agent state management
│   ├── requirements.txt         # Python dependencies
│   └── .env.example            # Environment template
│
├── frontend/                    # React Dashboard
│   ├── src/
│   │   ├── components/
│   │   │   ├── InputSection.tsx      # Repo input form
│   │   │   ├── ScoreBreakdown.tsx    # Score calculation display
│   │   │   ├── Timeline.tsx          # CI/CD iteration timeline
│   │   │   ├── FixesTable.tsx        # Applied fixes table
│   │   │   └── ErrorDisplay.tsx      # Error messages
│   │   ├── store/
│   │   │   └── healingStore.ts       # Zustand state management
│   │   ├── App.tsx                   # Main application
│   │   ├── main.tsx                  # React entry point
│   │   └── index.css                 # Global styles
│   ├── package.json                  # Node dependencies
│   ├── vite.config.ts               # Vite configuration
│   ├── tailwind.config.js           # Tailwind CSS config
│   └── tsconfig.json                # TypeScript config
│
├── Dockerfile                   # Sandboxed execution environment
├── README.md                    # Project overview
├── INSTALLATION.md             # Detailed setup guide
├── LIBRARIES_TO_INSTALL.md     # Library reference
├── setup.sh                    # Linux/Mac setup script
├── setup.bat                   # Windows setup script
└── .gitignore                  # Git ignore rules
```

---

## 🔔 Libraries You Must Install

### **Backend (Python)**
Run in `/backend` directory:
```bash
pip install -r requirements.txt
```

**Key Libraries:**
- `langgraph` (v0.2.34) - Multi-agent orchestration
- `langchain` + `langchain-openai` - AI/LLM integration
- `fastapi` + `uvicorn` - REST API framework
- `pytest` - Testing framework
- `GitPython` - Git operations
- `pylint, mypy, black, flake8` - Code analysis

### **Frontend (React)**
Run in `/frontend` directory:
```bash
npm install
```

**Key Libraries:**
- `react` + `react-dom` - UI framework
- `vite` - Fast build tool
- `typescript` - Type safety
- `framer-motion` - Smooth animations
- `lucide-react` - Beautiful icons
- `zustand` - Lightweight state management
- `tailwindcss` - Utility-first CSS

### **Required: OpenAI API Key**
Create `backend/.env`:
```env
OPENAI_API_KEY=sk-your-openai-api-key-here
```

---

## 🚀 Quick Start

### Option 1: Automated Setup (Recommended)

**Windows:**
```bash
setup.bat
```

**Linux/Mac:**
```bash
chmod +x setup.sh
./setup.sh
```

### Option 2: Manual Setup

**Step 1: Backend**
```bash
cd backend
python -m venv venv
venv\Scripts\activate          # Windows
# source venv/bin/activate     # Linux/Mac
pip install -r requirements.txt
copy .env.example .env         # Edit and add your OpenAI API key
```

**Step 2: Frontend**
```bash
cd frontend
npm install
```

**Step 3: Run**

Terminal 1:
```bash
cd backend
python -m uvicorn main:app --reload --port 8000
```

Terminal 2:
```bash
cd frontend
npm run dev
```

Open: http://localhost:5173

---

## ✨ Features

### 🤖 Multi-Agent System
- **Analyst Agent**: Clones GitHub repos and runs pytest
- **Coder Agent**: Generates AI-powered fixes using GPT-4
- **Git Manager Agent**: Commits fixes with proper naming conventions

### 📊 Smart Scoring System
- Base score: 100 points
- Time bonus: +10 if execution < 5 minutes
- Commit penalty: -2 per commit over 20

### 🎨 Beautiful Dashboard
- Real-time progress tracking
- Visual CI/CD timeline with iteration status
- Detailed fixes table with color-coded bug types
- Responsive dark DevOps theme
- Smooth animations with Framer Motion

### 🔧 Configurable
- Adjustable retry limit (1-10 iterations)
- Sandbox Docker environment
- RESTful API for integration

---

## 🧠 How It Works

### Workflow Overview

```
User Input (Repo URL, Team, Leader)
         ↓
[Analyst Agent]
  • Clone repository
  • Run pytest
  • Capture errors
         ↓
[Coder Agent]
  • Analyze errors
  • Generate fixes (GPT-4)
  • Categorize: LINTING, SYNTAX, LOGIC, TYPE_ERROR
         ↓
[Git Manager Agent]
  • Apply fixes to files
  • Commit with [AI-AGENT] prefix
  • Create branch: TEAM_NAME_LEADER_NAME_AI_Fix
         ↓
[Retry Loop]
  • Rerun tests (max 5 iterations)
  • Continue until no errors or max iterations
         ↓
[Scorer Agent]
  • Calculate execution time
  • Apply time bonus/commit penalty
  • Generate results.json
         ↓
[Dashboard]
  • Display score breakdown
  • Show timeline & fixes table
```

### Multi-Agent Coordination (LangGraph)

```python
# Simplified workflow
workflow = StateGraph(AgentState)
workflow.add_node("analyst", analyst_node)
workflow.add_node("coder", coder_node)
workflow.add_node("git_manager", git_manager_node)
workflow.add_node("scorer", scorer_node)

# Conditional routing
workflow.add_conditional_edges("analyst", should_continue)
workflow.add_edge("coder", "git_manager")
workflow.add_conditional_edges("git_manager", should_retry)
```

---

## 📡 API Documentation

### Base URL
```
http://localhost:8000
```

### Endpoints

#### `GET /`
Health check endpoint

**Response:**
```json
{
  "service": "Autonomous CI/CD Healing Agent",
  "status": "operational",
  "version": "1.0.0"
}
```

#### `POST /heal`
Start the healing process

**Request Body:**
```json
{
  "repo_url": "https://github.com/username/repo.git",
  "team_name": "Team Awesome",
  "leader_name": "John Doe",
  "max_iterations": 5
}
```

**Response:**
```json
{
  "team_name": "Team Awesome",
  "leader_name": "John Doe",
  "repo_url": "https://github.com/username/repo.git",
  "branch_name": "TEAM_AWESOME_JOHN_DOE_AI_Fix",
  "total_commits": 12,
  "execution_time_minutes": 3.45,
  "final_score": 110,
  "fixes": [
    {
      "file": "src/app.py",
      "bug_type": "SYNTAX",
      "line": 42,
      "commit_message": "[AI-AGENT] Fixed syntax error in src/app.py at line 42",
      "status": "success"
    }
  ],
  "status": "completed"
}
```

#### `GET /results`
Retrieve the latest results.json

---

## 🎯 Scoring Formula

```
final_score = 100 + time_bonus + commit_penalty

where:
  time_bonus = 10 if execution_time < 5 minutes, else 0
  commit_penalty = -(total_commits - 20) * 2 if total_commits > 20, else 0
```

**Example:**
- Execution time: 3.5 minutes → Time bonus: +10
- Total commits: 25 → Commit penalty: -10
- Final score: 100 + 10 - 10 = **100**

---

## 🛠️ Technology Stack

### Backend
- **Python 3.11+**
- **LangGraph** - Multi-agent orchestration
- **LangChain** - LLM framework
- **FastAPI** - Modern web framework
- **pytest** - Testing framework
- **GitPython** - Git automation

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Zustand** - State management
- **Axios** - HTTP client

### DevOps
- **Docker** - Containerization
- **Git** - Version control
- **Uvicorn** - ASGI server

---

## 📊 Results Schema (results.json)

```json
{
  "team_name": "string",
  "leader_name": "string",
  "repo_url": "string",
  "branch_name": "TEAM_NAME_LEADER_NAME_AI_Fix",
  "total_commits": 0,
  "execution_time_minutes": 0.0,
  "final_score": 100,
  "fixes": [
    {
      "file": "path/to/file.py",
      "bug_type": "SYNTAX|LINTING|LOGIC|TYPE_ERROR",
      "line": 42,
      "commit_message": "[AI-AGENT] Description",
      "status": "success|failed|pending"
    }
  ],
  "status": "completed|failed_clone|no_errors"
}
```

---

## 🐳 Docker Deployment

### Build Image
```bash
docker build -t ci-cd-healing-agent .
```

### Run Container
```bash
docker run -p 8000:8000 \
  -e OPENAI_API_KEY=your_api_key \
  ci-cd-healing-agent
```

### Access API
```
http://localhost:8000
```

---

## 📝 RIFT 2026 Hackathon Compliance

✅ **Project Structure**: `/frontend` and `/backend` folders  
✅ **Dockerfile**: Sandboxed execution environment  
✅ **Multi-Agent System**: 3 agents (Analyst, Coder, Git Manager)  
✅ **Branch Naming**: `TEAM_NAME_LEADER_NAME_AI_Fix` (all caps, underscores)  
✅ **Commit Prefix**: `[AI-AGENT]` on all automated commits  
✅ **results.json**: Generated with hackathon schema  
✅ **Retry Limit**: Configurable max iterations (default: 5)  
✅ **React Dashboard**: Responsive UI with all required components  
✅ **Scoring System**: Implemented as per specifications  

---

## 🎨 Dashboard Components

### 1. Input Section
- Repository URL field
- Team name field
- Leader name field
- Max iterations slider
- "Start Healing Process" button

### 2. Score Breakdown Panel
- Base score: 100
- Time bonus display
- Commit penalty calculation
- Final score with highlight

### 3. CI/CD Timeline
- Iteration progress (e.g., 3/5)
- Green/red status badges
- Progress bars
- Branch name display

### 4. Fixes Table
- File path column
- Bug type badges (color-coded)
- Line number
- Commit message
- Status indicator
- Summary statistics

---

## 🔗 Quick Links

- **Installation Guide**: [INSTALLATION.md](INSTALLATION.md)
- **Library Reference**: [LIBRARIES_TO_INSTALL.md](LIBRARIES_TO_INSTALL.md)
- **Main README**: [README.md](README.md)

---

## 💡 Usage Tips

1. **Use small repos for testing** - Faster iterations
2. **Check logs** - Both backend and frontend show progress
3. **Monitor API key usage** - GPT-4 calls can add up
4. **Adjust max_iterations** - Start with 3-5 for testing
5. **Review results.json** - Contains detailed fix information

---

## 🆘 Troubleshooting

### Backend won't start
```bash
# Check Python version
python --version  # Should be 3.11+

# Reinstall dependencies
pip install -r requirements.txt

# Check .env file exists
cat backend/.env  # Should contain OPENAI_API_KEY
```

### Frontend won't build
```bash
# Clear cache
rm -rf node_modules package-lock.json
npm install

# Or use legacy peer deps
npm install --legacy-peer-deps
```

### Can't connect to API
```bash
# Verify backend is running
curl http://localhost:8000

# Check proxy settings in vite.config.ts
# Restart both servers
```

---

## 🎉 You're Ready!

Everything is set up and ready to go. Follow these steps:

1. ✅ Install backend libraries: `cd backend && pip install -r requirements.txt`
2. ✅ Install frontend libraries: `cd frontend && npm install`
3. ✅ Add OpenAI API key to `backend/.env`
4. ✅ Start backend: `python -m uvicorn main:app --reload --port 8000`
5. ✅ Start frontend: `npm run dev`
6. ✅ Open http://localhost:5173
7. ✅ Start healing repositories!

**Good luck with RIFT 2026! 🚀**
