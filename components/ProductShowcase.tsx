
import React, { useState } from 'react';

import bottleImage from '../product images/Forest focus.png';

interface BenefitProps {
  title: string;
  description: string;
  position?: { top: string; left?: string; right?: string };
  alignment: 'left' | 'right';
  index: number;
  icon: string;
  isMobile?: boolean;
}

const BenefitCard: React.FC<BenefitProps> = ({ title, description, position, alignment, index, icon, isMobile = false }) => {
  // Desktop specific styles (Absolute)
  const desktopStyles = !isMobile ? {
    top: position?.top,
    left: position?.left,
    right: position?.right,
    animationDelay: `${index * 0.15}s`
  } : {};

  return (
    <div
      className={`${isMobile ? 'relative w-full' : 'absolute z-30 group'}`}
      style={!isMobile ? desktopStyles : {}}
    >
      <div className={`flex flex-col ${isMobile ? 'items-start' : (alignment === 'right' ? 'items-start' : 'items-end')} w-full max-w-[320px] transition-all duration-700`}>

        {/* Technical Dotted Line - Desktop Only */}
        {!isMobile && (
          <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 ${alignment === 'right' ? 'right-full mr-4' : 'left-full ml-4'} w-24 xl:w-32 pointer-events-none`}>
            <svg width="100%" height="2" viewBox="0 0 128 2" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line
                x1="0" y1="1" x2="128" y2="1"
                stroke="#8CA924"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="opacity-20 group-hover:opacity-100 transition-opacity duration-500"
              >
                <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite" />
              </line>
            </svg>
            <div className={`absolute top-1/2 -translate-y-1/2 ${alignment === 'right' ? 'right-0' : 'left-0'} w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_#8CA924] animate-pulse`}></div>
          </div>
        )}

        <div className={`w-full bg-surface/60 backdrop-blur-2xl border border-white/5 p-5 md:p-6 rounded-2xl transition-all duration-500 ${!isMobile ? 'group-hover:border-primary/40 group-hover:bg-surface-light group-hover:-translate-y-1 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]' : 'hover:border-primary/20'} relative overflow-hidden h-full flex flex-col`}>
          {/* Technical Corner Accents */}
          <div className={`absolute top-0 right-0 w-6 h-6 border-t border-r border-white/5 rounded-tr-2xl ${!isMobile && 'group-hover:border-primary/30'} transition-colors`}></div>

          <div className="flex items-center gap-3 mb-4">
            <div className={`w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-primary ${!isMobile && 'group-hover:bg-primary group-hover:text-background'} transition-all duration-500 shadow-inner`}>
              <span className="material-icons text-base">{icon}</span>
            </div>
          </div>

          <h4 className="text-white font-display text-xl md:text-2xl uppercase mb-2 md:mb-3 group-hover:text-primary transition-colors tracking-normal leading-tight">
            {title}
          </h4>
          <p className="text-gray-400 text-[11px] md:text-xs leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity">
            {description}
          </p>

          {/* Logic Progress Bar - Subtle Visual detail */}
          <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
            <span className="text-[7px] text-gray-600 font-tech uppercase tracking-widest">Integrity</span>
            <div className="w-16 h-1 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-primary/40 w-[80%]" style={{ width: `${70 + Math.random() * 25}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductShowcase: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const benefits: Omit<BenefitProps, 'index'>[] = [
    {
      title: "Cognitive Overdrive",
      description: "Sharpens mental focus and reaction times by flooding neurons with high-purity O2+ molecules.",
      position: { top: '2%', left: '-8%' },
      alignment: 'left',
      icon: 'psychology'
    },
    {
      title: "Sustained Resilience",
      description: "Provides an 8-hour anti-fatigue shield using cold-extracted adaptogens from volcanic moss.",
      position: { top: '55%', left: '-15%' },
      alignment: 'left',
      icon: 'shield'
    },
    {
      title: "Peak Metabolism",
      description: "Accelerates nutrient conversion without the jittery heart rate common in synthetic stimulants.",
      position: { top: '2%', right: '-8%' },
      alignment: 'right',
      icon: 'bolt'
    },
    {
      title: "Biological Balance",
      description: "Restores intracellular alkalinity to combat the oxidative stress of performance lifestyles.",
      position: { top: '55%', right: '-15%' },
      alignment: 'right',
      icon: 'balance'
    }
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative">
      {/* Background Technical Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-primary/5 rounded-full animate-[spin_120s_linear_infinite]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-white/5 rounded-full animate-[spin_80s_linear_infinite_reverse] border-dashed"></div>
      </div>

      <div className="text-center mb-16 lg:mb-24 relative z-10 reveal">
        <h3 className="text-primary font-tech text-[10px] tracking-[0.6em] uppercase mb-4 animate-pulse">/// Technical Component Breakdown</h3>
        <h2 className="text-5xl md:text-8xl font-display uppercase tracking-normal leading-none text-white">
          Performance <span className="text-primary">Matrix</span>
        </h2>
      </div>

      <div className="relative flex flex-col items-center">
        {/* Container for Bottle and Absolute Benefits */}
        <div className="relative w-full max-w-4xl h-[500px] md:h-[700px] xl:h-[800px] flex items-center justify-center">

          {/* Glowing Background Aura */}
          <div className={`absolute inset-0 bg-primary/10 blur-[150px] rounded-full transition-all duration-1000 ${isHovered ? 'scale-125 opacity-25' : 'scale-100 opacity-10'}`}></div>

          {/* Blueprint UI Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <div className="w-[600px] h-[600px] border border-primary/5 rounded-full scale-125"></div>
            <div className="absolute w-[400px] h-[400px] border border-white/5 rounded-full rotate-45"></div>
          </div>

          {/* Bottle Graphic */}
          <div
            className="relative z-20 w-48 md:w-64 lg:w-[220px] transition-all duration-700 hover:scale-[1.03]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={bottleImage}
              alt="Forest Fuel Performance Bottle"
              className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            />
          </div>

          {/* Desktop Benefits Layout - Absolute Positioning */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="pointer-events-auto">
                <BenefitCard {...benefit} index={idx} />
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Mobile/Tablet Benefits Grid */}
        <div className="lg:hidden w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-12">
          {benefits.map((benefit, idx) => (
            <BenefitCard key={idx} {...benefit} index={idx} isMobile={true} />
          ))}
        </div>
      </div>

      {/* Analytics Footer Readouts */}
      <div className="mt-24 lg:mt-48 pt-12 border-t border-white/5 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <div className="group">
          <div className="flex justify-between items-end mb-2">
            <span className="text-[9px] font-tech text-gray-500 uppercase tracking-widest group-hover:text-primary transition-colors">Bio-Availability</span>
            <span className="text-primary font-tech text-[9px]">94.2%</span>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-primary/60 w-[94%] animate-[shimmer_3s_infinite]"></div>
          </div>
          <span className="text-white font-display text-xl md:text-2xl mt-4 block tracking-normal">Peak Absorption</span>
        </div>

        <div className="group">
          <div className="flex justify-between items-end mb-2">
            <span className="text-[9px] font-tech text-gray-500 uppercase tracking-widest group-hover:text-primary transition-colors">Oxygen Output</span>
            <span className="text-primary font-tech text-[9px]">+32%</span>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-primary/60 w-[32%]"></div>
          </div>
          <span className="text-white font-display text-xl md:text-2xl mt-4 block tracking-normal">Cellular Fuel</span>
        </div>

        <div className="hidden md:block">
          <span className="text-[9px] font-tech text-gray-500 uppercase tracking-widest mb-2 block">Stability pH</span>
          <div className="flex items-baseline gap-2">
            <span className="text-white font-display text-3xl md:text-4xl leading-none tracking-normal">8.2</span>
            <span className="text-[9px] text-primary font-bold tracking-[0.2em] uppercase">Alkaline</span>
          </div>
          <p className="text-[8px] text-gray-600 mt-2 uppercase font-tech">Metabolic Calibration Status: Nominal</p>
        </div>

        <div className="hidden lg:block">
          <span className="text-[9px] font-tech text-gray-500 uppercase tracking-widest mb-2 block">Quality Grade</span>
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 block"></span>
              <span className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-500 animate-ping opacity-40"></span>
            </div>
            <span className="text-green-500 font-tech text-[9px] font-bold tracking-[0.2em] uppercase">Pharmaceutical</span>
          </div>
          <p className="text-[8px] text-gray-600 uppercase mt-2 font-tech">Batch: IS-2025-V7_STABLE</p>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
