```tsx
import { useEffect, useRef, useState } from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'purple' | 'blue' | 'green' | 'pink';
  delay?: number;
}

const colorMap = {
  purple: {
    bg: 'from-purple-500/20 to-purple-600/5',
    border: 'group-hover:border-purple-500/30',
    iconBg: 'bg-purple-500/20',
    iconText: 'text-purple-400',
    glow: 'shadow-purple-500/10',
  },
  blue: {
    bg: 'from-blue-500/20 to-blue-600/5',
    border: 'group-hover:border-blue-500/30',
    iconBg: 'bg-blue-500/20',
    iconText: 'text-blue-400',
    glow: 'shadow-blue-500/10',
  },
  green: {
    bg: 'from-green-500/20 to-green-600/5',
    border: 'group-hover:border-green-500/30',
    iconBg: 'bg-green-500/20',
    iconText: 'text-green-400',
    glow: 'shadow-green-500/10',
  },
  pink: {
    bg: 'from-pink-500/20 to-pink-600/5',
    border: 'group-hover:border-pink-500/30',
    iconBg: 'bg-pink-500/20',
    iconText: 'text-pink-400',
    glow: 'shadow-pink-500/10',
  },
};

export default function FeatureCard({ icon, title, description, color, delay = 0 }: FeatureCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const colors = colorMap[color];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    const current = ref.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`group relative p-8 rounded-2xl bg-gradient-to-br ${colors.bg} border border-white/10 backdrop-blur-sm transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl ${colors.glow} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Top gradient line */}
      <div className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-${color === 'purple' ? 'purple' : color === 'blue' ? 'blue' : color === 'green' ? 'green' : 'pink'}-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Icon */}
      <div className={`w-14 h-14 rounded-xl ${colors.iconBg} flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
        <div className={colors.iconText}>{icon}</div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-[15px]">{description}</p>

      {/* Hover glow effect */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`} />
    </div>
  );
}
