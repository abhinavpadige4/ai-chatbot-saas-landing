import { motion } from 'framer-motion';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  onSelect: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  isPopular = false,
  ctaText,
  onSelect
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 hover:border-purple-400/50 transition-all duration-300 ${isPopular ? 'border-purple-400/50 shadow-[0_0_30px_rgba(99,102,241,0.3)]' : ''}`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-xs font-medium">
          Most Popular
        </div>
      )}
      <h3 className="mb-4 text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
        {title}
      </h3>
      <div className="flex items-baseline justify-center mb-6">
        <span className="text-4xl font-bold text-white">{price}</span>
        <span className="ml-2 text-gray-400">/mo</span>
      </div>
      <ul className="space-y-4 text-gray-300 mb-8">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            className="flex items-center"
          >
            <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>
      <button
        onClick={onSelect}
        className={`w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 ${isPopular ? 'shadow-lg' : ''}`}
      >
        {ctaText}
      </button>
    </motion.div>
  );
};

export default PricingCard;