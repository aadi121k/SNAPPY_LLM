import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Send, Paperclip, Trash2, StopCircle } from 'lucide-react';
import { Button, Textarea } from '../ui';
import { useAutoResizeTextarea } from '../../hooks';
import { AIModel } from '../../types';

interface ChatInputProps {
  onSend: (message: string) => void;
  onClear?: () => void;
  onStop?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  model: AIModel;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  onSend,
  onClear,
  onStop,
  isLoading = false,
  disabled = false,
}) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useAutoResizeTextarea(message, textareaRef as React.RefObject<HTMLTextAreaElement | null>);

  const handleSubmit = useCallback(() => {
    if (message.trim() && !isLoading && !disabled) {
      onSend(message.trim());
      setMessage('');
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  }, [message, isLoading, disabled, onSend]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleAttachment = () => {
    alert('File attachment feature coming soon!');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky bottom-0 bg-gradient-to-t from-slate-50 via-slate-50/95 to-transparent pt-4 pb-4 px-4"
    >
      <div className="mx-auto max-w-3xl">
        <div className="relative rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50">
          <Textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Send a message to Snappy AI..."
            disabled={disabled}
            className="border-0 shadow-none rounded-2xl pr-24 min-h-[52px] max-h-[200px] focus:ring-0 resize-none"
            rows={1}
          />

          <div className="absolute bottom-2 right-2 flex items-center gap-1">
            <button
              onClick={handleAttachment}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              title="Attach file"
              disabled={isLoading}
            >
              <Paperclip size={18} />
            </button>

            {onClear && (
              <button
                onClick={onClear}
                className="p-2 rounded-lg text-slate-400 hover:text-red-500 hover:bg-slate-100 transition-colors"
                title="Clear chat"
                disabled={isLoading}
              >
                <Trash2 size={18} />
              </button>
            )}

            {isLoading ? (
              <button
                onClick={onStop}
                className="p-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
                title="Stop generating"
              >
                <StopCircle size={18} />
              </button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!message.trim() || disabled}
                size="sm"
                className="rounded-lg px-3"
              >
                <Send size={18} />
              </Button>
            )}
          </div>
        </div>

        <p className="text-center text-xs text-slate-400 mt-2">
          Snappy AI can make mistakes. Verify important information.
        </p>
      </div>
    </motion.div>
  );
};

export default ChatInput;
