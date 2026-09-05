import React from 'react';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  onButtonClick: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  isPopular = false,
  buttonText,
  onButtonClick
}) => {
  return (
    <div className={`relative group ${isPopular ? 'scale-105' : ''} transition-transform duration-300`}>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
      <div className="relative z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:transform hover:-translate-y-2 transition-transform duration-300">
        {isPopular && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-xs font-medium">
            Most Popular
          </div>
        )}
        <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>
        <div className="flex items-baseline mb-8">
          <span className="text-5xl font-bold text-white">{price}</span>
          <span className="ml-3 text-gray-400">/mo</span>
        </div>
        <ul className="space-y-4 text-gray-400 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <svg className="w-4 h-4 mt-1 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={onButtonClick}
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;