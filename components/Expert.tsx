import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Expert: React.FC = () => {
  return (
    <section className="py-10 md:py-24 px-6 bg-[#050505] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-brand-gold/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
        
        <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
        >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#101010] aspect-video group">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  src="https://life360parceiros.com.br/wp-content/uploads/2026/02/video-life.mp4"
                >
                    <source src="https://life360parceiros.com.br/wp-content/uploads/2026/02/video-life.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            </div>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-6 md:space-y-8 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Sua operação de reabilitação de crédito em um só lugar, com <span className="text-brand-gold">método e estrutura.</span>
          </h2>
          
          <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-4">
            <p>
                A Life 360 Parceiros é uma plataforma para parceiros que querem organizar a rotina, padronizar a execução e acompanhar cada atendimento com clareza do início ao fim.
                <br />
                Você centraliza informações, reduz retrabalho e ganha previsibilidade para escalar com consistência.
            </p>
            <p className="font-medium text-white">
                Você adquire acesso à plataforma, aos processos e ao suporte do ecossistema Life 360.
            </p>
          </div>

          <ul className="space-y-3 md:space-y-4 w-full max-w-lg md:max-w-none text-left">
            {[
                "Plataforma para organizar e acompanhar atendimentos",
                "Processos prontos para execução rápida e padronizada",
                "Suporte operacional para destravar a rotina",
                "Materiais e treinamentos para evoluir performance",
                "Esteira de soluções para aumentar ticket e oportunidades"
            ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-brand-gold shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm md:text-base">{item}</span>
                </li>
            ))}
          </ul>

          <div className="pt-2 md:pt-4 w-full md:w-auto">
            <a href="https://chat.whatsapp.com/G720XYiM1I2HMMB20nMwX6" target="_blank" rel="noopener noreferrer" className="btn-luxury px-6 py-3 md:px-8 md:py-3 rounded-full text-xs md:text-sm font-bold inline-block w-full md:w-auto text-center">
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