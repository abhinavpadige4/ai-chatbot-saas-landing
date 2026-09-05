```tsx
import { useEffect, useRef, useState, type ReactNode } from "react";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import PricingSection from "./components/PricingSection";
import TestimonialCarousel from "./components/TestimonialCarousel";

/* ─── Scroll‑fade wrapper ─────────────────────────────────────────────── */
function FadeIn({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ─── Navbar ───────────────────────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-purple-500/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white font-bold text-xl">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-sm font-black">
            AI
          </span>
          ChatBot<span className="text-purple-400">.ai</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
          <a href="#testimonials" className="hover:text-purple-400 transition-colors">Testimonials</a>
          <a href="#faq" className="hover:text-purple-400 transition-colors">FAQ</a>
        </div>
        <a
          href="#pricing"
          className="px-5 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
        >
          Start Free Trial
        </a>
      </div>
    </nav>
  );
}

/* ─── FAQ Section ──────────────────────────────────────────────────────── */
function FAQSection() {
  const faqs = [
    {
      q: "How does the AI learn?",
      a: "It uses reinforcement learning from conversation histories and customer feedback, continuously improving response accuracy and relevance over time.",
    },
    {
      q: "Is my data secure?",
      a: "All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We are fully GDPR and SOC 2 Type II compliant.",
    },
    {
      q: "Can I customize the chatbot's appearance?",
      a: "Yes — colors, logo, positioning, greeting messages, and widget size can all be tailored via the dashboard without any code changes.",
    },
    {
      q: "How long does setup take?",
      a: "Most teams are live within 15 minutes. Simply paste the embed script into your site and configure your knowledge base from the dashboard.",
    },
    {
      q: "Do you offer a free trial?",
      a: "Yes — every plan comes with a 14‑day free trial. No credit card required to get started.",
    },
  ];

  return (
    <FadeIn id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Questions</span>
        </h2>
        <p className="text-center text-gray-400 mb-12">Everything you need to know about our platform.</p>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm overflow-hidden transition-all hover:border-purple-500/20"
            >
              <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-white font-medium list-none">
                {faq.q}
                <svg
                  className="w-5 h-5 text-purple-400 transition-transform duration-300 group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-5 text-gray-400 leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

/* ─── Footer ───────────────────────────────────────────────────────────── */
function Footer() {
  const links = {
    Product: ["Features", "Integrations", "Changelog", "Docs"],
    Pricing: ["Plans", "Enterprise", "Compare"],
    Resources: ["Blog", "Case Studies", "Help Center", "API Reference"],
    Company: ["About", "Careers", "Contact", "Press"],
    Legal: ["Privacy", "Terms", "Security", "GDPR"],
  };

  return (
    <footer className="border-t border-white/5 bg-gray-950/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-sm text-gray-500">© 2026 AI Chatbot SaaS. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {/* GitHub */}
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.33-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
            {/* Twitter / X */}
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── App Root ─────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden selection:bg-purple-500/30 selection:text-white">
      {/* Ambient gradient blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[400px] rounded-full bg-purple-700/5 blur-[100px]" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialCarousel />
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
}
