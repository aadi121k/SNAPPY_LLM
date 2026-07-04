import { ModelInfo, PromptCard } from '../types';

export const APP_NAME = 'Snappy AI LLM';
export const APP_TAGLINE =  'Production-Ready LLM Assistant for Coding, Learning & Productivity';
export const THEME_COLORS = {
  background: '#F8FAFC',
  card: '#FFFFFF',
  primary: '#4F46E5',
  accent: '#14B8A6',
  secondary: '#8B5CF6',
  text: '#1E293B',
  textSecondary: '#64748B',
  border: '#E2E8F0',
};

export const MODELS: ModelInfo[] = [
  {
    id: 'llama-3.3',
    name: 'Llama 3.3',
    description: 'Balanced reasoning and general-purpose conversations',
    icon: '🦙',
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    description: 'Optimized for coding, mathematics, and logical reasoning',
    icon: '🔮',
  },
  {
    id: 'kimi',
    name: 'Kimi',
    description: 'Long-context model for document understanding',
    icon: '🌙',
  },
  {
    id: 'gemma',
    name: 'Gemma',
    description: 'Fast lightweight model for everyday tasks',
    icon: '💎',
  },
];

export const PROMPT_CARDS: PromptCard[] = [
  {
    id: 'code-assistant',
    title: 'Code Assistant',
    description: 'Debug, explain and generate production-ready code',
    icon: 'Code2',
    prompt: 'Help me write or improve this code:\n\n',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 'document-chat',
    title: 'Chat with Documents',
    description: 'Upload PDFs or documents and ask questions',
    icon: 'FileText',
    prompt: 'Analyze this document and answer my questions:\n\n',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    id: 'email-writing',
    title: 'Professional Writing',
    description: 'Write emails, reports and professional content',
    icon: 'Mail',
    prompt: 'Help me write the following:\n\n',
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 'learning',
    title: 'Learn Anything',
    description: 'Understand concepts with clear explanations',
    icon: 'GraduationCap',
    prompt: 'Teach me about:\n\n',
    color: 'from-rose-500 to-pink-500',
  },
  {
    id: 'career',
    title: 'Career Assistant',
    description: 'Improve resumes, LinkedIn and interview preparation',
    icon: 'Briefcase',
    prompt: 'Help me improve my resume:\n\n',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'brainstorm',
    title: 'Brainstorm Ideas',
    description: 'Generate innovative ideas and project plans',
    icon: 'Lightbulb',
    prompt: 'Help me brainstorm ideas for:\n\n',
    color: 'from-violet-500 to-purple-500',
  },
];

export const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'zh', name: 'Chinese' },
  { code: 'ja', name: 'Japanese' },
];
