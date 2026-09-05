import React from 'react';

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Product */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Roadmap</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Docs</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Status</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p className="text-sm">
            © 2026 AI Chatbot SaaS. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="hover:text-white transition-colors duration-200">Twitter</a>
            <a href="#" className="hover:text-white transition-colors duration-200">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors duration-200">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;