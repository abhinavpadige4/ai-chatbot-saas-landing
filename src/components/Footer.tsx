import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-950 py-12 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-6"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-500 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22l-6.15-4.72L4 9.27l5-4.87L8.91 15.26 12 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">AIChatBot</h3>
            </div>
            <p className="text-gray-400 max-w-sm">
              Intelligent customer support powered by advanced AI. Deploy in minutes, scale effortlessly.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <nav className="space-y-2">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-200">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors duration-200">Pricing</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors duration-200">Testimonials</a>
              <a href="#faq" className="text-gray-300 hover:text-white transition-colors duration-200">FAQ</a>
            </nav>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <nav className="space-y-2">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Documentation</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Blog</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Status</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a>
            </nav>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/50 hover:bg-purple-500/20 transition-colors duration-200 text-gray-300 hover:text-white">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/50 hover:bg-purple-500/20 transition-colors duration-200 text-gray-300 hover:text-white">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/50 hover:bg-purple-500/20 transition-colors duration-200 text-gray-300 hover:text-white">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800/50 text-center text-gray-400">
          <p className="text-sm">
            © 2026 AIChatBot SaaS. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;