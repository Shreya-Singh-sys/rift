import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, User, Link as LinkIcon, Play, Loader2 } from 'lucide-react';
import { useHealingStore } from '../store/healingStore';
import axios from 'axios';

const InputSection: React.FC = () => {
  const [repoUrl, setRepoUrl] = useState('');
  const [teamName, setTeamName] = useState('');
  const [leaderName, setLeaderName] = useState('');
  const [maxIterations, setMaxIterations] = useState(5);

  const { isLoading, setLoading, setResult, setError, setMaxIterations: storeSetMaxIterations } = useHealingStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!repoUrl || !teamName || !leaderName) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    setError(null);
    storeSetMaxIterations(maxIterations);

    try {
      const response = await axios.post('/heal', {
        repo_url: repoUrl,
        team_name: teamName,
        leader_name: leaderName,
        max_iterations: maxIterations,
      });

      setResult(response.data);
      setLoading(false);
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Failed to process repository');
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-dark-900 to-dark-800 rounded-xl p-8 shadow-2xl border border-primary-900/20"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
          <GitBranch className="text-white" size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">Repository Configuration</h2>
          <p className="text-gray-400 text-sm">Enter details to start the healing process</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
            <LinkIcon size={16} />
            Repository URL
          </label>
          <input
            type="text"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            placeholder="https://github.com/username/repo.git"
            className="w-full bg-dark-950 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
            disabled={isLoading}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
              <User size={16} />
              Team Name
            </label>
            <input
              type="text"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              placeholder="Team Awesome"
              className="w-full bg-dark-950 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
              <User size={16} />
              Leader Name
            </label>
            <input
              type="text"
              value={leaderName}
              onChange={(e) => setLeaderName(e.target.value)}
              placeholder="John Doe"
              className="w-full bg-dark-950 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
              disabled={isLoading}
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-300 mb-2 block">
            Max Iterations (Retry Limit)
          </label>
          <input
            type="number"
            value={maxIterations}
            onChange={(e) => setMaxIterations(parseInt(e.target.value))}
            min="1"
            max="10"
            className="w-full bg-dark-950 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
            disabled={isLoading}
          />
        </div>

        <motion.button
          whileHover={{ scale: isLoading ? 1 : 1.02 }}
          whileTap={{ scale: isLoading ? 1 : 0.98 }}
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold py-4 rounded-lg shadow-lg hover:shadow-primary-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Processing...
            </>
          ) : (
            <>
              <Play size={20} />
              Start Healing Process
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default InputSection;
