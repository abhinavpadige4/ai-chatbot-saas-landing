import { useState } from 'react';
import { motion } from 'framer-motion';

const FAQSection = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const faqData = [
    {
      question: "How does the AI learn?",
      answer: "It uses reinforcement learning from each conversation, improving over time. The system analyzes user interactions to refine responses and increase accuracy without manual intervention."
    },
    {
      question: "Can I integrate with my existing CRM?",
      answer: "Yes, we offer native integrations with Salesforce, HubSpot, Zoho, and custom webhooks. Our API allows seamless connection to any platform for unified customer data."
    },
    {
      question: "Is my data secure?",
      answer: "All data is encrypted AES-256 at rest and in transit. We comply with GDPR, SOC 2, and ISO 27001 standards. Regular security audits ensure ongoing protection."
    },
    {
      question: "What languages are supported?",
      answer: "Our AI supports over 50 languages automatically, including English, Spanish, French, German, Japanese, Chinese, and more. Language detection happens in real-time."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes! Start with a 14-day free trial on any plan. No credit card required. Upgrade anytime to unlock advanced features and higher limits."
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="border border-gray-800/50 rounded-xl bg-gray-800/50 backdrop-blur-sm p-6 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-white flex-1">
                  {item.question}
                </h3>
                <button
                  onClick={() => setActiveItem(activeItem === index ? null : index)}
                  className={`p-2 rounded-full hover:bg-purple-500/20 transition-colors duration-200 ${
                    activeItem === index ? 'bg-purple-500/30' : ''
                  }`}
                  aria-label={`Toggle answer for ${item.question}`}
                >
                  <motion.svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      activeItem === index ? 'rotate-180' : ''
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
              </div>
              {activeItem === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 text-gray-300 leading-relaxed"
                >
                  <p>{item.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;