```tsx
import { useState, useEffect } from 'react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "Our support tickets dropped 40% after deploying the chatbot. The AI handles most queries without human intervention, and the ones that escalate are well-summarized for our team.",
    name: 'Alex R.',
    role: 'SaaS Founder',
    company: 'TechFlow',
    avatar: 'AR',
    rating: 5,
  },
  {
    quote: "The multi-language feature opened new markets for us. We went from supporting 3 languages to 20 overnight. Our international customer satisfaction scores have never been higher.",
    name: 'Priya L.',
    role: 'E-commerce Manager',
    company: 'GlobalShop',
    avatar: 'PL',
    rating: 5,
  },
  {
    quote: "Setup was trivial and the AI feels genuinely helpful. Our team was up and running in under an hour. The analytics dashboard gives us insights we never had before.",
    name: 'Marcus T.',
    role: 'IT Director',
    company: 'Enterprise Corp',
    avatar: 'MT',
    rating: 5,
  },
];

const avatarColors = [
  'from-indigo-500 to-purple-600',
  'from-emerald-500 to-teal-600',
  'from-amber-500 to-orange-600',
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-gray-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`glass-card rounded-2xl p-8 transition-all duration-700 hover:-translate-y-1 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Quote icon */}
      <svg className="w-8 h-8 text-indigo-500/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
      </svg>

      {/* Quote */}
      <p className="text-gray-300 leading-relaxed mb-6 text-base">
        "{testimonial.quote}"
      </p>

      {/* Rating */}
      <div className="mb-4">
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-700/50">
        <div
          className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColors[index]} flex items-center justify-center text-sm font-bold text-white shadow-lg`}
        >
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{testimonial.name}</p>
          <p className="text-xs text-gray-400">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-sm text-indigo-300 font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Loved by teams{' '}
            <span className="gradient-text">worldwide</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            See what our customers have to say about transforming their support experience.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Logos strip */}
        <div className="mt-20 text-center">
          <p className="text-sm text-gray-500 mb-8 font-medium uppercase tracking-wider">
            Trusted by innovative companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 opacity-40">
            {['TechFlow', 'GlobalShop', 'Enterprise Corp', 'StartupHub', 'CloudBase'].map((name) => (
              <span key={name} className="text-lg font-bold text-gray-400 tracking-wide">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
