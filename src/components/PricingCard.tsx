```tsx
import { useEffect, useRef, useState } from 'react';

interface PricingCardProps {
  plan: {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    cta: string;
    popular: boolean;
  };
  index: number;
}

export default function PricingCard({ plan, index }: PricingCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 150);
        }
      },
      { threshold: 0.1 }
    );

    const current = ref.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [index]);

  return (
    <div
      ref={ref}
      className={`relative group rounded-2xl transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Popular badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-semibold uppercase tracking-wider shadow-lg shadow-purple-500/25">
            Most Popular
          </span>
        </div>
      )}

      <div
        className={`h-full p-8 rounded-2xl border backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 ${
          plan.popular
            ? 'bg-gradient-to-b from-purple-500/10 to-blue-500/5 border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10'
            : 'bg-white/5 border-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-purple-500/5'
        }`}
      >
        {/* Plan name */}
        <h3 className="text-lg font-semibold text-white mb-2">{plan.name}</h3>
        <p className="text-gray-500 text-sm mb-6">{plan.description}</p>

        {/* Price */}
        <div className="mb-8">
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-bold text-white">{plan.price}</span>
            {plan.period && <span className="text-gray-500 text-lg">{plan.period}</span>}
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <svg
                className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                  plan.popular ? 'text-purple-400' : 'text-green-400'
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 ${
            plan.popular
              ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/25 animate-gradient'
              : 'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20'
          }`}
        >
          {plan.cta}
        </button>
      </div>
    </div>
  );
}
