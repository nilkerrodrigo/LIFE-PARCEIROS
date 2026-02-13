import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, FileCheck2, HeadphonesIcon, BookOpen, Layers } from 'lucide-react';

const DeliverableCard = ({ title, items, icon }: any) => (
    <div className="bg-[#101010] p-6 md:p-8 rounded-xl border border-white/5 hover:border-brand-gold/20 transition-colors h-full flex flex-col">
        <div className="flex items-center gap-3 mb-6">
            <div className="text-brand-gold p-2 bg-brand-gold/10 rounded-lg">
                {icon}
            </div>
            <h3 className="text-white font-bold text-lg">{title}</h3>
        </div>
        <ul className="space-y-3 flex-1">
            {items.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/50 mt-1.5 shrink-0"></span>
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

const Academy: React.FC = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">O que você recebe ao entrar</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
             <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]">
                 <DeliverableCard 
                    icon={<Monitor className="w-6 h-6" />}
                    title="Plataforma de gestão"
                    items={[
                        "Cadastro e organização de clientes",
                        "Pipeline por etapas e status",
                        "Registro de informações em um só lugar",
                        "Controle de pendências",
                        "Histórico para acompanhamento"
                    ]}
                />
             </div>
             <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]">
                <DeliverableCard 
                    icon={<FileCheck2 className="w-6 h-6" />}
                    title="Processos e listas prontas"
                    items={[
                        "Checklists e roteiros padronizados",
                        "Listas completas para evitar falhas",
                        "Padrão de operação para manter consistência"
                    ]}
                />
             </div>
             <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]">
                 <DeliverableCard 
                    icon={<HeadphonesIcon className="w-6 h-6" />}
                    title="Suporte ao parceiro"
                    items={[
                        "Orientação operacional para o dia a dia",
                        "Apoio para ajustar fluxo",
                        "Canais de suporte conforme o plano"
                    ]}
                />
             </div>
             <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]">
                 <DeliverableCard 
                    icon={<BookOpen className="w-6 h-6" />}
                    title="Treinamentos e materiais"
                    items={[
                        "Onboarding para começar certo",
                        "Materiais para elevar performance",
                        "Evolução contínua para você e seu time"
                    ]}
                />
             </div>
             <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]">
                 <DeliverableCard 
                    icon={<Layers className="w-6 h-6" />}
                    title="Esteira de soluções"
                    items={[
                        "Soluções integradas ao ecossistema",
                        "Caminho organizado para ofertar mais valor"
                    ]}
                />
             </div>
        </div>
        
        <div className="mt-16 flex justify-center">
            <a href="#plans" className="btn-luxury px-10 py-4 rounded-full font-bold text-sm md:text-base">
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