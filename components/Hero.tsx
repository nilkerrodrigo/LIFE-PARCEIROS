import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

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
            Como construir uma estrutura que fatura <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFFACD] to-[#D4AF37] bg-[length:200%_auto] animate-text-shine">no mínimo 10K</span> já nos próximos meses
          </h1>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl font-light leading-relaxed">
            Mesmo começando do zero e usando apenas o CPF como alavanca. Aprenda a operar no mercado de reabilitação de crédito e estruturação de Rating com a metodologia validada por Thassio Andrade.
          </p>
          
          <div className="pt-8">
             <a href="#plans" className="btn-luxury inline-block py-4 px-10 rounded-full text-lg font-bold">
               {/* Walking Border */}
               <div className="btn-border-container">
                 <div className="btn-border-anim"></div>
               </div>
               
               <span className="relative z-10">QUERO CONSTRUIR MINHA ESTRUTURA</span>
               <div className="btn-luxury-shine"></div>
             </a>
          </div>
        </div>

        {/* Dashboard Browser Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-16 relative mx-auto w-full max-w-5xl"
        >
            {/* Browser Window Frame */}
            <div className="rounded-xl bg-[#151515] border border-white/10 shadow-2xl overflow-hidden">
                {/* Browser Toolbar */}
                <div className="h-10 bg-[#0f0f0f] border-b border-white/5 flex items-center px-4 space-x-2">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                    </div>
                    <div className="flex-1 flex justify-center">
                         <div className="bg-[#1a1a1a] rounded-md px-3 py-1 text-xs text-gray-500 w-1/2 text-center font-mono">
                            app.life360parceiros.com.br
                         </div>
                    </div>
                </div>

                {/* Content Area (Video/Image Placeholder) */}
                <div className="relative aspect-video bg-neutral-900 group cursor-pointer">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    
                    {/* Dashboard UI Elements Mockup Overlay */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            <div className="bg-white/5 backdrop-blur-md p-4 rounded-lg border border-white/10 w-64">
                                <div className="text-xs text-gray-400">Faturamento Mensal</div>
                                <div className="text-2xl font-bold text-white mt-1">R$ 12.450,00</div>
                                <div className="text-xs text-brand-gold mt-2 flex items-center gap-1">
                                    ▲ 15% vs mês anterior
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 bg-brand-gold/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-brand-gold transition-all duration-300 group-hover:scale-110 shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                        <Play className="w-10 h-10 text-black fill-current ml-1" />
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Glow Effect behind */}
            <div className="absolute -inset-4 bg-brand-gold/20 blur-3xl -z-10 rounded-[3rem] opacity-40" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;