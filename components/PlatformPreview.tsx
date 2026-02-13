import React from 'react';
import { motion } from 'framer-motion';

const images = [
    "http://life360parceiros.com.br/wp-content/uploads/2026/02/1.png",
    "http://life360parceiros.com.br/wp-content/uploads/2026/02/2.png",
    "http://life360parceiros.com.br/wp-content/uploads/2026/02/3.png",
    "http://life360parceiros.com.br/wp-content/uploads/2026/02/4.png",
    "http://life360parceiros.com.br/wp-content/uploads/2026/02/5.png",
    "http://life360parceiros.com.br/wp-content/uploads/2026/02/6.png",
    "http://life360parceiros.com.br/wp-content/uploads/2026/02/7.png",
    "http://life360parceiros.com.br/wp-content/uploads/2026/02/8.png",
    "http://life360parceiros.com.br/wp-content/uploads/2026/02/9.png",
    "http://life360parceiros.com.br/wp-content/uploads/2026/02/10.png",
    "http://life360parceiros.com.br/wp-content/uploads/2026/02/11.png",
    "http://life360parceiros.com.br/wp-content/uploads/2026/02/12.png"
];

const PlatformPreview: React.FC = () => {
  return (
    <section className="py-20 bg-black relative border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
            <span className="text-brand-gold text-xs font-bold uppercase tracking-widest">Por dentro da área dos parceiros</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Conheça a nossa plataforma por dentro</h2>
        </div>

        <div className="relative w-full overflow-hidden">
             {/* Gradient Overlays for smooth edges */}
            <div className="absolute left-0 top-0 w-10 md:w-32 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-10 md:w-32 h-full bg-gradient-to-l from-black to-transparent z-10"></div>

            <motion.div 
                className="flex gap-4 md:gap-8 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ 
                    repeat: Infinity, 
                    ease: "linear", 
                    duration: 60
                }}
            >
                {/* Double the list for seamless loop - rendering it twice ensures smooth transition */}
                {[...images, ...images].map((src, index) => (
                    <div key={index} className="w-[280px] md:w-[600px] rounded-xl overflow-hidden border border-white/10 shadow-lg shrink-0 bg-[#101010]">
                        <img src={src} alt={`Platform Screenshot ${index}`} className="w-full h-auto object-cover" />
                    </div>
                ))}
            </motion.div>
        </div>
    </section>
  );
};

export default PlatformPreview;