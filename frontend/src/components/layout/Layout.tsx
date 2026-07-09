import React, { useState } from 'react';
import { useMediaQuery } from '../../hooks';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { AIModel } from '../../types';

interface LayoutProps {
  children: React.ReactNode;
  model?: AIModel;
  onModelChange?: (model: AIModel) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, model, onModelChange }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header
          onMenuClick={() => setSidebarOpen(true)}
          model={model}
          onModelChange={onModelChange}
        />
        <main className="flex-1 overflow-hidden">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
