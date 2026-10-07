import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  loading = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-2.5 shadow-md hover:shadow-lg'
  };

  const variantStyles = {
    primary: 'bg-primary text-surface-bright hover:bg-primary-container focus:ring-primary shadow-sm hover:-translate-y-0.5',
    secondary: 'bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-fixed-dim focus:ring-secondary shadow-md hover:-translate-y-0.5',
    outline: 'border border-secondary text-primary bg-transparent hover:bg-secondary/10 focus:ring-secondary',
    ghost: 'text-primary hover:bg-surface-container focus:ring-primary'
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <span className="inline-flex shrink-0">{icon}</span>
          )}
          <span>{children}</span>
          {icon && iconPosition === 'right' && (
            <span className="inline-flex shrink-0">{icon}</span>
          )}
        </>
      )}
    </button>
  );
};
