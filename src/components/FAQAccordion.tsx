import { useState } from "react";
import { motion } from "framer-motion";

const faqItems = [
  {
    question: "How does the AI learn?",
    answer:
      "It uses reinforcement learning from each conversation, improving over time. The system analyzes successful interactions and adjusts its response patterns to increase accuracy and relevance.",
  },
  {
    question: "Can I integrate with my existing CRM?",
    answer:
      "Yes, we offer native integrations with Salesforce, HubSpot, Zoho, and custom webhooks. Our API is RESTful and well-documented, making integration straightforward for most platforms.",
  },
  {
    question: "Is my data secure?",
    answer:
      "All data is encrypted AES-256 at rest and in transit. We comply with GDPR, SOC 2, and ISO 27001 standards. Regular security audits and penetration testing ensure ongoing protection.",
  },
  {
    question: "What languages are supported?",
    answer:
      "Our AI supports over 50 languages automatically, including English, Spanish, French, German, Japanese, Chinese, Portuguese, and many more. Language detection happens in real-time.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. Upgrade anytime during or after the trial period.",
  },
];

const FAQAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden"
            >
              <motion.button
                onClick={() => toggleAccordion(index)}
                className={`w-full flex items-center justify-between p-6 text-left text-gray-200 hover:bg-gray-700/50 transition-colors duration-300 ${
                  activeIndex === index
                    ? "border-b border-gray-600"
                    : ""
                }`}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex-1">
                  <h3 className="font-medium">{item.question}</h3>
                </div>
                <motion.div
                  className="w-8 h-8 flex items-center justify-center text-gray-400 transition-transform duration-300"
                  style={{
                    transform: activeIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </motion.div>
              </motion.button>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="p-0 px-6 pb-6 text-gray-400"
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

export default FAQAccordion;