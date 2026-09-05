import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Our support tickets dropped 40% after deploying the chatbot.",
    author: "Alex R.",
    title: "SaaS Founder"
  },
  {
    quote: "The multi-language feature opened new markets for us.",
    author: "Priya L.",
    title: "E-commerce Manager"
  },
  {
    quote: "Setup was trivial and the AI feels genuinely helpful.",
    author: "Marcus T.",
    title: "IT Director"
  }
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          What Our Customers Say
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-purple-400/50 transition-all duration-300"
            >
              <blockquote className="mb-6 text-lg text-gray-200 italic">
                {"“"}{testimonial.quote}{"”"}
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{testimonial.author.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">{testimonial.author}</h3>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;