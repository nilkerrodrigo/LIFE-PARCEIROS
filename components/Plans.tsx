import React from 'react';
import { motion } from 'framer-motion';
import { Check, Users } from 'lucide-react';

const PlanCard = ({ title, price, description, features, cta, link, highlight = false, badge = "" }: any) => {
    return (
        <div className={`relative flex flex-col p-6 md:p-8 rounded-2xl border transition-all duration-300 ${highlight ? 'bg-[#1a1a1a] border-brand-gold/50 shadow-[0_0_30px_rgba(212,175,55,0.1)] scale-100 md:scale-105 z-10' : 'bg-[#101010] border-white/10 hover:border-white/20'}`}>
            {badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gold text-black text-[10px] md:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {badge}
                </div>
            )}
            
            <div className="mb-6 text-center">
                <h3 className={`text-xl font-bold mb-2 ${highlight ? 'text-brand-gold' : 'text-white'}`}>{title}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-sm text-gray-500">R$</span>
                    <span className="text-3xl md:text-4xl font-bold text-white">{price}</span>
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

            <a href={link} target="_blank" rel="noopener noreferrer" className={`w-full py-3 rounded-xl font-bold text-center text-sm transition-all ${highlight ? 'bg-brand-gold text-black hover:bg-white' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                {cta}
            </a>
        </div>
    );
};

const Plans: React.FC = () => {
  const linkEmpreendedor = "https://app.monetizze.com.br/checkout/DEF372866";
  const linkBusiness = "https://app.monetizze.com.br/checkout/DDM372908";

  return (
    <section id="plans" className="py-16 md:py-24 px-6 bg-[#050505] relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">Escolha o plano certo para sua fase</h2>
            <p className="text-gray-400 text-sm md:text-base">Valide rápido ou escale com marca própria.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PlanCard 
                title="Plano Empreendedor"
                price="97"
                description="Para quem quer começar rápido com a marca Life360."
                features={[
                    "Operação com a estrutura Life360",
                    "Ideal para validar, aprender e ganhar ritmo",
                    "Suporte e treinamento para executar com padrão"
                ]}
                cta="Começar no Empreendedor"
                link={linkEmpreendedor}
                badge="Mais Popular"
                highlight={true}
            />

            <PlanCard 
                title="Business White Label"
                price="347"
                description="Para quem quer operar com marca própria e escalar com equipe."
                features={[
                    "White Label com sua marca",
                    "Gestão de equipe e permissões",
                    "Ideal para quem já tem base de clientes e quer crescimento estruturado"
                ]}
                cta="Quero o Business White Label"
                link={linkBusiness}
            />
        </div>

        <div className="mt-12 md:mt-16 bg-[#101010] p-6 md:p-8 rounded-2xl border border-white/5 text-center max-w-3xl mx-auto">
             <h4 className="text-lg font-bold text-white mb-2">Regra simples de decisão</h4>
             <div className="flex flex-col md:flex-row gap-6 justify-center mt-4 text-sm text-gray-400">
                <p className="flex-1">👉 Se você está começando ou quer validar a operação com baixo custo, vá de <strong>Empreendedor</strong>.</p>
                <div className="hidden md:block w-px bg-white/10"></div>
                <p className="flex-1">👉 Se você já vende crédito, quer marca própria e pretende colocar time para rodar, vá de <strong>Business White Label</strong>.</p>
             </div>
        </div>

        <div className="mt-12 md:mt-16 text-center max-w-2xl mx-auto">
             <h4 className="text-white font-bold mb-2 flex items-center justify-center gap-2">
                <Users size={18} className="text-brand-gold" /> Rede de Indicações Estruturada
             </h4>
             <p className="text-xs md:text-sm text-gray-500">
                Cadastre indicadores para trazer oportunidades e gerencie tudo na plataforma. Foco em processo: indicação entra, vira lead, vai para pipeline e contrato. Transparência total com comissões registradas.
             </p>
        </div>

      </div>
    </section>
  );
};

export default Plans;