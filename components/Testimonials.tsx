import React from 'react';
import { ShieldCheck, CheckCircle, BarChart } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-brand-gold/5 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-6 flex justify-center">
            <ShieldCheck className="w-12 h-12 text-brand-gold opacity-80" />
        </div>
        <h2 className="text-2xl md:text-5xl font-bold text-white mb-6">
          Processo validado, entrega completa, operação profissional
        </h2>
        <p className="text-base md:text-xl text-gray-400 mb-10 leading-relaxed">
            Você não precisa reinventar a roda. A Life 360 Parceiros foi construída para colocar sua operação em um padrão profissional desde o início, com listas concluídas, processos prontos e uma estrutura que suporta crescimento.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle className="w-5 h-5 text-brand-gold" />
                Processos sem improviso
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle className="w-5 h-5 text-brand-gold" />
                Listas completas (zero retrabalho)
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
                <BarChart className="w-5 h-5 text-brand-gold" />
                Estrutura escalável
            </div>
        </div>
        
        <div className="inline-block">
            <a href="#plans" className="btn-luxury px-8 py-4 rounded-full text-xs md:text-sm font-bold inline-block w-full md:w-auto">
                <div className="btn-border-container"><div className="btn-border-anim"></div></div>
                <span className="relative z-10">QUERO UMA APRESENTAÇÃO DA PLATAFORMA</span>
                <div className="btn-luxury-shine"></div>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;