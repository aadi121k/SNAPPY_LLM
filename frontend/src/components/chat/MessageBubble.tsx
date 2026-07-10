import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from 'framer-motion';
import { Copy, Check, RefreshCw, User, Sparkles } from 'lucide-react';
import { Message } from '../../types';
import { formatTime, cn } from '../../utils/helpers';

interface MessageBubbleProps {
  message: Message;
  onRegenerate?: () => void;
  isLast?: boolean;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({
  message,
  onRegenerate,
  isLast = false,
}) => {
  const [copied, setCopied] = useState(false);
  const isUser = message.role === 'user';

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'group flex gap-4 p-4',
        isUser ? 'flex-row-reverse' : 'flex-row'
      )}
    >
      <div
        className={cn(
          'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg',
          isUser
            ? 'bg-gradient-to-br from-indigo-500 to-purple-600'
            : 'bg-gradient-to-br from-teal-500 to-cyan-600'
        )}
      >
        {isUser ? (
          <User size={16} className="text-white" />
        ) : (
          <Sparkles size={16} className="text-white" />
        )}
      </div>

      <div
        className={cn(
          'flex max-w-[80%] flex-col gap-2',
          isUser ? 'items-end' : 'items-start'
        )}
      >
        <div
          className={cn(
            'rounded-2xl px-4 py-3 shadow-sm',
            isUser
              ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white'
              : 'bg-white border border-slate-100 text-slate-700'
          )}
        >
          {isUser ? (
            <p className="whitespace-pre-wrap text-sm">{message.content}</p>
          ) : (
            <div className="prose prose-sm prose-slate max-w-none prose-pre:bg-slate-50 prose-pre:border prose-pre:border-slate-200 prose-code:text-indigo-600">
              <ReactMarkdown
  remarkPlugins={[remarkGfm]}
  components={{a({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-700 underline font-medium"
    >
      {children}
    </a>
  );
},
                  code({ className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '');
                    const lang = match ? match[1] : '';
                    const codeString = String(children).replace(/\n$/, '');
                    const isInline = !lang && codeString.length < 50;

                    if (isInline) {
                      return (
                        <code
                          className="bg-slate-100 text-indigo-600 px-1.5 py-0.5 rounded text-sm font-mono"
                          {...props}
                        >
                          {children}
                        </code>
                      );
                    }

                    return (
                      <div className="relative group/code my-4">
                        <div className="flex items-center justify-between bg-slate-800 text-slate-300 px-4 py-2 rounded-t-lg text-xs font-medium">
                          <span>{lang || 'code'}</span>
                          <button
                            onClick={() => handleCopy(codeString)}
                            className="flex items-center gap-1 hover:text-white transition-colors"
                          >
                            {copied ? (
                              <Check size={14} />
                            ) : (
                              <Copy size={14} />
                            )}
                            <span>{copied ? 'Copied!' : 'Copy'}</span>
                          </button>
                        </div>
                        <SyntaxHighlighter
                          language={lang || 'text'}
                          style={oneLight}
                          customStyle={{
                            margin: 0,
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0,
                            borderBottomLeftRadius: '0.5rem',
                            borderBottomRightRadius: '0.5rem',
                          }}
                          PreTag="div"
                        >
                          {codeString}
                        </SyntaxHighlighter>
                      </div>
                    );
                  },
                }}
              >
                {message.content}
              </ReactMarkdown>
              {message.images && message.images.length > 0 && (
  <div className="mt-4 grid grid-cols-2 gap-3">
    {message.images.map((img, index) => (
      <a
        key={index}
        href={img.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        <img
          src={img.image}
          alt={img.title}
          className="w-full h-40 rounded-xl object-cover border border-slate-200 hover:scale-105 transition-transform duration-300"
        />

        <p className="mt-2 text-xs text-slate-500 line-clamp-2">
          {img.title}
        </p>
      </a>
    ))}
  </div>
)}
            </div>
          )}
        </div>

        <div
          className={cn(
            'flex items-center gap-2 text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity',
            isUser ? 'flex-row-reverse' : 'flex-row'
          )}
        >
          <span>{formatTime(message.timestamp)}</span>
          {!isUser && (
            <>
              <button
                onClick={() => handleCopy(message.content)}
                className="p-1 hover:bg-slate-100 rounded"
                title="Copy"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
              </button>
              {isLast && onRegenerate && (
                <button
                  onClick={onRegenerate}
                  className="p-1 hover:bg-slate-100 rounded"
                  title="Regenerate"
                >
                  <RefreshCw size={14} />
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MessageBubble;
