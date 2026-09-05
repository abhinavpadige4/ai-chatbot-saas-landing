import { motion } from 'framer-motion';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  onCtaClick: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
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
      transition={{ delay: 0.2, duration: 0.6 }}
      className={`relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300 ${isPopular ? 'border-purple-400/50 shadow-[0_0_30px_rgba(99,102,241,0.3)]' : ''}`}
    >
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-1 rounded-full text-xs font-medium">
          Most Popular
        </div>
      )}
      <h3 className="mb-4 text-2xl font-bold text-white">{title}</h3>
      <div className="flex items-baseline mb-6">
        <span className="text-4xl font-bold text-white">{price}</span>
        <span className="ml-2 text-gray-400">/mo</span>
      </div>
      <ul className="space-y-4 mb-8 text-gray-300">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3">
            <svg className="w-4 h-4 mt-1 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={onCtaClick}
        className={`w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 ${isPopular ? 'shadow-lg' : ''}`}
      >
        {ctaText}
      </button>
    </motion.div>
  );
};

export default PricingCard;