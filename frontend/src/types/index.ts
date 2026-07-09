export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  model?: AIModel;

  attachment?: {
    name: string;
    type: string;
    size: number;
  };
}

export interface Conversation {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
  saved: boolean;
  model: AIModel;
}

export type AIModel = 'llama-3.3' | 'deepseek' | 'kimi' | 'gemma';

export interface ModelInfo {
  id: AIModel;
  name: string;
  description: string;
  icon: string;
}

export interface PromptCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  prompt: string;
  color: string;
}

export type ThemeMode = 'light' | 'dark';

export interface Settings {
  theme: ThemeMode;
  language: string;
  model: AIModel;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}
