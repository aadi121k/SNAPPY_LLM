import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const sizes = {
  sm: { width: 34, height: 34, textSize: 'text-lg' },
  md: { width: 44, height: 44, textSize: 'text-xl' },
  lg: { width: 60, height: 60, textSize: 'text-3xl' },
};

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
}) => {
  const { width, height, textSize } = sizes[size];

  return (
    <div className="flex items-center gap-3">
      <motion.img
        src="/logo.png"
        alt="SNAPPY LLM"
        style={{
          width,
          height,
        }}
        whileHover={{
          scale: 1.05,
          rotate: 3,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="rounded-xl shadow-md"
      />

      {showText && (
        <div className="leading-tight">
          <h1
            className={`font-extrabold ${textSize} bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent`}
          >
            SNAPPY
          </h1>

          <p className="text-xs tracking-[0.25em] text-slate-500 font-semibold">
            LLM
          </p>
        </div>
      )}
    </div>
  );
};

export default Logo;