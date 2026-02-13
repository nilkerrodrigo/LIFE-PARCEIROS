import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-24 pb-10 md:pt-36 md:pb-24 px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#050505] to-black -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-5xl text-center space-y-8 z-10"
      >
        <div className="space-y-6">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.15] md:leading-[1.1]">
            Venda crédito com esteira, diagnóstico e suporte. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFFACD] to-[#D4AF37] bg-[length:200%_auto] animate-text-shine">Tudo dentro da Life 360 Parceiros.</span>
          </h1>
          
          <h2 className="text-lg md:text-xl text-gray-300 font-light max-w-4xl mx-auto">
            Você não precisa mais “tentar no escuro” nem perder cliente no “não aprovado”.
            Com a <strong>Life 360 Parceiros</strong> você opera com Diagnóstico CreditIA, consultas e soluções integradas, CRM e contratos para conduzir cada caso com método e aumentar sua receita por atendimento.
          </h2>

          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-3 md:gap-6 text-sm text-gray-400 py-4">
             <div className="flex items-center gap-2 justify-center">
                <CheckCircle2 className="text-brand-gold w-4 h-4" />
                <span>Diagnóstico CreditIA e Consultas</span>
             </div>
             <div className="flex items-center gap-2 justify-center">
                <CheckCircle2 className="text-brand-gold w-4 h-4" />
                <span>Soluções integradas</span>
             </div>
             <div className="flex items-center gap-2 justify-center">
                <CheckCircle2 className="text-brand-gold w-4 h-4" />
                <span>Pipeline e Contratos</span>
             </div>
             <div className="flex items-center gap-2 justify-center">
                <CheckCircle2 className="text-brand-gold w-4 h-4" />
                <span>Mesa e suporte operacional</span>
             </div>
          </div>

          <div className="pt-6 md:pt-8 flex flex-col items-center justify-center">
             <a href="#plans" className="btn-luxury inline-block py-4 px-10 rounded-full text-base md:text-lg font-bold min-w-[280px] md:min-w-[320px]">
               <div className="btn-border-container"><div className="btn-border-anim"></div></div>
               <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">
                 Quero escolher meu plano <ArrowRight size={18} />
               </span>
               <div className="btn-luxury-shine"></div>
             </a>
             <p className="text-[10px] md:text-xs text-gray-500 mt-4">
              🔒 Seus dados são protegidos. Acesso imediato após cadastro.
             </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;