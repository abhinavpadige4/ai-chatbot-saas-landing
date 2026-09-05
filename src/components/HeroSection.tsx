import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-500/20 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.08),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-4xl text-center space-y-8">
        <motion.h1
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-400"
        >
          AI-Powered Customer Support
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl"
        >
          Deploy intelligent chatbots that work 24/7, speak multiple languages, and learn from every interaction.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:via-indigo-500 hover:to-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/20 transition-all duration-300 transform"
          >
            Start Free Trial
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="px-8 py-3 border border-gray-700 bg-transparent hover:bg-gray-800 text-gray-200 font-semibold rounded-lg transition-all duration-300 transform"
          >
            View Demo
          </motion.button>
        </div>
      </div>

      {/* Floating animated icons */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-16 left-10 w-12 h-12 bg-gradient-to-br from-purple-400/20 via-indigo-500/10 to-blue-400/0 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-16 w-10 h-10 bg-gradient-to-br from-indigo-400/15 via-blue-500/10 to-purple-400/0 rounded-full animate-float delay-100"></div>
        <div className="absolute top-1/2 left-1/4 w-14 h-14 bg-gradient-to-br from-purple-500/10 via-blue-400/5 to-indigo-300/0 rounded-full animate-pulse delay-200"></div>
      </div>
    </section>
  );
};

// Add keyframes for animations
if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 0.6; transform: scale(1); }
      50% { opacity: 0.8; transform: scale(1.05); }
    }
    .animate-float { animation: float 6s ease-in-out infinite; }
    .animate-pulse { animation: pulse 4s ease-in-out infinite; }
  `;
  document.head.appendChild(style);
}