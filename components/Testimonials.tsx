
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <div className="max-w-xl reveal">
          <span className="text-primary font-tech text-xs tracking-[0.5em] uppercase mb-4 block">
            /// User Subject Feedback Logs
          </span>
          <h2 className="text-5xl md:text-7xl font-display uppercase leading-[0.85] tracking-normal">
            Field <br />
            <span className="text-primary">Reports</span>
          </h2>
        </div>
        <div className="font-tech text-[10px] tracking-[0.4em] text-gray-500 uppercase flex items-center gap-4 reveal">
          <span className="w-12 h-[1px] bg-white/10"></span>
          Data Authenticated by Bio-Hub Lab
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.id}
            className="relative bg-surface border border-white/5 rounded-3xl p-8 flex flex-col transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(140,169,36,0.05)] group"
          >
            {/* Header: ID and Profile */}
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-1 bg-primary/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border border-white/10 grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
                <div>
                  <h4 className="font-heading text-white text-sm uppercase tracking-widest">{testimonial.name}</h4>
                  <p className="font-tech text-[9px] text-gray-500 uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
              <span className="font-tech text-[9px] text-primary/40 group-hover:text-primary transition-colors">{testimonial.id}</span>
            </div>

            {/* Content */}
            <div className="flex-grow">
              <p className="text-gray-400 text-sm leading-relaxed font-light italic mb-4">
                "{testimonial.content}"
              </p>

              {/* Star Rating Row */}
              <div className="flex gap-0.5 mb-2 group-hover:drop-shadow-[0_0_8px_rgba(140,169,36,0.3)] transition-all">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="material-icons text-primary text-[18px]">star</span>
                ))}
                <span className="material-icons text-primary text-[18px]">star_half</span>
              </div>
              <div className="text-[9px] font-tech text-gray-600 uppercase tracking-widest">Verified 4.5 Rating</div>
            </div>

            {/* Metrics */}
            <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-[8px] font-tech text-gray-500 uppercase tracking-[0.3em]">Performance Shift</span>
                <span className="text-primary font-display text-xl tracking-normal">{testimonial.focusBoost}</span>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors delay-[i*100ms]"></div>
                ))}
              </div>
            </div>

            {/* Background Detail */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>

      {/* Global Metric Summary */}
      <div className="mt-16 bg-white/5 rounded-2xl p-6 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm">
        <div className="flex items-center gap-6">
          <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
            <span className="material-icons text-primary">groups</span>
          </div>
          <div>
            <h5 className="font-heading text-white text-xs uppercase tracking-widest">Global Satisfaction Score</h5>
            <p className="text-gray-500 text-[10px] uppercase tracking-widest">Based on 12,400+ Verified User Logs</p>
          </div>
        </div>

        <div className="flex items-center gap-12">
          <div className="text-center">
            <p className="text-primary font-display text-4xl tracking-normal">4.92</p>
            <p className="text-[8px] font-tech text-gray-500 uppercase tracking-[0.3em]">Mean Rating</p>
          </div>
          <div className="h-8 w-[1px] bg-white/10"></div>
          <div className="text-center">
            <p className="text-white font-display text-4xl tracking-normal">94%</p>
            <p className="text-[8px] font-tech text-gray-500 uppercase tracking-[0.3em]">Retained Usage</p>
          </div>
        </div>

        <button className="px-8 py-3 rounded-full border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-primary hover:text-background transition-all active:scale-95">
          View All Logs
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
