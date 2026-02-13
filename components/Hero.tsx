import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-24 pb-10 md:pt-36 md:pb-24 px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#050505] to-black -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-5xl text-center space-y-8 z-10"
      >
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 text-xs md:text-sm font-medium tracking-wide uppercase">
            <span className="px-4 py-1.5 border border-brand-gold/40 rounded-full text-brand-gold bg-brand-gold/5 shadow-[0_0_15px_rgba(212,175,55,0.1)] backdrop-blur-sm">
              Listas 100% concluídas e entregues
            </span>
            <span className="text-gray-400">Há 7 anos no mercado</span>
          </div>

          {/* Tamanho da fonte reduzido aqui */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] md:leading-[1.1]">
            O ecossistema ideal para aumentar os seus resultados no <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFFACD] to-[#D4AF37] bg-[length:200%_auto] animate-text-shine">mercado de reabilitação de crédito.</span>
          </h1>
          
          <h2 className="text-lg md:text-xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed">
            A Life 360 Parceiros reúne plataforma, processos e suporte para você operar com padrão, ganhar velocidade no atendimento e transformar reabilitação de crédito em uma operação organizada e escalável.
          </h2>

          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-3 md:gap-6 text-sm text-gray-400 py-4">
             <div className="flex items-center gap-2 justify-center">
                <CheckCircle2 className="text-brand-gold w-4 h-4" />
                <span>Operação centralizada</span>
             </div>
             <div className="flex items-center gap-2 justify-center">
                <CheckCircle2 className="text-brand-gold w-4 h-4" />
                <span>Processos prontos</span>
             </div>
             <div className="flex items-center gap-2 justify-center">
                <CheckCircle2 className="text-brand-gold w-4 h-4" />
                <span>Organização por etapas</span>
             </div>
             <div className="flex items-center gap-2 justify-center">
                <CheckCircle2 className="text-brand-gold w-4 h-4" />
                <span>Esteira de soluções</span>
             </div>
             <div className="flex items-center gap-2 justify-center">
                <CheckCircle2 className="text-brand-gold w-4 h-4" />
                <span>Suporte e materiais</span>
             </div>
          </div>

          <div className="pt-6 md:pt-8 flex flex-col items-center justify-center">
             <a href="#plans" className="btn-luxury inline-block py-4 px-10 rounded-full text-base md:text-lg font-bold min-w-[280px] md:min-w-[320px]">
               <div className="btn-border-container"><div className="btn-border-anim"></div></div>
               <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">
                 Quero conhecer a plataforma <ArrowRight size={18} />
               </span>
               <div className="btn-luxury-shine"></div>
             </a>
             <p className="text-[10px] md:text-xs text-gray-500 mt-4">
              Atendimento rápido e sem compromisso.
             </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;