#!/bin/bash
# Quick Start Script for Autonomous CI/CD Healing Agent
# RIFT 2026 Hackathon

echo "🚀 Starting Autonomous CI/CD Healing Agent Setup..."
echo ""

# Check if Python is installed
if ! command -v python &> /dev/null; then
    echo "❌ Python is not installed. Please install Python 3.11+"
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+"
    exit 1
fi

echo "✅ Python version: $(python --version)"
echo "✅ Node.js version: $(node --version)"
echo ""

# Backend Setup
echo "📦 Setting up backend..."
cd backend

# Create virtual environment
echo "  Creating virtual environment..."
python -m venv venv

# Activate virtual environment
echo "  Activating virtual environment..."
source venv/bin/activate

# Install dependencies
echo "  Installing Python dependencies..."
pip install -r requirements.txt

# Check for .env file
if [ ! -f .env ]; then
    echo "⚠️  Creating .env file..."
    cp .env.example .env
    echo ""
    echo "🔑 IMPORTANT: Please edit backend/.env and add your OpenAI API key!"
    echo "   OPENAI_API_KEY=sk-your-api-key-here"
    echo ""
fi

cd ..

# Frontend Setup
echo "📦 Setting up frontend..."
cd frontend

# Install dependencies
echo "  Installing Node.js dependencies..."
npm install

cd ..

echo ""
echo "✅ Setup complete!"
echo ""
echo "🏃 To run the application:"
echo ""
echo "Terminal 1 (Backend):"
echo "  cd backend"
echo "  source venv/bin/activate  # or venv\\Scripts\\activate on Windows"
echo "  python -m uvicorn main:app --reload --port 8000"
echo ""
echo "Terminal 2 (Frontend):"
echo "  cd frontend"
echo "  npm run dev"
echo ""
echo "Then open: http://localhost:5173"
echo ""
echo "📚 Read INSTALLATION.md for detailed instructions"
echo "🔔 Read LIBRARIES_TO_INSTALL.md for library reference"
