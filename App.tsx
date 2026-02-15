
import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Science from './components/Science';
import Ingredients from './components/Ingredients';
import ProductShowcase from './components/ProductShowcase';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/30">
      <Navbar />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        <section id="features" className="py-24">
          <Features />
        </section>
        <section id="science" className="py-24 bg-surface/30">
          <Science />
        </section>
        <section id="ingredients" className="py-24">
          <Ingredients />
        </section>
        <section id="showcase" className="py-24 overflow-hidden bg-surface/20">
          <ProductShowcase />
        </section>
        <section id="testimonials" className="py-24 border-t border-white/5">
          <Testimonials />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
