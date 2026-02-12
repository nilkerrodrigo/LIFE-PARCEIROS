import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Academy from './components/Academy';
import Support from './components/Support';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-red selection:text-white overflow-x-hidden font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Academy />
        <Support />
      </main>
      <Footer />
    </div>
  );
};

export default App;