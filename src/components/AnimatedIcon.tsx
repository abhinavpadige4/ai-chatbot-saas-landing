import React from 'react';

interface AnimatedIconProps {
  className?: string;
  size?: number;
  color?: string;
  animation?: 'pulse' | 'float' | 'spin';
  children?: React.ReactNode;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
  animation = 'pulse',
  children,
}) => {
  const animationClasses = {
    pulse: 'animate-pulse',
    float: 'animate-float',
    spin: 'animate-spin',
  }[animation] || '';

  return (
    <div
      className={`inline-flex items-center justify-center w-${size} h-${size} text-${color} ${animationClasses} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedIcon;

// FILE: src/components/GradientButton.tsx
import React from 'react';

interface GradientButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  fullWidth = false,
}) => {
  const baseClasses = 'font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary: 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white',
    secondary: 'bg-gradient-to-r from-purple-900/20 to-blue-900/20 hover:from-purple-900/30 hover:to-blue-900/30 text-purple-300 border border-purple-600/30',
  }[variant];

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }[size];

  const fullWidthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${fullWidthClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default GradientButton;