
import React from 'react';
import { INGREDIENTS } from '../constants';

const Ingredients: React.FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <div className="reveal">
          <span className="text-primary font-tech text-[10px] tracking-[0.5em] uppercase mb-4 block animate-pulse">
            /// Molecular Composition Analysis
          </span>
          <h2 className="text-5xl md:text-7xl font-display uppercase tracking-normal leading-[0.85] text-white">
            Bio-Tech <br />
            <span className="text-primary">Ingredients</span>
          </h2>
        </div>
        <div className="max-w-md md:text-right reveal">
          <p className="text-gray-400 font-light leading-relaxed border-r-2 border-primary/30 pr-6 hidden md:block">
            Every component is sourced from high-latitude volcanic environments, selected for its resilience and biological compatibility with human performance systems.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {INGREDIENTS.map((ing) => (
          <div
            key={ing.id}
            className="group relative bg-surface/40 backdrop-blur-xl border border-white/5 rounded-2xl p-8 transition-all duration-500 hover:border-primary/40 hover:bg-surface-light/80 overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-background border border-primary/20 flex items-center justify-center text-primary transition-all duration-500 group-hover:scale-110 group-hover:border-primary/60 group-hover:shadow-[0_0_20px_rgba(140,169,36,0.2)]">
                  <span className="material-icons text-2xl">{ing.icon}</span>
                </div>
              </div>

              <h3 className="text-2xl font-display text-white uppercase mb-1 tracking-normal group-hover:text-primary transition-colors">
                {ing.name}
              </h3>
              <p className="text-[10px] font-tech text-primary/60 uppercase tracking-widest italic mb-4">
                {ing.scientificName}
              </p>

              <p className="text-gray-400 text-sm font-light leading-relaxed mb-8 h-12 overflow-hidden">
                {ing.description}
              </p>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[8px] font-tech text-gray-500 uppercase tracking-widest block mb-1">Primary Benefit</span>
                  <span className="text-xs font-bold text-white uppercase tracking-widest group-hover:text-primary transition-colors">{ing.benefit}</span>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className={`w-1 h-3 rounded-full ${i < 3 ? 'bg-primary/40' : 'bg-white/5'} transition-all group-hover:bg-primary`}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Readout */}
      <div className="mt-16 py-8 border-t border-b border-white/5 flex flex-wrap gap-8 items-center justify-center md:justify-between text-[9px] font-tech text-gray-500 uppercase tracking-[0.4em]">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Authenticity: 100% Guaranteed
        </div>
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          Purity Index: Lab Grade V.9
        </div>
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          Solubility: Peak Bio-Active
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
