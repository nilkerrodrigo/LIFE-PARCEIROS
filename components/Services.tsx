import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Shield, LayoutDashboard } from 'lucide-react';

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
      className="group bg-[#151515] p-8 rounded-xl border border-white/5 hover:border-brand-gold/50 transition-all duration-300 hover:-translate-y-2"
    >
      <div className="mb-6 p-4 bg-black rounded-lg w-fit text-brand-gold shadow-[0_0_15px_rgba(212,175,55,0.1)]">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-gold transition-colors">
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
        title: 'Aprovações mais consistentes', 
        desc: 'Você para de trabalhar no “talvez” e conduz o cliente com diagnóstico e checklist certo.', 
        icon: <Target size={28} /> 
    },
    { 
        title: 'Mais receita por cliente', 
        desc: 'Você aumenta o ticket com serviços integrados e oportunidades complementares.', 
        icon: <TrendingUp size={28} /> 
    },
    { 
        title: 'Operação blindada', 
        desc: 'Se uma instituição muda a régua, você tem alternativas - e não trava.', 
        icon: <Shield size={28} /> 
    },
    { 
        title: 'Menos caos, mais controle', 
        desc: 'Processo, status e organização para acompanhar tudo sem perder tempo.', 
        icon: <LayoutDashboard size={28} /> 
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-brand-gold font-medium uppercase tracking-widest text-sm">BENEFÍCIOS</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">O que você ganha na prática</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        <div className="mt-12 text-center">
            <a href="#contact-form" className="text-white border-b border-gray-600 hover:text-brand-gold hover:border-brand-gold transition-colors pb-1">
                Quero conhecer os planos
            </a>
        </div>
      </div>
    </section>
  );
};

export default Services;