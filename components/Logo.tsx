
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-[0_0_8px_rgba(140,169,36,0.4)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Hexagonal Structure */}
        <path
          d="M50 5 L89 27.5 V72.5 L50 95 L11 72.5 V27.5 L50 5Z"
          stroke="currentColor"
          strokeWidth="2"
          className="text-primary/20"
        />
        
        {/* Internal Bio-Tech Leaf Structure */}
        <path
          d="M50 15 C50 15 80 35 80 60 C80 85 50 85 50 85 C50 85 20 85 20 60 C20 35 50 15 50 15Z"
          fill="url(#logoGradient)"
          className="transition-all duration-500 hover:brightness-110"
        />
        
        {/* Vein / Circuit line */}
        <path
          d="M50 15 V85 M50 35 L70 45 M50 55 L30 65 M50 70 L60 75"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          className="opacity-40"
        />

        {/* Floating Oxygen Molecules (Dots) */}
        <circle cx="75" cy="30" r="3" fill="white" className="animate-pulse" />
        <circle cx="25" cy="40" r="2" fill="white" className="animate-pulse delay-700" />
        
        <defs>
          <linearGradient id="logoGradient" x1="50" y1="15" x2="50" y2="85" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8CA924" />
            <stop offset="1" stopColor="#5E7218" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;
