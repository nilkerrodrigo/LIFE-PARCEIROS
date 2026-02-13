import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-10 md:py-24 px-6 bg-black border-t border-white/5">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6">
          Processo validado, entrega completa, operação profissional
        </h2>
        <p className="text-base md:text-xl text-gray-400 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            Você não precisa reinventar a roda. A Life 360 Parceiros foi construída para colocar sua operação em um padrão profissional desde o início, com listas concluídas, processos prontos e uma estrutura que suporta crescimento.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-8 md:mb-12">
            {[
                "Processos definidos para execução sem improviso",
                "Listas completas para reduzir erros e retrabalho",
                "Estrutura com histórico e consistência de mercado"
            ].map((proof, i) => (
                 <div key={i} className="flex items-center justify-center gap-2 text-gray-300">
                    <CheckCircle2 className="text-brand-gold w-5 h-5" />
                    <span className="text-sm md:text-base font-medium">{proof}</span>
                 </div>
            ))}
        </div>
        
        <div className="mt-8">
            <a href="https://chat.whatsapp.com/G720XYiM1I2HMMB20nMwX6" target="_blank" rel="noopener noreferrer" className="btn-luxury px-6 py-3 md:px-8 md:py-3 rounded-full text-xs md:text-sm font-bold inline-block w-full md:w-auto">
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