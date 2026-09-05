import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-950/80 backdrop-blur-sm border-b border-gray-800/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-center"
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 2a.5.5 0 000 1h1.5a.5.5 0 000-1H12zm0 4a.5.5 0 000 1h1.5a.5.5 0 000-1H12zm0 4a.5.5 0 000 1h1.5a.5.5 0 000-1H12z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              AIChatBot
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-purple-300 transition-colors duration-300">Features</a>
            <a href="#pricing" className="hover:text-purple-300 transition-colors duration-300">Pricing</a>
            <a href="#testimonials" className="hover:text-purple-300 transition-colors duration-300">Testimonials</a>
            <a href="#faq" className="hover:text-purple-300 transition-colors duration-300">FAQ</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button
              className="px-4 py-2 border border-purple-600/50 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition-colors duration-300 text-sm font-medium"
            >
              Start Free Trial
            </button>
            <button
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              View Demo
            </button>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;