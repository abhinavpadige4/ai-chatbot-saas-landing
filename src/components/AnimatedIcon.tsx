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
    <div 
      className={`inline-flex h-${size} w-${size} items-center justify-center ${className}`}
      style={{ 
        color,
        animationDelay: `${animationDelay}s`,
        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }}
    >
      <slot />
    </div>
  );
};

export default AnimatedIcon;

// Add keyframes for pulse animation
if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }
  `;
  document.head.appendChild(style);
}