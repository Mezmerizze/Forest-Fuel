
import React, { useState, useEffect, useRef } from 'react';
import { VARIANTS } from '../constants';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const [activeVariant, setActiveVariant] = useState(VARIANTS[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);
  const scanLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Variant transition animation
  useEffect(() => {
    if (!imageRef.current) return;

    const tl = gsap.timeline();

    // Start transition
    setIsTransitioning(true);

    // Initial glitch/out animation
    tl.to(imageRef.current, {
      opacity: 0.5,
      scale: 0.9,
      filter: 'blur(20px) contrast(150%) brightness(150%)',
      duration: 0.2,
      ease: 'power2.in'
    })
      .to(scanLineRef.current, {
        top: '100%',
        opacity: 1,
        duration: 0.4,
        ease: 'none'
      }, 0)
      .call(() => {
        // Mid-point: wait a tiny bit or let React re-render
      })
      .to(imageRef.current, {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px) contrast(100%) brightness(100%)',
        duration: 0.6,
        ease: 'elastic.out(1, 0.75)'
      })
      .to(scanLineRef.current, {
        opacity: 0,
        duration: 0.2
      }, "-=0.2")
      .set(scanLineRef.current, { top: '-10%' })
      .call(() => {
        setIsTransitioning(false);
      });

    return () => {
      tl.kill();
    };
  }, [activeVariant]);

  const parallaxY = scrollY * 0.15;

  const cycleVariant = (dir: number) => {
    if (isTransitioning) return;
    const idx = VARIANTS.findIndex(v => v.id === activeVariant.id);
    const nextIdx = (idx + dir + VARIANTS.length) % VARIANTS.length;
    setActiveVariant(VARIANTS[nextIdx]);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-moss-radial pointer-events-none z-0"></div>
      <div className="absolute top-40 left-10 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary/5 blur-[120px] rounded-full"></div>

      <div className="max-w-[1440px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-4 flex flex-col items-start text-left">
          <h1 className="font-display text-7xl xl:text-[7rem] leading-[0.85] uppercase tracking-normal mb-4">
            <span className="text-primary">Ancient</span><br />
            <span className="text-white">Energy.</span>
          </h1>
          <h2 className="font-display text-7xl xl:text-[7rem] leading-[0.85] uppercase tracking-normal mb-8 text-white opacity-80">
            Modern<br />Edge.
          </h2>
          <p className="text-gray-400 max-w-sm text-lg mb-12 font-light border-l-2 border-primary pl-6 leading-relaxed">
            The world's first oxygen-rich energy shot derived from Icelandic moss. Bio-engineered for peak cognitive performance.
          </p>
          <button className="shimmer-effect group flex items-center bg-primary hover:bg-primary-dark text-background font-bold px-1 py-1 pl-8 rounded-full transition-all duration-500 shadow-xl hover:shadow-primary/60 hover:scale-[1.02] active:scale-95">
            <span className="mr-6 uppercase tracking-widest text-sm transition-all group-hover:tracking-[0.15em]">Secure Your Supply</span>
            <span className="bg-white/20 p-3 rounded-full group-hover:bg-white/40 transition-all duration-500 group-hover:rotate-[360deg]">
              <span className="material-icons text-sm text-background font-bold">add</span>
            </span>
          </button>
        </div>

        <div className="lg:col-span-4 flex items-center justify-center relative min-h-[300px]">
          <div className="absolute inset-0 bg-primary/5 blur-[80px] rounded-full scale-50 animate-pulse"></div>

          <div
            className="w-full h-full relative z-20 transition-transform duration-75 ease-out flex items-center justify-center"
            style={{ transform: `translateY(${parallaxY}px)` }}
          >
            <div ref={imageRef} className="relative w-full max-w-[180px] perspective-1000">
              {/* Technical UI Overlays */}
              <div className="absolute -top-12 -left-8 z-40 flex flex-col items-start opacity-60">
                <span className="text-[8px] font-tech text-primary uppercase tracking-[0.3em] mb-1">Magnification: 1200x</span>
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className={`w-8 h-[1px] ${i === 1 ? 'bg-primary' : 'bg-primary/20'}`}></div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-8 -right-12 z-40 flex items-center gap-3 opacity-60">
                <div className="flex flex-col items-end">
                  <span className="text-[8px] font-tech text-white uppercase tracking-[0.2em]">Live Analysis</span>
                  <span className="text-[6px] font-tech text-primary uppercase tracking-widest mt-1">Status: Nominal</span>
                </div>
                <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center relative">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                  <div className="absolute inset-0 w-full h-full rounded-full border border-primary animate-ping opacity-20"></div>
                </div>
              </div>

              {/* Technical Scanline during transition */}
              <div
                ref={scanLineRef}
                className="absolute left-[-40%] right-[-40%] h-[1px] bg-primary/60 shadow-[0_0_20px_#8CA924] z-50 opacity-0 pointer-events-none"
                style={{ top: '-10%' }}
              ></div>

              <div className="relative">
                {/* Floating Bio-Particles */}
                <div className="absolute inset-[-50%] pointer-events-none z-0">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-primary/40 rounded-full blur-[1px]"
                      style={{
                        top: `${20 + Math.random() * 60}%`,
                        left: `${20 + Math.random() * 60}%`,
                        animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 5}s`
                      }}
                    ></div>
                  ))}
                </div>

                <div className="relative animate-float">
                  <img
                    key={activeVariant.id}
                    src={activeVariant.image}
                    alt={activeVariant.name}
                    className="w-full h-auto drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative z-10"
                  />

                  {/* Glitch Overlay Elements (visual only) */}
                  {isTransitioning && (
                    <div className="absolute inset-0 z-20 pointer-events-none">
                      <div className="absolute inset-0 bg-primary/10 mix-blend-screen opacity-40 animate-pulse"></div>
                      <div className="absolute inset-0 translate-x-1 translate-y-1 bg-red-500/5 mix-blend-screen blur-sm"></div>
                      <div className="absolute inset-0 -translate-x-1 -translate-y-1 bg-blue-500/5 mix-blend-screen blur-sm"></div>
                    </div>
                  )}
                </div>
              </div>

              {/* Radial reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent blur-2xl rounded-full opacity-30 -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
          <div className="text-left lg:text-right mb-16">
            <h2 className="font-display text-5xl xl:text-7xl leading-[0.9] uppercase tracking-normal text-primary opacity-80">Pure Nature</h2>
            <h2 className="font-display text-5xl xl:text-7xl leading-[0.9] uppercase tracking-normal text-white">In Every Drop</h2>
          </div>

          <div className="w-full max-w-xs">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] uppercase text-gray-500 font-bold tracking-[0.3em]">Select Variant</span>
              <div className="flex gap-4">
                <button onClick={() => cycleVariant(-1)} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-primary hover:border-primary/40 transition-all duration-300 active:scale-90">
                  <span className="material-icons text-lg">west</span>
                </button>
                <button onClick={() => cycleVariant(1)} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-primary hover:border-primary/40 transition-all duration-300 active:scale-90">
                  <span className="material-icons text-lg">east</span>
                </button>
              </div>
            </div>

            <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4">
              {VARIANTS.map((v) => (
                <div
                  key={v.id}
                  onClick={() => !isTransitioning && setActiveVariant(v)}
                  className={`shrink-0 w-24 flex flex-col items-center cursor-pointer transition-all duration-500 ${activeVariant.id === v.id ? 'opacity-100 scale-[1.02]' : 'opacity-40 grayscale hover:opacity-70'}`}
                >
                  <div className={`w-24 h-32 rounded-3xl bg-surface-light border ${activeVariant.id === v.id ? 'border-primary shadow-[0_0_20px_rgba(140,169,36,0.3)]' : 'border-white/5'} flex items-center justify-center relative overflow-hidden transition-all duration-500 group`}>
                    <img src={v.image} className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${activeVariant.id === v.id ? 'opacity-100' : 'opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-70 group-hover:scale-110'}`} alt={v.name} />
                  </div>
                  <div className="mt-3 flex justify-between w-full px-1">
                    <span className="text-[10px] uppercase text-gray-500 font-bold tracking-widest">{v.id}</span>
                    <span className={`text-[10px] font-bold ${activeVariant.id === v.id ? 'text-primary' : 'text-gray-600'}`}>{v.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
