import React from 'react';

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-gray-950 py-12 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">AI Chatbot SaaS</h3>
            <p className="text-gray-400">Empowering businesses with intelligent customer support solutions.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Demo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800/50 pt-8 mt-10 flex flex-col items-center gap-6">
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.36l-1.72 2.386h-1.86l1.96-2.623h-0.1l-0.22-0.316h-1.66l-0.22 0.316h-0.1l1.96 2.623h-1.86l1.72-2.386h-1.36v-2.36h2.75l.94-1.303h1.36l.94 1.303h2.75v2.36z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.38 8.6 8.6 0 0 1-2.75 1.05A4.3 4.3 0 0 0 18.8 4a4.4 4.3 0 0 1-1.39 1.72 4.2 4.2 0 0 1-1.86-.5v.05a4.3 4.3 0 0 0 3.44 4.23 4.3 4.3 0 0 1-1.96.08-1.8 1.8 0 0 1-.52-.58v.06a4.3 4.3 0 0 0 3.43 4.25 4.3 4.3 0 0 1-1.97.07A8.56 8.56 0 0 1 12 20c4.71 0 7.27-3.89 7.27-7.22 0-.11-.01-.22-.03-.33a8.49 8.49 0 0 0 2.26-.61 2.16 2.16 0 0 1-.66-.84z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.851 0-2.136 1.445-2.136 2.223v5.219h-3.587v-5.6h3.587v-1.565c0-.416.083-1.057.477-1.057.489 0 .56.377.56.844v1.88h3.586l-.19 5.6h-3.396z"/>
              </svg>
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            © 2026 AI Chatbot SaaS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;