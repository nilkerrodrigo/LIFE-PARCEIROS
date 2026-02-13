import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Zap, MousePointerClick, TrendingUp, Users } from 'lucide-react';

const Services: React.FC = () => {
  const benefits = [
    { 
        title: 'Mais controle da operação', 
        desc: 'Você enxerga cada atendimento por etapa e sabe o que falta para avançar.', 
        icon: <LayoutDashboard className="w-6 h-6" /> 
    },
    { 
        title: 'Mais velocidade no atendimento', 
        desc: 'Processos e listas prontas reduzem idas e vindas e eliminam improviso.', 
        icon: <Zap className="w-6 h-6" /> 
    },
    { 
        title: 'Mais conversão com padrão', 
        desc: 'Quando o fluxo é consistente, o cliente avança mais rápido e com mais clareza.', 
        icon: <MousePointerClick className="w-6 h-6" /> 
    },
    { 
        title: 'Mais escala sem perder qualidade', 
        desc: 'Você cresce com processo e mantém o padrão mesmo aumentando volume.', 
        icon: <TrendingUp className="w-6 h-6" /> 
    },
    { 
        title: 'Mais resultado por cliente', 
        desc: 'Com uma esteira de soluções, você amplia as oportunidades dentro do mesmo atendimento.', 
        icon: <Users className="w-6 h-6" /> 
    },
  ];

  return (
    <section className="py-20 md:py-28 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 text-center"
        >
          <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">BENEFÍCIOS</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">O que muda na prática</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {benefits.map((item, index) => (
             <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-brand-gold/30 transition-all duration-300 group w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] flex flex-col"
             >
                <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-brand-gold mb-6 group-hover:bg-brand-gold group-hover:text-black transition-colors shrink-0">
                    {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
             </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <a href="#plans" className="text-gray-300 text-sm hover:text-white border-b border-gray-600 hover:border-white pb-1 transition-all">
                Quero conhecer os planos e a estrutura
            </a>
        </div>
      </div>
    </section>
  );
};

export default Services;