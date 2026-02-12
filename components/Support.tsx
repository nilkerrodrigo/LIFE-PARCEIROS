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
                className="w-full flex items-center justify-between py-6 text-left hover:text-brand-gold transition-colors"
            >
                <span className="text-lg font-medium text-white pr-4">{question}</span>
                <ChevronDown className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-gold' : 'text-gray-500'}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="text-gray-400 pb-6 leading-relaxed">
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
      { q: "A Life 360 Parceiros é um banco?", a: "Não. Nós oferecemos estrutura, plataforma e suporte para intermediação e organização. As operações são realizadas por instituições/parceiros conforme regras aplicáveis." },
      { q: "O Diagnóstico (CreditIA) é obrigatório?", a: "Sim. É parte do processo para direcionar a análise e evitar retrabalho. Sem ele, a análise não avança." },
      { q: "Em quanto tempo sai uma resposta?", a: "Depende do produto e do envio correto da documentação. Quanto mais completo o envio, mais rápido o retorno da instituição." },
      { q: "Eu preciso ter experiência com crédito?", a: "Não necessariamente. Você pode começar do zero, desde que siga o processo e use o suporte/treinamento que oferecemos." },
      { q: "Como funciona o suporte?", a: "Você recebe orientação e apoio operacional/técnico para conduzir seus casos com mais eficiência através dos nossos canais oficiais." },
      { q: "Meus dados e os do cliente ficam seguros?", a: "Sim. Os dados são tratados com sigilo e em total conformidade com a LGPD." },
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-neutral-900 relative">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
          Dúvidas frequentes
        </h2>
        
        <div className="bg-black/50 rounded-2xl border border-white/5 p-8">
            {faqs.map((faq, i) => <FAQItem key={i} question={faq.q} answer={faq.a} />)}
        </div>

        <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Você pode continuar perdendo cliente no “não aprovado”… ou pode operar com estrutura.</h3>
            <p className="text-gray-400 mb-8">Se você quer aprovar mais, ganhar mais por cliente e ter uma operação previsível, a Life 360 Parceiros é o próximo passo.</p>
            <a href="#contact-form" className="btn-luxury px-10 py-4 rounded-full font-bold inline-block">
                <div className="btn-border-container"><div className="btn-border-anim"></div></div>
                <span className="relative z-10">SOLICITAR CONTATO AGORA</span>
                <div className="btn-luxury-shine"></div>
            </a>
            <p className="text-xs text-gray-500 mt-4">Resposta no WhatsApp. Sem compromisso.</p>
        </div>
      </div>
    </section>
  );
};

export default Support;