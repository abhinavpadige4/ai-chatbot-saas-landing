import React from 'react';

interface AnimatedIconProps {
  className?: string;
  size?: number;
  color?: string;
  delay?: number;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
  delay = 0,
}) => {
  return (
    <span
      className={`inline-block animate-float ${className} transition-all duration-300`}
      style={{
        width: size,
        height: size,
        color,
        animationDelay: `${delay}s`,
      }}
    >
      {/* This component expects to wrap an SVG or icon element */}
      {/* Usage: <AnimatedIcon size={32} color="#a855f7" delay={0.2}><MyIcon /></AnimatedIcon> */}
    </span>
  );
};

export default AnimatedIcon;