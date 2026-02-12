import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

const VideoThumbnail: React.FC<{ episode: string; title: string; imageId: number }> = ({ episode, title, imageId }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex-shrink-0 w-72 md:w-80 group cursor-pointer"
    >
      <div className="relative aspect-[9/16] rounded-xl overflow-hidden border border-white/10 mb-4 bg-neutral-900">
        <img 
          src={`https://picsum.photos/400/700?random=${imageId}`} 
          alt={title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <PlayCircle className="w-16 h-16 text-brand-red fill-black/50" />
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <span className="text-xs font-bold bg-brand-red px-2 py-1 rounded text-white mb-2 inline-block">
            {episode}
          </span>
        </div>
      </div>
      <h3 className="text-white font-semibold text-lg group-hover:text-brand-red transition-colors">
        {title}
      </h3>
      <p className="text-gray-500 text-sm mt-1">Mentor Especialista</p>
    </motion.div>
  );
};

const Academy: React.FC = () => {
  const videos = [
    { ep: 'EP#01', title: 'Introdução ao Score', id: 101 },
    { ep: 'EP#02', title: 'Segredos do Bacen', id: 102 },
    { ep: 'EP#03', title: 'Blindagem Patrimonial', id: 103 },
    { ep: 'EP#04', title: 'Negociação de Dívidas', id: 104 },
    { ep: 'EP#05', title: 'Alavancagem de Crédito', id: 105 },
  ];

  return (
    <section id="academy" className="py-24 px-6 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-brand-red font-bold uppercase tracking-widest text-xs">Academy</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white">Conteúdo Exclusivo</h2>
          </div>
          <button className="hidden md:block text-gray-400 hover:text-white transition-colors border-b border-gray-600 hover:border-white pb-1">
            Ver todos os episódios
          </button>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 snap-x scrollbar-hide">
          {videos.map((video) => (
            <VideoThumbnail 
              key={video.ep} 
              episode={video.ep} 
              title={video.title} 
              imageId={video.id} 
            />
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <div className="md:hidden mt-6 text-center">
            <button className="text-gray-400 hover:text-white transition-colors border-b border-gray-600 hover:border-white pb-1">
                Ver todos os episódios
            </button>
        </div>
      </div>
    </section>
  );
};

export default Academy;