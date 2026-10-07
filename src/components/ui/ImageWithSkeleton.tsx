import React, { useState } from 'react';
import { Skeleton } from './Skeleton';
import { cn } from '../../lib/utils';

interface ImageWithSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Additional class for the skeleton placeholder. */
  skeletonClassName?: string;
  /** Aspect ratio class for consistent sizing during load, e.g. "aspect-[4/3]". */
  aspectClassName?: string;
}

/**
 * An image component that shows a Skeleton pulse placeholder while the
 * image is loading, then cross-fades to the loaded image.
 */
export const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = ({
  className,
  skeletonClassName,
  aspectClassName,
  alt,
  onLoad,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn('relative overflow-hidden', aspectClassName)}>
      {/* Skeleton placeholder — visible until image loads */}
      {!loaded && (
        <Skeleton
          className={cn(
            'absolute inset-0 w-full h-full',
            skeletonClassName
          )}
        />
      )}

      {/* Actual image */}
      <img
        alt={alt}
        className={cn(
          'transition-opacity duration-500 ease-out',
          loaded ? 'opacity-100' : 'opacity-0',
          className
        )}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        {...props}
      />
    </div>
  );
};
