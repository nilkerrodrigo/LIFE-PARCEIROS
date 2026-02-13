import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, ShieldCheck, LayoutDashboard, Zap } from 'lucide-react';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="group bg-[#151515] p-6 md:p-8 rounded-xl border border-white/5 hover:border-brand-gold/50 transition-all duration-300 hover:-translate-y-2 h-full"
    >
      <div className="mb-4 md:mb-6 p-3 md:p-4 bg-black rounded-lg w-fit text-brand-gold shadow-[0_0_15px_rgba(212,175,55,0.1)]">
        {icon}
      </div>
      <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-brand-gold transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const benefits = [
    { 
        title: 'Mais controle da operação', 
        desc: 'Você enxerga cada atendimento por etapa e sabe o que falta para avançar.', 
        icon: <LayoutDashboard className="w-6 h-6 md:w-7 md:h-7" /> 
    },
    { 
        title: 'Mais velocidade no atendimento', 
        desc: 'Processos e listas prontas reduzem idas e vindas e eliminam improviso.', 
        icon: <Zap className="w-6 h-6 md:w-7 md:h-7" /> 
    },
    { 
        title: 'Mais conversão com padrão', 
        desc: 'Quando o fluxo é consistente, o cliente avança mais rápido e com mais clareza.', 
        icon: <Target className="w-6 h-6 md:w-7 md:h-7" /> 
    },
    { 
        title: 'Mais escala sem perder qualidade', 
        desc: 'Você cresce com processo e mantém o padrão mesmo aumentando volume.', 
        icon: <ShieldCheck className="w-6 h-6 md:w-7 md:h-7" /> 
    },
    { 
        title: 'Mais resultado por cliente', 
        desc: 'Com uma esteira de soluções, você amplia as oportunidades dentro do mesmo atendimento.', 
        icon: <TrendingUp className="w-6 h-6 md:w-7 md:h-7" /> 
    },
  ];

  return (
    <section id="services" className="py-10 md:py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-16 text-center"
        >
          <span className="text-brand-gold font-medium uppercase tracking-widest text-xs md:text-sm">BENEFÍCIOS</span>
          <h2 className="mt-3 md:mt-4 text-2xl md:text-5xl font-bold text-white">O que muda na prática</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 justify-center">
          {benefits.map((item, index) => (
            <BenefitCard 
              key={item.title} 
              title={item.title} 
              description={item.desc}
              icon={item.icon} 
              delay={index * 0.1}
            />
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center">
            <a href="#plans" className="text-white text-sm md:text-base border-b border-gray-600 hover:text-brand-gold hover:border-brand-gold transition-colors pb-1">
                Quero conhecer os planos e a estrutura
            </a>
        </div>
      </div>
    </section>
  );
};

export default Services;