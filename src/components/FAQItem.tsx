import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left text-gray-200 hover:text-white transition-colors duration-200"
        aria-expanded={isOpen}
        aria-controls={`faq-${question.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <div className="flex-1">
          <h3 className="text-lg font-medium">{question}</h3>
        </div>
        <div className="w-8 h-8 flex items-center justify-center">
          <svg
            className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
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
        </div>
      </button>
      {isOpen && (
        <div className="px-6 py-4 text-gray-300">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;