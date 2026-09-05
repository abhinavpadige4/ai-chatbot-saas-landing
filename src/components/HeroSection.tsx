import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-b from-purple-900 via-blue-900 to-black py-20 px-6 text-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(at_top_left,_var(--tw-gradient-stops))] from-purple-800/20 via-blue-800/10 to-transparent pointer-events-none"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute w-[3px] h-[3px] bg-white/20 rounded-full animate-float" 
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              opacity: `${Math.random() * 0.5 + 0.2}`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          AI-Powered Customer Support
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
          Deploy a custom AI chatbot that works 24/7, speaks multiple languages, and learns from every interaction.
        </p>
        <button 
          className="relative inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 hover:from-purple-500 hover:via-blue-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-purple-300 disabled:opacity-50 disabled:pointer-events-none transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] shadow-lg shadow-purple-500/20"
        >
          Start Free Trial
          <span className="ml-2 inline-block transition-transform duration-300">
            →
          </span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

// FILE: src/components/FeatureCard.tsx
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
      <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:border-purple-400/50 hover:border-blue-400/50 transition-all duration-500 transform hover:-translate-y-1 hover:scale-[1.02] shadow-lg shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
        {/* Animated icon container */}
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600/20 via-blue-600/10 to-purple-600/20 backdrop-blur-sm border border-white/10 group-hover:from-purple-500/25 group-hover:via-blue-500/15 group-hover:to-purple-500/25 transition-all duration-500">
          <Icon className="h-5 w-5 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
        </div>
        
        <h3 className="mb-4 text-xl font-semibold text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400">
          {title}
        </h3>
        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-purple-400/20 rounded-full animate-pulse" />
        <div className="absolute bottom-2 right-2 w-3 h-3 bg-blue-400/20 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
    </div>
  );
};

export default FeatureCard;