```tsx
import { useRef, useState, useEffect } from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
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
      className={`relative group rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-md p-8 transition-all duration-500 ease-out hover:border-purple-500/20 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-purple-500/5 hover:-translate-y-1 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Gradient border glow on hover */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 transition-opacity duration-500 pointer-events-none ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${
            hovered
              ? "bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg shadow-purple-500/25"
              : "bg-white/[0.06]"
          }`}
        >
          <div className={`transition-colors duration-500 ${hovered ? "text-white" : "text-purple-400"}`}>
            {icon}
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
