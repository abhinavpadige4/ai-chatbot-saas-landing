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
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            AI-Powered Customer Support
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Deploy a custom AI chatbot that works 24/7, speaks multiple languages, and learns from every interaction.
          </p>
          <button 
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 shadow-lg"
          >
            Start Free Trial
          </button>
        </div>
      </main>
      <footer className="bg-gray-950/80 backdrop-blur-sm border-t border-gray-800/50 py-10">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-400">
            <div>
              <h3 className="font-semibold mb-4 text-white">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Demo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Docs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 0a4 4 0 00-4 4v5H1a1 1 0 000 2h3v5a1 1 0 002 0v-5h3a1 1 0 000-2h-2V4a1 1 0 011-1h3a1 1 0 000-2H8z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M19 11a9.8 9.8 0 01-2.83.72A4.96 4.96 0 0013 7a4.96 4.96 0 00-1.41 3.48 4.96 4.96 0 01-2.23-.65v.06c0 2.42 1.72 4.44 4 4.9 1.16-.11 2.24-.33 3.22-.76a4.93 4.93 0 00-1.5 2.56v.06c0 2.42 1.72 4.44 4 4.9a9.9 9.9 0 01-6.2 1.78c-.41 0-.82-.03-1.22-.08a4.93 4.93 0 002.25 1.52A9.9 9.9 0 013 18.07a9.89 9.89 0 01-1.41-.62c-.41-.82-.63-1.77-.63-2.79 0-1.91.69-3.56 1.82-4.76a4.93 4.93 0 00-.42-1.19v-.06c.41-.13.82-.26 1.22-.39a4.93 4.93 0 00-1.51-.4v-.06c0-1.21.43-2.29 1.14-3.15a4.93 4.93 0 011.31-1.75 4.93 4.93 0 002.18-.58c1.07 0 2.07.43 2.83 1.16a4.93 4.93 0 01-2.44.66c-.67 0-1.29-.28-1.75-.76a4.96 4.96 0 012.46-.8c.54 0 1.06.21 1.46.56a4.93 4.93 0 00-2.49-.58c-.67 0-1.23.44-1.23 1.1 0 .41.13.81.34 1.1a4.93 4.93 0 01-1.11.39c-.27 0-.53-.09-.78-.22a4.93 4.93 0 001.56 3.11 4.93 4.93 0 01-2.22-.61c-.39 0-.75-.14-1.07-.33a4.96 4.96 0 001.56 3.11 4.96 4.96 0 01-2.22.61A14.73 14.73 0 007 19.54c4.33 0 6.7-2.64 7.65-5.98a9.86 9.86 0 001.56-3.11z" fillRule="evenodd" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M7.41 15.41a2 2 0 01-2.83-2.83 2 2 0 012.83-2.83 2 2 0 012.83 2.83 2 2 0 01-2.83 2.83zM2 10a8 8 0 0116 0A8 8 0 012 10zm0-1a7 7 0 0014 0A7 7 0 002 9z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800/50 pt-6 text-center text-gray-500">
            <p>© 2026 AI Chatbot SaaS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;