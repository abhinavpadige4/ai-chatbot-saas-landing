import { motion } from 'framer-motion';
import { Zap, Globe, Brain, BarChart3 } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  bgColor: string;
}

export const FeatureCard = ({ title, description, icon: Icon, bgColor }: FeatureCardProps) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative flex flex-col items-center p-8 space-y-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden transition-all duration-300 hover:bg-gray-800/70 hover:border-gray-600/70"
    >
      {/* Animated icon background */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[var(--bg-color)]/10 to-transparent blur-3xl"></div>
      </div>

      {/* Icon */}
      <motion.div
        className="relative z-10 flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500/80"
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <Icon className="h-6 w-6 text-white" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-3">
        <motion.h3
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-xl font-semibold text-white"
        >
          {title}
        </motion.h3>

        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-gray-300 text-sm"
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

// Default export for easy usage
export default FeatureCard;

// Predefined feature configurations
export const features = [
  {
    title: '24/7 Availability',
    description: 'Never miss a customer query, day or night.',
    icon: Zap,
    bgColor: 'purple-500'
  },
  {
    title: 'Multi-Language Support',
    description: 'Communicate in over 50 languages automatically.',
    icon: Globe,
    bgColor: 'blue-500'
  },
  {
    title: 'Smart Responses',
    description: 'AI learns from conversations to improve accuracy.',
    icon: Brain,
    bgColor: 'indigo-500'
  },
  {
    title: 'Analytics Dashboard',
    description: 'Track performance, satisfaction, and conversion rates.',
    icon: BarChart3,
    bgColor: 'pink-500'
  }
];