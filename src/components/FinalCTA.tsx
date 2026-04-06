import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-[var(--color-dark-base)]">
      {/* Immersive glowing background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-gradient-to-r from-[var(--color-accent-blue)] via-[var(--color-accent-purple)] to-[var(--color-success)] rounded-full blur-[150px] opacity-10 mix-blend-screen" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto backdrop-blur-sm bg-white/[0.01] border border-white/10 rounded-[3rem] p-12 lg:p-24 shadow-2xl overflow-hidden relative"
        >
          {/* Subtle inside glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          
          <h2 className="text-4xl lg:text-6xl font-bold font-['Poppins'] mb-8 text-white">
            Ready to bank <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818cf8] to-[#c084fc]">
              smarter?
            </span>
          </h2>
          
          <p className="text-xl text-[var(--color-secondary)] mb-12 max-w-2xl mx-auto">
            Join thousands of users who have already upgraded their financial life. Open an account in less than 3 minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-10 py-5 bg-white text-[var(--color-dark-base)] font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
              Create Free Account
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-transparent text-white border border-white/20 font-bold rounded-2xl transition-all hover:bg-white/10">
              Contact Sales
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
