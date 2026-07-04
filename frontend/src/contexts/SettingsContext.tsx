import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Settings, AIModel, ThemeMode } from '../types';
import { MODELS } from '../utils/constants';

interface SettingsContextType {
  settings: Settings;
  updateModel: (model: AIModel) => void;
  updateLanguage: (language: string) => void;
  updateTheme: (theme: ThemeMode) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<Settings>(() => {
    const stored = localStorage.getItem('snappy-settings');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return {
          theme: 'light' as ThemeMode,
          language: 'en',
          model: MODELS[0].id,
        };
      }
    }
    return {
      theme: 'light' as ThemeMode,
      language: 'en',
      model: MODELS[0].id,
    };
  });

  const saveSettings = (newSettings: Settings) => {
    setSettings(newSettings);
    localStorage.setItem('snappy-settings', JSON.stringify(newSettings));
  };

  const updateModel = (model: AIModel) => {
    saveSettings({ ...settings, model });
  };

  const updateLanguage = (language: string) => {
    saveSettings({ ...settings, language });
  };

  const updateTheme = (theme: ThemeMode) => {
    saveSettings({ ...settings, theme });
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        updateModel,
        updateLanguage,
        updateTheme,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};
