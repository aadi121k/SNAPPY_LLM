import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const TypingIndicator: React.FC = () => {
  return (
    <div className="flex gap-4 p-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600"
      >
        <Sparkles size={16} className="text-white" />
      </motion.div>

      <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md bg-white border border-slate-100 px-4 py-3 shadow-sm">
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0 }}
          className="h-2 w-2 rounded-full bg-slate-400"
        />
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
          className="h-2 w-2 rounded-full bg-slate-400"
        />
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
          className="h-2 w-2 rounded-full bg-slate-400"
        />
      </div>
    </div>
  );
};

export default TypingIndicator;
