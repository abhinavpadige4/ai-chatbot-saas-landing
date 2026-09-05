import { motion } from 'framer-motion';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  onCtaClick: () => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  isPopular = false,
  ctaText,
  onCtaClick
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * (isPopular ? 1 : 2), duration: 0.6 }}
      className={`relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300 ${isPopular ? 'ring-2 ring-indigo-500/50' : ''}`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-4 py-1 rounded-full text-xs font-medium">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>
      <div className="flex items-baseline mb-8">
        <span className="text-4xl font-bold text-white">{price}</span>
        <span className="ml-3 text-gray-400">/mo</span>
      </div>
      <ul className="space-y-4 text-gray-400 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3">
            <svg className="w-4 h-4 mt-1 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={onCtaClick}
        className={`w-full bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105 ${isPopular ? 'ring-1 ring-indigo-300' : ''}`}
      >
        {ctaText}
      </button>
    </motion.div>
  );
};