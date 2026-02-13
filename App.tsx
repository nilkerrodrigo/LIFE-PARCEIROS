import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BeliefBreaking from './components/BeliefBreaking';
import Expert from './components/Expert';
import PlatformPreview from './components/PlatformPreview';
import Services from './components/Services';
import Academy from './components/Academy';
import Methodology from './components/Methodology';
import TargetAudience from './components/TargetAudience';
import Testimonials from './components/Testimonials';
import Plans from './components/Plans';
import Support from './components/Support';
import Closing from './components/Closing';
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
        <PlatformPreview />
        <Services />
        <Academy />
        <Methodology />
        <TargetAudience />
        <Testimonials />
        <Plans />
        <Support />
        <Closing />
      </main>
      <Footer />
    </div>
  );
};

export default App;