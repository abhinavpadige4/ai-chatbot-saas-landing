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
      <footer className="bg-gray-900/50 py-12 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm text-gray-400">
            <div>
              <h3 className="font-medium mb-4 text-white">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Demo</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4 text-white">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Docs</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">API</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4 text-white">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium mb-4 text-white">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-purple-400 transition-colors"><i className="fab fa-github"></i></a>
                <a href="#" className="hover:text-purple-400 transition-colors"><i className="fab fa-twitter"></i></a>
                <a href="#" className="hover:text-purple-400 transition-colors"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800/50 pt-8 text-center text-sm text-gray-500">
            © 2026 AI Chatbot SaaS. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;