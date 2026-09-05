```tsx
import { useState } from 'react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

const features: Feature[] = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: '24/7 Availability',
    description: 'Never miss a customer query, day or night. Your AI agent works around the clock without breaks.',
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
      </svg>
    ),
    title: 'Multi-Language Support',
    description: 'Communicate in over 50 languages automatically. Break down language barriers with real-time translation.',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: 'Smart Responses',
    description: 'AI learns from conversations to improve accuracy. Every interaction makes your bot smarter and more helpful.',
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: 'Analytics Dashboard',
    description: 'Track performance, satisfaction, and conversion rates with real-time analytics and actionable insights.',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
  },
];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="glass-card rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 group cursor-default"
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-xl ${feature.bgColor} ${feature.color} flex items-center justify-center mb-6 transition-all duration-500 ${
          hovered ? 'scale-110 shadow-lg' : ''
        }`}
        style={{
          boxShadow: hovered ? `0 0 30px ${feature.color === 'text-indigo-400' ? 'rgba(99,102,241,0.3)' : feature.color === 'text-emerald-400' ? 'rgba(16,185,129,0.3)' : feature.color === 'text-amber-400' ? 'rgba(245,158,11,0.3)' : 'rgba(168,85,247,0.3)'}' : 'none',
        }}
      >
        {feature.icon}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
        {feature.title}
      </h3>
      <p className="text-gray-400 leading-relaxed">{feature.description}</p>

      {/* Decorative line */}
      <div
        className={`mt-6 h-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-700 ${
          hovered ? 'w-full opacity-100' : 'w-0 opacity-0'
        }`}
      />
    </div>
  );
}

export default function Features() {
  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-sm text-indigo-300 font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Everything you need to{' '}
            <span className="gradient-text">delight customers</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Powerful features that transform how you handle customer support, all powered by cutting-edge AI technology.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '50+', label: 'Languages' },
            { value: '<1s', label: 'Avg Response' },
            { value: '2M+', label: 'Chats Handled' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl lg:text-4xl font-extrabold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
