import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const Expert: React.FC = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-[#050505] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-brand-gold/5 blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* Visual Representation (Video) */}
        <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 order-2 md:order-1"
        >
             <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#101010] aspect-video group">
                <video 
                    src="http://life360parceiros.com.br/wp-content/uploads/2026/02/video-life.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover"
                />
            </div>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-6 md:space-y-8 order-1 md:order-2"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Sua operação de reabilitação de crédito em um só lugar, com <span className="text-brand-gold">método e estrutura.</span>
          </h2>
          
          <div className="space-y-4 text-gray-400 text-sm md:text-base leading-relaxed">
              <p>
                A Life 360 Parceiros é uma plataforma para parceiros que querem organizar a rotina, padronizar a execução e acompanhar cada atendimento com clareza do início ao fim.
              </p>
              <p>
                Você centraliza informações, reduz retrabalho e ganha previsibilidade para escalar com consistência.
              </p>
              <p className="font-medium text-white">
                Você adquire acesso à plataforma, aos processos e ao suporte do ecossistema Life 360.
              </p>
          </div>

          <ul className="space-y-3">
            {[
                "Plataforma para organizar e acompanhar atendimentos",
                "Processos prontos para execução rápida e padronizada",
                "Suporte operacional para destravar a rotina",
                "Materiais e treinamentos para evoluir performance",
                "Esteira de soluções para aumentar ticket e oportunidades"
            ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full border border-brand-gold/30 flex items-center justify-center shrink-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-brand-gold"></div>
                    </div>
                    <span className="text-gray-300 text-sm">{item}</span>
                </li>
            ))}
          </ul>

          <div className="pt-4">
            <a href="#plans" className="btn-luxury px-8 py-4 rounded-full text-xs md:text-sm font-bold inline-block">
                <div className="btn-border-container"><div className="btn-border-anim"></div></div>
                <span className="relative z-10">QUERO VER COMO FUNCIONA POR DENTRO</span>
                <div className="btn-luxury-shine"></div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Expert;