import React from 'react';
import { cn } from '../../utils/helpers';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant = 'text',
  width,
  height,
}) => {
  const baseClasses = 'animate-pulse bg-slate-200';

  const variantClasses = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  };

  const style: React.CSSProperties = {
    width: width,
    height: height || (variant === 'text' ? '1em' : undefined),
  };

  return (
    <div
      className={cn(baseClasses, variantClasses[variant], className)}
      style={style}
    />
  );
};

export const MessageSkeleton: React.FC = () => {
  return (
    <div className="flex gap-4 p-4">
      <Skeleton variant="circular" width={32} height={32} />
      <div className="flex-1 space-y-2">
        <Skeleton width="60%" height={16} />
        <Skeleton width="80%" height={16} />
        <Skeleton width="40%" height={16} />
      </div>
    </div>
  );
};

export const ConversationSkeleton: React.FC = () => {
  return (
    <div className="space-y-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex items-center gap-3 p-2">
          <Skeleton variant="rectangular" width={36} height={36} className="rounded-lg" />
          <div className="flex-1 space-y-1">
            <Skeleton width="70%" height={14} />
            <Skeleton width="50%" height={12} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
