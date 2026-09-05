```tsx
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'How does the AI learn?',
    answer:
      'It uses reinforcement learning from each conversation, improving over time. Our AI model analyzes customer interactions, identifies patterns, and continuously refines its responses. You can also provide custom training data and feedback to guide the learning process.',
  },
  {
    question: 'Can I integrate with my existing CRM?',
    answer:
      'Yes, we offer native integrations with Salesforce, HubSpot, Zoho, and custom webhooks. Our API also supports REST and GraphQL endpoints, making it easy to connect with any system. Setup typically takes less than 15 minutes.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'All data is encrypted AES-256 at rest and TLS 1.3 in transit. We are SOC 2 Type II certified, GDPR compliant, and offer data residency options. Your conversation data is never used to train our base models without explicit consent.',
  },
  {
    question: 'How long does setup take?',
    answer:
      'Most teams are up and running in under 30 minutes. Our guided setup wizard walks you through connecting your channels, customizing the bot personality, and importing your knowledge base. Enterprise deployments with custom integrations typically take 1-2 weeks.',
  },
  {
    question: 'What happens when the AI can\'t answer a question?',
    answer:
      'When confidence falls below a configurable threshold, the AI seamlessly escalates to a human agent with full conversation context. You can set custom escalation rules, define fallback responses, and configure handoff workflows to match your team\'s processes.',
  },
  {
    question: 'Can I customize the chatbot\'s appearance?',
    answer:
      'Absolutely! You can fully customize colors, fonts, avatars, greeting messages, and the entire chat widget UI. Pro and Enterprise plans include custom branding options, allowing you to match your brand identity perfectly.',
  },
];

function FAQItemComponent({ item, index }: { item: FAQItem; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`glass-card rounded-xl overflow-hidden transition-all duration-500 ${
        open ? 'border-indigo-500/30' : ''
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left group"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-white group-hover:text-indigo-300 transition-colors pr-4">
          {item.question}
        </span>
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gray-800/50 flex items-center justify-center transition-all duration-300 ${
            open ? 'bg-indigo-500/20 rotate-180' : ''
          }`}
        >
          <svg
            className={`w-4 h-4 transition-colors ${open ? 'text-indigo-400' : 'text-gray-400'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6">
          <p className="text-gray-400 leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-sm text-indigo-300 font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Frequently asked{' '}
            <span className="gradient-text">questions</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about our AI chatbot platform.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <FAQItemComponent key={index} item={item} index={index} />
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
          >
            Get in touch with our team
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
