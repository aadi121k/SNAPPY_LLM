import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Sun,
  Moon,
  Globe,
  Cpu,
  ChevronRight,
  Zap,
} from 'lucide-react';
import { Layout } from '../components/layout';
import { useTheme, useSettings } from '../contexts';
import { MODELS, LANGUAGES, APP_NAME, APP_TAGLINE } from '../utils/constants';

export const SettingsPage: React.FC = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { settings, updateModel, updateLanguage } = useSettings();

  return (
    <Layout>
      <div className="flex flex-col h-full overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white/80 backdrop-blur border-b border-slate-200 z-10">
          <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-lg font-semibold text-slate-800">Settings</h1>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 py-6 px-4">
          <div className="max-w-2xl mx-auto space-y-6">
            {/* Theme Section */}
            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
            >
              <div className="px-4 py-3 border-b border-slate-100">
                <h2 className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                  Appearance
                </h2>
              </div>
              <button
                onClick={toggleTheme}
                className="w-full flex items-center justify-between px-4 py-4 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  {theme === 'light' ? (
                    <Sun size={20} className="text-amber-500" />
                  ) : (
                    <Moon size={20} className="text-indigo-500" />
                  )}
                  <div className="text-left">
                    <p className="text-sm font-medium text-slate-700">Theme</p>
                    <p className="text-xs text-slate-500">
                      {theme === 'light' ? 'Light mode' : 'Dark mode'}
                    </p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-slate-400" />
              </button>
            </motion.section>

            {/* Language Section */}
            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
            >
              <div className="px-4 py-3 border-b border-slate-100">
                <h2 className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                  Language
                </h2>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Globe size={20} className="text-teal-500" />
                  <div className="text-left">
                    <p className="text-sm font-medium text-slate-700">Language</p>
                    <p className="text-xs text-slate-500">Select your preferred language</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => updateLanguage(lang.code)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        settings.language === lang.code
                          ? 'bg-indigo-100 text-indigo-700 border-2 border-indigo-500'
                          : 'bg-slate-50 text-slate-600 border-2 border-transparent hover:bg-slate-100'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Model Selection Section */}
            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
            >
              <div className="px-4 py-3 border-b border-slate-100">
                <h2 className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                  AI Model
                </h2>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Cpu size={20} className="text-purple-500" />
                  <div className="text-left">
                    <p className="text-sm font-medium text-slate-700">Default Model</p>
                    <p className="text-xs text-slate-500">Choose your preferred AI model</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {MODELS.map((model) => (
                    <button
                      key={model.id}
                      onClick={() => updateModel(model.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                        settings.model === model.id
                          ? 'bg-indigo-50 border-2 border-indigo-500'
                          : 'bg-slate-50 border-2 border-transparent hover:bg-slate-100'
                      }`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-lg">
                        {model.icon}
                      </div>
                      <div className="flex-1 text-left">
                        <p className={`text-sm font-medium ${settings.model === model.id ? 'text-indigo-700' : 'text-slate-700'}`}>
                          {model.name}
                        </p>
                        <p className="text-xs text-slate-500">{model.description}</p>
                      </div>
                      {settings.model === model.id && (
                        <div className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* About Section */}
            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
            >
              <div className="px-4 py-3 border-b border-slate-100">
                <h2 className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                  About
                </h2>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
                    <Zap size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 bg-clip-text text-transparent">
                      {APP_NAME}
                    </h3>
                    <p className="text-sm text-slate-500">{APP_TAGLINE}</p>
                  </div>
                </div>
                <div className="text-sm text-slate-600 space-y-2">
                  <p>
                    <span className="font-medium">Version:</span> 2.0.0
                  </p>
                  <p>
                    <span className="font-medium">Built with:</span> React, TypeScript, Tailwind CSS
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center text-xs text-slate-400 pb-8"
            >
              <p>Made with care for better AI experiences</p>
              <p className="mt-1">© 2024 {APP_NAME}. All rights reserved.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SettingsPage;
