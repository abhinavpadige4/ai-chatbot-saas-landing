import React from 'react';

interface AnimatedIconProps {
  className?: string;
  size?: number;
  color?: string;
  animationDelay?: number;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
  animationDelay = 0
}) => {
  return (
    <svg
      className={`w-${size} h-${size} text-${color} ${className} animate-pulse-slow transition-all duration-300 hover:scale-110 hover:drop-shadow-lg`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      style={{ animationDelay: `${animationDelay}s` }}
    >
      {/* This is a placeholder - actual icon paths would be passed via props or children */}
      <circle cx="12" cy="12" r="10" strokeWidth="2" />
      <path d="M12 8v4m0 4h4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default AnimatedIcon;

// Add the animation to your global CSS (tailwind.css):
// @keyframes pulse-slow {
//   0%, 100% { opacity: 1; }
//   50% { opacity: 0.7; }
// }
// .animate-pulse-slow {
//   animation: pulse-slow 3s ease-in-out infinite;
// }