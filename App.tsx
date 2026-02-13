import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expert from './components/Expert';
import BeliefBreaking from './components/BeliefBreaking';
import Services from './components/Services';
import Methodology from './components/Methodology';
import Academy from './components/Academy';
import Testimonials from './components/Testimonials';
import Plans from './components/Plans';
import TargetAudience from './components/TargetAudience';
import Support from './components/Support';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-brand-gold selection:text-black overflow-x-hidden font-sans relative">
      {/* Noise Overlay */}
      <div className="bg-noise"></div>
      
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <BeliefBreaking />
        <Expert />
        <Services />
        <Academy />
        <Methodology />
        <TargetAudience />
        <Plans />
        <Support />
      </main>
      <Footer />
    </div>
  );
};

export default App;