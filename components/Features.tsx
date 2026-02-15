
import React from 'react';
import { FEATURES } from '../constants';

const FeatureIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'bloodtype':
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(140,169,36,0.8)]" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 21.5C12 21.5 19 15.5 19 10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10C5 15.5 12 21.5 12 21.5Z" />
          <path d="M12 7V13" strokeLinecap="round" />
          <path d="M9.5 10.5H14.5" strokeLinecap="round" />
          <path d="M12 10C12 10 14 8 16 8" strokeDasharray="1 2" className="opacity-40" />
        </svg>
      );
    case 'speed':
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(140,169,36,0.8)]" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 12C2 12 5 7 12 7C19 7 22 12 22 12C22 12 19 17 12 17C5 17 2 12 2 12Z" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 9V10" strokeLinecap="round" />
          <path d="M12 14V15" strokeLinecap="round" />
          <path d="M9 12H10" strokeLinecap="round" />
          <path d="M14 12H15" strokeLinecap="round" />
        </svg>
      );
    case 'spa':
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(140,169,36,0.8)]" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22V12M12 12L16 8M12 12L8 8" strokeLinecap="round" />
          <path d="M12 7C12 7 16 7 19 4" strokeLinecap="round" />
          <path d="M12 7C12 7 8 7 5 4" strokeLinecap="round" />
          <circle cx="12" cy="12" r="9" className="opacity-20" strokeDasharray="4 4" />
        </svg>
      );
    default:
      return <span className="material-icons">{name}</span>;
  }
};

const Features: React.FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
        <div className="lg:col-span-7 reveal">
          <span className="text-primary font-tech text-xs tracking-[0.5em] uppercase mb-4 block animate-pulse">
            /// System Status: Oxygenation Optimal
          </span>
          <h2 className="text-6xl md:text-8xl font-display uppercase leading-[0.85] tracking-normal">
            Bio-Tech <br />
            <span className="text-outline">Performance</span>
          </h2>
        </div>
        <div className="lg:col-span-5 pb-2 reveal">
          <p className="text-lg md:text-xl text-gray-400 font-light border-l-2 border-primary pl-8 leading-relaxed">
            Harnessing the resilience of Icelandic moss to deliver sustained energy. No jitters, just pure, oxygenated focus for the modern professional.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {FEATURES.map((feature) => (
          <div
            key={feature.id}
            className="group relative bg-surface border border-white/5 rounded-3xl p-10 transition-all duration-500 hover:border-primary/40 hover:bg-surface-light overflow-hidden"
          >
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-20 h-20 rounded-full bg-background border border-primary/20 flex items-center justify-center mb-10 text-primary transition-all duration-500 group-hover:scale-110 group-hover:border-primary/60 group-hover:shadow-[0_0_30px_rgba(140,169,36,0.3)] shadow-lg relative">
                <div className="absolute inset-0 rounded-full border border-primary/0 group-hover:border-primary/20 group-hover:scale-125 transition-all duration-700"></div>
                <FeatureIcon name={feature.icon} />
              </div>

              <h3 className="text-4xl font-display uppercase mb-6 text-white group-hover:text-primary transition-colors leading-tight tracking-normal">
                {feature.title.split(' ')[0]}<br />{feature.title.split(' ')[1]}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-12 flex-grow">
                {feature.description}
              </p>

              <div className="pt-8 border-t border-white/5 flex justify-between items-center mt-auto">
                <span className="font-tech text-xs text-primary uppercase tracking-[0.3em] font-bold">{feature.metricLabel}</span>
                <span className="font-tech text-sm text-gray-200 font-bold">{feature.metric}</span>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>
        ))}
      </div>

      <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap gap-12 md:gap-24 items-center justify-center md:justify-start">
        <div className="flex flex-col">
          <span className="font-display text-5xl text-white tracking-normal">100<span className="text-primary text-3xl">%</span></span>
          <span className="text-[10px] font-tech text-gray-500 uppercase tracking-[0.4em] mt-2 font-bold">Natural Origin</span>
        </div>
        <div className="flex flex-col">
          <span className="font-display text-5xl text-white tracking-normal">0<span className="text-primary text-3xl">g</span></span>
          <span className="text-[10px] font-tech text-gray-500 uppercase tracking-[0.4em] mt-2 font-bold">Added Sugar</span>
        </div>
        <div className="flex flex-col">
          <span className="font-display text-5xl text-white tracking-normal">pH <span className="text-primary text-3xl">8.2</span></span>
          <span className="text-[10px] font-tech text-gray-500 uppercase tracking-[0.4em] mt-2 font-bold">Alkaline Balance</span>
        </div>
      </div>
    </div>
  );
};

export default Features;
