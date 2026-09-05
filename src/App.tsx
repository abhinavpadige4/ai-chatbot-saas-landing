import React from 'react';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white font-sans antialiased">
      <Header />
      <main>
        {/* Other sections will be added here */}
        <div className="py-20 text-center">
          <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            AI-Powered Customer Support
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Deploy a custom AI chatbot that works 24/7, speaks multiple languages, and learns from every interaction.
          </p>
          <div className="mt-8">
            <button 
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium rounded-lg transition-transform transform hover:scale-105 shadow-lg shadow-purple-500/30"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </main>
      <footer className="border-t border-gray-800 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-400">
            <div>
              <h3 className="font-semibold mb-4 text-white">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Demo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Docs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Social</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8.007 2.027a4.49 4.49 0 00-1.417.08A4.532 4.532 0 002 6.344c0 .896.286 1.75.78 2.46a4.532 4.532 0 01-2.048-.555v.06c0 2.202 1.568 4.04 3.639 4.457v1.06h2.489v-4.83h2.742c.41 0 .81-.01 1.209-.03v-2.48c-.002-1.51.55-2.73 1.78-2.73 1.08 0 1.835.57 1.835 1.43v1.96h-1.26c-.592 0-.98-.37-.98-.92 0-.57.24-.94.64-.94h1.48V4.41c0-1.31.47-2.38 1.41-2.38s1.41 1.07 1.41 2.38v2.41h2.74c-.43 1.4-1.4 2.44-2.86 2.44z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M19 11a9.01 9.01 0 01-2.829-.588A8.97 8.97 0 0020 10c0-1.103-.133-2.168-.367-3.19a8.99 8.99 0 002.588-2.588A8.97 8.97 0 0016.807 0H14.06a8.98 8.98 0 00-6.273 12.345c1.157-.08 2.234-.33 3.19-.667zM5.336 6.034l-.708-.708L3 7.414v2.293l1.647 1.646-.708.708L3 11.586V9l1.414-1.414z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 .5a9.5 9.5 0 109.5 9.5A9.51 9.51 0 0010 .5zM9.504 13.224a1 1 0 01-.996-.836l-.004-.164v-3.28a1 1 0 011.412-.708l.664.108v1.78a1 1 0 01-1 1v1.29a2 2 0 10-2 0v-1.29a1 1 0 011-1v-.79l-.372-.06a1 1 0 01-.996-.836z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>© 2026 AI Chatbot SaaS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;