import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const sizes = {
  sm: { width: 32, height: 32, textSize: 'text-lg' },
  md: { width: 40, height: 40, textSize: 'text-xl' },
  lg: { width: 56, height: 56, textSize: 'text-2xl' },
};

export const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true }) => {
  const { width, height, textSize } = sizes[size];

  return (
    <div className="flex items-center gap-2.5">
      <motion.div
        className="relative flex items-center justify-center rounded-xl overflow-hidden"
        style={{ width, height }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          viewBox="0 0 40 40"
          style={{ width, height }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="50%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>

          <rect
            x="2"
            y="2"
            width="36"
            height="36"
            rx="10"
            fill="url(#logoGradient)"
          />

          <path
            d="M12 22C12 16 16 12 22 12C18 12 14 14 14 22C14 28 18 28 22 28C26 28 28 26 28 24C28 22 26 20 22 20C26 20 28 22 28 24"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <circle cx="30" cy="10" r="3" fill="#14B8A6" />
          <circle cx="32" cy="8" r="1.5" fill="#0EA5E9" />
        </svg>
      </motion.div>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold ${textSize} bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 bg-clip-text text-transparent`}>
            Snappy
          </span>
          <span className="text-xs font-medium text-slate-500 -mt-0.5">AI</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
