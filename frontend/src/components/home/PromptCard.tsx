import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  FileText,
  Mail,
  GraduationCap,
  Briefcase,
  Lightbulb,
  Sparkles,
} from 'lucide-react';
import { PromptCard } from '../../types';
import { cn } from '../../utils/helpers';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Code2,
  FileText,
  Mail,
  GraduationCap,
  Briefcase,
  Lightbulb,
};

interface PromptCardComponentProps {
  card: PromptCard;
  index: number;
  onClick: () => void;
}

export const PromptCardComponent: React.FC<PromptCardComponentProps> = ({
  card,
  index,
  onClick,
}) => {
  const IconComponent = iconMap[card.icon] || Sparkles;

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        'relative group flex flex-col items-start p-5 rounded-2xl bg-white border border-slate-100',
        'shadow-sm hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300',
        'w-full text-left'
      )}
    >
      {/* Gradient background on hover */}
      <div
        className={cn(
          'absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity',
          card.color
        )}
      />

      {/* Icon */}
      <div
        className={cn(
          'flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-gradient-to-br',
          card.color,
          'shadow-lg'
        )}
      >
        <IconComponent className="w-6 h-6 text-white" />
      </div>

      {/* Content */}
      <h3 className="text-base font-semibold text-slate-800 mb-1">{card.title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{card.description}</p>

      {/* Arrow indicator */}
      <motion.div
        initial={{ x: -10, opacity: 0 }}
        whileHover={{ x: 0, opacity: 1 }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 4L13 10L7 16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </motion.button>
  );
};

export default PromptCardComponent;
