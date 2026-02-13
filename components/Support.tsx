import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-white/10 last:border-0">
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="w-full flex items-center justify-between py-4 md:py-6 text-left hover:text-brand-gold transition-colors"
            >
                <span className="text-base md:text-lg font-medium text-white pr-4">{question}</span>
                <ChevronDown className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-gold' : 'text-gray-500'} w-5 h-5 md:w-6 md:h-6 shrink-0`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="text-gray-400 pb-4 md:pb-6 leading-relaxed text-sm md:text-base">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Support: React.FC = () => {
  const faqs = [
      { q: "A Life 360 Parceiros vende crédito?", a: "Não. A Life 360 Parceiros é uma plataforma e um ecossistema para parceiros que atuam com reabilitação de crédito e querem estrutura, processos e suporte para operar melhor." },
      { q: "A Life 360 Parceiros vende diagnóstico?", a: "Não. A plataforma pode ter recursos internos para organização e qualificação do atendimento, mas o produto é o acesso à plataforma e à estrutura para parceiros." },
      { q: "O que eu adquiro ao entrar?", a: "Você adquire acesso à plataforma e ao ecossistema Life 360 Parceiros conforme o plano escolhido, incluindo processos, listas, suporte e materiais disponíveis." },
      { q: "Preciso ter experiência?", a: "Não necessariamente. Você consegue começar com onboarding e com processos prontos, seguindo o padrão da plataforma." },
      { q: "Isso serve para quem atende pouco ou muito volume?", a: "Serve para os dois. Quem atende pouco ganha padrão e velocidade. Quem atende muito ganha controle e escala sem bagunça." },
      { q: "Meus dados ficam seguros?", a: "Sim. Os dados devem ser tratados com sigilo e conforme a LGPD seguindo políticas e boas práticas aplicáveis." },
  ];

  return (
    <section id="faq" className="py-10 md:py-24 px-6 bg-neutral-900 relative">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-bold text-white mb-8 md:mb-12 text-center">
          Dúvidas frequentes
        </h2>
        
        <div className="bg-black/50 rounded-2xl border border-white/5 p-6 md:p-8">
            {faqs.map((faq, i) => <FAQItem key={i} question={faq.q} answer={faq.a} />)}
        </div>

        <div className="mt-8 md:mt-16 text-center">
            <h3 className="text-xl md:text-3xl font-bold text-white mb-4 leading-tight">
                Se você quer resultado em reabilitação de crédito, comece pela estrutura.
            </h3>
            <p className="text-gray-400 mb-8 text-sm md:text-base max-w-2xl mx-auto">
                Você pode continuar operando no manual, apagando incêndio e perdendo follow up.
                Ou pode operar com plataforma, processos e padrão, e transformar volume em resultado.
            </p>
            
            <div className="flex flex-col items-center justify-center">
                <a href="https://chat.whatsapp.com/G720XYiM1I2HMMB20nMwX6" target="_blank" rel="noopener noreferrer" className="btn-luxury px-10 py-4 rounded-full font-bold inline-block w-full md:w-auto text-base md:text-lg">
                    <div className="btn-border-container"><div className="btn-border-anim"></div></div>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        QUERO CONHECER E VIRAR PARCEIRO <ArrowRight size={20} />
                    </span>
                    <div className="btn-luxury-shine"></div>
                </a>
                <p className="text-[10px] md:text-xs text-gray-500 mt-4">
                    Atendimento rápido e sem compromisso.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Support;