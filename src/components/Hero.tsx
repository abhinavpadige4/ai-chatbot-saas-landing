```tsx
import { useState, useEffect } from 'react';

function AnimatedChatBubble({ delay, text, isBot, duration }: { delay: number; text: string; isBot: boolean; duration: number }) {
  const [visible, setVisible] = useState(false);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(showTimer);
  }, [delay]);

  useEffect(() => {
    if (!visible) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) {
        setTypedText(text.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, duration / text.length);
    return () => clearInterval(interval);
  }, [visible, text, duration]);

  return (
    <div
      className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-3 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div
        className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
          isBot
            ? 'bg-gray-800/80 text-gray-200 rounded-bl-md'
            : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-br-md'
        }`}
      >
        {typedText}
        {visible && typedText.length < text.length && (
          <span className="inline-block w-0.5 h-4 bg-white/70 ml-0.5 animate-pulse" />
        )}
      </div>
    </div>
  );
}

function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-t from-gray-950 to-transparent" />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const chatMessages = [
    { text: "Hi! How can I help you today?", isBot: true, delay: 500 },
    { text: "I need help with my subscription", isBot: false, delay: 2000 },
    { text: "I'd be happy to help! Let me pull up your account details...", isBot: true, delay: 3500 },
    { text: "I can see you're on the Starter plan. Would you like to upgrade?", isBot: true, delay: 5500 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <HeroBackground />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
              </span>
              <span className="text-sm text-indigo-300 font-medium">Now with GPT-4o integration</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight mb-6">
              <span className="text-white">AI-Powered</span>
              <br />
              <span className="gradient-text">Customer Support</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Deploy intelligent chatbots that work 24/7, speak multiple languages, and learn from every interaction.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#"
                className="glow-button group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl hover:from-indigo-400 hover:to-purple-500 transition-all duration-300 shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
              >
                Start Free Trial
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-gray-300 border border-gray-700 rounded-xl hover:border-gray-500 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                View Demo
              </a>
            </div>

            {/* Social Proof */}
            <div className="mt-10 flex items-center gap-4 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[
                  'bg-indigo-500',
                  'bg-purple-500',
                  'bg-blue-500',
                  'bg-pink-500',
                  'bg-emerald-500',
                ].map((color, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${color} border-2 border-gray-950 flex items-center justify-center text-xs font-bold text-white`}
                  >
                    {['A', 'B', 'C', 'D', 'E'][i]}
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-white font-semibold">2,000+</span> companies trust us
              </div>
            </div>
          </div>

          {/* Right: Animated Chat Demo */}
          <div
            className="relative"
            style={{
              transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            {/* Glow effect behind chat */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl scale-105" />

            <div className="relative glass-card rounded-3xl p-6 shadow-2xl shadow-black/40">
              {/* Chat Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-700/50">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9.6 17.3A6 6 0 1115.4 17.3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">AIChatBot Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-gray-400">Online now</span>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-1 min-h-[280px]">
                {chatMessages.map((msg, i) => (
                  <AnimatedChatBubble
                    key={i}
                    delay={msg.delay}
                    text={msg.text}
                    isBot={msg.isBot}
                    duration={msg.isBot ? 1200 : 600}
                  />
                ))}
              </div>

              {/* Chat Input */}
              <div className="mt-4 pt-4 border-t border-gray-700/50">
                <div className="flex items-center gap-2 bg-gray-800/50 rounded-xl px-4 py-3 border border-gray-700/50">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 bg-transparent text-sm text-gray-300 placeholder-gray-500 outline-none"
                    readOnly
                  />
                  <button className="p-1.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-400 hover:to-purple-500 transition-all">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Floating stats cards */}
            <div
              className="absolute -top-4 -right-4 glass-card rounded-xl px-4 py-3 shadow-xl"
              style={{
                animation: 'floatParticle 6s ease-in-out infinite',
              }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Response Time</p>
                  <p className="text-sm font-bold text-emerald-400">0.3s avg</p>
                </div>
              </div>
            </div>

            <div
              className="absolute -bottom-4 -left-4 glass-card rounded-xl px-4 py-3 shadow-xl"
              style={{
                animation: 'floatParticle 7s ease-in-out infinite',
                animationDelay: '1s',
              }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Satisfaction</p>
                  <p className="text-sm font-bold text-indigo-400">98.7%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
