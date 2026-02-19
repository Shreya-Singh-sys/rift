import React from 'react';
import { motion } from 'framer-motion';
import { FileCode, Bug, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import { useHealingStore, Fix } from '../store/healingStore';

const FixesTable: React.FC = () => {
  const { result } = useHealingStore();

  if (!result || result.fixes.length === 0) return null;

  const getBugTypeColor = (bugType: string) => {
    switch (bugType) {
      case 'SYNTAX':
        return 'bg-red-500/20 text-red-400 border-red-500/50';
      case 'TYPE_ERROR':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/50';
      case 'LOGIC':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'LINTING':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      case 'IMPORT':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/50';
      case 'INDENTATION':
        return 'bg-pink-500/20 text-pink-400 border-pink-500/50';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle2 className="text-green-400" size={18} />;
      case 'failed':
        return <XCircle className="text-red-400" size={18} />;
      default:
        return <AlertCircle className="text-yellow-400" size={18} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-gradient-to-br from-dark-900 to-dark-800 rounded-xl p-6 shadow-2xl border border-primary-900/20"
    >
      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <Bug className="text-purple-400" size={24} />
        Applied Fixes ({result.fixes.length})
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left text-gray-400 font-semibold py-3 px-4">File</th>
              <th className="text-left text-gray-400 font-semibold py-3 px-4">Bug Type</th>
              <th className="text-left text-gray-400 font-semibold py-3 px-4">Line</th>
              <th className="text-left text-gray-400 font-semibold py-3 px-4">Commit Message</th>
              <th className="text-left text-gray-400 font-semibold py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {result.fixes.map((fix: Fix, index: number) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="border-b border-gray-800 hover:bg-dark-950/50 transition-colors"
              >
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <FileCode className="text-primary-400" size={16} />
                    <code className="text-sm text-gray-300">{fix.file}</code>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${getBugTypeColor(
                      fix.bug_type
                    )}`}
                  >
                    {fix.bug_type}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <code className="text-sm text-gray-300 bg-dark-950 px-2 py-1 rounded">
                    {fix.line}
                  </code>
                </td>
                <td className="py-4 px-4">
                  <span className="text-sm text-gray-400">{fix.commit_message}</span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(fix.status)}
                    <span
                      className={`text-sm font-medium ${
                        fix.status === 'success'
                          ? 'text-green-400'
                          : fix.status === 'failed'
                          ? 'text-red-400'
                          : 'text-yellow-400'
                      }`}
                    >
                      {fix.status}
                    </span>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
          <div className="text-green-400 text-2xl font-bold">
            {result.fixes.filter((f) => f.status === 'success').length}
          </div>
          <div className="text-gray-400 text-sm">Successful Fixes</div>
        </div>
        <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/30">
          <div className="text-red-400 text-2xl font-bold">
            {result.fixes.filter((f) => f.status === 'failed').length}
          </div>
          <div className="text-gray-400 text-sm">Failed Fixes</div>
        </div>
        <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
          <div className="text-blue-400 text-2xl font-bold">{result.total_commits}</div>
          <div className="text-gray-400 text-sm">Total Commits</div>
        </div>
      </div>
    </motion.div>
  );
};

export default FixesTable;
