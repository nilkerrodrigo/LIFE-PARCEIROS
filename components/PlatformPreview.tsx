import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const images = [
  "https://life360parceiros.com.br/wp-content/uploads/2026/02/1.png",
  "https://life360parceiros.com.br/wp-content/uploads/2026/02/2.png",
  "https://life360parceiros.com.br/wp-content/uploads/2026/02/3.png",
  "https://life360parceiros.com.br/wp-content/uploads/2026/02/4.png",
  "https://life360parceiros.com.br/wp-content/uploads/2026/02/5.png",
  "https://life360parceiros.com.br/wp-content/uploads/2026/02/6.png",
  "https://life360parceiros.com.br/wp-content/uploads/2026/02/7.png",
  "https://life360parceiros.com.br/wp-content/uploads/2026/02/8.png",
  "https://life360parceiros.com.br/wp-content/uploads/2026/02/9.png",
  "https://life360parceiros.com.br/wp-content/uploads/2026/02/10.png",
  "https://life360parceiros.com.br/wp-content/uploads/2026/02/11.png",
  "https://life360parceiros.com.br/wp-content/uploads/2026/02/12.png",
  "https://life360parceiros.com.br/wp-content/uploads/2026/02/13.png"
];

const PlatformPreview: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = images.length - 1;
      if (nextIndex >= images.length) nextIndex = 0;
      return nextIndex;
    });
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      paginate(1);
    }, 4000);

    return () => clearInterval(timer);
  }, [paginate, isPaused]);

  return (
    <section className="py-10 md:py-24 px-6 bg-[#080808] border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <span className="text-brand-gold font-medium uppercase tracking-widest text-xs md:text-sm">POR DENTRO DA ÁREA DOS PARCEIROS</span>
          <h2 className="mt-3 md:mt-4 text-2xl md:text-5xl font-bold text-white">
            Conheça a nossa plataforma por dentro
          </h2>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative w-full max-w-5xl mx-auto aspect-video bg-[#151515] rounded-xl border border-white/10 shadow-2xl overflow-hidden group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full h-full object-contain p-2 md:p-4 bg-black/50"
              alt={`Platform Screenshot ${currentIndex + 1}`}
            />
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
            <button 
              className="pointer-events-auto p-2 md:p-3 rounded-full bg-black/50 border border-white/10 text-white hover:bg-brand-gold hover:text-black hover:border-brand-gold transition-all backdrop-blur-sm"
              onClick={() => paginate(-1)}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className="pointer-events-auto p-2 md:p-3 rounded-full bg-black/50 border border-white/10 text-white hover:bg-brand-gold hover:text-black hover:border-brand-gold transition-all backdrop-blur-sm"
              onClick={() => paginate(1)}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Progress Bar & Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
            <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-mono text-gray-300">
              {currentIndex + 1} / {images.length}
            </div>
            <div className="flex gap-1.5">
              {images.map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-brand-gold' : 'w-1.5 bg-white/20'}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">Arraste para o lado ou use as setas para navegar</p>
        </div>
      </div>
    </section>
  );
};

export default PlatformPreview;