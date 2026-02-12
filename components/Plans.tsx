import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const PlanCard = ({ title, price, features, recommended, btnText }: any) => (
    <div className={`relative p-8 rounded-3xl border ${recommended ? 'bg-[#1a1a1a] border-brand-gold shadow-[0_0_40px_rgba(212,175,55,0.15)] transform md:-translate-y-4' : 'bg-black border-white/10'} flex flex-col`}>
        {recommended && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-gold text-black px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg">
                Mais Popular
            </div>
        )}
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <div className="mb-6">
            <span className="text-4xl font-bold text-white">R$ {price}</span>
        </div>
        
        <ul className="space-y-4 mb-8 flex-1">
            {features.map((feat: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                    <Check className="w-5 h-5 text-brand-gold shrink-0" />
                    {feat}
                </li>
            ))}
        </ul>

        <button className={`w-full py-4 rounded-xl font-bold transition-all btn-luxury group`}>
             <div className="btn-border-container">
                <div className="btn-border-anim"></div>
             </div>
             <span className="relative z-10">{btnText}</span>
             <div className="btn-luxury-shine"></div>
        </button>
    </div>
);

const Plans: React.FC = () => {
  return (
    <section id="plans" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Escolha como deseja começar</h2>
            <p className="text-gray-400">Planos flexíveis para cada estágio da sua jornada.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
            <PlanCard 
                title="Plano Empreendedor"
                price="97"
                features={[
                    "Acesso ao treinamento Life 360",
                    "Metodologia de operação PF",
                    "Estrutura de captação de clientes",
                    "Estratégias de reabilitação e score",
                    "Direcionamento de monetização",
                    "Ideal para quem quer começar do zero"
                ]}
                btnText="QUERO COMEÇAR COMO EMPREENDEDOR"
            />
            <PlanCard 
                title="Plano Business"
                price="347"
                recommended={true}
                features={[
                    "Tudo do Plano Empreendedor",
                    "Acesso à plataforma operacional",
                    "Estrutura para gestão de clientes",
                    "Direcionamento estratégico",
                    "Suporte de operação",
                    "Possibilidade de escala mensal"
                ]}
                btnText="QUERO SER BUSINESS"
            />
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto overflow-x-auto">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Comparativo</h3>
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-white/10">
                        <th className="p-4 text-gray-500 font-medium">Recursos</th>
                        <th className="p-4 text-white font-bold text-center">Empreendedor</th>
                        <th className="p-4 text-brand-gold font-bold text-center bg-brand-gold/10 rounded-t-xl">Business</th>
                    </tr>
                </thead>
                <tbody className="text-gray-400">
                    {[
                        { name: "Treinamento", emp: true, bus: true },
                        { name: "Método Life 360", emp: true, bus: true },
                        { name: "Captação", emp: true, bus: true },
                        { name: "Estratégia", emp: true, bus: true },
                        { name: "Plataforma", emp: false, bus: true },
                        { name: "Suporte", emp: false, bus: true },
                        { name: "Estrutura de escala", emp: false, bus: true },
                    ].map((row, i) => (
                        <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                            <td className="p-4">{row.name}</td>
                            <td className="p-4 text-center">{row.emp ? <Check className="mx-auto text-white w-5 h-5" /> : <X className="mx-auto text-gray-700 w-5 h-5" />}</td>
                            <td className="p-4 text-center bg-brand-gold/5">{row.bus ? <Check className="mx-auto text-brand-gold w-5 h-5" /> : <X className="mx-auto text-gray-700 w-5 h-5" />}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        {/* Guarantee */}
        <div className="max-w-3xl mx-auto mt-20 text-center bg-[#151515] p-8 rounded-2xl border border-white/5">
            <h3 className="text-xl font-bold text-white mb-2">🔐 Garantia Incondicional de 7 Dias</h3>
            <p className="text-gray-400">Se não gostar do treinamento, basta solicitar o reembolso dentro do prazo. Risco zero.</p>
        </div>

        <div className="mt-16 text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
                O mercado de reabilitação de crédito está crescendo todos os dias.<br/>
                <span className="text-gray-400 text-xl font-normal">A pergunta é: você vai assistir ou vai operar?</span>
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <button className="btn-luxury px-8 py-4 rounded-full font-bold">
                    <div className="btn-border-container">
                       <div className="btn-border-anim"></div>
                    </div>
                    <span className="relative z-10">Quero entrar no Business</span>
                    <div className="btn-luxury-shine"></div>
                 </button>
                 <button className="border border-white/20 hover:bg-white/10 text-white font-bold py-4 px-8 rounded-full transition-all">
                    Quero começar como Empreendedor
                 </button>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Plans;