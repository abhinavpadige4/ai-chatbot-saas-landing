import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedIconProps {
  children: ReactNode;
  variant?: 'float' | 'pulse' | 'float-pulse';
  className?: string;
  initial?: boolean;
}

export const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  children,
  variant = 'float-pulse',
  className = '',
  initial = true,
}) => {
  const variants = {
    float: {
      initial: initial ? { y: 0 } : undefined,
      animate: { y: [0, -10, 0], transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' } },
    },
    pulse: {
      initial: initial ? { scale: 1 } : undefined,
      animate: { scale: [1, 1.05, 1], transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' } },
    },
    'float-pulse': {
      initial: initial ? { y: 0, scale: 1 } : undefined,
      animate: {
        y: [0, -8, 0],
        scale: [1, 1.03, 1],
        transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
      },
    },
  };

  return (
    <motion.div
      className={`inline-flex items-center justify-center ${className}`}
      variants={variants[variant]}
      initial={initial ? variants[variant].initial : false}
      animate={variants[variant].animate}
    >
      {children}
    </motion.div>
  );
};