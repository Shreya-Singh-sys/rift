# 📦 Installation & Setup Guide
## Autonomous CI/CD Healing Agent - RIFT 2026 Hackathon

---

## 🔔 **IMPORTANT: Libraries You Need to Install**

### **Backend (Python) - Install FIRST**
```bash
cd backend
pip install -r requirements.txt
```

**Required Libraries:**
- `langgraph` - Multi-agent orchestration framework
- `langchain` & `langchain-openai` - AI/LLM integration
- `fastapi` & `uvicorn` - Web API framework
- `pytest` - Testing framework
- `GitPython` - Git operations
- `pylint`, `mypy`, `black`, `flake8` - Code analysis tools
- `orjson` - Fast JSON processing
- `python-dotenv` - Environment variable management

### **Frontend (React) - Install SECOND**
```bash
cd frontend
npm install
```

**Required Libraries:**
- `react` & `react-dom` - UI framework
- `vite` - Build tool
- `typescript` - Type safety
- `framer-motion` - Animations
- `lucide-react` - Icons
- `zustand` - State management
- `axios` - HTTP client
- `tailwindcss` - Styling

---

## 🚀 Step-by-Step Installation

### Step 1: Set Up Backend

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Create Python virtual environment (recommended):**
   ```bash
   python -m venv venv
   ```

3. **Activate virtual environment:**
   - Windows:
     ```bash
     venv\Scripts\activate
     ```
   - macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

4. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

5. **Configure environment variables:**
   ```bash
   # Copy the example file
   copy .env.example .env
   
   # Edit .env and add your OpenAI API key
   # OPENAI_API_KEY=sk-your-api-key-here
   ```

---

### Step 2: Set Up Frontend

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install Node.js dependencies:**
   ```bash
   npm install
   ```

   If you encounter issues, try:
   ```bash
   npm install --legacy-peer-deps
   ```

---

### Step 3: Verify Installation

**Backend:**
```bash
cd backend
python -c "import langgraph, fastapi, pytest; print('✅ All backend libraries installed!')"
```

**Frontend:**
```bash
cd frontend
npm list react framer-motion zustand
```

---

## 🏃 Running the Application

### Terminal 1 - Start Backend Server
```bash
cd backend
python -m uvicorn main:app --reload --port 8000
```

You should see:
```
INFO:     Uvicorn running on http://0.0.0.0:8000 (Press CTRL+C to quit)
INFO:     Started reloader process
```

### Terminal 2 - Start Frontend Dev Server
```bash
cd frontend
npm run dev
```

You should see:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### Access the Application
Open your browser and navigate to:
```
http://localhost:5173
```

---

## 🐳 Docker Setup (Alternative)

### Build Docker Image
```bash
docker build -t ci-cd-healing-agent .
```

### Run Docker Container
```bash
docker run -p 8000:8000 \
  -e OPENAI_API_KEY=your_api_key_here \
  ci-cd-healing-agent
```

---

## 🔧 Troubleshooting

### Issue: `ModuleNotFoundError: No module named 'langgraph'`
**Solution:**
```bash
cd backend
pip install langgraph langchain langchain-openai
```

### Issue: `npm ERR! code ERESOLVE`
**Solution:**
```bash
cd frontend
npm install --legacy-peer-deps
```

### Issue: Frontend can't connect to backend
**Solution:**
1. Ensure backend is running on port 8000
2. Check [vite.config.ts](frontend/vite.config.ts) proxy settings
3. Restart both servers

### Issue: `OPENAI_API_KEY not set`
**Solution:**
1. Create [.env](backend/.env.example) file in backend directory
2. Add: `OPENAI_API_KEY=sk-your-actual-key`
3. Restart backend server

---

## 📊 Testing the System

### Test Backend API
```bash
curl http://localhost:8000/
```

Expected response:
```json
{
  "service": "Autonomous CI/CD Healing Agent",
  "status": "operational",
  "version": "1.0.0"
}
```

### Test Healing Endpoint
```bash
curl -X POST http://localhost:8000/heal \
  -H "Content-Type: application/json" \
  -d '{
    "repo_url": "https://github.com/example/repo.git",
    "team_name": "Test Team",
    "leader_name": "John Doe",
    "max_iterations": 5
  }'
```

---

## 📋 System Requirements

- **Python:** 3.11+
- **Node.js:** 18+
- **npm:** 9+
- **Git:** 2.x
- **Docker:** 20+ (optional)
- **OpenAI API Key:** Required for AI features

---

## 🎯 Quick Start Checklist

- [ ] Python 3.11+ installed
- [ ] Node.js 18+ installed
- [ ] Git installed
- [ ] OpenAI API key obtained
- [ ] Backend dependencies installed (`pip install -r requirements.txt`)
- [ ] Frontend dependencies installed (`npm install`)
- [ ] `.env` file created with API key
- [ ] Backend server running on port 8000
- [ ] Frontend dev server running on port 5173
- [ ] Browser opened to http://localhost:5173

---

## 💡 Usage Example

1. **Open the application** at http://localhost:5173
2. **Enter repository details:**
   - Repository URL: `https://github.com/yourusername/your-repo.git`
   - Team Name: `Your Team`
   - Leader Name: `Your Name`
   - Max Iterations: `5`
3. **Click "Start Healing Process"**
4. **Watch the magic happen!** 🎉

The system will:
- Clone your repository
- Run pytest to find errors
- Generate AI-powered fixes
- Commit fixes with `[AI-AGENT]` prefix
- Calculate your score
- Display results in the dashboard

---

## 📚 Additional Resources

- [LangGraph Documentation](https://python.langchain.com/docs/langgraph)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

## 🆘 Need Help?

If you encounter any issues during installation, please:
1. Check this guide thoroughly
2. Verify all prerequisites are installed
3. Check error messages carefully
4. Ensure API keys are correctly configured

---

**Good luck with the RIFT 2026 Hackathon! 🚀**
