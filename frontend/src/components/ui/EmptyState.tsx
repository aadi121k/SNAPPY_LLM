import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Sparkles } from 'lucide-react';

export const EmptyState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[400px] px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative w-24 h-24 mb-6"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-100 via-purple-100 to-teal-100" />
        <div className="absolute inset-0 flex items-center justify-center">
          <MessageSquare className="w-10 h-10 text-indigo-400" />
        </div>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center"
        >
          <Sparkles className="w-3 h-3 text-white" />
        </motion.div>
      </motion.div>

      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl font-semibold text-slate-800 mb-2"
      >
        Start a conversation
      </motion.h3>

      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-slate-500 text-center max-w-sm"
      >
        Type a message below to begin chatting with Snappy AI. I can help you write, code, learn, and more!
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8 flex flex-wrap justify-center gap-2"
      >
        {['Ask anything', 'Write code', 'Learn something', 'Get creative'].map((text, i) => (
          <span
            key={i}
            className="px-3 py-1.5 text-sm text-slate-600 bg-slate-100 rounded-full"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default EmptyState;
