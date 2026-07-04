import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Layout } from '../components/layout';
import { MessageBubble, TypingIndicator, ChatInput } from '../components/chat';
import { EmptyState } from '../components/ui/EmptyState';
import { useChat, useSettings } from '../contexts';
import { useAutoScroll } from '../hooks';
import apiService from '../services/api';

const ChatContent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const { settings } = useSettings();
  const {
    currentConversation,
    setCurrentConversation,
    conversations,
    createNewConversation,
    addMessage,
  } = useChat();

  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const initialPrompt = searchParams.get('prompt');
  const initialMessage = searchParams.get('message');

  useEffect(() => {
    if (id && conversations.length > 0) {
      const conv = conversations.find((c) => c.id === id);
      if (conv) {
        setCurrentConversation(conv);
      }
    } else if (id && !currentConversation) {
      const newConv = createNewConversation(settings.model);
      setCurrentConversation(newConv);
    }
  }, [id, conversations]);

  useEffect(() => {
    if (initialPrompt || initialMessage) {
      const messageText = (initialPrompt || initialMessage || '').trim();
      if (messageText) {
        setTimeout(() => {
          handleSendMessage(messageText);
          window.history.replaceState({}, '', `/chat/${id}`);
        }, 100);
      }
    }
  }, [initialPrompt, initialMessage]);

  useAutoScroll(messagesEndRef as React.RefObject<HTMLDivElement | null>, [
    currentConversation?.messages,
  ]);

  const handleSendMessage = useCallback(async (message: string) => {
    if (!message.trim() || isLoading) return;

    if (!currentConversation) {
      const newConv = createNewConversation(settings.model);
      setCurrentConversation({ ...newConv, messages: [] });
    }

    addMessage(message, 'user', settings.model);
    setIsLoading(true);

    try {
      const response = await apiService.sendMessage({
        content: message,
        conversationId: currentConversation?.id,
        model: settings.model,
      });

      addMessage(response.message.content, 'assistant', response.message.model);
    } catch (error) {
      console.error('Error sending message:', error);
      addMessage(
        'Sorry, an error occurred while processing your request. Please try again.',
        'assistant',
        settings.model
      );
    } finally {
      setIsLoading(false);
    }
  }, [currentConversation, settings.model, isLoading, addMessage, createNewConversation, setCurrentConversation]);

  const handleClearChat = () => {
    if (currentConversation && window.confirm('Are you sure you want to clear this conversation?')) {
      setCurrentConversation({
        ...currentConversation,
        messages: [],
        title: 'New Conversation',
      });
    }
  };

  const handleModelChange = (model: import('../types').AIModel) => {
    if (currentConversation) {
      setCurrentConversation({ ...currentConversation, model });
    }
  };

  const messages = currentConversation?.messages || [];
  const showTyping = isLoading && messages.some(m => m.role === 'user');

  return (
    <Layout model={currentConversation?.model || settings.model} onModelChange={handleModelChange}>
      <div className="flex flex-col h-full">
        <div
          ref={messagesContainerRef}
          className="flex-1 overflow-y-auto scroll-smooth"
        >
          {messages.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="max-w-3xl mx-auto">
              <AnimatePresence mode="popLayout">
                {messages.map((message, index) => (
                  <MessageBubble
                    key={message.id}
                    message={message}
                    onRegenerate={() => {
                      const lastUserMsg = [...messages].reverse().find(m => m.role === 'user');
                      if (lastUserMsg) {
                        handleSendMessage(lastUserMsg.content);
                      }
                    }}
                    isLast={index === messages.length - 1 && message.role === 'assistant'}
                  />
                ))}
              </AnimatePresence>
              {showTyping && <TypingIndicator />}
            </div>
          )}
          <div ref={messagesEndRef} className="h-4" />
        </div>

        <ChatInput
          onSend={handleSendMessage}
          onClear={messages.length > 0 ? handleClearChat : undefined}
          onStop={() => setIsLoading(false)}
          isLoading={isLoading}
          disabled={false}
          model={currentConversation?.model || settings.model}
        />
      </div>
    </Layout>
  );
};

export const ChatPage: React.FC = () => {
  return (
    <ChatContent />
  );
};

export default ChatPage;
