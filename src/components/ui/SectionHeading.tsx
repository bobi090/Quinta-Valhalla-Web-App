import React from 'react';
import { AnimatedDivider } from './AnimatedDivider';

interface SectionHeadingProps {
  badge?: string;
  badgeIcon?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = 'center',
  className = ''
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'} mb-12 md:mb-16 ${className}`}>
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-primary font-medium tracking-tight leading-tight">
        {title}
      </h2>
      <AnimatedDivider align={isCenter ? 'center' : 'left'} />
      {subtitle && (
        <p className="font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
