```tsx
import { useEffect, useRef, useState } from "react";

/* ─── Floating Icon Component ──────────────────────────────────────────── */
function FloatingIcon({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = 0;
    const animate = () => {
      frame += 0.015;
      setOffset(Math.sin(frame + delay) * 8);
      requestAnimationFrame(animate);
    };
    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`absolute transition-transform ${className}`}
      style={{ transform: `translateY(${offset}px)` }}
    >
      {children}
    </div>
  );
}

/* ─── Hero Section ─────────────────────────────────────────────────────── */
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
      {/* Floating decorative icons */}
      <FloatingIcon delay={0} className="top-[15%] left-[8%] opacity-20">
        <svg className="w-12 h-12 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.091c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
      </FloatingIcon>
      <FloatingIcon delay={1} className="top-[25%] right-[10%] opacity-15">
        <svg className="w-10 h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
        </svg>
      </FloatingIcon>
      <FloatingIcon delay={2} className="bottom-[20%] left-[12%] opacity-15">
        <svg className="w-14 h-14 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
        </svg>
      </FloatingIcon>
      <FloatingIcon delay={3} className="bottom-[30%] right-[15%] opacity-10">
        <svg className="w-16 h-16 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
        </svg>
      </FloatingIcon>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-sm mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Now in Public Beta — 14‑day free trial
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6">
          <span className="text-white">AI‑Powered</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400">
            Customer Support
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Deploy a smart chatbot that works <span className="text-white font-medium">24/7</span>, speaks{" "}
          <span className="text-white font-medium">multiple languages</span>, and learns from every interaction.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="group relative px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.03] active:scale-[0.98]"
          >
            <span className="relative z-10">Start Free Trial</span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
          </a>
          <a
            href="#features"
            className="px-8 py-4 rounded-full text-base font-semibold text-gray-300 border border-white/10 hover:border-purple-500/30 hover:text-white transition-all hover:bg-white/5"
          >
            See How It Works
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-gray-950 bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-[10px] font-bold text-white"
              >
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <span>Trusted by <strong className="text-white">2,000+</strong> companies worldwide</span>
        </div>
      </div>
    </section>
  );
}
