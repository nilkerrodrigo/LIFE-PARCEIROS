import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

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
      { q: "A Life 360 Parceiros é um banco?", a: "Não. A Life 360 Parceiros oferece estrutura, plataforma e suporte. As operações seguem regras aplicáveis das instituições e parceiros." },
      { q: "O Diagnóstico CreditIA é obrigatório?", a: "Sim. Ele faz parte do processo e sem ele a análise não avança." },
      { q: "Eu posso vender com minha marca?", a: "Sim, no plano Business White Label." },
      { q: "Preciso ter experiência?", a: "Não necessariamente. Você pode começar do zero desde que siga o processo e use suporte e treinamento." },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 px-6 bg-neutral-900 relative">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-bold text-white mb-8 md:mb-12 text-center">
          Dúvidas frequentes
        </h2>
        
        <div className="bg-black/50 rounded-2xl border border-white/5 p-6 md:p-8">
            {faqs.map((faq, i) => <FAQItem key={i} question={faq.q} answer={faq.a} />)}
        </div>

        <div className="mt-12 md:mt-16 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Pare de perder venda no “não aprovado” e opere com uma esteira completa</h3>
            <p className="text-gray-400 mb-8 text-sm md:text-base">Se você quer mais controle, mais consistência e mais receita por atendimento, a Life 360 Parceiros coloca método e estrutura na sua operação.</p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a href="https://chat.whatsapp.com/G720XYiM1I2HMMB20nMwX6" target="_blank" rel="noopener noreferrer" className="btn-luxury px-8 py-3 md:px-10 md:py-4 rounded-full font-bold inline-block w-full md:w-auto text-sm md:text-base">
                    <div className="btn-border-container"><div className="btn-border-anim"></div></div>
                    <span className="relative z-10">Começar no Empreendedor</span>
                    <div className="btn-luxury-shine"></div>
                </a>
                <a href="https://chat.whatsapp.com/G720XYiM1I2HMMB20nMwX6" target="_blank" rel="noopener noreferrer" className="px-8 py-3 md:px-10 md:py-4 rounded-full font-bold inline-block w-full md:w-auto text-sm md:text-base border border-white/20 hover:border-brand-gold hover:text-brand-gold transition-all">
                    Quero o Business White Label
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Support;