import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, Clock, GitBranch } from 'lucide-react';
import { useHealingStore } from '../store/healingStore';

const Timeline: React.FC = () => {
  const { result, maxIterations } = useHealingStore();

  if (!result) return null;

  // Use real iterations_completed if available, otherwise fall back to fixes-based heuristic
  const iterationsCompleted = result.iterations_completed ?? (result.fixes.length > 0 ? 1 : 0);
  const allPassed = result.status === 'completed' && result.fixes.every((f) => f.status === 'success');

  const iterations = Array.from({ length: maxIterations }, (_, i) => {
    const iterationNum = i + 1;
    const isDone = iterationNum <= iterationsCompleted;
    const isLast = iterationNum === iterationsCompleted;

    return {
      iteration: iterationNum,
      status: isDone
        ? isLast && !allPassed && iterationNum === iterationsCompleted
          ? 'failed'
          : 'completed'
        : 'skipped',
      fixes: isDone ? result.fixes.length : 0,
    };
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="text-green-400" size={20} />;
      case 'failed':
        return <XCircle className="text-red-400" size={20} />;
      default:
        return <Clock className="text-gray-600" size={20} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 border-green-500';
      case 'failed':
        return 'bg-red-500/20 border-red-500';
      default:
        return 'bg-gray-800 border-gray-700';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-gradient-to-br from-dark-900 to-dark-800 rounded-xl p-6 shadow-2xl border border-primary-900/20"
    >
      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <GitBranch className="text-primary-400" size={24} />
        CI/CD Execution Timeline
      </h3>

      <div className="space-y-4">
        {iterations.map((iter, index) => (
          <motion.div
            key={iter.iteration}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className={`flex items-center gap-4 p-4 rounded-lg border ${getStatusColor(
              iter.status
            )} transition-all`}
          >
            <div className="flex-shrink-0">{getStatusIcon(iter.status)}</div>
            
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-white font-semibold">
                    Iteration {iter.iteration}
                  </span>
                  <span className="text-gray-400 text-sm ml-2">
                    / {maxIterations}
                  </span>
                </div>
                {iter.fixes > 0 && (
                  <span className="text-sm text-gray-400">
                    {iter.fixes} fixes applied
                  </span>
                )}
              </div>
              
              {iter.status === 'completed' && (
                <div className="mt-2 w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-green-500 to-green-400"
                  />
                </div>
              )}
            </div>

            {iter.status === 'completed' && (
              <div className="flex-shrink-0">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold">
                  Success
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {result.branch_name && (
        <div className="mt-6 p-4 bg-primary-900/20 rounded-lg border border-primary-500/30">
          <div className="flex items-center gap-2 text-primary-400 text-sm">
            <GitBranch size={16} />
            <span className="font-semibold">Branch Created:</span>
            <code className="text-white bg-dark-950 px-2 py-1 rounded">
              {result.branch_name}
            </code>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Timeline;
