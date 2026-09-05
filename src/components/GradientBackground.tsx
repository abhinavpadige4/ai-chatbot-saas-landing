import React from 'react';

interface GradientBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  children,
  className = '',
}) => {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        position: 'relative',
      }}
    >
      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(45deg, transparent 30%, rgba(168, 85, 247, 0.08) 50%, transparent 70%),' +
            'linear-gradient(135deg, transparent 30%, rgba(99, 102, 241, 0.06) 50%, transparent 70%)',
          backgroundSize: '200% 200%',
          animation: 'gradientShift 15s ease infinite',
        }}
      ></div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Purple-blue floating orbs */}
        <div
          className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-float-slow"
          style={{
            animationDelay: '0s',
          }}
        ></div>
        <div
          className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-purple-400/15 to-blue-400/10 rounded-full blur-2xl animate-float"
          style={{
            animationDelay: '3s',
          }}
        ></div>
        <div
          className="absolute top-1/3 left-1/4 w-16 h-16 bg-gradient-to-br from-purple-300/12 to-blue-300/8 rounded-full blur-xl animate-float-slow"
          style={{
            animationDelay: '6s',
          }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/5 w-28 h-28 bg-gradient-to-br from-purple-200/10 to-blue-200/5 rounded-full blur-3xl animate-float"
          style={{
            animationDelay: '9s',
          }}
        ></div>
      </div>

      <div className="relative z-10">{children}</div>

      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(90deg); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default GradientBackground;