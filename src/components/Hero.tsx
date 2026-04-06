import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import HeroCanvasAnimation from './HeroCanvasAnimation';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full">
      {/* Sticky container that stays on screen for 300vh of scrolling */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden bg-[var(--color-fintech-navy)]">

        {/* Background Canvas */}
        <HeroCanvasAnimation scrollYProgress={scrollYProgress} />
        
        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-fintech-navy)]/90 via-[var(--color-fintech-navy)]/60 to-[var(--color-fintech-navy)]/50 pointer-events-none z-0" />
        
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent-purple)]/20 rounded-full blur-[150px] pointer-events-none z-0" />
        
        <div className="container mx-auto px-6 lg:px-12 xl:px-24 flex items-center justify-between h-full py-20 z-10 pointer-events-none">
          
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center mt-10 lg:mt-0 pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[var(--color-success)] shadow-[0_0_8px_var(--color-success)] animate-pulse" />
                <span className="text-sm font-medium text-[var(--color-secondary)]">Vite Architecture 2.0</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold font-['Poppins'] tracking-tight leading-[1.1] mb-6">
                The Future of <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-purple)]">
                  Digital Banking
                </span>
              </h1>
              
              <p className="text-lg text-[var(--color-secondary)] mb-10 max-w-lg leading-relaxed">
                Watch your money move smarter. Seamless banking powered by modern technology, driven by AI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-lg:mx-auto">
                <button className="group relative px-8 py-4 bg-[var(--color-primary)] text-[var(--color-dark-base)] font-semibold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(248,250,252,0.15)] hover:shadow-[0_0_25px_rgba(248,250,252,0.3)]">
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                  <span className="relative flex items-center gap-2">
                    Open Account <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="px-8 py-4 bg-white/5 text-[var(--color-primary)] border border-white/10 font-semibold rounded-2xl backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20">
                  Explore Features
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-secondary)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className="text-xs tracking-[0.2em] uppercase font-semibold">Scroll to dispense</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
