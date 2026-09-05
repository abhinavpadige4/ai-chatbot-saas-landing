import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Demo</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">API Docs</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Status</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">GDPR Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800/50 pt-8">
          <div className="flex flex-col items-center gap-6">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                GitHub
              </a>
            </div>
            <p className="text-center text-gray-500 text-sm">
              © 2026 AI Chatbot SaaS. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;