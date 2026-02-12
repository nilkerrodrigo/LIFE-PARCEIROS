import React from 'react';
import { motion } from 'framer-motion';
import { Eraser, Building2, CreditCard, TrendingUp, Car, Home } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="group relative bg-[#151515] p-8 rounded-xl border border-white/5 hover:border-brand-red/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,0,0.1)] overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red/5 rounded-full blur-2xl -mr-10 -mt-10 transition-all duration-500 group-hover:bg-brand-red/20" />
      
      <div className="relative z-10 flex flex-col items-start gap-4">
        <div className="p-3 bg-white/5 rounded-lg text-white group-hover:text-brand-red group-hover:bg-brand-red/10 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-brand-red transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
          Soluções estratégicas especializadas para regularização e potencialização.
        </p>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    { title: 'Limpa Nome', icon: <Eraser size={28} /> },
    { title: 'Limpa Bacen', icon: <Building2 size={28} /> },
    { title: 'CNH', icon: <CreditCard size={28} /> }, // Using CreditCard loosely for license/doc
    { title: 'Rating', icon: <TrendingUp size={28} /> },
    { title: 'Veicular', icon: <Car size={28} /> },
    { title: 'Imobiliário', icon: <Home size={28} /> },
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
          <span className="text-brand-red font-bold uppercase tracking-widest text-xs">Nossos Serviços</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">Soluções Corporativas</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title} 
              title={service.title} 
              icon={service.icon} 
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;