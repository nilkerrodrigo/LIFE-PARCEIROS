import React from 'react';
import { motion } from 'framer-motion';
import { Eraser, Building2, CreditCard, TrendingUp, Car, Home } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="group relative bg-gradient-to-b from-[#2a2a2a] to-[#151515] p-8 rounded-xl border border-white/5 hover:border-brand-gold/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)] overflow-hidden"
    >
      <div className="relative z-10 flex flex-col items-center text-center gap-4">
        <div className="p-4 bg-black/40 rounded-full text-white group-hover:text-brand-gold group-hover:scale-110 transition-all duration-300 shadow-inner">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-brand-gold transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  // Mapping the "What you will learn" content to the cards visual
  const learnItems = [
    { 
        title: 'Mercado PF', 
        desc: 'Como funciona o mercado de reabilitação de crédito PF.', 
        icon: <TrendingUp size={32} /> 
    },
    { 
        title: 'Diagnóstico', 
        desc: 'Como diagnosticar Rating e situação real do CPF.', 
        icon: <Building2 size={32} /> 
    },
    { 
        title: 'Gestão de Clientes', 
        desc: 'Como conduzir clientes negativados e fechar contratos.', 
        icon: <Eraser size={32} /> 
    },
    { 
        title: 'Score Turbo', 
        desc: 'Estratégias avançadas de aumento de score.', 
        icon: <CreditCard size={32} /> 
    },
    { 
        title: 'Estrutura', 
        desc: 'Estrutura de operação sem precisar ser especialista.', 
        icon: <Home size={32} /> 
    },
    { 
        title: 'Renda Mensal', 
        desc: 'Como transformar essa operação em faturamento recorrente.', 
        icon: <Car size={32} /> 
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-brand-gold font-medium uppercase tracking-widest text-sm">SERVIÇOS PARA VENDER PARA O SEU CLIENTE</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">Seja o melhor, elimine intermediários.</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Ao entrar você terá acesso a todas as ferramentas para dominar esses pilares.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learnItems.map((item, index) => (
            <ServiceCard 
              key={item.title} 
              title={item.title} 
              description={item.desc}
              icon={item.icon} 
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;