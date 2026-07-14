import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Send, Paperclip, Trash2, StopCircle } from 'lucide-react';
import { Button, Textarea } from '../ui';
import { useAutoResizeTextarea } from '../../hooks';
import { AIModel } from '../../types';
import apiService from "../../services/api";

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

  useAutoResizeTextarea(
    message,
    textareaRef as React.RefObject<HTMLTextAreaElement | null>
  );

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

  const fileInput = document.createElement('input');

  const handleAttachment = async () => {
    fileInput.type = 'file';
    fileInput.accept = '.pdf,.doc,.docx,.txt,.png,.jpg,.jpeg';

    fileInput.onchange = async (e: any) => {
      const file = e.target.files?.[0];

      if (!file) return;

      try {
        const result = await apiService.uploadFile(file);

        alert(`✅ Uploaded Successfully

File: ${result.filename}
Type: ${result.content_type}
Size: ${result.size} bytes`);
      } catch (err) {
        console.error(err);
        alert('❌ Upload Failed');
      }
    };

    fileInput.click();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky bottom-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/95 to-transparent backdrop-blur-xl pt-4 pb-4 px-4"
    >
      <div className="mx-auto max-w-3xl">
        <div className="relative rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">
          <Textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Send a message to Snappy AI..."
            disabled={disabled}
            className="border-0 bg-transparent text-white placeholder:text-slate-500 shadow-none rounded-2xl pr-24 min-h-[56px] max-h-[220px] focus:ring-0 resize-none"
            rows={1}
          />

          <div className="absolute bottom-2 right-2 flex items-center gap-1">
            <button
              onClick={handleAttachment}
              className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
              title="Attach file"
              disabled={isLoading}
            >
              <Paperclip size={22} />
            </button>

            {onClear && (
              <button
                onClick={onClear}
                className="p-2 rounded-lg text-slate-400 hover:text-red-400 hover:bg-slate-800 transition-colors"
                title="Clear chat"
                disabled={isLoading}
              >
                <Trash2 size={18} />
              </button>
            )}

            {isLoading ? (
              <button
                onClick={onStop}
                className="p-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"
                title="Stop generating"
              >
                <StopCircle size={18} />
              </button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!message.trim() || disabled}
                size="sm"
                className="rounded-lg px-3 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500"
              >
                <Send size={18} />
              </Button>
            )}
          </div>
        </div>

        <p className="text-center text-xs text-slate-500 mt-3">
          Snappy AI can make mistakes. Verify important information.
        </p>
      </div>
    </motion.div>
  );
};

export default ChatInput;