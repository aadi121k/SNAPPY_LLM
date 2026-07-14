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
        const parsed = JSON.parse(stored);

        return {
          ...parsed,
          theme: 'dark' as ThemeMode,
        };
      } catch {}
    }

    return {
      theme: 'dark' as ThemeMode,
      language: 'en',
      model: MODELS[0].id,
    };
  });

  const saveSettings = (newSettings: Settings) => {
    const updated: Settings = {
      ...newSettings,
      theme: 'dark' as ThemeMode,
    };

    setSettings(updated);
    localStorage.setItem('snappy-settings', JSON.stringify(updated));
  };

  const updateModel = (model: AIModel) => {
    saveSettings({
      ...settings,
      model,
    });
  };

  const updateLanguage = (language: string) => {
    saveSettings({
      ...settings,
      language,
    });
  };

  // Theme permanently locked to dark
  const updateTheme = (_theme: ThemeMode) => {
    saveSettings({
      ...settings,
      theme: 'dark' as ThemeMode,
    });
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