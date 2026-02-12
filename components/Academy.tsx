import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Share2 } from 'lucide-react';

const VideoThumbnail: React.FC<{ episode: string; title: string; imageId: number }> = ({ episode, title, imageId }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex-shrink-0 w-64 md:w-72 group cursor-pointer relative"
    >
      <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 mb-4 bg-black shadow-2xl">
        {/* Mock Phone UI Header */}
        <div className="absolute top-4 left-4 z-20 text-[10px] text-gray-400 font-mono tracking-widest">{episode}</div>
        <div className="absolute top-4 right-4 z-20"><Share2 className="w-4 h-4 text-white" /></div>

        <img 
          src={`https://picsum.photos/400/700?random=${imageId}`} 
          alt={title}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
        
        {/* Centered Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.5)] group-hover:scale-110 transition-transform">
             <PlayCircle className="w-8 h-8 text-black fill-black" />
          </div>
        </div>

        {/* Bottom Info */}
        <div className="absolute bottom-6 left-4 right-4 z-20">
          <div className="flex items-center gap-2 mb-2">
             <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-black text-xs font-bold">L360</div>
             <span className="text-xs text-white font-bold">Life 360</span>
             <span className="bg-white text-black text-[10px] font-bold px-1.5 py-0.5 rounded">Inscreva-se</span>
          </div>
          <p className="text-white text-sm font-medium leading-tight line-clamp-2">{title}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Academy: React.FC = () => {
  const videos = [
    { ep: '#ep01', title: 'Como iniciar no mercado de crédito', id: 201 },
    { ep: '#ep02', title: 'Entendendo a lógica do Rating', id: 202 },
    { ep: '#ep03', title: 'O segredo da Blindagem Patrimonial', id: 203 },
    { ep: '#ep04', title: 'Negociação: O caminho do lucro', id: 204 },
  ];

  return (
    <section id="academy" className="py-24 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
            <h3 className="text-gray-500 uppercase tracking-[0.2em] text-sm mb-2">LIFE 360 ACADEMY</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Apresentação</h2>
        </div>

        <div className="flex justify-center gap-6 overflow-x-auto pb-12 snap-x scrollbar-hide flex-nowrap md:grid md:grid-cols-4 md:overflow-visible">
          {videos.map((video) => (
            <VideoThumbnail 
              key={video.ep} 
              episode={video.ep} 
              title={video.title} 
              imageId={video.id} 
            />
          ))}
        </div>
        
        <div className="flex justify-center">
            <button className="btn-luxury px-12 py-4 rounded-full font-bold">
                <div className="btn-border-container">
                   <div className="btn-border-anim"></div>
                </div>
                <span className="relative z-10">SEJA PARCEIRO</span>
                <div className="btn-luxury-shine"></div>
            </button>
        </div>
      </div>
    </section>
  );
};

export default Academy;