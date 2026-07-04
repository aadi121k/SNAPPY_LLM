import React from 'react';
import { motion } from 'framer-motion';
import { APP_NAME, APP_TAGLINE } from '../../utils/constants';

export const WelcomeSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-2xl mx-auto"
    >
      <WelcomeIllustration />

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl md:text-5xl font-bold text-slate-800 mb-3"
      >
        Hello{' '}
        <span
          className="inline-block origin-bottom animate-wave"
          style={{
            animation: 'wave 1s ease-in-out infinite',
          }}
        >
          👋
        </span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 bg-clip-text text-transparent mb-4"
      >
        Welcome to {APP_NAME}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-lg text-slate-500 leading-relaxed"
      >
        {APP_TAGLINE}
        <br />
        Your intelligent AI assistant for learning, productivity, and everyday tasks.
      </motion.p>
    </motion.div>
  );
};

const WelcomeIllustration: React.FC = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="relative w-48 h-48 mx-auto mb-8"
    >
      {/* Main circle */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-100 via-purple-100 to-teal-100"
      />

      {/* Inner glow */}
      <div className="absolute inset-2 rounded-full bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-teal-500/20 backdrop-blur-sm" />

      {/* Floating elements */}
      {[...Array(6)].map((_, i) => {
        const size = 8 + Math.random() * 12;
        const colors = ['#4F46E5', '#8B5CF6', '#14B8A6', '#0EA5E9', '#F59E0B', '#EF4444'];
        return (
          <motion.div
            key={i}
            animate={{
              y: [0, -10, 0],
              x: [0, Math.random() * 10 - 5, 0],
            }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{
              position: 'absolute',
              width: size,
              height: size,
              borderRadius: '50%',
              backgroundColor: colors[i % colors.length],
              top: `${10 + Math.random() * 80}%`,
              left: `${10 + Math.random() * 80}%`,
              transform: 'translate(-50%, -50%)',
              boxShadow: `0 0 ${size}px ${colors[i % colors.length]}80`,
            }}
          />
        );
      })}

      <svg
        viewBox="0 0 120 120"
        className="absolute inset-0 w-full h-full"
        style={{ transform: 'rotate(-15deg)' }}
      >
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r="35" fill="url(#logoGrad)" opacity="0.95" />
        <circle cx="85" cy="35" r="8" fill="#14B8A6" />
        <circle cx="95" cy="25" r="4" fill="#0EA5E9" />
      </svg>
    </motion.div>
  );
};

export default WelcomeSection;
