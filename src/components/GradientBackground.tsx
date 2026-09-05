import React from 'react';

const GradientBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/30 to-purple-900/70 animate-gradient"></div>
      <div className="absolute inset-0 bg-[radial-gradient ellipse_at_top_left,_rgba(168,85,247,0.15)_0%,_transparent_50%], [radial-gradient ellipse_at_bottom_right,_rgba(59,130,246,0.1)_0%,_transparent_70%]"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><defs><pattern id=%22noise%22 width=%22100%22 height=%22100%22 patternUnits=%22userSpaceOnUse%22><circle cx=%2250%22 cy=%2250%22 r=%221%22 fill=%22white%22 fill-opacity=%220.05%22/></pattern></defs><rect width=%22100%22 height=%22100%22 fill=%22url(%23noise)%22/%3E</svg>')] opacity-15"></div>
    </div>
    <div className="relative z-0">{children}</div>
  );
};

export default GradientBackground;