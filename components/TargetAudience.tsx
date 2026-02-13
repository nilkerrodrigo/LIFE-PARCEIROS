import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

const TargetAudience: React.FC = () => {
  return (
    <section className="py-20 md:py-24 px-6 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
          {/* Button removed here as requested */}

          <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-16">A Life 360 Parceiros é para você que</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Positive */}
            <div className="bg-[#101010] p-8 md:p-10 rounded-2xl border border-green-900/20">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                        <CheckCircle2 size={16} />
                    </div>
                    <h3 className="text-xl font-bold text-white">Para quem é</h3>
                </div>
                <ul className="space-y-4">
                    {[
                        "Atua com reabilitação de crédito e quer mais organização",
                        "Quer parar de depender de improviso para conduzir atendimentos",
                        "Quer padronizar execução para melhorar conversão",
                        "Quer ter controle do que está acontecendo com cada cliente",
                        "Quer escalar mantendo qualidade e clareza",
                        "Quer ampliar oportunidades com um ecossistema completo"
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Negative */}
            <div className="bg-[#101010] p-8 md:p-10 rounded-2xl border border-red-900/20">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                        <XCircle size={16} />
                    </div>
                    <h3 className="text-xl font-bold text-white">Para quem não é</h3>
                </div>
                <ul className="space-y-4">
                    {[
                        "Quem busca promessa de resultado garantido",
                        "Quem não quer seguir processo e padrão",
                        "Quem quer operar sem controle e sem rotina"
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                            <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <a href="#plans" className="text-brand-gold text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
                QUERO SABER SE FAZ SENTIDO PARA MIM →
            </a>
          </div>
      </div>
    </section>
  );
};

export default TargetAudience;