import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-32 md:pb-20 px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#050505] to-black -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-5xl text-center space-y-6 md:space-y-8 z-10"
      >
        <div className="space-y-4 md:space-y-6">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.15] md:leading-[1.1]">
            A estrutura completa para você aprovar mais crédito e <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFFACD] to-[#D4AF37] bg-[length:200%_auto] animate-text-shine">multiplicar sua receita</span>
          </h1>
          
          <h2 className="text-lg md:text-2xl text-gray-200 font-light">
            com processo diagnóstico e especialistas.
          </h2>

          <p className="max-w-3xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed">
            Chega de depender de poucos bancos e perder cliente no não aprovado.
            Com a <strong>Life 360 Parceiros</strong> você opera com múltiplas instituições diagnóstico obrigatório e suporte especializado para aumentar sua taxa de aprovação e fechar mais negócios.
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs md:text-sm font-medium text-brand-gold py-2 px-4">
            <span className="flex items-center gap-1">✅ Plataforma e Mesa</span>
            <span className="flex items-center gap-1">✅ Diagnóstico CreditIA</span>
            <span className="flex items-center gap-1">✅ Serviços integrados</span>
          </div>

          <div className="pt-6 md:pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
             {/* CTA Principal */}
             <a href="#contact-form" className="btn-luxury inline-block py-3 px-6 md:py-4 md:px-10 rounded-full text-base md:text-lg font-bold w-full md:w-auto min-w-[260px] md:min-w-[300px]">
               <div className="btn-border-container">
                 <div className="btn-border-anim"></div>
               </div>
               <span className="relative z-10 flex items-center justify-center gap-2">
                 Quero falar com um especialista <ArrowRight size={18} className="md:w-5 md:h-5" />
               </span>
               <div className="btn-luxury-shine"></div>
             </a>
          </div>
          
          <div className="flex flex-col items-center gap-1 mt-4">
            <p className="text-xs md:text-sm text-gray-400">
              Leva 1 minuto e não tem compromisso.
            </p>
            <p className="text-[10px] md:text-xs text-gray-600">
              🔒 Seus dados são protegidos e usados apenas para contato.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;