
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-background pt-32 pb-12 border-t border-white/5 overflow-hidden">
      {/* Decorative Technical Grid Lines */}
      <div className="absolute top-0 left-10 w-px h-full bg-primary/5 hidden lg:block"></div>
      <div className="absolute top-0 right-10 w-px h-full bg-primary/5 hidden lg:block"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
        {/* Main CTA */}
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-[9rem] font-display font-bold text-white tracking-wide uppercase leading-none mb-12">
            Reclaim <span className="text-primary">Energy</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto mb-16 font-light">
            Premium bio-tech hydration derived from Icelandic moss. The future of natural fuel starts here.
          </p>

          <div className="relative max-w-4xl mx-auto h-[400px] rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl transition-all duration-700 hover:border-primary/20">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrHLFEfsXsO4Utj1FX5grd75HGXW3SLKEf3p3_OQk55wPydgSUq-NbqpQhTF2c4GKf9jxmid62Kp4oFmlGXw3EfsVrwPVArvroMygx7VljDbD0o8wf05k1N8bbQZfqWpaWVJEzB4_DqvvtHQdI3G8oiVD5k4jo8UyAXWbsfRzDhDb5wavA6Uv_rdjFxyV7LfxJVLI2lZpm3wPDiEr4vH7jCHSUpbpLyfs01BE1omKZ8JJnhkJtQCwGXjZOpTiPavpjRqQmp8XQuwA1" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-40 transition-all duration-[2s]"
              alt="Forest Background"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90 transition-opacity group-hover:opacity-70"></div>
            <div className="absolute bottom-12 left-12 text-left transition-transform duration-500 group-hover:translate-x-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20 backdrop-blur-md mb-4 group-hover:bg-primary group-hover:text-background transition-colors duration-500">Featured</span>
              <h3 className="text-3xl font-display uppercase text-white transition-all duration-500 group-hover:text-primary tracking-normal">The Moss Extraction Process</h3>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110">
               <button className="relative w-20 h-20 rounded-full bg-primary text-background flex items-center justify-center shadow-[0_0_30px_rgba(140,169,36,0.5)] active:scale-90 transition-all">
                 <div className="absolute inset-[-8px] rounded-full border-2 border-primary/30 animate-[spin_4s_linear_infinite]"></div>
                 <div className="absolute inset-[-15px] rounded-full border border-primary/10 animate-[spin_8s_linear_infinite_reverse]"></div>
                 <span className="material-icons text-4xl relative z-10">play_arrow</span>
               </button>
            </div>
          </div>
        </div>

        {/* Footer Top */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20">
          <div className="max-w-md">
            <h3 className="text-5xl font-display font-bold text-primary tracking-normal uppercase mb-6">Forest Fuel</h3>
            <p className="text-gray-500 text-lg leading-relaxed font-light">
              Bio-engineered vitality from the heart of Iceland. Pure moss extract for sustained cognitive performance and physical resilience.
            </p>
          </div>

          <div className="w-full lg:w-auto min-w-[340px]">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Join the Collective
            </h4>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full pl-8 pr-32 py-5 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-all backdrop-blur-sm"
              />
              <button className="shimmer-effect absolute right-2 top-2 bottom-2 bg-primary hover:bg-primary-dark text-background font-bold px-8 rounded-full transition-all duration-500 uppercase text-[10px] tracking-widest active:scale-95 active:brightness-110 shadow-lg">
                Join
              </button>
            </div>
            <p className="text-[10px] text-gray-600 mt-4 pl-6 uppercase tracking-widest">We respect your inbox. No spam, just science.</p>
          </div>
        </div>

        {/* Tech Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-20"></div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {[
            { title: 'Product', links: ['Original', 'Forest Berry', 'Electric Lime', 'Lab Kits'] },
            { title: 'Science', links: ['Extraction', 'Chlorophyll', 'Bio-Tech', 'Lab Reports'] },
            { title: 'Company', links: ['Our Roots', 'Sustainability', 'Press', 'Careers'] },
            { title: 'Support', links: ['FAQ', 'Shipping', 'Contact', 'Returns'] }
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
                {col.title}
                <span className="h-[1px] w-8 bg-primary/20"></span>
              </h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 hover:text-primary transition-all duration-300 text-sm uppercase tracking-widest font-light flex items-center group">
                      <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 opacity-0 group-hover:opacity-100 mr-0 group-hover:mr-2 text-primary">→</span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal & Final Footer */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 relative">
          <div className="absolute -top-[1px] left-0 w-3 h-3 border-l border-t border-primary/40"></div>
          <div className="absolute -top-[1px] right-0 w-3 h-3 border-r border-t border-primary/40"></div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 text-[10px] text-gray-600 font-tech uppercase tracking-widest">
            <span>© 2024 Forest Fuel Inc.</span>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-4">
              {['instagram', 'public', 'description'].map((icon) => (
                <a key={icon} href="#" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary/30 transition-all duration-300 active:scale-90">
                  <span className="material-icons text-lg">{icon}</span>
                </a>
              ))}
            </div>
            <div className="h-10 w-[1px] bg-white/5 mx-2"></div>
            <div className="px-4 py-2 rounded-full border border-primary/20 bg-primary/5 flex items-center gap-2 transition-all hover:bg-primary/10 hover:border-primary/40 group">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse group-hover:scale-125 transition-transform"></span>
              <span className="text-primary text-[9px] font-bold uppercase tracking-[0.2em]">Bio-Certified 2024</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
