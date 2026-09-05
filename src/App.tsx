import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import TestimonialCarousel from './components/TestimonialCarousel';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white font-sans antialiased">
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialCarousel />
      <footer className="bg-gray-900/50 py-12 text-center text-gray-400 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          <nav className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#" className="hover:text-white transition-colors">Product</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">Resources</a>
            <a href="#" className="hover:text-white transition-colors">Company</a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
          </nav>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
          <p className="text-xs">© 2026 AI Chatbot SaaS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;