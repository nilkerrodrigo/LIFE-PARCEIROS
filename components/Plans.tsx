import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Briefcase, Users } from 'lucide-react';

const PlanCard = ({ title, price, description, features, cta, highlight = false, badge = "" }: any) => {
    return (
        <div className={`relative flex flex-col p-6 md:p-8 rounded-2xl border transition-all duration-300 ${highlight ? 'bg-[#1a1a1a] border-brand-gold/50 shadow-[0_0_30px_rgba(212,175,55,0.1)] scale-100 md:scale-105 z-10' : 'bg-[#101010] border-white/10 hover:border-white/20'}`}>
            {badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gold text-black text-[10px] md:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg whitespace-nowrap">
                    {badge}
                </div>
            )}
            
            <div className="mb-6 text-center">
                <h3 className={`text-xl font-bold mb-2 ${highlight ? 'text-brand-gold' : 'text-white'}`}>{title}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-sm text-gray-500">R$</span>
                    <span className={`font-bold text-white ${highlight ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl'}`}>{price}</span>
                </div>
                <p className="text-xs md:text-sm text-gray-400">{description}</p>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
                {features.map((feat: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${highlight ? 'text-brand-gold' : 'text-gray-500'}`} />
                        {feat}
                    </li>
                ))}
            </ul>

            <a href="https://chat.whatsapp.com/G720XYiM1I2HMMB20nMwX6" target="_blank" rel="noopener noreferrer" className={`w-full py-3 rounded-xl font-bold text-center text-sm transition-all whitespace-nowrap ${highlight ? 'btn-luxury text-white' : 'bg-transparent border border-white/20 text-white hover:border-brand-gold hover:text-brand-gold'}`}>
                {highlight ? (
                    <>
                        <div className="btn-border-container"><div className="btn-border-anim"></div></div>
                        <span className="relative z-10">{cta}</span>
                        <div className="btn-luxury-shine"></div>
                    </>
                ) : (
                    cta
                )}
            </a>
        </div>
    );
};

const Plans: React.FC = () => {
  return (
    <section id="plans" className="py-10 md:py-24 px-6 bg-[#050505] relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">Escolha o plano certo para sua fase</h2>
            <p className="text-gray-400 text-sm md:text-base">Valide rápido ou escale com marca própria.</p>
        </div>

        {/* Network Section - Moved UP and Highlighted */}
        <div className="mb-12 md:mb-16">
            <div className="bg-gradient-to-r from-[#101010] via-[#1a1a1a] to-[#101010] p-6 md:p-8 rounded-2xl border border-brand-gold/30 shadow-[0_0_30px_rgba(212,175,55,0.08)] max-w-4xl mx-auto text-center relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50"></div>
                 
                 <div className="flex flex-col items-center justify-center gap-3 mb-4">
                     <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-1">
                        <Users size={24} />
                     </div>
                     <h4 className="text-xl md:text-2xl font-bold text-white flex items-center justify-center gap-2">
                        Rede de Indicações Estruturada
                     </h4>
                 </div>
                 
                 <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto">
                    Cadastre indicadores para trazer oportunidades e gerencie tudo na plataforma. 
                    <span className="text-brand-gold font-medium"> Foco em processo:</span> indicação entra, vira lead, vai para pipeline e contrato. Transparência total com comissões registradas.
                 </p>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
            <PlanCard 
                title="Plano Empreendedor"
                price="97"
                description="Para quem quer começar rápido com a marca Life360."
                features={[
                    "Operação com a estrutura Life360",
                    "Ideal para validar, aprender e ganhar ritmo",
                    "Suporte e treinamento para executar com padrão",
                    "Acesso completo à plataforma"
                ]}
                cta="Começar no Empreendedor"
                highlight={false}
            />

            <PlanCard 
                title="Business White Label"
                price="347"
                description="Para quem quer operar com marca própria e escalar com equipe."
                features={[
                    "White Label com sua marca",
                    "Gestão de equipe e permissões",
                    "Ideal para quem já tem base de clientes",
                    "Estrutura para crescimento estruturado",
                    "Acesso prioritário a novos produtos"
                ]}
                cta="Quero o Business White Label"
                badge="Recomendado"
                highlight={true}
            />
        </div>

        <div className="mt-8 md:mt-16 bg-[#101010] p-6 md:p-8 rounded-2xl border border-white/5 text-center max-w-3xl mx-auto">
             <h4 className="text-lg font-bold text-white mb-2">Regra simples de decisão</h4>
             <div className="flex flex-col md:flex-row gap-6 justify-center mt-4 text-sm text-gray-400">
                <p className="flex-1">👉 Se você está começando ou quer validar a operação com baixo custo, vá de <strong>Empreendedor</strong>.</p>
                <div className="hidden md:block w-px bg-white/10"></div>
                <p className="flex-1">👉 Se você já vende crédito, quer marca própria e pretende colocar time para rodar, vá de <strong>Business White Label</strong>.</p>
             </div>
        </div>

      </div>
    </section>
  );
};

export default Plans;