import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'sage' | 'forest' | 'cream';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  icon,
  className = ''
}) => {
  const variantStyles = {
    gold: 'bg-secondary-fixed/40 text-on-secondary-fixed-variant border-secondary/30',
    sage: 'bg-tertiary-fixed/40 text-on-tertiary-fixed-variant border-tertiary-container/20',
    forest: 'bg-primary-container/20 text-primary border-primary/20',
    cream: 'bg-surface-container-lowest text-primary border-outline-variant/30 shadow-2xs'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-sans font-semibold uppercase tracking-wider border ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
