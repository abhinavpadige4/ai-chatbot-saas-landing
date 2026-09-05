import React from 'react';

interface GradientButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false
}) => {
  const baseClasses = 'flex items-center justify-center gap-2 font-medium transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';
  
  const variantClasses = variant === 'primary'
    ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white'
    : 'border border-gray-700 hover:border-gray-600 text-gray-200 hover:text-white bg-transparent';
  
  const sizeClasses = size === 'sm'
    ? 'px-4 py-2 text-sm'
    : size === 'lg'
      ? 'px-6 py-3 text-lg'
      : 'px-5 py-2.5 text-base';

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default GradientButton;