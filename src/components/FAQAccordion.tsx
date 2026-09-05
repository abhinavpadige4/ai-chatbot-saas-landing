import React, { useState } from 'react';
import { faqData } from '../data/faq';

const FAQAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full text-left py-4 px-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 text-left hover:bg-gray-800/70 transition-all duration-300 flex items-center justify-between ${
                  activeIndex === index
                    ? 'border-purple-500/50 bg-purple-900/30 shadow-[0_0_20px_rgba(168,85,247,0.2)]'
                    : ''
                }`}
              >
                <span className="text-lg font-medium text-white">{item.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
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
              {activeIndex === index && (
                <div className="mt-2 px-6 pb-4 text-gray-300 text-sm leading-relaxed">
                  {item.answer}
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