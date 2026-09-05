```tsx
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How does the AI learn?",
    answer:
      "It uses reinforcement learning from each conversation, improving over time. Every interaction is analyzed to refine response accuracy, tone, and relevance. The model continuously updates its knowledge base without requiring manual retraining.",
  },
  {
    question: "Can I integrate with my existing CRM?",
    answer:
      "Yes, we offer native integrations with Salesforce, HubSpot, Zoho, and custom webhooks. Our API supports REST and GraphQL endpoints, making it easy to connect with virtually any CRM or helpdesk platform. Setup typically takes less than 15 minutes.",
  },
  {
    question: "Is my data secure?",
    answer:
      "All data is encrypted AES-256 at rest and TLS 1.3 in transit. We are SOC 2 Type II certified and GDPR compliant. Your conversation data is never used to train shared models — each tenant's data remains isolated and private by design.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most customers are up and running within 30 minutes. Our guided onboarding wizard walks you through bot configuration, knowledge base import, and channel integration. Enterprise customers receive dedicated onboarding support with a technical specialist.",
  },
  {
    question: "Can I customize the chatbot's personality?",
    answer:
      "Absolutely. You can define tone, formality level, response style, and even inject brand-specific language patterns. Our personality engine supports granular controls so your chatbot feels like a natural extension of your brand voice.",
  },
  {
    question: "What happens if the AI can't answer a question?",
    answer:
      "When confidence falls below a configurable threshold, the bot seamlessly escalates to a human agent or provides a fallback response. You can set custom escalation rules, transfer to live chat, or trigger a callback request based on your workflow preferences.",
  },
];

const ChevronIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <motion.svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    animate={{ rotate: isOpen ? 180 : 0 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="flex-shrink-0"
  >
    <path
      d="M5 7.5L10 12.5L15 7.5"
      stroke="url(#chevron-gradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="chevron-gradient" x1="5" y1="7.5" x2="15" y2="12.5">
        <stop stopColor="#818cf8" />
        <stop offset="1" stopColor="#6366f1" />
      </linearGradient>
    </defs>
  </motion.svg>
);

const FAQItemComponent: React.FC<{ item: FAQItem; index: number }> = ({
  item,
  index,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div
        className={`relative overflow-hidden rounded-2xl border transition-all duration-300 cursor-pointer ${
          isOpen
            ? "border-indigo-500/40 bg-white/[0.07] shadow-lg shadow-indigo-500/10"
            : "border-slate-500/20 bg-white/[0.03] hover:border-indigo-500/30 hover:bg-white/[0.05]"
        }`}
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
      >
        {/* Glassmorphism overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] to-transparent pointer-events-none" />

        <div className="relative p-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-start gap-4 flex-1">
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-colors duration-300 ${
                  isOpen
                    ? "bg-indigo-500/20 text-indigo-300"
                    : "bg-white/5 text-slate-400 group-hover:text-indigo-300 group-hover:bg-indigo-500/10"
                }`}
              >
                {index + 1}
              </div>
              <h3
                className={`text-lg font-semibold leading-snug transition-colors duration-300 ${
                  isOpen ? "text-white" : "text-slate-200 group-hover:text-white"
                }`}
              >
                {item.question}
              </h3>
            </div>
            <ChevronIcon isOpen={isOpen} />
          </div>

          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                ref={contentRef}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="pt-4 pb-2 pl-14">
                  <p className="text-slate-400 leading-relaxed text-base">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const FAQSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.18, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 mb-6"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="inline"
            >
              <circle
                cx="7"
                cy="7"
                r="6"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M5 5.5C5 5.5 5.5 4 7 4C8.5 4 9 5.5 9 5.5C9 7 7 7.5 7 7.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="7" cy="10" r="0.75" fill="currentColor" />
            </svg>
            FAQ
          </motion.span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about our AI chatbot platform. Can't find
            what you're looking for? Reach out to our support team.
          </p>
        </motion.div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <FAQItemComponent key={index} item={item} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 mb-4">Still have questions?</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-shadow duration-300"
          >
            Contact Support
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="inline"
            >
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
