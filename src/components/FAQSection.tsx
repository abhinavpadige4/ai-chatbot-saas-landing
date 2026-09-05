import React, { useState } from 'react';

const FAQSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const faqItems = [
    {
      question: "How does the AI learn from conversations?",
      answer: "Our AI uses continuous learning from each interaction to improve response accuracy and relevance over time, adapting to your business's unique communication patterns."
    },
    {
      question: "Is my data secure and GDPR compliant?",
      answer: "Yes, we prioritize data security with end-to-end encryption, regular audits, and full GDPR compliance. Your data is never used to train third-party models."
    },
    {
      question: "Can I customize the chatbot's appearance?",
      answer: "Absolutely! You can customize colors, fonts, avatar, and positioning to match your brand identity seamlessly."
    },
    {
      question: "What integrations are available?",
      answer: "We integrate with popular platforms including WordPress, Shopify, Slack, Zendesk, and more via API or pre-built connectors."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes! Start with a 14-day free trial on any plan — no credit card required to get started."
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="faq-item">
              <button
                onClick={() => setActiveItem(activeItem === index ? null : index)}
                className={`w-full flex justify-between items-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300 text-left`}
              >
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-white">{item.question}</h3>
                </div>
                <div className="h-5 w-5 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`transition-transform duration-300 ${activeItem === index ? 'rotate-180' : ''}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </button>
              {activeItem === index && (
                <div className="mt-4 p-5 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
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