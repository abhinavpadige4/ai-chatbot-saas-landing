import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-purple-900/90 to-blue-900/90 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800 via-blue-800 to-purple-800 opacity-20 animate-gradient"></div>
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
      
      <div className="relative z-10 text-center max-w-4xl space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400">
          AI-Powered Customer Support
        </h1>
        <p className="text-xl md:text-lg max-w-2xl text-white/90">
          Deploy a custom AI chatbot that works 24/7, speaks multiple languages, and learns from every interaction.
        </p>
        <button 
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 hover:from-purple-600 hover:via-blue-600 hover:to-purple-600 text-white font-medium rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl border border-white/20 backdrop-blur-sm"
        >
          Start Free Trial
          <svg className="ml-2 h-4 w-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l6 6-6 6"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

// Add keyframes for animated gradient
const style = document.createElement('style');
style.textContent = `
  @keyframes animate-gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  .animate-gradient {
    background-size: 200% 200%;
    animation: animate-gradient 15s ease infinite;
  }
`;
document.head.appendChild(style);