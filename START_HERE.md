# 🎯 NEXT STEPS - Start Here!
## What To Do Now - Quick Action Guide

---

## ⚡ IMMEDIATE ACTION REQUIRED

### 📦 **Step 1: Install Libraries (MOST IMPORTANT!)**

#### Backend Python Libraries
Open a terminal and run:
```bash
cd backend
pip install -r requirements.txt
```

**This installs:**
- langgraph (AI agent framework)
- fastapi (web API)
- pytest (testing)
- GitPython (git operations)
- And 15+ other dependencies

⏱️ **Time:** 2-3 minutes

---

#### Frontend React Libraries
Open another terminal and run:
```bash
cd frontend
npm install
```

**This installs:**
- react (UI framework)
- vite (build tool)
- framer-motion (animations)
- tailwindcss (styling)
- And 20+ other dependencies

⏱️ **Time:** 1-2 minutes

---

### 🔑 **Step 2: Get OpenAI API Key**

1. Go to: https://platform.openai.com/api-keys
2. Create a new API key
3. Copy the key (starts with `sk-`)
4. Create a file `backend/.env`:
   ```env
   OPENAI_API_KEY=sk-your-api-key-here
   ```

⏱️ **Time:** 2 minutes

---

### 🚀 **Step 3: Run the Application**

#### Terminal 1 - Backend:
```bash
cd backend
python -m uvicorn main:app --reload --port 8000
```

Wait for:
```
INFO:     Uvicorn running on http://0.0.0.0:8000
```

#### Terminal 2 - Frontend:
```bash
cd frontend
npm run dev
```

Wait for:
```
➜  Local:   http://localhost:5173/
```

#### Open Browser:
Go to: **http://localhost:5173**

⏱️ **Time:** 1 minute

---

## ✅ Quick Verification Checklist

- [ ] Python 3.11+ installed (`python --version`)
- [ ] Node.js 18+ installed (`node --version`)
- [ ] Git installed (`git --version`)
- [ ] Backend libraries installed (`pip list | findstr langgraph`)
- [ ] Frontend libraries installed (`npm list react`)
- [ ] `.env` file created with OpenAI API key
- [ ] Backend running on port 8000
- [ ] Frontend running on port 5173
- [ ] Browser showing the dashboard

---

## 📚 Documentation Files Created

| File | Purpose | When to Read |
|------|---------|--------------|
| **LIBRARIES_TO_INSTALL.md** | ⭐ Library installation guide | **READ FIRST** |
| **INSTALLATION.md** | Detailed setup instructions | If you have issues |
| **PROJECT_OVERVIEW.md** | Complete project documentation | To understand the system |
| **ARCHITECTURE.md** | System diagrams and flow charts | For deep understanding |
| **README.md** | Quick project overview | For hackathon judges |

---

## 🎮 How to Use the Application

1. **Open** http://localhost:5173
2. **Enter Details:**
   - Repository URL: `https://github.com/your-username/your-repo.git`
   - Team Name: `Your Team`
   - Leader Name: `Your Name`
   - Max Iterations: `5`
3. **Click** "Start Healing Process"
4. **Watch** the AI agents work their magic! 🤖

The system will:
- ✅ Clone your repository
- ✅ Run pytest to find bugs
- ✅ Generate AI fixes using GPT-4
- ✅ Commit fixes with `[AI-AGENT]` prefix
- ✅ Calculate your score
- ✅ Display beautiful results

---

## 🐛 Common Issues & Quick Fixes

### Issue 1: "No module named 'langgraph'"
```bash
cd backend
pip install langgraph langchain langchain-openai
```

### Issue 2: "npm ERR! ERESOLVE"
```bash
cd frontend
npm install --legacy-peer-deps
```

### Issue 3: Frontend can't connect to backend
```bash
# Make sure backend is running on port 8000
curl http://localhost:8000

# Restart both servers
```

### Issue 4: "OPENAI_API_KEY not set"
```bash
# Create .env file in backend directory
echo OPENAI_API_KEY=sk-your-key > backend/.env
```

---

## 🎯 Project Structure Quick Reference

```
rift2day/
├── backend/              # Python AI agents
│   ├── agents/          # 3 agents (Analyst, Coder, Git Manager)
│   ├── main.py          # FastAPI server
│   ├── graph.py         # LangGraph workflow
│   └── requirements.txt # ⭐ INSTALL THESE
│
├── frontend/            # React dashboard
│   ├── src/
│   │   ├── components/  # UI components
│   │   └── store/       # State management
│   └── package.json     # ⭐ INSTALL THESE
│
├── Dockerfile           # Docker container
└── *.md                 # Documentation files
```

---

## 💡 Pro Tips

1. **Test with a small repo first** - Faster iterations
2. **Keep both terminals open** - You need backend + frontend running
3. **Check the console logs** - Useful for debugging
4. **Monitor your OpenAI credits** - GPT-4 calls cost money
5. **Start with max_iterations=3** - Faster for testing

---

## 🆘 Need More Help?

### Quick Guides:
1. **Can't install libraries?** → Read [LIBRARIES_TO_INSTALL.md](LIBRARIES_TO_INSTALL.md)
2. **Setup not working?** → Read [INSTALLATION.md](INSTALLATION.md)
3. **Want to understand the code?** → Read [PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md)
4. **Need diagrams?** → Read [ARCHITECTURE.md](ARCHITECTURE.md)

---

## 🎉 You're Almost There!

Just 3 commands to get started:

```bash
# 1. Install backend
cd backend && pip install -r requirements.txt

# 2. Install frontend
cd ../frontend && npm install

# 3. Run (need 2 terminals)
# Terminal 1: cd backend && python -m uvicorn main:app --reload
# Terminal 2: cd frontend && npm run dev
```

**Good luck with RIFT 2026! 🚀**

---

## 📊 Expected Timeline

| Task | Time | Status |
|------|------|--------|
| Install backend libraries | 2-3 min | ⏳ |
| Install frontend libraries | 1-2 min | ⏳ |
| Get OpenAI API key | 2 min | ⏳ |
| Configure .env file | 1 min | ⏳ |
| Start servers | 1 min | ⏳ |
| Test application | 2 min | ⏳ |
| **TOTAL** | **~10 min** | ⏳ |

After setup, you'll have a fully functional AI-powered CI/CD healing system! 🎊

---

## 🏆 Hackathon Submission Checklist

- [ ] All code files created
- [ ] Libraries installed and working
- [ ] Backend API running
- [ ] Frontend dashboard working
- [ ] Docker file present
- [ ] results.json generates correctly
- [ ] Branch naming correct: `TEAM_NAME_LEADER_NAME_AI_Fix`
- [ ] Commits have `[AI-AGENT]` prefix
- [ ] Score calculation working
- [ ] Documentation complete

---

**Everything is ready! Just install the libraries and run! 🎯**
