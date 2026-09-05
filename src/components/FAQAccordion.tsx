import React, { useState } from 'react';

const faqItems = [
  {
    id: 1,
    question: 'How does the AI chatbot work?',
    answer: 'It uses GPT-4 trained on your support data to answer queries accurately and naturally. The system continuously learns from interactions to improve responses over time.'
  },
  {
    id: 2,
    question: 'Is my data secure?',
    answer: 'Yes, we encrypt data at rest and in transit using AES-256 encryption. We are GDPR, SOC 2, and ISO 27001 compliant with regular security audits.'
  },
  {
    id: 3,
    question: 'Can I customize the chatbot\'s appearance?',
    answer: 'Absolutely! Colors, logo, positioning, welcome messages, and behavior are fully customizable through our intuitive dashboard. No coding required.'
  },
  {
    id: 4,
    question: 'What platforms do you integrate with?',
    answer: 'We integrate with all major platforms including WordPress, Shopify, Magento, Salesforce, Zendesk, Intercom, and custom websites via JavaScript snippet or API.'
  },
  {
    id: 5,
    question: 'What happens if the AI cannot answer a question?',
    answer: 'The chatbot gracefully transfers to human agents when needed, collects contact information for follow-up, or provides helpful resources based on the conversation context.'
  }
];

const FAQAccordion: React.FC = () => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (id: number) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400">
            Find answers to common questions about our AI chatbot platform
          </p>
        </div>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.id} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden">
              <div className="px-6 py-5 cursor-pointer flex items-center justify-between hover:bg-gray-700/50 transition-colors duration-200" onClick={() => toggleItem(item.id)}>
                <h3 className="text-lg font-medium text-white flex-1">
                  {item.question}
                </h3>
                <svg className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                  activeItem === item.id ? 'rotate-180' : ''
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {activeItem === item.id && (
                <div className="px-6 py-4 text-gray-300 border-t border-gray-700">
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

export default FAQAccordion;