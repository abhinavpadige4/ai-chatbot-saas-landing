import React from 'react';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
}) => {
  const baseClasses = `font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none`;

  const variantClasses = {
    primary: `bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 focus:ring-purple-500 text-white`,
    secondary: `bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 focus:ring-gray-500 text-white`,
  }[variant] || '';

  const sizeClasses = {
    sm: `px-3 py-2 text-sm`,
    md: `px-6 py-3 text-base`,
    lg: `px-8 py-4 text-lg`,
  }[size] || '';

  const fullClassName = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`.trim();

  return (
    <button
      className={fullClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default GradientButton;