```tsx
import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    quote:
      "Our support tickets dropped 40% after implementing the chatbot. The ROI was visible within the first month.",
    name: "Jane Doe",
    role: "CEO at Acme Corp.",
    avatar: "JD",
  },
  {
    quote:
      "The multi-language feature helped us expand to new markets quickly. We went from 3 to 12 countries in six months.",
    name: "John Smith",
    role: "CTO at Globex Inc.",
    avatar: "JS",
  },
  {
    quote:
      "Analytics insights are invaluable for improving our customer experience. We can now predict issues before they escalate.",
    name: "Maria Garcia",
    role: "Support Lead at WayForward",
    avatar: "MG",
  },
  {
    quote:
      "Setup took less than 15 minutes. The AI was already handling 60% of our queries on day one with impressive accuracy.",
    name: "Alex Chen",
    role: "VP of Engineering at TechNova",
    avatar: "AC",
  },
  {
    quote:
      "The enterprise SLA and dedicated support team give us confidence that our customers are always taken care of.",
    name: "Sarah Williams",
    role: "COO at CloudScale",
    avatar: "SW",
  },
];

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section
      id="testimonials"
      className="py-24 px-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-purple-400 border border-purple-500/20 bg-purple-500/10 mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Loved by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              thousands
            </span>{" "}
            of teams
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-md p-8 md:p-12 min-h-[280px] flex items-center">
            <div
              className="transition-all duration-500 ease-out w-full"
              key={active}
              style={{
                animation: "fadeSlideIn 0.5s ease-out forwards",
              }}
            >
              <div className="flex flex-col items-center text-center">
                <StarRating />
                <blockquote className="text-lg md:text-xl text-gray-200 leading-relaxed mt-6 mb-8 italic">
                  "{testimonials[active].quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold text-white shadow-lg shadow-purple-500/20">
                    {testimonials[active].avatar}
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold">{testimonials[active].name}</div>
                    <div className="text-sm text-gray-400">{testimonials[active].role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 rounded-full border border-white/10 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/30 transition-all"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 rounded-full border border-white/10 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/30 transition-all"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 rounded-full ${
                i === active
                  ? "w-8 h-2 bg-gradient-to-r from-purple-500 to-blue-500"
                  : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Inline keyframe for carousel animation */}
      <style>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
