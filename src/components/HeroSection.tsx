import { motion } from 'framer-motion';
import { ArrowUpRight, PlayCircle } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-500/20 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent blur-[800px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent blur-[800px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl space-y-8">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-4xl md:text-5xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
        >
          AI-Powered Customer Support
        </motion.h1>

        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-lg text-gray-300 max-w-2xl"
        >
          Deploy intelligent chatbots that work 24/7, speak multiple languages, and learn from every interaction.
        </motion.p>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
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
            className="flex items-center justify-center px-8 py-4 border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            View Demo
            <PlayCircle className="ml-3 h-4 w-4 text-gray-300 hover:text-white" />
          </a>
        </motion.div>
      </div>

      {/* Floating animated icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-10 left-1/4"
          style={{ width: '120px', height: '120px' }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <svg className="w-full h-full text-purple-400/20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-10 right-1/4"
          style={{ width: '80px', height: '80px' }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <svg className="w-full h-full text-blue-400/20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};