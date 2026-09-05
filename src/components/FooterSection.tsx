import { FiGitHub, FiTwitter, FiLinkedin } from 'react-icons/fi';

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-gray-950 py-12 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">AI Chatbot SaaS</h3>
            <p className="text-gray-400">Deploy intelligent customer support that works 24/7, speaks multiple languages, and learns from every interaction.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Demo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800/50 flex flex-col items-center gap-6">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors w-8 h-8 flex items-center justify-center rounded-lg bg-gray-800/50 hover:bg-gray-700">
              <FiGitHub className="w-4 h-4" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors w-8 h-8 flex items-center justify-center rounded-lg bg-gray-800/50 hover:bg-gray-700">
              <FiTwitter className="w-4 h-4" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors w-8 h-8 flex items-center justify-center rounded-lg bg-gray-800/50 hover:bg-gray-700">
              <FiLinkedin className="w-4 h-4" />
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