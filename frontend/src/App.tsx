import React from 'react';
import { Bot, Sparkles } from 'lucide-react';
import InputSection from './components/InputSection';
import RunSummaryCard from './components/RunSummaryCard';
import ScoreBreakdown from './components/ScoreBreakdown';
import Timeline from './components/Timeline';
import FixesTable from './components/FixesTable';
import ErrorDisplay from './components/ErrorDisplay';
import { useHealingStore } from './store/healingStore';

function App() {
  const { result } = useHealingStore();

  return (
    <div className="min-h-screen bg-dark-950 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-dark-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-500 rounded-lg flex items-center justify-center">
                <Bot size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                  Autonomous CI/CD Healing Agent
                </h1>
                <p className="text-sm text-gray-400">RIFT 2026 Hackathon</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
              <Sparkles className="text-yellow-400" size={16} />
              <span className="text-yellow-400 text-sm font-semibold">AI-Powered</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <ErrorDisplay />
        
        <div className="space-y-6">
          <InputSection />
          
          {result && (
            <>
              <RunSummaryCard />
              <ScoreBreakdown />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Timeline />
                <div className="lg:col-span-2">
                  <FixesTable />
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-dark-900/50 mt-16">
        <div className="container mx-auto px-6 py-6">
          <div className="text-center text-gray-400 text-sm">
            <p>
              Built with <span className="text-red-400">♥</span> for RIFT 2026 Hackathon
            </p>
            <p className="mt-1">
              Powered by LangGraph • FastAPI • React • Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
