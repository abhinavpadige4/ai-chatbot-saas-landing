import React from 'react';

const GradientBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-purple-900/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient ellipse_at_top_left,_var(--tw-gradient-stops)] from-purple-800/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient ellipse_at_bottom_right,_var(--tw-gradient-stops)] from-blue-800/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22><path d=%22M10,10 Q50,5 90,10 T170,10 Q130,15 90,20 T50,20 Q10,15 10,10 Z%22 fill=%22%23a855f7%22 fill-opacity=%220.05%22/%3E</svg>')] 
           bg-[size:200px_200px] 
           opacity-[0.3] 
           animate-[float_3s_ease-in-out_infinite]></div>
      {children}
    </div>
  );
};

export default GradientBackground;