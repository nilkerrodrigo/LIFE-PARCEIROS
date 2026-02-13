import React from 'react';
import { Check, X } from 'lucide-react';

const TargetAudience: React.FC = () => {
  return (
    <section className="py-10 md:py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-5xl font-bold text-white text-center mb-8 md:mb-16">A Life 360 Parceiros é para você que</h2>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* For Whom */}
            <div className="bg-[#0f0f0f] p-6 md:p-8 rounded-2xl border border-green-900/30 shadow-[0_0_30px_rgba(0,255,0,0.05)]">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                        <Check size={18} />
                    </span>
                    Para quem é
                </h3>
                <ul className="space-y-3 md:space-y-4">
                    {[
                        "Atua com reabilitação de crédito e quer mais organização",
                        "Quer parar de depender de improviso para conduzir atendimentos",
                        "Quer padronizar execução para melhorar conversão",
                        "Quer ter controle do que está acontecendo com cada cliente",
                        "Quer escalar mantendo qualidade e clareza",
                        "Quer ampliar oportunidades com um ecossistema completo"
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                            <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Not For Whom */}
            <div className="bg-[#0f0f0f] p-6 md:p-8 rounded-2xl border border-red-900/30 shadow-[0_0_30px_rgba(255,0,0,0.05)]">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                        <X size={18} />
                    </span>
                    Para quem não é
                </h3>
                <ul className="space-y-3 md:space-y-4">
                    {[
                        "Quem busca promessa de resultado garantido",
                        "Quem não quer seguir processo e padrão",
                        "Quem quer operar sem controle e sem rotina"
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                            <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
          </div>
          
          <div className="mt-8 md:mt-12 text-center">
            <a href="https://chat.whatsapp.com/G720XYiM1I2HMMB20nMwX6" target="_blank" rel="noopener noreferrer" className="text-brand-gold font-bold hover:text-white transition-colors text-sm md:text-base">QUERO SABER SE FAZ SENTIDO PARA MIM &rarr;</a>
          </div>
      </div>
    </section>
  );
};

export default TargetAudience;