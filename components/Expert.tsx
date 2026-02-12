import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Expert: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-[#050505] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-brand-gold/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        
        <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
        >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#101010]">
                {/* Abstract Dashboard/Structure Representation */}
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 to-black p-6 md:p-8 flex flex-col justify-center">
                    <div className="space-y-4">
                        <div className="h-2 bg-white/10 rounded-full w-3/4 animate-pulse"></div>
                        <div className="h-2 bg-white/10 rounded-full w-1/2 animate-pulse"></div>
                        <div className="h-2 bg-white/10 rounded-full w-5/6 animate-pulse"></div>
                        <div className="mt-8 p-4 md:p-6 bg-white/5 rounded-xl border border-brand-gold/30">
                             <div className="flex items-center justify-between mb-2">
                                <span className="text-gray-400 text-xs md:text-sm">Status da Operação</span>
                                <span className="text-brand-gold text-[10px] md:text-xs font-bold px-2 py-1 bg-brand-gold/10 rounded">EM ANDAMENTO</span>
                             </div>
                             <div className="text-xl md:text-2xl font-bold text-white">Estruturação Validada</div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-6 md:space-y-8"
        >
          <h2 className="text-2xl md:text-5xl font-bold text-white leading-tight">
            A virada é ter <span className="text-brand-gold">método</span> e não sorte
          </h2>
          
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            A Life 360 Parceiros organiza sua operação para você parar de tentar no escuro e começar a conduzir cada caso com direção.
          </p>

          <ul className="space-y-3 md:space-y-4">
            {[
                "Diagnóstico CreditIA para orientar o caminho",
                "Especialistas para apoiar análise e documentação",
                "Acesso a múltiplas instituições com mais opções",
                "Gestão do pipeline com status claro",
                "Serviços integrados para ganhar mais por cliente"
            ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-brand-gold shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm md:text-base">{item}</span>
                </li>
            ))}
          </ul>

          <div className="pt-2 md:pt-4">
            <a href="#contact-form" className="btn-luxury px-6 py-3 md:px-8 md:py-3 rounded-full text-xs md:text-sm font-bold inline-block w-full md:w-auto text-center">
                <div className="btn-border-container"><div className="btn-border-anim"></div></div>
                <span className="relative z-10">QUERO OPERAR COM ESSA ESTRUTURA</span>
                <div className="btn-luxury-shine"></div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Expert;