import React, { useState } from 'react';

const FAQSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const faqItems = [
    {
      question: "How does the AI learn from conversations?",
      answer: "Our AI uses machine learning models that analyze conversation patterns, user feedback, and resolution outcomes to continuously improve response accuracy and relevance over time."
    },
    {
      question: "Is my data secure and GDPR compliant?",
      answer: "Yes, we prioritize data security with end-to-end encryption, regular security audits, and full GDPR compliance. All data is stored in secure, ISO-certified data centers with strict access controls."
    },
    {
      question: "Can I customize the chatbot's appearance?",
      answer: "Absolutely! You can customize colors, fonts, avatar, welcome message, and positioning to match your brand identity. Advanced theming options are available in Pro and Enterprise plans."
    },
    {
      question: "What integrations are available?",
      answer: "We offer native integrations with popular platforms including WordPress, Shopify, Slack, Zendesk, Salesforce, and more. Custom webhooks and API access are available for all paid plans."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes! All plans come with a 14-day free trial. No credit card required to start. You can upgrade anytime during or after the trial period."
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
                className={`w-full flex justify-between items-center p-5 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 text-left text-lg font-medium transition-all duration-300 hover:bg-gray-800/70 hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2`}
              >
                <span>{item.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${activeItem === index ? 'rotate-180' : ''}`}
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
                <div className="mt-3 p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 text-gray-300">
                  <p>{item.answer}</p>
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