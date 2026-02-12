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
      { q: "A Life 360 Parceiros é um banco?", a: "Não. A Life 360 Parceiros oferece estrutura plataforma e suporte. As operações são realizadas por instituições parceiras conforme regras aplicáveis." },
      { q: "O Diagnóstico CreditIA é obrigatório?", a: "Sim. Ele faz parte do processo e sem ele a análise não avança." },
      { q: "Em quanto tempo sai uma resposta?", a: "Depende do produto e da documentação enviada. Documentação completa acelera o processo." },
      { q: "Preciso ter experiência com crédito?", a: "Não necessariamente. Você pode começar do zero desde que siga o processo e use o suporte e o treinamento." },
      { q: "Como funciona o suporte?", a: "Você recebe orientação e apoio para conduzir seus casos com mais eficiência." },
      { q: "Meus dados e os do cliente ficam seguros?", a: "Sim. Os dados devem ser tratados com sigilo e em conformidade com a LGPD." },
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
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Você pode continuar perdendo cliente no não aprovado ou pode operar com estrutura</h3>
            <p className="text-gray-400 mb-8 text-sm md:text-base">Se você quer aprovar mais, ganhar mais por cliente e ter uma operação previsível a Life 360 Parceiros é o próximo passo.</p>
            <a href="#contact-form" className="btn-luxury px-8 py-3 md:px-10 md:py-4 rounded-full font-bold inline-block w-full md:w-auto text-sm md:text-base">
                <div className="btn-border-container"><div className="btn-border-anim"></div></div>
                <span className="relative z-10">Solicitar contato e condições</span>
                <div className="btn-luxury-shine"></div>
            </a>
            <p className="text-xs text-gray-500 mt-4">Resposta por WhatsApp e sem compromisso.</p>
        </div>
      </div>
    </section>
  );
};

export default Support;