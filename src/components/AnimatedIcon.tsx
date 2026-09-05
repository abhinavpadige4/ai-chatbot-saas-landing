import React, { useEffect, useRef } from 'react';

interface AnimatedIconProps {
  className?: string;
  delay?: number;
  size?: number;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ 
  className = '', 
  delay = 0, 
  size = 24,
  ...props 
}) => {
  const iconRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const icon = iconRef.current;
    if (!icon) return;

    const floatAnimation = () => {
      const float = () => {
        const offset = Math.sin(Date.now() * 0.002 + delay) * 3;
        icon.style.transform = `translateY(${offset}px)`;
        requestAnimationFrame(float);
      };
      requestAnimationFrame(float);
    };

    floatAnimation();
    return () => {
      // Cleanup if needed
    };
  }, [delay]);

  return (
    <svg
      ref={iconRef}
      className={`h-${size} w-${size} text-purple-400/80 hover:text-purple-300 transition-colors duration-300 ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* This is a placeholder - actual icon content would be passed via children or props */}
      {/* For demo purposes, we'll render a simple sparkle icon */}
      <circle cx="12" cy="12" r="1" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
      <path d="M5.636 5.636l1.414 1.414M16.95 16.95l1.414 1.414M5.636 18.364l1.414-1.414M16.95 7.05l1.414-1.414" />
    </svg>
  );
};

export default AnimatedIcon;