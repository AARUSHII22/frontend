
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import ProductCards from './components/ProductCards';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="bg-[var(--color-fintech-navy)] min-h-screen text-[var(--color-primary)] font-sans antialiased selection:bg-[var(--color-success)] selection:text-white">
      {/* Dynamic Navbar (Mock) */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-4 bg-[var(--color-fintech-navy)]/50 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2 font-['Poppins'] font-bold text-xl tracking-tight">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-[var(--color-success)] to-[var(--color-accent-blue)] flex items-center justify-center text-[var(--color-dark-base)]">
            A
          </div>
          ATM.IO
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-[var(--color-secondary)]">
          <a href="#" className="hover:text-white transition-colors">Products</a>
          <a href="#" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
          <a href="#" className="hover:text-white transition-colors">Company</a>
        </div>
        <div className="flex gap-4">
          <button className="hidden md:block px-4 py-2 text-sm font-semibold rounded-lg hover:bg-white/5 transition-colors">Login</button>
          <button className="px-4 py-2 bg-white text-[var(--color-dark-base)] text-sm font-semibold rounded-lg hover:scale-105 transition-transform shadow-[0_0_10px_rgba(255,255,255,0.2)]">Get Started</button>
        </div>
      </nav>

      <main>
        <Hero />
        <FeatureSection />
        <ProductCards />
        <FinalCTA />
      </main>

      <footer className="bg-[var(--color-dark-base)] py-12 border-t border-white/5 text-center text-[var(--color-secondary)] text-sm">
        <p>&copy; 2026 ATM.IO Financial Services. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Security</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
