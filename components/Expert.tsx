import React from 'react';
import { motion } from 'framer-motion';

const Expert: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#050505]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 relative">
             <img 
               src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2670&auto=format&fit=crop" 
               alt="Thassio Andrade" 
               className="w-full h-full object-cover opacity-80"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
             <div className="absolute bottom-6 left-6 border-l-4 border-brand-gold pl-4">
                <h3 className="text-2xl font-bold text-white">Thassio Andrade</h3>
                <p className="text-brand-gold">Especialista em Crédito & Rating</p>
             </div>
          </div>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Quem é <span className="text-brand-gold">Thassio Andrade?</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Especialista em estruturação de crédito, reabilitação financeira e formação de operadores no mercado de CPF.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Criador da metodologia <strong className="text-white">Life 360 Parceiros</strong>, já ajudou centenas de pessoas a:
          </p>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-brand-gold" /> Reabilitar CPFs negativados
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-brand-gold" /> Recuperar acesso ao crédito
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-brand-gold" /> Estruturar operações de renda com crédito
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-brand-gold" /> Criar novas fontes de faturamento
            </li>
          </ul>
          <p className="text-white font-medium pt-4">
            Hoje, sua missão é formar parceiros preparados para atuar nesse mercado em expansão.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Expert;