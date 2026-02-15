import React from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-[100] px-6 py-4 lg:px-12 flex justify-between items-center backdrop-blur-md bg-background/80 border-b border-white/5">
      <div className="flex items-center gap-4 group cursor-pointer">
        <Logo className="w-10 h-10 transition-transform group-hover:scale-110 duration-500" />
        <div className="flex flex-col leading-none">
          <span className="font-heading font-bold text-xl tracking-[0.2em] uppercase hidden sm:block text-white">
            Forest <span className="text-primary">Fuel</span>
          </span>
          <span className="text-[8px] font-tech text-gray-500 uppercase tracking-[0.5em] hidden sm:block">
            Bio-Tech Performance
          </span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-2 bg-white/5 rounded-full px-2 py-1 border border-white/10">
        {['Home', 'Features', 'Science', 'Testimonials', 'Shop'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 hover:text-primary transition-all duration-300"
          >
            {item}
          </a>
        ))}
      </div>

      <button className="shimmer-effect bg-primary hover:bg-primary-dark text-background font-bold text-xs uppercase tracking-widest px-8 py-3 rounded-full transition-all duration-500 shadow-[0_0_20px_rgba(140,169,36,0.3)] hover:shadow-[0_0_40px_rgba(140,169,36,0.6)] active:scale-95 active:brightness-110">
        Pre-Order
      </button>
    </nav>
  );
};

export default Navbar;