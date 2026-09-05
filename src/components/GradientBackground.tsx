import React, { useState, useEffect } from 'react';

const GradientBackground: React.FC = () => {
  const [gradient, setGradient] = useState({
    pos1: { x: 0, y: 0 },
    pos2: { x: 0, y: 0 },
    pos3: { x: 0, y: 0 }
  });

  useEffect(() => {
    const updateGradient = () => {
      setGradient({
        pos1: {
          x: Math.random() * 100,
          y: Math.random() * 100
        },
        pos2: {
          x: Math.random() * 100,
          y: Math.random() * 100
        },
        pos3: {
          x: Math.random() * 100,
          y: Math.random() * 100
        }
      });
    };

    const interval = setInterval(updateGradient, 6000);
    updateGradient(); // Initial call
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
      <div className="absolute inset-0">
        <div
          className="absolute w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl"
          style={{
            left: `${gradient.pos1.x}%`,
            top: `${gradient.pos1.y}%`
          }}
        ></div>
        <div
          className="absolute w-[200px] h-[200px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-400/5 to-blue-400/5 blur-2xl"
          style={{
            left: `${gradient.pos2.x}%`,
            top: `${gradient.pos2.y}%`
          }}
        ></div>
        <div
          className="absolute w-[150px] h-[150px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-300/2 to-blue-300/2 blur-xl"
          style={{
            left: `${gradient.pos3.x}%`,
            top: `${gradient.pos3.y}%`
          }}
        ></div>
      </div>
    </div>
  );
};

export default GradientBackground;

// Add to your global CSS (tailwind.css):
// @keyframes gradient-shift {
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// }
// .animate-gradient-shift {
//   background-size: 200% 200%;
//   animation: gradient-shift 15s ease infinite;
// }