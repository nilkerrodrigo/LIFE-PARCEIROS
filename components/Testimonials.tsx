import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const ReasonBlock = ({ title, delay }: { title: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="bg-[#151515] p-6 rounded-xl border border-white/5 flex items-center gap-4 hover:border-brand-gold/30 transition-colors"
    >
        <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
            <CheckCircle2 className="text-brand-gold w-6 h-6" />
        </div>
        <h4 className="text-white font-bold text-lg">{title}</h4>
    </motion.div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-black border-t border-white/5">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Por que isso funciona tão bem?
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Porque crédito não é só “enviar e torcer”. Aprovação é consequência de estrutura. Quando você tem processo, sua taxa sobe.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 text-left">
             <ReasonBlock title="Diagnóstico Certo" delay={0} />
             <ReasonBlock title="Produto Certo" delay={0.1} />
             <ReasonBlock title="Documentação Certa" delay={0.2} />
             <ReasonBlock title="Acompanhamento e Estratégia" delay={0.3} />
        </div>

        <div className="mt-12">
            <a href="#contact-form" className="btn-luxury px-8 py-3 rounded-full text-sm font-bold inline-block">
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