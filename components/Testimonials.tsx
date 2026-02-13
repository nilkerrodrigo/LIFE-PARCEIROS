import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-10 md:py-24 px-6 bg-black border-t border-white/5">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6">
          Por que isso funciona tão bem
        </h2>
        <p className="text-base md:text-xl text-gray-400 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            Porque crédito não é só enviar e torcer. Aprovação é consequência de diagnóstico certo, produto certo, documentação certa e acompanhamento com estratégia. Quando você tem processo sua taxa de aprovação sobe.
        </p>
        
        <div className="mt-8 md:mt-12">
            <a href="https://chat.whatsapp.com/G720XYiM1I2HMMB20nMwX6" target="_blank" rel="noopener noreferrer" className="btn-luxury px-6 py-3 md:px-8 md:py-3 rounded-full text-xs md:text-sm font-bold inline-block w-full md:w-auto">
                <div className="btn-border-container"><div className="btn-border-anim"></div></div>
                <span className="relative z-10">QUERO VER COMO FUNCIONA NA PRÁTICA</span>
                <div className="btn-luxury-shine"></div>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;