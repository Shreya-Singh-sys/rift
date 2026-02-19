import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Clock, GitCommit, TrendingUp } from 'lucide-react';
import { useHealingStore } from '../store/healingStore';

const ScoreBreakdown: React.FC = () => {
  const { result } = useHealingStore();

  if (!result) return null;

  const baseScore = 100;
  const timeBonus = result.execution_time_minutes < 5 ? 10 : 0;
  const commitPenalty = result.total_commits > 20 ? (result.total_commits - 20) * 2 : 0;

  const stats = [
    {
      icon: Trophy,
      label: 'Base Score',
      value: baseScore,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: Clock,
      label: 'Time Bonus',
      value: `+${timeBonus}`,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      subtitle: `${result.execution_time_minutes.toFixed(2)} min`,
    },
    {
      icon: GitCommit,
      label: 'Commit Penalty',
      value: `-${commitPenalty}`,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      subtitle: `${result.total_commits} commits`,
    },
    {
      icon: TrendingUp,
      label: 'Final Score',
      value: result.final_score,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      highlight: true,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-gradient-to-br from-dark-900 to-dark-800 rounded-xl p-6 shadow-2xl border border-primary-900/20"
    >
      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <Trophy className="text-yellow-400" size={24} />
        Score Breakdown
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className={`${stat.bgColor} rounded-lg p-4 ${
              stat.highlight ? 'ring-2 ring-yellow-400/50' : ''
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <stat.icon className={stat.color} size={20} />
              <span className="text-gray-400 text-sm font-medium">{stat.label}</span>
            </div>
            <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
            {stat.subtitle && (
              <div className="text-gray-500 text-xs mt-1">{stat.subtitle}</div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-dark-950/50 rounded-lg border border-gray-800">
        <div className="text-sm text-gray-400 space-y-1">
          <div className="flex justify-between">
            <span>Formula:</span>
            <span className="font-mono text-gray-300">
              100 {timeBonus > 0 && `+ ${timeBonus}`} {commitPenalty > 0 && `- ${commitPenalty}`} = {result.final_score}
            </span>
          </div>
          <div className="text-xs text-gray-500 mt-2">
            <div>• Time bonus: +10 if execution &lt; 5 minutes</div>
            <div>• Commit penalty: -2 per commit over 20</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ScoreBreakdown;
