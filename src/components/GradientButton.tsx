import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GradientButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  asChild?: boolean;
}

export const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  asChild = false,
}) => {
  const baseClasses = 'flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 ease-in-out shadow-sm';
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }[size];

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-indigo-600 to-blue-600 
      hover:from-indigo-500 hover:to-blue-500 
      active:from-indigo-700 active:to-blue-700
      text-white
      disabled:opacity-50 disabled:cursor-not-allowed
      `,
    secondary: `
      bg-gradient-to-r from-transparent to-transparent 
      border border-indigo-600/20
      hover:bg-indigo-600/10 hover:border-indigo-600/30
      active:bg-indigo-600/20
      text-indigo-300 hover:text-indigo-200
      disabled:opacity-50 disabled:cursor-not-allowed
      `,
  }[variant];

  const fullClassName = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`.trim();

  const Component = asChild ? motion.div : motion.button;

  return (
    <Component
      className={fullClassName}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: [1, 1.02, 1], transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.95 }}
      whileDrag={{ scale: 0.97 }}
    >
      {children}
    </Component>
  );
};