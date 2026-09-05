```tsx
import { useState } from 'react';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge?: string;
}

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$29',
    period: '/mo',
    description: 'Perfect for small businesses getting started with AI support.',
    features: [
      'Up to 500 chats/month',
      'Basic analytics dashboard',
      'Email support',
      '5 language support',
      'Standard AI model',
      'Community access',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$79',
    period: '/mo',
    description: 'For growing teams that need advanced features and priority support.',
    features: [
      'Unlimited chats',
      'Advanced analytics & reports',
      'Priority support (24/7)',
      '50+ language support',
      'Custom branding',
      'CRM integrations',
      'Custom AI training',
      'Webhook integrations',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations with specific needs.',
    features: [
      'Unlimited everything',
      'Dedicated account manager',
      'Custom SLA guarantees',
      'On-premise deployment option',
      'Advanced security & compliance',
      'Custom AI model training',
      'API access & SDK',
      'White-label solution',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function PricingCard({ plan, index }: { plan: PricingPlan; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 ${
        plan.highlighted
          ? 'bg-gradient-to-b from-indigo-500/20 to-purple-500/10 border-2 border-indigo-500/40 shadow-xl shadow-indigo-500/10'
          : 'glass-card'
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full shadow-lg shadow-indigo-500/30">
            {plan.badge}
          </span>
        </div>
      )}

      {/* Plan Name */}
      <h3 className="text-lg font-semibold text-white mb-2">{plan.name}</h3>
      <p className="text-sm text-gray-400 mb-6">{plan.description}</p>

      {/* Price */}
      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl lg:text-5xl font-extrabold text-white">{plan.price}</span>
          {plan.period && <span className="text-gray-400 text-lg">{plan.period}</span>}
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckIcon />
            <span className="text-sm text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#"
        className={`block w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
          plan.highlighted
            ? 'glow-button text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40'
            : 'text-gray-300 border border-gray-700 hover:border-indigo-500/50 hover:text-white hover:bg-indigo-500/5'
        }`}
      >
        {plan.cta}
      </a>
    </div>
  );
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-sm text-indigo-300 font-medium mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Simple, transparent{' '}
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 bg-gray-800/50 rounded-full p-1 border border-gray-700/50">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                !annual ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25' : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                annual ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25' : 'text-gray-400 hover:text-white'
              }`}
            >
              Annual
              <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">-20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>

        {/* Money-back guarantee */}
        <p className="text-center text-sm text-gray-500 mt-12">
          🔒 30-day money-back guarantee · No credit card required · Cancel anytime
        </p>
      </div>
    </section>
  );
}
