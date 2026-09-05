import { motion } from 'framer-motion';
import { Zap, Globe, Brain, BarChart3 } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative flex flex-col items-center p-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden transition-all duration-500"
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 -z-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="relative z-10 mb-6"
      >
        <Icon className="h-12 w-12 text-gradient" />
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 text-xl font-semibold text-white"
      >
        {title}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative z-10 text-gray-400 text-center max-w-xs"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

// Utility class for gradient text
if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    .text-gradient {
      background: linear-gradient(to right, #6366f1, #8b5cf6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  `;
  document.head.appendChild(style);
}