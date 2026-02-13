import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-10 md:py-24 px-6 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Background glow for authority section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-brand-gold/5 blur-[100px] rounded-full -z-10" />

      <div className="max-w-5xl mx-auto">
        <div className="bg-[#101010] border border-white/10 rounded-3xl p-8 md:p-12 text-center relative shadow-2xl">
            {/* Top Icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black border border-brand-gold p-3 rounded-full text-brand-gold shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                <ShieldCheck size={32} />
            </div>

            <h2 className="mt-4 text-2xl md:text-5xl font-bold text-white mb-6">
              Processo validado, entrega completa, operação profissional
            </h2>
            <p className="text-base md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                Você não precisa reinventar a roda. A Life 360 Parceiros foi construída para colocar sua operação em um padrão profissional desde o início, com listas concluídas, processos prontos e uma estrutura que suporta crescimento.
            </p>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10">
                {[
                    "Processos definidos para execução sem improviso",
                    "Listas completas para reduzir erros e retrabalho",
                    "Estrutura com histórico e consistência de mercado"
                ].map((proof, i) => (
                     <div key={i} className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/5 hover:border-brand-gold/30 transition-colors">
                        <CheckCircle2 className="text-brand-gold w-5 h-5 shrink-0" />
                        <span className="text-gray-200 text-sm md:text-base font-medium">{proof}</span>
                     </div>
                ))}
            </div>
            
            <div>
                <a href="https://chat.whatsapp.com/G720XYiM1I2HMMB20nMwX6" target="_blank" rel="noopener noreferrer" className="btn-luxury px-8 py-4 rounded-full text-sm md:text-base font-bold inline-block w-full md:w-auto">
                    <div className="btn-border-container"><div className="btn-border-anim"></div></div>
                    <span className="relative z-10">QUERO UMA APRESENTAÇÃO DA PLATAFORMA</span>
                    <div className="btn-luxury-shine"></div>
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;