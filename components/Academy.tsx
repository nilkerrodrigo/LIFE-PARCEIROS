import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Users, MonitorSmartphone, Layers, GraduationCap, Headphones } from 'lucide-react';

const DeliverableItem = ({ title, desc, icon }: any) => (
    <div className="flex items-start gap-4 p-6 rounded-xl bg-[#111] border border-white/5 hover:border-brand-gold/30 transition-colors">
        <div className="mt-1 text-brand-gold shrink-0">
            {icon}
        </div>
        <div>
            <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
        </div>
    </div>
);

const Academy: React.FC = () => {
  return (
    <section id="academy" className="py-24 px-6 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Tudo o que você precisa em um só lugar</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <DeliverableItem 
                icon={<Users size={24} />}
                title="Mesa Especializada"
                desc="Orientação e apoio em casos e estratégias de encaminhamento."
            />
             <DeliverableItem 
                icon={<BrainCircuit size={24} />}
                title="CreditIA (Diagnóstico)"
                desc="Obrigatório: direcionamento de perfil e consulta/pendências para evitar retrabalho."
            />
             <DeliverableItem 
                icon={<MonitorSmartphone size={24} />}
                title="Plataforma Digital"
                desc="Gestão e acompanhamento centralizado dos seus atendimentos."
            />
             <DeliverableItem 
                icon={<Layers size={24} />}
                title="Serviços Integrados"
                desc="Soluções que aumentam sua taxa de aprovação e ticket médio."
            />
             <DeliverableItem 
                icon={<GraduationCap size={24} />}
                title="Academy / Treinamento"
                desc="Direcionamento completo para operação e crescimento no mercado."
            />
             <DeliverableItem 
                icon={<Headphones size={24} />}
                title="Suporte Operacional"
                desc="Técnico e operacional para destravar sua rotina e tirar dúvidas."
            />
        </div>
        
        <div className="flex justify-center">
            <a href="#contact-form" className="btn-luxury px-12 py-4 rounded-full font-bold">
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