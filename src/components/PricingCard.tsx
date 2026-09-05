```tsx
import { useRef, useState, useEffect } from "react";

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  delay?: number;
}

export default function PricingCard({
  name,
  price,
  period = "/mo",
  description,
  features,
  cta,
  highlighted = false,
  delay = 0,
}: PricingCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative group rounded-2xl border transition-all duration-500 ease-out p-8 ${
        highlighted
          ? "border-purple-500/30 bg-gradient-to-b from-purple-500/10 to-blue-500/5 shadow-xl shadow-purple-500/10 hover:shadow-purple-500/20 hover:-translate-y-2"
          : "border-white/[0.06] bg-white/[0.03] backdrop-blur-md hover:border-purple-500/20 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-purple-500/5 hover:-translate-y-1"
      } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-500/25">
          Most Popular
        </div>
      )}

      <div className="relative z-10">
        <h3 className="text-lg font-semibold text-gray-300 mb-2">{name}</h3>
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-4xl font-extrabold text-white">{price}</span>
          {period && <span className="text-gray-500 text-sm">{period}</span>}
        </div>
        <p className="text-gray-400 text-sm mb-8">{description}</p>

        <ul className="space-y-3 mb-8">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <svg
                className={`w-5 h-5 shrink-0 mt-0.5 ${highlighted ? "text-purple-400" : "text-green-400"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <a
          href="#"
          className={`block w-full text-center py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
            highlighted
              ? "text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
              : "text-gray-300 border border-white/10 hover:border-purple-500/30 hover:text-white hover:bg-white/5"
          }`}
        >
          {cta}
        </a>
      </div>
    </div>
  );
}
