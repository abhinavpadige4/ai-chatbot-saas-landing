import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedIconProps {
  children: ReactNode;
  variant?: "float" | "pulse" | "float-pulse";
  className?: string;
  initial?: boolean;
  whileHover?: boolean;
  whileTap?: boolean;
}

export const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  children,
  variant = "float-pulse",
  className = "",
  initial = true,
  whileHover = true,
  whileTap = true,
}) => {
  const variants = {
    float: {
      y: [0, -8, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
    pulse: {
      scale: [1, 1.05, 1],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
    "float-pulse": {
      y: [0, -8, 0],
      scale: [1, 1.03, 1],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const hoverVariants = whileHover
    ? {
        scale: 1.1,
        y: -4,
        transition: { duration: 0.3 },
      }
    : undefined;

  const tapVariants = whileTap
    ? {
        scale: 0.95,
        transition: { duration: 0.1 },
      }
    : undefined;

  return (
    <motion.div
      className={`inline-flex items-center justify-center ${className}`}
      initial={initial ? variants[variant] : undefined}
      animate={initial ? variants[variant] : undefined}
      whileHover={hoverVariants}
      whileTap={tapVariants}
    >
      {children}
    </motion.div>
  );
};