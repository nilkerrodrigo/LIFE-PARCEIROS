import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Expert: React.FC = () => {
  const whatsappLink = "https://chat.whatsapp.com/G720XYiM1I2HMMB20nMwX6";

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
                {/* Abstract Representation of Method */}
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 to-black p-6 md:p-8 flex flex-col justify-center">
                    <div className="space-y-4">
                        <div className="flex justify-between items-end border-b border-white/10 pb-2">
                             <div className="h-2 bg-white/10 rounded-full w-20"></div>
                             <div className="h-4 bg-brand-gold/20 rounded w-10"></div>
                        </div>
                        <div className="space-y-2">
                            <div className="h-2 bg-white/10 rounded-full w-full"></div>
                            <div className="h-2 bg-white/10 rounded-full w-5/6"></div>
                        </div>
                        <div className="mt-6 p-4 md:p-6 bg-white/5 rounded-xl border border-brand-gold/30 flex flex-col items-center text-center">
                             <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-3">
                                <CheckCircle2 className="text-green-500 w-6 h-6" />
                             </div>
                             <div className="text-xl md:text-2xl font-bold text-white">Método Validado</div>
                             <p className="text-xs text-gray-400 mt-1">Esteira completa de crédito</p>
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
            A virada é ter <span className="text-brand-gold">método e processo</span>, não sorte
          </h2>
          
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            A Life 360 Parceiros organiza seu fluxo do diagnóstico até a conclusão.
          </p>

          <ul className="space-y-3 md:space-y-4">
            {[
                "Diagnóstico CreditIA obrigatório para dar direção e reduzir retrabalho",
                "Consultas para embasar a decisão e orientar o próximo passo",
                "Soluções integradas para aumentar ticket por cliente",
                "CRM com pipeline, proposta e contrato para manter controle",
                "Suporte e Universidade Life360 para você evoluir e destravar casos"
            ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-brand-gold shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm md:text-base">{item}</span>
                </li>
            ))}
          </ul>

          <div className="pt-2 md:pt-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-luxury px-6 py-3 md:px-8 md:py-3 rounded-full text-xs md:text-sm font-bold inline-block w-full md:w-auto text-center">
                <div className="btn-border-container"><div className="btn-border-anim"></div></div>
                <span className="relative z-10">QUERO VER A PLATAFORMA POR DENTRO</span>
                <div className="btn-luxury-shine"></div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Expert;