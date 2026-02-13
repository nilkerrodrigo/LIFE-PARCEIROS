import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, XCircle, ArrowDown } from 'lucide-react';

const BeliefBreaking: React.FC = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-[#080808] border-y border-white/5 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-red-900/10 border border-red-500/20 px-3 py-1.5 rounded-full text-red-500 text-xs font-bold uppercase tracking-wider mb-6"
            >
                <AlertTriangle size={14} />
                <span>Problema Real</span>
            </motion.div>
            
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-6 leading-tight">
                O que mais trava resultado em reabilitação de crédito não é esforço. <span className="text-white underline decoration-red-600/50 underline-offset-4">É falta de estrutura.</span>
            </h2>
            
            <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
                Quando a operação depende de anotações, mensagens soltas e um processo diferente para cada cliente, você perde tempo, perde padrão e perde conversão. E no final o volume não vira resultado.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">
            {[
                "Atendimento sem padrão e sem checklist",
                "Informações espalhadas e follow up perdido",
                "Retrabalho por falta de organização de documentos e etapas",
                "Dificuldade para acompanhar o que está pendente e o que vem depois",
                "Falta de controle para escalar sem virar bagunça",
                "Time sem treinamento contínuo e execução inconsistente"
            ].map((pain, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4 p-5 md:p-6 bg-[#0f0f0f] border border-white/5 rounded-xl hover:border-red-900/30 transition-colors group"
                >
                    <div className="mt-1 group-hover:scale-110 transition-transform duration-300">
                        <XCircle className="text-red-600 w-5 h-5" />
                    </div>
                    <p className="text-gray-300 text-sm md:text-base">{pain}</p>
                </motion.div>
            ))}
        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
        >
            <h3 className="text-lg md:text-2xl font-bold text-white px-4">
                A reabilitação de crédito cresce de verdade quando você tem processo, controle e consistência.
            </h3>
            
            <a href="#plans" className="inline-flex items-center gap-2 text-brand-gold font-bold uppercase tracking-wider hover:text-white transition-colors text-xs md:text-sm">
                QUERO ORGANIZAR MINHA OPERAÇÃO <ArrowDown size={14} />
            </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BeliefBreaking;