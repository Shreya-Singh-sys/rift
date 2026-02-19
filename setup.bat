@echo off
REM Quick Start Script for Autonomous CI/CD Healing Agent
REM RIFT 2026 Hackathon - Windows Version

echo ==============================================
echo  Autonomous CI/CD Healing Agent Setup
echo  RIFT 2026 Hackathon
echo ==============================================
echo.

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo X Python is not installed. Please install Python 3.11+
    pause
    exit /b 1
)

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo X Node.js is not installed. Please install Node.js 18+
    pause
    exit /b 1
)

echo [OK] Python version:
python --version
echo [OK] Node.js version:
node --version
echo.

REM Backend Setup
echo ==============================================
echo  Setting up Backend...
echo ==============================================
cd backend

echo Creating virtual environment...
python -m venv venv

echo Activating virtual environment...
call venv\Scripts\activate

echo Installing Python dependencies...
pip install -r requirements.txt

REM Check for .env file
if not exist .env (
    echo.
    echo [!] Creating .env file...
    copy .env.example .env
    echo.
    echo ================================================
    echo  IMPORTANT: Edit backend\.env file
    echo  Add your OpenAI API key:
    echo  OPENAI_API_KEY=sk-your-api-key-here
    echo ================================================
    echo.
)

cd ..

REM Frontend Setup
echo ==============================================
echo  Setting up Frontend...
echo ==============================================
cd frontend

echo Installing Node.js dependencies...
call npm install

cd ..

echo.
echo ==============================================
echo  Setup Complete!
echo ==============================================
echo.
echo To run the application:
echo.
echo Terminal 1 (Backend):
echo   cd backend
echo   venv\Scripts\activate
echo   python -m uvicorn main:app --reload --port 8000
echo.
echo Terminal 2 (Frontend):
echo   cd frontend
echo   npm run dev
echo.
echo Then open: http://localhost:5173
echo.
echo Read INSTALLATION.md for detailed instructions
echo Read LIBRARIES_TO_INSTALL.md for library reference
echo.
pause
