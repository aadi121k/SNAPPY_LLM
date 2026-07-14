import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { ThemeMode } from '../types';

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('snappy-theme', 'dark');
  }, []);

  const toggleTheme = () => {
    // Disabled
  };

  const setTheme = (_theme: ThemeMode) => {
    // Disabled
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: 'dark',
        toggleTheme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};