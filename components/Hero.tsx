import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#050505] to-black -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-5xl text-center space-y-8 z-10"
      >
        {/* Top Tag */}
        <div className="flex justify-center mb-6">
            <span className="inline-flex flex-col md:flex-row items-center gap-1 md:gap-2 px-6 py-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 text-brand-gold text-[10px] md:text-xs font-bold uppercase tracking-widest text-center">
                <span>Listas 100% concluídas e entregues</span>
                <span className="hidden md:inline">|</span>
                <span>Há 7 anos no mercado</span>
            </span>
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.15] md:leading-[1.1]">
            O ecossistema ideal para aumentar os seus resultados no <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFFACD] to-[#D4AF37] bg-[length:200%_auto] animate-text-shine">mercado de reabilitação de crédito.</span>
          </h1>
          
          <h2 className="text-sm md:text-xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed px-2">
            A Life 360 Parceiros reúne plataforma, processos e suporte para você operar com padrão, ganhar velocidade no atendimento e transformar reabilitação de crédito em uma operação organizada e escalável.
          </h2>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-400 py-4 max-w-4xl mx-auto">
             {[
                "Operação centralizada",
                "Processos prontos",
                "Organização por etapas",
                "Esteira de soluções",
                "Suporte e materiais"
             ].map((item, i) => (
                 <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="text-brand-gold w-4 h-4" />
                    <span>{item}</span>
                 </div>
             ))}
          </div>

          <div className="pt-8 flex flex-col items-center justify-center gap-4">
             <a href="#plans" className="btn-luxury w-full md:w-auto inline-block py-4 px-6 md:px-10 rounded-full text-xs md:text-base font-bold md:min-w-[300px] whitespace-nowrap">
                  <div className="btn-border-container"><div className="btn-border-anim"></div></div>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    QUERO CONHECER A PLATAFORMA <ArrowRight size={18} />
                  </span>
                  <div className="btn-luxury-shine"></div>
             </a>
             <p className="text-[10px] md:text-xs text-gray-500">
                Atendimento rápido e sem compromisso.
             </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;