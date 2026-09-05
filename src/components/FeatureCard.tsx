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
      <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 transition-all duration-500 hover:bg-white/15 hover:-translate-y-1 hover:shadow-2xl">
        {/* Animated gradient border */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Icon with hover animation */}
        <div className="mb-6 flex h-12 w-12 items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg transition-all duration-500 group-hover:bg-white/20 group-hover:transform group-hover:scale-110">
          <Icon className="h-5 w-5 text-purple-400 transition-transform duration-500 group-hover:rotate-12 group-hover:text-purple-300" />
        </div>
        
        <h3 className="mb-4 text-xl font-semibold text-white">
          {title}
        </h3>
        <p className="text-white/90">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;