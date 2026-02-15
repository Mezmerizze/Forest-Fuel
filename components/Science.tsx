
import React, { useMemo } from 'react';
import { EXTRACTION_STEPS } from '../constants';

const Science: React.FC = () => {
  // Generate random particles for the nutrient flow effect
  const particles = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${4 + Math.random() * 6}s`,
      size: `${2 + Math.random() * 4}px`,
    }));
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-12">
      {/* Custom styles for the section animations */}
      <style>{`
        @keyframes cellPulse {
          0%, 100% { transform: scale(0.95); opacity: 0.6; }
          50% { transform: scale(1.02); opacity: 0.8; }
        }
        @keyframes nutrientFlow {
          0% { transform: translate(0, 0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          80% { opacity: 0.8; }
          100% { transform: translate(var(--tw-translate-x, 40px), var(--tw-translate-y, -40px)) scale(0); opacity: 0; }
        }
        .animate-cell-pulse {
          animation: cellPulse 8s ease-in-out infinite;
        }
        .nutrient-particle {
          animation: nutrientFlow var(--flow-duration) linear infinite;
          animation-delay: var(--flow-delay);
        }
      `}</style>

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: 'linear-gradient(to right, #8CA924 1px, transparent 1px), linear-gradient(to bottom, #8CA924 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

      <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/5 pb-8 relative z-10">
        <div className="reveal">
          <h4 className="text-primary font-tech font-bold tracking-[0.4em] uppercase text-xs mb-3 flex items-center gap-3">
            <span className="w-10 h-[2px] bg-primary block"></span>
            Technical Specification
          </h4>
          <h2 className="font-display text-6xl md:text-8xl font-bold uppercase leading-none mt-2">
            Science of <span className="text-primary drop-shadow-[0_0_15px_rgba(140,169,36,0.3)]">Moss</span>
          </h2>
        </div>
        <div className="mt-8 md:mt-0 text-right font-tech text-[10px] tracking-[0.5em] text-gray-500 leading-loose reveal">
          <p>SAMPLE ID: FF-2025-X</p>
          <p>ORIGIN: ICELANDIC HIGHLANDS</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        {/* Microscope View */}
        <div className="lg:col-span-7 relative group reveal">
          <div className="absolute -inset-6 border border-white/5 rounded-3xl opacity-50"></div>
          <div className="relative bg-black rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            {/* Grid Overlay */}
            <div className="absolute inset-0 z-10 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #8CA924 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            {/* Scanning Line */}
            <div className="absolute left-0 right-0 h-[2px] bg-primary z-20 shadow-[0_0_20px_#8CA924] scanner-line opacity-40"></div>

            <div className="relative aspect-square md:aspect-[4/3] flex items-center justify-center p-4 overflow-hidden">
              {/* Nutrient Flow Particles Overlay */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                {particles.map((p) => (
                  <div
                    key={p.id}
                    className="nutrient-particle absolute rounded-full bg-primary/40 blur-[1px]"
                    style={{
                      left: p.left,
                      top: p.top,
                      width: p.size,
                      height: p.size,
                      '--flow-delay': p.delay,
                      '--flow-duration': p.duration,
                      '--tw-translate-x': `${(Math.random() - 0.5) * 200}px`,
                      '--tw-translate-y': `${(Math.random() - 0.5) * 200}px`,
                    } as React.CSSProperties}
                  />
                ))}
              </div>

              {/* Pulsing Moss Cell Image */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd-m5QwdgCJWhkuwZytQstLsEj4iPPP-mMMmEcFGUGsJpF4J2JVNwi-vqJM8tZkOrT6RviFeFSjATNiiDJE1HN3w63lHzCtovvvv2xo7D1NQvzVQowqCWtWy_UZswZdt_c5jhjgE2Talq0LOuWM1qDBLkOZ5WRlBe9ROzmqg45jUHyEyz-CwG4bV8kyyFlYniHXmPbZUNfUCWkp48dd3SkGPrs7SzO3uZdBqHfOoiwvKIFHfi1DZKA7keppdfrGCHJu906mKhHgOuT"
                className="w-full h-full object-cover mix-blend-luminosity grayscale group-hover:grayscale-0 transition-all duration-1000 animate-cell-pulse"
                alt="Moss Cell"
              />

              {/* Callouts */}
              <div className="absolute top-10 left-10 p-3 border border-primary/20 bg-black/60 backdrop-blur-md rounded-lg text-[9px] font-tech text-primary uppercase tracking-widest z-30">
                Magnification: 2000x
              </div>
              <div className="absolute bottom-10 right-10 flex items-center gap-3 z-30">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                <span className="text-[9px] font-tech text-white uppercase tracking-[0.4em] font-bold">Live Analysis</span>
              </div>

              {/* Interaction Points */}
              <div className="absolute top-[35%] left-[40%] group/point">
                <div className="w-4 h-4 rounded-full border border-primary bg-primary/20 flex items-center justify-center cursor-help">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                </div>
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-6 w-48 opacity-0 group-hover/point:opacity-100 transition-all duration-300 pointer-events-none">
                  <div className="h-[1px] w-8 bg-primary absolute -left-6 top-1/2"></div>
                  <div className="bg-surface/90 border border-primary/30 p-3 rounded backdrop-blur-md">
                    <p className="text-[10px] font-bold text-primary uppercase mb-1">Chloroplast Efficiency</p>
                    <p className="text-[9px] text-gray-400 leading-relaxed">Optimized low-light absorption pathways.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Extraction Process Steps */}
        <div className="lg:col-span-5 flex flex-col justify-center gap-12">
          {/* Circular Badge */}
          <div className="self-end md:-mr-12 w-32 h-32 rounded-full border border-white/5 flex items-center justify-center bg-background shadow-2xl relative group hover:rotate-12 transition-transform duration-500">
            <svg className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite]" viewBox="0 0 100 100">
              <path d="M 25, 50 a 25,25 0 1,1 50,0 a 25,25 0 1,1 -50,0" fill="none" id="circlePath" />
              <text className="text-[6px] uppercase font-bold tracking-[2.5px] fill-gray-500">
                <textPath xlinkHref="#circlePath">Certified Organic • Icelandic Extraction • Pure Lab Grade •</textPath>
              </text>
            </svg>
            <span className="material-icons text-3xl text-primary opacity-80">science</span>
          </div>

          <div>
            <h3 className="font-display text-4xl uppercase mb-6">
              Bio-Extraction <span className="text-primary">Process</span>
            </h3>
            <p className="text-gray-400 font-light leading-relaxed mb-10">
              Our proprietary cryogenic extraction method preserves the cellular integrity of the moss, delivering raw, unadulterated energy directly to your biological system.
            </p>
          </div>

          <div className="space-y-8">
            {EXTRACTION_STEPS.map((step) => (
              <div key={step.id} className="relative pl-10 border-l border-white/10 group reveal">
                <span className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-background border-2 border-gray-600 transition-all duration-300 group-hover:border-primary group-hover:bg-primary"></span>
                <h4 className="font-display text-xl uppercase text-white mb-2 group-hover:text-primary transition-colors">
                  {step.id}. {step.title}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed font-light">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-surface p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-colors group">
              <p className="text-3xl font-display text-primary mb-1">94%</p>
              <p className="text-[10px] font-tech uppercase tracking-widest text-gray-500 group-hover:text-gray-300 transition-colors">Absorption Rate</p>
            </div>
            <div className="bg-surface p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-colors group">
              <p className="text-3xl font-display text-primary mb-1">0g</p>
              <p className="text-[10px] font-tech uppercase tracking-widest text-gray-500 group-hover:text-gray-300 transition-colors">Added Sugar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Science;
