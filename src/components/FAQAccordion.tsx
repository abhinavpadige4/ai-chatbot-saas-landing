import React, { useState } from 'react';
import { faqData } from '../data/faq';

const FAQAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full flex justify-between items-center p-5 text-left bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300 ${
                  activeIndex === index
                    ? 'border-purple-500/50 shadow-[0_0_0_1px_rgba(168,85,247,0.3)]'
                    : ''
                }`}
                aria-expanded={activeIndex === index}
              >
                <h3 className="text-lg font-medium text-white">{item.question}</h3>
                <svg
                  className={`h-5 w-5 transition-transform duration-300 ${
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
                <div className="mt-4 p-5 bg-gray-800/30 rounded-xl border border-gray-700/30">
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

export default FAQAccordion;