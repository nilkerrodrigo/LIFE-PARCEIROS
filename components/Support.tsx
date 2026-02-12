import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, HelpCircle } from 'lucide-react';

const Support: React.FC = () => {
  return (
    <section id="support" className="py-32 px-6 relative bg-neutral-900 overflow-hidden">
        {/* Radial sheen */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[100px]" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto text-center z-10"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Ficou alguma dúvida?
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Nossa equipe de especialistas está pronta para analisar o seu caso e oferecer a melhor solução financeira.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="group relative px-8 py-4 rounded-full bg-brand-gold text-black font-semibold text-lg overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:scale-105 w-full sm:w-auto">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <span className="flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Falar com Suporte
            </span>
          </button>

          <button className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-lg hover:bg-white/5 transition-all hover:border-white w-full sm:w-auto">
            <span className="flex items-center justify-center gap-2">
              <HelpCircle className="w-5 h-5" />
              Perguntas Frequentes
            </span>
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Support;