import { motion } from 'framer-motion';

interface GradientButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  asChild?: boolean;
  href?: string;
  target?: string;
}

export const GradientButton = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  asChild = false,
  href,
  target
}: GradientButtonProps) => {
  const baseClasses = 'flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }[size];

  const variantClasses = {
    primary: `bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white ${sizeClasses}`,
    secondary: `bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white ${sizeClasses}`,
    outline: `border border-gradient-to-r from-purple-600 to-blue-600 hover:bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-purple-400 hover:text-white ${sizeClasses}`
  }[variant];

  const finalClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (asChild && href) {
    return (
      <motion.a
        href={href}
        target={target}
        className={finalClasses}
        onClick={onClick}
        disabled={disabled}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      className={finalClasses}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
};