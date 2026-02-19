# 🔔 LIBRARY INSTALLATION REMINDER
## What You Need to Install Before Running the Project

---

## ⚠️ CRITICAL: Install These Libraries First!

### 📌 **Backend Python Libraries**
**Run this command in the `/backend` directory:**
```bash
pip install -r requirements.txt
```

**This will install:**
1. **langgraph** (v0.2.34) - Multi-agent AI orchestration
2. **langchain** (v0.3.1) - LLM framework
3. **langchain-openai** (v0.2.1) - OpenAI integration
4. **fastapi** (v0.115.0) - Web API framework
5. **uvicorn** (v0.30.6) - ASGI server
6. **pytest** (v8.3.3) - Testing framework
7. **GitPython** (v3.1.43) - Git operations
8. **pylint, mypy, black, flake8** - Code analysis
9. **orjson** (v3.10.7) - Fast JSON
10. **python-dotenv** (v1.0.1) - Environment config

---

### 📌 **Frontend Node.js Libraries**
**Run this command in the `/frontend` directory:**
```bash
npm install
```

**This will install:**
1. **react** (v18.3.1) - UI framework
2. **react-dom** (v18.3.1) - DOM rendering
3. **vite** (v5.4.5) - Build tool
4. **typescript** (v5.5.4) - Type safety
5. **framer-motion** (v11.5.4) - Animations ✨
6. **lucide-react** (v0.445.0) - Beautiful icons
7. **zustand** (v4.5.5) - State management
8. **axios** (v1.7.7) - HTTP requests
9. **tailwindcss** (v3.4.11) - CSS framework
10. **autoprefixer** & **postcss** - CSS processing

---

## 🚨 Don't Forget!

### 1. **OpenAI API Key Required!**
Create a `.env` file in `/backend`:
```env
OPENAI_API_KEY=sk-your-openai-api-key-here
```

**Where to get it:**
- Go to https://platform.openai.com/api-keys
- Create a new API key
- Copy and paste into `.env` file

---

### 2. **Prerequisites Must Be Installed:**
- ✅ Python 3.11 or higher
- ✅ Node.js 18 or higher
- ✅ Git 2.x
- ✅ npm (comes with Node.js)

---

## 📝 Installation Order

### Step 1: Backend Setup
```bash
# Navigate to backend
cd backend

# Create virtual environment (optional but recommended)
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install all libraries
pip install -r requirements.txt

# Create .env file and add your OpenAI API key
echo OPENAI_API_KEY=sk-your-key-here > .env
```

### Step 2: Frontend Setup
```bash
# Navigate to frontend
cd frontend

# Install all libraries
npm install
```

---

## ✅ Verify Installation

### Backend Verification:
```bash
cd backend
python -c "import langgraph, fastapi, langchain; print('✅ Backend libraries OK!')"
```

### Frontend Verification:
```bash
cd frontend
npm list react framer-motion zustand
```

---

## 🏃 Run the Project

### Terminal 1 - Backend:
```bash
cd backend
python -m uvicorn main:app --reload --port 8000
```

### Terminal 2 - Frontend:
```bash
cd frontend
npm run dev
```

### Open Browser:
```
http://localhost:5173
```

---

## 📦 Quick Reference

| Component | Location | Command | Time |
|-----------|----------|---------|------|
| Backend | `/backend` | `pip install -r requirements.txt` | ~2-3 min |
| Frontend | `/frontend` | `npm install` | ~1-2 min |
| Docker | Root | `docker build -t ci-cd-agent .` | ~5 min |

---

## 🔥 Common Issues & Solutions

### Issue: "No module named 'langgraph'"
```bash
cd backend
pip install langgraph
```

### Issue: "npm ERR! ERESOLVE"
```bash
cd frontend
npm install --legacy-peer-deps
```

### Issue: "OPENAI_API_KEY not found"
```bash
# Create .env in backend directory
echo OPENAI_API_KEY=your-key > backend/.env
```

---

## 💡 Pro Tips

1. **Always activate virtual environment** before installing backend libraries
2. **Use `--legacy-peer-deps`** if npm shows dependency conflicts
3. **Keep terminals open** - you need both backend and frontend running
4. **Check port availability** - Ensure 8000 and 5173 are free
5. **Restart servers** after changing environment variables

---

**That's it! You're ready to build the Autonomous CI/CD Healing Agent! 🚀**

Need help? Check [INSTALLATION.md](INSTALLATION.md) for detailed instructions.
