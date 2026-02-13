import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, BrainCircuit, FileCheck, FileText, DollarSign } from 'lucide-react';

const Methodology: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "Cadastro do caso",
      desc: "Você registra os dados essenciais do cliente e o objetivo.",
      icon: <UserPlus className="w-5 h-5 md:w-6 md:h-6 text-black" />
    },
    {
      number: "2",
      title: "Diagnóstico CreditIA",
      desc: "Sem diagnóstico, o fluxo não avança. Você ganha direção.",
      icon: <BrainCircuit className="w-5 h-5 md:w-6 md:h-6 text-black" />
    },
    {
      number: "3",
      title: "Consultas e checklist",
      desc: "Você confirma dados, organiza documentação e conduz com consistência.",
      icon: <FileCheck className="w-5 h-5 md:w-6 md:h-6 text-black" />
    },
    {
      number: "4",
      title: "Proposta e contrato",
      desc: "Você acompanha status no pipeline e mantém o cliente informado.",
      icon: <FileText className="w-5 h-5 md:w-6 md:h-6 text-black" />
    },
    {
      number: "5",
      title: "Monetização",
      desc: "Quando o crédito trava, você vende soluções e mantém receita.",
      icon: <DollarSign className="w-5 h-5 md:w-6 md:h-6 text-black" />
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-4">Simples, padronizado e previsível</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative w-full md:w-[220px] p-6 pt-10 md:pt-12 rounded-2xl bg-neutral-900 border border-white/5 hover:border-brand-gold/50 transition-colors flex flex-col items-center text-center"
            >
              <div className="absolute -top-5 md:-top-6 left-1/2 -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 bg-brand-gold rounded-full flex items-center justify-center font-bold text-xl md:text-2xl text-black shadow-[0_4px_20px_rgba(212,175,55,0.4)] z-10">
                {step.icon}
              </div>
              <div className="mt-2 md:mt-4">
                <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 md:mb-2 block">Etapa {step.number}</span>
                <h3 className="text-base md:text-lg font-bold text-white mb-2 md:mb-3">{step.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 md:mt-12 text-center">
             <a href="https://chat.whatsapp.com/G720XYiM1I2HMMB20nMwX6" target="_blank" rel="noopener noreferrer" className="btn-luxury px-6 py-3 md:px-8 md:py-3 rounded-full text-xs md:text-sm font-bold inline-block w-full md:w-auto">
                <div className="btn-border-container"><div className="btn-border-anim"></div></div>
                <span className="relative z-10">QUERO OPERAR DESSE JEITO</span>
                <div className="btn-luxury-shine"></div>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Methodology;