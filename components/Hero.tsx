import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  const whatsappLink = "https://chat.whatsapp.com/G720XYiM1I2HMMB20nMwX6";

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden">
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
            Com a <strong>Life 360 Parceiros</strong> você opera com Diagnóstico CreditIA obrigatório, consultas e soluções integradas, CRM e contratos para conduzir cada caso com método e aumentar sua receita por atendimento.
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

          <div className="pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
             {/* CTA 1: Empreendedor */}
             <div className="flex flex-col items-center w-full md:w-auto">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-luxury w-full md:w-auto inline-block py-3 px-6 md:py-4 md:px-8 rounded-full text-sm md:text-base font-bold min-w-[280px]">
                  <div className="btn-border-container"><div className="btn-border-anim"></div></div>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Quero começar no Empreendedor <ArrowRight size={18} />
                  </span>
                  <div className="btn-luxury-shine"></div>
                </a>
                <span className="text-[10px] text-gray-500 mt-2">Acesso com a marca Life360. Ideal para iniciar.</span>
             </div>

             {/* CTA 2: Business */}
             <div className="flex flex-col items-center w-full md:w-auto">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto inline-block py-3 px-6 md:py-4 md:px-8 rounded-full text-sm md:text-base font-bold min-w-[280px] border border-white/20 hover:border-brand-gold hover:text-brand-gold transition-all bg-white/5 backdrop-blur-sm">
                  <span className="flex items-center justify-center gap-2">
                    Quero o Business White Label
                  </span>
                </a>
                <span className="text-[10px] text-gray-500 mt-2">Sua marca, sua operação. Ideal para escalar.</span>
             </div>
          </div>
          
          <div className="flex flex-col items-center gap-1 mt-6">
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