import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { ChatProvider } from './contexts/ChatContext';
import { SettingsProvider } from './contexts/SettingsContext';

import {
  HomePage,
  ChatPage,
  SettingsPage,
} from './pages';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <SettingsProvider>
          <ChatProvider>
            <BrowserRouter>
              <Routes>
                <Route
                  path="/"
                  element={<HomePage />}
                />

                <Route
                  path="/chat/:id?"
                  element={<ChatPage />}
                />

                <Route
                  path="/settings"
                  element={<SettingsPage />}
                />

                <Route
                  path="*"
                  element={<Navigate to="/" replace />}
                />
              </Routes>
            </BrowserRouter>
          </ChatProvider>
        </SettingsProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;