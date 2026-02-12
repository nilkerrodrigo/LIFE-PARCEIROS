import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#050505] to-black -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-5xl text-center space-y-8 z-10"
      >
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            A estrutura completa para você aprovar mais crédito e <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFFACD] to-[#D4AF37] bg-[length:200%_auto] animate-text-shine">multiplicar sua receita</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-200 font-light">
             - com processo, diagnóstico e especialistas.
          </h2>

          <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
            Chega de depender de poucos bancos e perder cliente no “não aprovado”.
            Com a <strong>Life 360 Parceiros</strong>, você opera com múltiplas instituições, diagnóstico obrigatório e suporte especializado para aumentar sua taxa de aprovação e fechar mais negócios.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-brand-gold py-2">
            <span className="flex items-center gap-1">✅ Plataforma + Mesa Especializada</span>
            <span className="flex items-center gap-1">✅ Diagnóstico (CreditIA)</span>
            <span className="flex items-center gap-1">✅ Serviços integrados</span>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
             {/* CTA 1 - Specialist */}
             <a href="#contact-form" className="btn-luxury inline-block py-4 px-10 rounded-full text-lg font-bold min-w-[300px]">
               <div className="btn-border-container">
                 <div className="btn-border-anim"></div>
               </div>
               <span className="relative z-10 flex items-center justify-center gap-2">
                 Quero falar com um especialista <ArrowRight size={20} />
               </span>
               <div className="btn-luxury-shine"></div>
             </a>
          </div>
          
          <p className="text-xs text-gray-600 mt-4">
            🔒 Seus dados são protegidos e usados apenas para contato.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;