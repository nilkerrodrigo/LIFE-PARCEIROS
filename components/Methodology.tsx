import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, BrainCircuit, FileText, CheckCircle } from 'lucide-react';

const Methodology: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "Qualificação rápida",
      desc: "Você coleta as informações essenciais do cliente como perfil, objetivo e renda.",
      icon: <UserPlus className="w-5 h-5 md:w-6 md:h-6 text-black" />
    },
    {
      number: "2",
      title: "Diagnóstico CreditIA",
      desc: "Sem diagnóstico a análise não avança. Isso evita tentativa errada e dá direção.",
      icon: <BrainCircuit className="w-5 h-5 md:w-6 md:h-6 text-black" />
    },
    {
      number: "3",
      title: "Checklist e documentação",
      desc: "Você envia a proposta com organização padrão para ganhar velocidade.",
      icon: <FileText className="w-5 h-5 md:w-6 md:h-6 text-black" />
    },
    {
      number: "4",
      title: "Acompanhamento",
      desc: "Você acompanha status e conduz o cliente com clareza em cada etapa.",
      icon: <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-black" />
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-4">Como funciona simples e previsível</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 md:gap-8 mt-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative p-6 pt-10 md:pt-12 rounded-2xl bg-neutral-900 border border-white/5 hover:border-brand-gold/50 transition-colors"
            >
              <div className="absolute -top-5 md:-top-6 left-1/2 -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 bg-brand-gold rounded-full flex items-center justify-center font-bold text-xl md:text-2xl text-black shadow-[0_4px_20px_rgba(212,175,55,0.4)] z-10">
                {step.icon}
              </div>
              <div className="mt-2 md:mt-4 text-center">
                <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 md:mb-2 block">Etapa {step.number}</span>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
              
              {/* Connector Line (Desktop) */}
              {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-0 right-[-50%] w-full h-[2px] bg-white/5 z-0 translate-y-[24px]" />
              )}
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 md:mt-12 text-center">
             <a href="#contact-form" className="btn-luxury px-6 py-3 md:px-8 md:py-3 rounded-full text-xs md:text-sm font-bold inline-block w-full md:w-auto">
                <div className="btn-border-container"><div className="btn-border-anim"></div></div>
                <span className="relative z-10">QUERO COMEÇAR AGORA</span>
                <div className="btn-luxury-shine"></div>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Methodology;