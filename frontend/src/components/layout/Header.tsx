import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Menu, Sun, Moon, Settings, ChevronDown, Zap } from 'lucide-react';
import { Logo } from '../ui';
import { useTheme, useSettings } from '../../contexts';
import { MODELS as MODELS_CONST } from '../../utils/constants';
import { AIModel } from '../../types';

interface HeaderProps {
  onMenuClick: () => void;
  model?: AIModel;
  onModelChange?: (model: AIModel) => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick, model, onModelChange }) => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { settings, updateModel } = useSettings();
  const [showModelPicker, setShowModelPicker] = useState(false);

  const currentModel = model || settings.model;
  const currentModelInfo = MODELS_CONST.find((m) => m.id === currentModel);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-30 flex items-center justify-between h-14 px-4 bg-white/80 backdrop-blur border-b border-slate-200"
    >
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors md:hidden"
        >
          <Menu size={20} />
        </button>

        <button
          onClick={() => navigate('/')}
          className="hidden md:block hover:opacity-80 transition-opacity"
        >
          <Logo size="sm" />
        </button>
      </div>

      {/* Center - Model Selector */}
      <div className="relative">
        <button
          onClick={() => setShowModelPicker(!showModelPicker)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
        >
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <Zap size={14} className="text-white" />
            </div>
            <span className="text-sm font-medium text-slate-700">
              {currentModelInfo?.name || 'Select Model'}
            </span>
          </div>
          <ChevronDown size={16} className="text-slate-400" />
        </button>

        <AnimatePresence>
          {showModelPicker && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-10"
                onClick={() => setShowModelPicker(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-20 w-64 bg-white rounded-xl border border-slate-200 shadow-lg overflow-hidden"
              >
                <div className="p-2">
                  {MODELS_CONST.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => {
                        if (onModelChange) {
                          onModelChange(m.id);
                        } else {
                          updateModel(m.id);
                        }
                        setShowModelPicker(false);
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                        currentModel === m.id
                          ? 'bg-indigo-50 text-indigo-700'
                          : 'hover:bg-slate-50'
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-lg">
                        {m.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{m.name}</p>
                        <p className="text-xs text-slate-500 truncate">
                          {m.description}
                        </p>
                      </div>
                      {currentModel === m.id && (
                        <div className="w-2 h-2 rounded-full bg-indigo-500" />
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        <button
          onClick={() => navigate('/settings')}
          className="hidden md:flex p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Settings"
        >
          <Settings size={20} />
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
