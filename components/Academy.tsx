import React from 'react';
import { motion } from 'framer-motion';
import { Layout, ClipboardList, LifeBuoy, BookOpen, Layers } from 'lucide-react';

const DeliverableItem = ({ title, desc, icon, list }: any) => (
    <div className="flex flex-col p-6 rounded-xl bg-[#111] border border-white/5 hover:border-brand-gold/30 transition-colors h-full w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-1rem)]">
        <div className="flex items-center gap-3 mb-4">
            <div className="text-brand-gold shrink-0 p-2 bg-brand-gold/10 rounded-lg">
                {icon}
            </div>
            <h3 className="text-white font-bold text-lg">{title}</h3>
        </div>
        <ul className="space-y-2">
            {list.map((item: string, i: number) => (
                <li key={i} className="text-gray-400 text-sm leading-relaxed flex items-start gap-2">
                    <span className="w-1 h-1 bg-gray-500 rounded-full mt-1.5 shrink-0"></span>
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

const Academy: React.FC = () => {
  return (
    <section id="academy" className="py-10 md:py-24 px-6 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">O que você recebe ao entrar para a Life 360 Parceiros</h2>
        </div>

        {/* Changed to Flex wrap to center last items */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 md:mb-12">
             <DeliverableItem 
                icon={<Layout size={24} />}
                title="Plataforma de gestão"
                list={[
                    "Cadastro e organização de clientes",
                    "Pipeline por etapas e status",
                    "Registro de informações essenciais",
                    "Controle de pendências",
                    "Histórico para acompanhamento"
                ]}
            />
            <DeliverableItem 
                icon={<ClipboardList size={24} />}
                title="Processos e listas prontas"
                list={[
                    "Checklists e roteiros padronizados",
                    "Listas completas para evitar falhas",
                    "Padrão de operação consistente"
                ]}
            />
             <DeliverableItem 
                icon={<LifeBuoy size={24} />}
                title="Suporte ao parceiro"
                list={[
                    "Orientação operacional para o dia a dia",
                    "Apoio para ajustar fluxo",
                    "Canais de suporte dedicados"
                ]}
            />
             <DeliverableItem 
                icon={<BookOpen size={24} />}
                title="Treinamentos e materiais"
                list={[
                    "Onboarding para começar certo",
                    "Materiais para elevar performance",
                    "Evolução contínua para você e seu time"
                ]}
            />
             <DeliverableItem 
                icon={<Layers size={24} />}
                title="Esteira de soluções"
                list={[
                    "Soluções integradas ao ecossistema",
                    "Caminho organizado para ofertar mais valor",
                    "Diversificação de oportunidades"
                ]}
            />
        </div>
        
        <div className="flex justify-center">
            <a href="https://chat.whatsapp.com/G720XYiM1I2HMMB20nMwX6" target="_blank" rel="noopener noreferrer" className="btn-luxury px-8 py-3 md:px-12 md:py-4 rounded-full font-bold text-sm md:text-base w-full md:w-auto text-center">
                <div className="btn-border-container">
                   <div className="btn-border-anim"></div>
                </div>
                <span className="relative z-10">QUERO SER PARCEIRO LIFE 360</span>
                <div className="btn-luxury-shine"></div>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Academy;