import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              AI Chatbot SaaS
            </h3>
            <p className="text-gray-400">Deploy intelligent customer support that works 24/7, speaks multiple languages, and learns from every interaction.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Demo</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Integrations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">API Docs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Status</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800/50 pt-8">
          <div className="flex flex-col items-center gap-6">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
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