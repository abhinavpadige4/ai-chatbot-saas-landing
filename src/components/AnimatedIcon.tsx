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
      className={`inline-block animate-float ${className}`}
      style={{
        width: size,
        height: size,
        color,
        animationDelay: `${delay}s`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* This component expects to wrap an SVG or icon element */}
      {/* Usage: <AnimatedIcon><svg>...</svg></AnimatedIcon> */}
    </span>
  );
};

export default AnimatedIcon;