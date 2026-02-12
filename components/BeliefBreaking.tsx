import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

const BeliefBreaking: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-neutral-900/50 border-y border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 px-4 py-2 rounded-full text-brand-gold text-sm font-semibold mb-6"
        >
            <AlertCircle size={16} />
            <span>QUEBRA DE CRENÇA</span>
        </motion.div>
        
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-8"
        >
            A maioria das pessoas acha que precisa de <span className="line-through text-gray-500 decoration-brand-gold">dinheiro</span> pra começar...
        </motion.h2>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-black/50 p-8 rounded-2xl border border-white/10"
        >
            <p className="text-xl text-gray-300 font-light mb-6">Mas a verdade é outra:</p>
            <ul className="grid md:grid-cols-2 gap-4 text-left">
                {[
                    "O mercado de reabilitação de crédito cresce todos os meses",
                    "Milhões de CPFs estão negativados no Brasil",
                    "Falta operador preparado para atender essa demanda",
                    "Quem domina estrutura de CPF, domina escala"
                ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-400">
                        <span className="text-brand-gold font-bold">✔</span> {item}
                    </li>
                ))}
            </ul>
            <p className="mt-8 text-white font-bold text-lg border-t border-white/10 pt-6">
                Você não precisa de capital alto. Precisa de <span className="text-brand-gold">método, direção e estrutura.</span>
            </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BeliefBreaking;