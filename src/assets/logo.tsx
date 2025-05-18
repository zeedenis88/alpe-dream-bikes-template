
import React from "react";

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="#279DCC"/>
        <path d="M12 28L20 12L28 28" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="18" r="3" fill="white"/>
      </svg>
      <div className="ml-2">
        <div className="text-primary font-bold text-xl leading-none">ALPE D'HUEZ</div>
        <div className="text-gray text-xs uppercase tracking-wider">BIKING SCHOOL</div>
      </div>
    </div>
  );
};

export default Logo;
