import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-[#1e293b] to-[#0f172a] overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] opacity-20 animate-[gradientShift_15s_ease_infinite]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1440 320%22><path fill=%22%236366f1%22 fill-opacity=%220.1%22 d=%22M0,160L48,173.3C96,187,192,213,288,229.3C384,246,480,251,576,240C672,229,768,203,864,181.3C960,160,1056,144,1152,133.3C1248,123,1344,117,1440,112L1440,320L1344,320C1248,320,1152,320,1056,320C960,320,864,320,768,320C672,320,576,320,480,320C384,320,288,320,192,320C96,320,0,320,0,320Z%22 path=%22%22/%3E</svg>')] bg-[length:100%_100%] animate-[wave_10s_ease_in_infinite]"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-[#8b5cf6]">
          AI-Powered Customer Support
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
          Deploy a custom AI chatbot that works 24/7, speaks multiple languages, and learns from every interaction.
        </p>
        <button
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white font-semibold rounded-lg hover:from-[#4f46e5] hover:to-[#7c3aed] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
        >
          Start Free Trial
          <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

// Add keyframes for animations
const style = document.createElement('style');
style.textContent = `
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes wave {
    0% { background-position-x: 0%; }
    100% { background-position-x: 100%; }
  }
`;
document.head.appendChild(style);