import React from 'react';
import { ArrowRight } from 'lucide-react';

const Closing: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-black relative border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Se você quer resultado em reabilitação de crédito, <span className="text-brand-gold">comece pela estrutura.</span>
            </h2>
            
            <p className="text-gray-400 text-base md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Você pode continuar operando no manual, apagando incêndio e perdendo follow up. 
                Ou pode operar com plataforma, processos e padrão, e transformar volume em resultado.
            </p>

            <div className="flex flex-col items-center gap-4">
                 <a href="#plans" className="btn-luxury px-8 py-5 rounded-full text-sm md:text-base font-bold min-w-[320px]">
                    <div className="btn-border-container"><div className="btn-border-anim"></div></div>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        QUERO CONHECER E VIRAR PARCEIRO <ArrowRight size={18} />
                    </span>
                    <div className="btn-luxury-shine"></div>
                </a>
                <p className="text-xs text-gray-500">
                    Atendimento rápido e sem compromisso.
                </p>
            </div>
        </div>
    </section>
  );
};

export default Closing;