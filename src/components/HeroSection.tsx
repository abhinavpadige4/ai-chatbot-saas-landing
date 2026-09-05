import { motion } from 'framer-motion';
import { ArrowUpRight, PlayCircle } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-500/20 blur-3xl animate-[gradientShift_15s_ease_infinite]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1440 320%22><path fill=%22%236366f1%22 fill-opacity=%220.05%22 d=%22M0,160L48,173.3C96,187,192,213,288,229.3C384,246,480,251,576,240C672,229,768,203,864,181.3C960,160,1056,144,1152,138.7C1248,133,1344,133,1440,133.3L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z%22 path=%22%22/%3E</svg>')] bg-[size:200%_100%] animate-[wave_8s_ease_in_out_infinite]"></div>
      </div>

      <div className="relative z-10 max-w-4xl text-center space-y-8">
        <motion.h1
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
        >
          AI-Powered Customer Support
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 max-w-2xl"
        >
          Deploy intelligent chatbots that work 24/7, speak multiple languages, and learn from every interaction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <a
            href="#"
            className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-purple-500/20"
          >
            Start Free Trial
            <ArrowUpRight className="ml-3 h-4 w-4" />
          </a>

          <a
            href="#"
            className="flex items-center justify-center px-8 py-4 border border-gray-700 hover:border-gray-600 bg-transparent text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            View Demo
            <PlayCircle className="ml-3 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// Add keyframes for animations
if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes wave {
      0% { background-position-x: 0%; }
      50% { background-position-x: 100%; }
      100% { background-position-x: 0%; }
    }
  `;
  document.head.appendChild(style);
}