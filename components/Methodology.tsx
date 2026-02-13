import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Rocket, Activity, BarChart3 } from 'lucide-react';

const Methodology: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "Entrada como parceiro",
      desc: "Você inicia seu acesso e recebe orientação do melhor caminho para sua operação.",
      icon: <UserPlus className="w-6 h-6 text-black" />
    },
    {
      number: "2",
      title: "Onboarding e ativação",
      desc: "Você aprende o fluxo padrão, as etapas e como usar a plataforma com clareza.",
      icon: <Rocket className="w-6 h-6 text-black" />
    },
    {
      number: "3",
      title: "Operação diária",
      desc: "Você cadastra atendimentos, acompanha etapas, organiza pendências e executa com padrão.",
      icon: <Activity className="w-6 h-6 text-black" />
    },
    {
      number: "4",
      title: "Escala e melhoria",
      desc: "Você reduz retrabalho, aumenta consistência e cresce com previsibilidade.",
      icon: <BarChart3 className="w-6 h-6 text-black" />
    }
  ];

  return (
    <section className="py-20 md:py-28 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Como funciona na prática</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-[2px] bg-neutral-800 z-0" />
            
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 bg-[#151515] border border-white/10 rounded-full flex items-center justify-center mb-6 relative group">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                     {step.icon}
                  </div>
                  <div className="absolute -bottom-3 bg-[#222] text-brand-gold text-[10px] font-bold px-3 py-1 rounded-full uppercase border border-white/5">
                      Etapa {step.number}
                  </div>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[250px]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
             <a href="#plans" className="btn-luxury px-8 py-3 rounded-full text-xs md:text-sm font-bold inline-block">
                <div className="btn-border-container"><div className="btn-border-anim"></div></div>
                <span className="relative z-10">QUERO COMEÇAR COM ESTRUTURA</span>
                <div className="btn-luxury-shine"></div>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Methodology;