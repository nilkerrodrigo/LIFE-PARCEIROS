import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Users, MonitorSmartphone, Layers, GraduationCap, Headphones } from 'lucide-react';

const DeliverableItem = ({ title, desc, icon }: any) => (
    <div className="flex items-start gap-4 p-5 md:p-6 rounded-xl bg-[#111] border border-white/5 hover:border-brand-gold/30 transition-colors">
        <div className="mt-1 text-brand-gold shrink-0">
            {icon}
        </div>
        <div>
            <h3 className="text-white font-bold text-base md:text-lg mb-1 md:mb-2">{title}</h3>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{desc}</p>
        </div>
    </div>
);

const Academy: React.FC = () => {
  return (
    <section id="academy" className="py-16 md:py-24 px-6 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">Tudo o que você precisa em um só lugar</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12">
            <DeliverableItem 
                icon={<Users size={22} className="md:w-6 md:h-6" />}
                title="Mesa Especializada"
                desc="Com orientação e apoio em casos e estratégias."
            />
             <DeliverableItem 
                icon={<BrainCircuit size={22} className="md:w-6 md:h-6" />}
                title="CreditIA Diagnóstico"
                desc="Obrigatório com direcionamento de perfil e consultas."
            />
             <DeliverableItem 
                icon={<MonitorSmartphone size={22} className="md:w-6 md:h-6" />}
                title="Plataforma Digital"
                desc="Para gestão e acompanhamento dos atendimentos."
            />
             <DeliverableItem 
                icon={<Layers size={22} className="md:w-6 md:h-6" />}
                title="Serviços Integrados"
                desc="Para aumentar taxa de aprovação e ticket."
            />
             <DeliverableItem 
                icon={<GraduationCap size={22} className="md:w-6 md:h-6" />}
                title="Treinamento e Academy"
                desc="Para operação e crescimento contínuo."
            />
             <DeliverableItem 
                icon={<Headphones size={22} className="md:w-6 md:h-6" />}
                title="Suporte técnico"
                desc="Suporte operacional para destravar sua rotina."
            />
        </div>
        
        <div className="flex justify-center">
            <a href="#contact-form" className="btn-luxury px-8 py-3 md:px-12 md:py-4 rounded-full font-bold text-sm md:text-base w-full md:w-auto text-center">
                <div className="btn-border-container">
                   <div className="btn-border-anim"></div>
                </div>
                <span className="relative z-10">QUERO ACESSO À PLATAFORMA</span>
                <div className="btn-luxury-shine"></div>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Academy;