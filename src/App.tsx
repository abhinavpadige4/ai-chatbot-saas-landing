import React from 'react';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white font-sans antialiased">
      <Header />
      <main>
        {/* Other sections will be added here */}
      </main>
      <footer className="bg-gray-950/80 backdrop-blur-sm border-t border-gray-800/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400 hover:text-gray-300 transition-colors">
                <li>Features</li>
                <li>Pricing</li>
                <li>Documentation</li>
                <li>Integrations</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400 hover:text-gray-300 transition-colors">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400 hover:text-gray-300 transition-colors">
                <li>Help Center</li>
                <li>API Docs</li>
                <li>Status</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400 hover:text-gray-300 transition-colors">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800/50 text-center text-sm text-gray-500">
            <p>© 2026 AI Chatbot SaaS. All rights reserved.</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;