import React from 'react';
import { cn } from '../../lib/utils';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * Skeleton component for showing placeholder loading states.
 * Renders an animated pulse placeholder matching the project's design system.
 *
 * Usage:
 *   <Skeleton className="h-12 w-12 rounded-full" />        // Avatar
 *   <Skeleton className="h-4 w-[250px]" />                  // Text line
 *   <Skeleton className="h-[200px] w-full rounded-2xl" />   // Card / Image
 */
const Skeleton: React.FC<SkeletonProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-surface-container-high/60',
        className
      )}
      {...props}
    />
  );
};

export { Skeleton };
