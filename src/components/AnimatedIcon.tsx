import React from 'react';

interface AnimatedIconProps {
  className?: string;
  size?: number;
  color?: string;
  animation?: 'pulse' | 'float' | 'spin';
  children?: React.ReactNode;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  className = '',
  size = 24,
  color = '#6366f1',
  animation = 'pulse',
  children,
}) => {
  const baseClasses = `inline-flex items-center justify-center w-${size} h-${size} text-${color} transition-all duration-300`;

  const animationClasses = {
    pulse: 'animate-pulse',
    float: 'animate-float',
    spin: 'animate-spin',
  }[animation] || '';

  return (
    <div className={`${baseClasses} ${animationClasses} ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedIcon;

// Keyframes for animations (can be added to global CSS, but included here for self-containment via style tag if needed)
// However, since we're using Tailwind, we assume these are defined in tailwind.config.js or globals.css
// For true self-containment in component, we'd need to inject styles - but per instructions, we use Tailwind
// So we rely on existing Tailwind utilities and assume animations are configured
// If not, user should add to tailwind.config.js:
//   animation: {
//     pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
//     float: 'float 3s ease-in-out infinite',
//     spin: 'spin 1s linear infinite',
//   },
//   keyframes: {
//     float: {
//       '0%, 100%': { transform: 'translateY(0)' },
//       '50%': { transform: 'translateY(-10px)' },
//     },
//   }

// Since we cannot modify config from here, and the component must work with given stack,
// we note that the animations must be set up in Tailwind config.
// For the purpose of this task, we use the class names and assume they exist.
// In a real project, these would be configured.

// Alternative: Use inline styles for animation if we must be fully self-contained without config changes
// But per instructions, we use Tailwind, so we proceed with utility classes and note the dependency.

// If we were to make it fully self-contained with inline styles (not recommended for Tailwind projects):
/*
const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  className = '',
  size = 24,
  color = '#6366f1',
  animation = 'pulse',
  children,
}) => {
  const animationStyles: React.CSSProperties = {};
  let animationName = '';
  let animationDuration = '2s';
  let animationIterationCount = 'infinite';
  let animationTimingFunction = 'cubic-bezier(0.4, 0, 0.6, 1)';

  switch (animation) {
    case 'pulse':
      animationName = 'pulse';
      break;
    case 'float':
      animationName = 'float';
      animationDuration = '3s';
      animationTimingFunction = 'ease-in-out';
      break;
    case 'spin':
      animationName = 'spin';
      animationDuration = '1s';
      animationTimingFunction = 'linear';
      break;
    default:
      animationName = 'pulse';
  }

  if (animationName) {
    animationStyles.animation = `${animationName} ${animationDuration} ${animationTimingFunction} ${animationIterationCount}`;
  }

  // Define keyframes via style tag would be needed for float/pulse/spin - not possible in inline style
  // So we cannot do this properly without CSS injection or pre-defined keyframes

  // Therefore, we stick to Tailwind and assume config is set up
  // For the sake of completing the task as requested, we output the Tailwind version
  // and note that animations require Tailwind config
};
*/

// Given the constraints, we provide the Tailwind-based version and assume animations are configured in tailwind.config.js
// If not, the classes will fallback to no animation but won't break

export { AnimatedIcon };