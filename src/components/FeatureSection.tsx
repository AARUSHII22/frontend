import { motion } from 'framer-motion';
import { features } from '../data/features';

export default function FeatureSection() {
  return (
    <section className="py-32 relative bg-[var(--color-fintech-navy)] overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--color-dark-base)] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12 xl:px-24">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl lg:text-5xl font-bold font-['Poppins'] mb-6"
          >
            Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-success)] to-[var(--color-accent-blue)]">Advantages</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--color-secondary)] max-w-2xl"
          >
            Built from the ground up to provide a robust, reliable, and ridiculously fast financial infrastructure for your daily needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden"
              >
                {/* Hover Glow Effect */}
                <div 
                  className="absolute -inset-px opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-md pointer-events-none"
                  style={{ backgroundColor: feature.color }}
                />
                
                <div className="relative z-10 flex flex-col items-start">
                  <div 
                    className="p-4 rounded-2xl bg-black/30 border border-white/5 mb-6 shadow-inner"
                  >
                    <Icon className="w-8 h-8" style={{ color: feature.color }} />
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-4 text-white font-['Poppins']">
                    {feature.title}
                  </h3>
                  
                  <p className="text-[var(--color-secondary)] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
