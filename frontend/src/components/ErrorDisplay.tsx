import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { useHealingStore } from '../store/healingStore';

const ErrorDisplay: React.FC = () => {
  const { error } = useHealingStore();

  if (!error) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 mb-6"
    >
      <div className="flex items-start gap-3">
        <AlertCircle className="text-red-400 flex-shrink-0 mt-0.5" size={20} />
        <div>
          <h4 className="text-red-400 font-semibold mb-1">Error</h4>
          <p className="text-gray-300 text-sm">{error}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ErrorDisplay;
