import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqItems = [
  {
    question: "How does the AI learn?",
    answer: "It uses reinforcement learning from each conversation, improving over time."
  },
  {
    question: "Can I integrate with my existing CRM?",
    answer: "Yes, we offer native integrations with Salesforce, HubSpot, Zoho, and custom webhooks."
  },
  {
    question: "Is my data secure?",
    answer: "All data is encrypted AES-256 at rest and in transit, with SOC 2 Type II compliance."
  },
  {
    question: "What languages are supported?",
    answer: "The chatbot supports over 50 languages automatically, with real-time translation capabilities."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a 14-day free trial with no credit card required to get started."
  }
];

const FAQAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden"
            >
              <motion.button
                onClick={() => toggleAccordion(index)}
                className={`w-full flex items-center justify-between px-6 py-5 text-left text-gray-200 hover:bg-gray-700/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400/50`}
                aria-expanded={activeIndex === index}
              >
                <span className="text-lg font-medium">{item.question}</span>
                <motion.svg
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
              </motion.button>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 py-4 text-gray-300 text-sm"
                >
                  {item.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;