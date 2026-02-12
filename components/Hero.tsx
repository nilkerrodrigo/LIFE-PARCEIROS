import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#050505] to-black -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-5xl text-center space-y-8"
      >
        <div className="space-y-4">
          <h2 className="text-brand-red font-semibold tracking-widest text-sm uppercase">Bem-vindo à Revolução</h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Domine o Mercado<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Financeiro.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light">
            Soluções completas para regularização, crédito e crescimento patrimonial em uma plataforma única.
          </p>
        </div>

        {/* Video Placeholder / Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative w-full aspect-video bg-neutral-900 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 group mt-12"
        >
          {/* Mock Video UI */}
          <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?grayscale')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-brand-red transition-all duration-300 group-hover:scale-110 shadow-lg border border-white/20 group-hover:border-transparent">
              <Play className="w-8 h-8 text-white fill-current ml-1" />
            </button>
          </div>

          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
             <div className="flex items-center gap-3">
               <div className="w-10 h-1 bg-brand-red rounded-full" />
               <span className="text-sm text-gray-300 font-mono">02:35 / 10:00</span>
             </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;