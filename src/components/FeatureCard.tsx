import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="relative group">
      {/* Glassmorphism card */}
      <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:border-[#6366f1]/40 hover:bg-white/15 transition-all duration-500">
        {/* Animated gradient border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col items-center space-y-6 text-center">
          <div className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
            <Icon className="h-8 w-8 text-[#6366f1] group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="text-xl font-semibold text-white">
            {title}
          </h3>
          <p className="text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;