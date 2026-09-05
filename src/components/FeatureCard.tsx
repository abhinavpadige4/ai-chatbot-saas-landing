import { MotionProps, motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  variant?: 'primary' | 'secondary';
}

export const FeatureCard = ({ icon: Icon, title, description, variant = 'primary' }: FeatureCardProps) => {
  const getVariantStyles = () => {
    if (variant === 'primary') {
      return {
        borderColor: 'rgba(99, 102, 241, 0.3)',
        iconBg: 'bg-gradient-to-br from-purple-500/10 via-indigo-500/5 to-blue-500/0',
        iconShadow: 'shadow-[0_0_20px_rgba(99,102,241,0.15)]',
        titleColor: 'from-purple-400 via-indigo-500 to-blue-400'
      };
    }
    return {
      borderColor: 'rgba(148, 163, 184, 0.2)',
      iconBg: 'bg-gradient-to-br from-gray-600/10 via-gray-500/5 to-gray-400/0',
      iconShadow: '',
      titleColor: 'from-gray-300 via-gray-200 to-gray-100'
    };
  };

  const { borderColor, iconBg, iconShadow, titleColor } = getVariantStyles();

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`relative flex flex-col items-center p-6 space-y-4 bg-gray-800/50 backdrop-blur-sm border-${borderColor} rounded-xl overflow-hidden transition-all duration-500`}
    >
      {/* Glassmorphism card with animated border */}
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent border-2 border-[{borderColor}] rounded-xl animate-border"></div>
      </div>

      {/* Icon with background and animation */}
      <div className={`${iconBg} ${iconShadow} w-14 h-14 flex items-center justify-center rounded-full transition-all duration-500`}>
        <Icon className={`h-6 w-6 text-white ${titleColor} bg-clip-text text-transparent`} />
      </div>

      <motion.h3
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-400`}
      >
        {title}
      </motion.h3>

      <motion.p
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="text-sm text-gray-400 text-center max-w-xs"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

// Add border animation keyframes
if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes animate-border {
      0% { background-position: 0 0; }
      50% { background-position: 100% 0; }
      100% { background-position: 0 0; }
    }
    .animate-border {
      background-size: 200% 200%;
      animation: animate-border 3s ease infinite;
    }
  `;
  document.head.appendChild(style);
}