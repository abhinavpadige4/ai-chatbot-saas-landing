import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedIconProps {
  children: ReactNode;
  className?: string;
  variant?: 'float' | 'pulse' | 'float-pulse';
  initial?: boolean;
  whileHover?: boolean;
}

export const AnimatedIcon = ({ 
  children, 
  className = '', 
  variant = 'float-pulse',
  initial = true,
  whileHover = false
}: AnimatedIconProps) => {
  const variants = {
    float: {
      y: [0, -10, 0],
      transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
    },
    pulse: {
      scale: [1, 1.05, 1],
      transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
    },
    'float-pulse': {
      y: [0, -8, 0],
      scale: [1, 1.03, 1],
      transition: { 
        y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
        scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
      }
    }
  };

  const hoverVariants = whileHover ? {
    scale: 1.1,
    y: -5,
    transition: { duration: 0.3 }
  } : undefined;

  return (
    <motion.div
      className={`inline-flex items-center justify-center ${className}`}
      initial={initial ? variants[variant] : undefined}
      animate={initial ? variants[variant] : undefined}
      whileHover={whileHover ? hoverVariants : undefined}
    >
      {children}
    </motion.div>
  );
};