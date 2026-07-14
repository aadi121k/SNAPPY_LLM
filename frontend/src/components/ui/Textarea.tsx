import React, { forwardRef } from 'react';
import { cn } from '../../utils/helpers';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-slate-300 mb-1.5">
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          className={cn(
            'w-full rounded-xl px-4 py-3 resize-none transition-all duration-200',

            // Dark Theme
            'bg-slate-900 text-white placeholder:text-slate-500',
            'border border-slate-700',

            // Focus
            'focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500',

            // Hover
            'hover:border-slate-600',

            // Disabled
            'disabled:opacity-60 disabled:cursor-not-allowed',

            // Error
            error &&
              'border-red-500 focus:ring-red-500/20 focus:border-red-500',

            className
          )}
          {...props}
        />

        {error && (
          <p className="mt-1.5 text-sm text-red-400">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;