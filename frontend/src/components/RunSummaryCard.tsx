import React from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Link as LinkIcon,
  GitBranch,
  Bug,
  CheckCircle2,
  XCircle,
  Clock,
  Users,
  RefreshCw,
} from 'lucide-react';
import { useHealingStore } from '../store/healingStore';

const RunSummaryCard: React.FC = () => {
  const { result, maxIterations } = useHealingStore();

  if (!result) return null;

  const successFixes = result.fixes.filter((f) => f.status === 'success').length;
  const allSuccess =
    result.status === 'completed' && (result.fixes.length === 0 || successFixes === result.fixes.length);
  const isPassed = allSuccess;

  const infoItems = [
    {
      icon: Users,
      label: 'Team Name',
      value: result.team_name,
      color: 'text-primary-400',
      span: false,
    },
    {
      icon: User,
      label: 'Leader Name',
      value: result.leader_name,
      color: 'text-primary-400',
      span: false,
    },
    {
      icon: LinkIcon,
      label: 'Repository URL',
      value: result.repo_url,
      color: 'text-blue-400',
      span: true,
      mono: false,
      truncate: true,
    },
    {
      icon: GitBranch,
      label: 'Branch Name',
      value: result.branch_name || '—',
      color: 'text-green-400',
      span: true,
      mono: true,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-gradient-to-br from-dark-900 to-dark-800 rounded-xl p-6 shadow-2xl border border-primary-900/20"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Users className="text-primary-400" size={24} />
          Run Summary
        </h3>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold border ${
            isPassed
              ? 'bg-green-500/20 text-green-400 border-green-500/50'
              : 'bg-red-500/20 text-red-400 border-red-500/50'
          }`}
        >
          {isPassed ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
          CI/CD {isPassed ? 'PASSED' : 'FAILED'}
        </motion.div>
      </div>

      {/* Team / Repo info grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
        {infoItems.map((item, idx) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + idx * 0.05 }}
            className={`flex items-center gap-3 p-3 bg-dark-950/50 rounded-lg border border-gray-800 ${
              item.span ? 'md:col-span-2' : ''
            }`}
          >
            <item.icon className={`${item.color} flex-shrink-0`} size={18} />
            <div className="min-w-0">
              <div className="text-xs text-gray-500 mb-0.5">{item.label}</div>
              {item.mono ? (
                <code className={`text-sm font-semibold ${item.color}`}>{item.value}</code>
              ) : (
                <div
                  className={`text-sm font-semibold ${item.color} ${
                    item.truncate ? 'truncate' : ''
                  }`}
                  title={item.truncate ? item.value : undefined}
                >
                  {item.value}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          {
            icon: Bug,
            label: 'Total Failures',
            value: result.total_failures ?? result.fixes.length,
            color: 'text-red-400',
            bg: 'bg-red-500/10 border-red-500/30',
          },
          {
            icon: CheckCircle2,
            label: 'Total Fixes',
            value: successFixes,
            color: 'text-green-400',
            bg: 'bg-green-500/10 border-green-500/30',
          },
          {
            icon: Clock,
            label: 'Total Time',
            value: `${result.execution_time_minutes.toFixed(2)} min`,
            color: 'text-blue-400',
            bg: 'bg-blue-500/10 border-blue-500/30',
          },
          {
            icon: RefreshCw,
            label: 'Iterations',
            value: `${result.iterations_completed ?? '—'} / ${maxIterations}`,
            color: 'text-yellow-400',
            bg: 'bg-yellow-500/10 border-yellow-500/30',
          },
        ].map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 + idx * 0.07 }}
            className={`flex flex-col gap-1 p-3 rounded-lg border ${stat.bg}`}
          >
            <div className="flex items-center gap-2">
              <stat.icon className={stat.color} size={16} />
              <span className="text-xs text-gray-400">{stat.label}</span>
            </div>
            <div className={`text-xl font-bold ${stat.color}`}>{stat.value}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default RunSummaryCard;
