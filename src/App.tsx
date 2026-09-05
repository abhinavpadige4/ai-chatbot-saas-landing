```tsx
import { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function useScrollAnimation() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return visibleSections;
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (window.scrollY / totalHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div
        className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-20"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `linear-gradient(135deg, #6366f1, #8b5cf6)`,
            animation: `floatParticle ${Math.random() * 10 + 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  const visibleSections = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      <style>{`
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.3); }
          50% { box-shadow: 0 0 40px rgba(99, 102, 241, 0.6); }
        }
        .gradient-text {
          background: linear-gradient(135deg, #6366f1, #8b5cf6, #3b82f6);
          background-size: 200% 200%;
          animation: gradientShift 4s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .glass-card {
          background: rgba(17, 24, 39, 0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(148, 163, 184, 0.2);
        }
        .glass-card:hover {
          border-color: rgba(99, 102, 241, 0.4);
          background: rgba(17, 24, 39, 0.8);
        }
        .glow-button {
          position: relative;
          overflow: hidden;
        }
        .glow-button::before {
          content: '';
          position: absolute;
          top: -2px; left: -2px; right: -2px; bottom: -2px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6, #3b82f6, #6366f1);
          background-size: 400% 400%;
          animation: gradientShift 3s ease infinite;
          border-radius: inherit;
          z-index: -1;
          filter: blur(8px);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .glow-button:hover::before {
          opacity: 1;
        }
        .section-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .section-hidden {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        html {
          scroll-behavior: smooth;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #030712;
        }
        ::-webkit-scrollbar-thumb {
          background: #6366f1;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #818cf8;
        }
      `}</style>

      <ScrollProgress />
      <FloatingParticles />
      <Header />

      <main className="relative z-10">
        <section id="hero">
          <Hero />
        </section>

        <section
          id="features"
          data-animate
          className={`section-hidden ${visibleSections.has('features') ? 'section-visible' : ''}`}
        >
          <Features />
        </section>

        <section
          id="pricing"
          data-animate
          className={`section-hidden ${visibleSections.has('pricing') ? 'section-visible' : ''}`}
        >
          <Pricing />
        </section>

        <section
          id="testimonials"
          data-animate
          className={`section-hidden ${visibleSections.has('testimonials') ? 'section-visible' : ''}`}
        >
          <Testimonials />
        </section>

        <section
          id="faq"
          data-animate
          className={`section-hidden ${visibleSections.has('faq') ? 'section-visible' : ''}`}
        >
          <FAQ />
        </section>
      </main>

      <Footer />
    </div>
  );
}
