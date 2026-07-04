import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { Conversation, Message, AIModel } from '../types';
import { generateId, getConversationTitle } from '../utils/helpers';

interface ChatContextType {
  conversations: Conversation[];
  currentConversation: Conversation | null;
  isLoading: boolean;
  searchQuery: string;
  setCurrentConversation: (conversation: Conversation | null) => void;
  createNewConversation: (model: AIModel) => Conversation;
  addMessage: (content: string, role: 'user' | 'assistant', model?: AIModel) => void;
  renameConversation: (id: string, title: string) => void;
  deleteConversation: (id: string) => void;
  toggleSaveConversation: (id: string) => void;
  setSearchQuery: (query: string) => void;
  getFilteredConversations: () => Conversation[];
  regenerateLastResponse: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [conversations, setConversations] = useState<Conversation[]>(() => {
    const stored = localStorage.getItem('snappy-conversations');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        return parsed.map((c: Conversation) => ({
          ...c,
          createdAt: new Date(c.createdAt),
          updatedAt: new Date(c.updatedAt),
          messages: c.messages.map((m: Message) => ({
            ...m,
            timestamp: new Date(m.timestamp),
          })),
        }));
      } catch {
        return [];
      }
    }
    return [];
  });

  const [currentConversation, setCurrentConversation] = useState<Conversation | null>(null);
  const [isLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const saveToStorage = useCallback((convs: Conversation[]) => {
    localStorage.setItem('snappy-conversations', JSON.stringify(convs));
  }, []);

  const createNewConversation = useCallback((model: AIModel): Conversation => {
    const newConv: Conversation = {
      id: generateId(),
      title: 'New Conversation',
      messages: [],
      createdAt: new Date(),
      updatedAt: new Date(),
      saved: false,
      model,
    };
    setConversations(prev => [newConv, ...prev]);
    setCurrentConversation(newConv);
    return newConv;
  }, []);

  const addMessage = useCallback((content: string, role: 'user' | 'assistant', model?: AIModel) => {
    if (!currentConversation) return;

    const message: Message = {
      id: generateId(),
      role,
      content,
      timestamp: new Date(),
      model,
    };

    setCurrentConversation(prev => {
      if (!prev) return prev;
      const updated = {
        ...prev,
        messages: [...prev.messages, message],
        updatedAt: new Date(),
        title: prev.messages.length === 0 ? getConversationTitle([message]) : prev.title,
      };
      setConversations(convs => {
        const newConvs = convs.map(c => c.id === updated.id ? updated : c);
        saveToStorage(newConvs);
        return newConvs;
      });
      return updated;
    });
  }, [currentConversation, saveToStorage]);

  const renameConversation = useCallback((id: string, title: string) => {
    setConversations(prev => {
      const updated = prev.map(c => c.id === id ? { ...c, title } : c);
      saveToStorage(updated);
      return updated;
    });
    if (currentConversation?.id === id) {
      setCurrentConversation(prev => prev ? { ...prev, title } : prev);
    }
  }, [currentConversation, saveToStorage]);

  const deleteConversation = useCallback((id: string) => {
    setConversations(prev => {
      const filtered = prev.filter(c => c.id !== id);
      saveToStorage(filtered);
      return filtered;
    });
    if (currentConversation?.id === id) {
      setCurrentConversation(null);
    }
  }, [currentConversation, saveToStorage]);

  const toggleSaveConversation = useCallback((id: string) => {
    setConversations(prev => {
      const updated = prev.map(c => c.id === id ? { ...c, saved: !c.saved } : c);
      saveToStorage(updated);
      return updated;
    });
    if (currentConversation?.id === id) {
      setCurrentConversation(prev => prev ? { ...prev, saved: !prev.saved } : prev);
    }
  }, [currentConversation, saveToStorage]);

  const getFilteredConversations = useCallback(() => {
    if (!searchQuery.trim()) return conversations;
    const query = searchQuery.toLowerCase();
    return conversations.filter(c =>
      c.title.toLowerCase().includes(query) ||
      c.messages.some(m => m.content.toLowerCase().includes(query))
    );
  }, [conversations, searchQuery]);

  const regenerateLastResponse = useCallback(() => {
    if (!currentConversation || currentConversation.messages.length === 0) return;
    const lastUserMessageIndex = currentConversation.messages.map(m => m.role).lastIndexOf('user');
    if (lastUserMessageIndex === -1) return;
    setCurrentConversation(prev => {
      if (!prev) return prev;
      return {
        ...prev,
        messages: prev.messages.slice(0, lastUserMessageIndex + 1),
      };
    });
  }, [currentConversation]);

  return (
    <ChatContext.Provider
      value={{
        conversations,
        currentConversation,
        isLoading,
        searchQuery,
        setCurrentConversation,
        createNewConversation,
        addMessage,
        renameConversation,
        deleteConversation,
        toggleSaveConversation,
        setSearchQuery,
        getFilteredConversations,
        regenerateLastResponse,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

export { ChatContext };
