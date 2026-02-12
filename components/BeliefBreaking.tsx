import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, XCircle, ArrowDown } from 'lucide-react';

const BeliefBreaking: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-neutral-900/30 border-y border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-red-900/20 border border-red-500/20 px-4 py-2 rounded-full text-red-500 text-sm font-semibold mb-6"
            >
                <AlertTriangle size={16} />
                <span>IDENTIFICAÇÃO</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Se você trabalha com crédito, provavelmente já vive isso:
            </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
                "Você perde vendas porque o banco “não aprovou” - e ninguém explica o motivo com clareza.",
                "Você depende de 1–3 instituições… e quando a regra muda, sua operação despenca.",
                "Você vira “faz tudo”: documento, pendência, análise, follow-up… e o dia vira caos.",
                "Você indica serviços importantes pro cliente, mas não monetiza - e vê dinheiro indo embora."
            ].map((pain, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4 p-6 bg-black border border-white/5 rounded-xl hover:border-red-900/50 transition-colors"
                >
                    <div className="mt-1">
                        <XCircle className="text-red-600" size={24} />
                    </div>
                    <p className="text-gray-300 text-lg">{pain}</p>
                </motion.div>
            ))}
        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
        >
            <h3 className="text-2xl font-bold text-white">
                No fim, você trabalha muito e aprova menos do que poderia.
            </h3>
            
            <a href="#contact-form" className="inline-flex items-center gap-2 text-brand-gold font-bold uppercase tracking-wider hover:text-white transition-colors">
                Quero destravar minhas aprovações <ArrowDown size={18} />
            </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BeliefBreaking;