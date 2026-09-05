import React, { useState } from 'react';

const FAQSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const faqItems = [
    {
      question: "How does the AI learn from conversations?",
      answer: "Our AI uses machine learning to analyze every interaction, identifying patterns and improving response accuracy over time. It adapts to your business's tone and common queries without manual retraining."
    },
    {
      question: "Is my data secure and GDPR compliant?",
      answer: "Yes, we prioritize data security with end-to-end encryption, regular security audits, and full GDPR compliance. All data is stored in secure, ISO-certified data centers with strict access controls."
    },
    {
      question: "Can I customize the chatbot's appearance?",
      answer: "Absolutely! You can customize colors, fonts, avatar, and positioning to match your brand identity. Advanced styling options are available in Pro and Enterprise plans."
    },
    {
      question: "What integrations are available?",
      answer: "We offer native integrations with popular platforms like Shopify, WordPress, Slack, Zendesk, and more. REST API and webhook support are available for custom integrations."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes! All plans include a 14-day free trial with no credit card required. You can test all features before committing to a paid plan."
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="faq-item">
              <button
                onClick={() => setActiveItem(activeItem === index ? null : index)}
                className={`w-full flex justify-between items-center p-5 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300 text-left`}
              >
                <span className="text-lg font-medium text-white">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${activeItem === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeItem === index && (
                <div className="mt-3 p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
                  <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;