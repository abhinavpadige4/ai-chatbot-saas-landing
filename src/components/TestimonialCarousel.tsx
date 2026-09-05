import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    text: '"Our support tickets dropped 40% after deploying the chatbot. The AI handles routine inquiries so our team can focus on complex issues."',
    name: 'Alex R.',
    title: 'SaaS Founder',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 2,
    text: '"The multi-language feature opened new markets for us. We now support customers in Spanish, French, and Japanese without hiring additional staff."',
    name: 'Priya L.',
    title: 'E-commerce Manager',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 3,
    text: '"Setup was trivial and the AI feels genuinely helpful. Customers often don\'t realize they\'re talking to a bot until after the conversation ends."',
    name: 'Marcus T.',
    title: 'IT Director',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
  }
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];
  const nextIndex = (currentIndex + 1) % testimonials.length;
  const nextTestimonial = testimonials[nextIndex];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real results from businesses using our AI chatbot to transform their customer support.
          </p>
        </div>

        <div className="relative">
          {/* Current Testimonial */}
          <motion.div
            key={currentTestimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 opacity-0 transition-opacity duration-500"
          >
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-10">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src={currentTestimonial.avatar} 
                  alt={currentTestimonial.name} 
                  className="w-12 h-12 rounded-full border-2 border-purple-500/20"
                />
                <div>
                  <h3 className="font-semibold text-white">{currentTestimonial.name}</h3>
                  <p className="text-sm text-purple-400">{currentTestimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-300 italic leading-relaxed">
                {currentTestimonial.text}
              </p>
              <div className="mt-6 flex items-center space-x-4">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>

          {/* Next Testimonial (for smooth transition) */}
          {testimonials.length > 1 && (
            <motion.div
              key={nextTestimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: currentIndex === nextIndex ? 1 : 0, y: currentIndex === nextIndex ? 0 : 20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 pointer-events-none"
            >
              <div className="bg-gray-800 rounded-xl border border-gray-700 p-10">
                <div className="flex items-center space-x-4 mb-6">
                  <img 
                    src={nextTestimonial.avatar} 
                    alt={nextTestimonial.name} 
                    className="w-12 h-12 rounded-full border-2 border-purple-500/20"
                  />
                  <div>
                    <h3 className="font-semibold text-white">{nextTestimonial.name}</h3>
                    <p className="text-sm text-purple-400">{nextTestimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic leading-relaxed">
                  {nextTestimonial.text}
                </p>
                <div className="mt-6 flex items-center space-x-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-10 space-x-3">
          {testimonials.map((_, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500' 
                  : 'bg-gray-700/50 hover:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;