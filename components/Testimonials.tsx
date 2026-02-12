import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ name, text, delay }: { name: string, text: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="bg-[#151515] p-6 rounded-xl border border-white/5 relative hover:border-brand-gold/30 transition-colors"
    >
        <Quote className="text-brand-gold/20 absolute top-4 right-4 w-10 h-10" />
        <p className="text-gray-300 italic mb-4 relative z-10">"{text}"</p>
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-gold to-yellow-700 flex items-center justify-center font-bold text-sm text-black">
                {name.charAt(0)}
            </div>
            <div>
                <h4 className="text-white font-bold text-sm">{name}</h4>
                <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => <span key={i} className="text-brand-gold text-xs">★</span>)}
                </div>
            </div>
        </div>
    </motion.div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16">
          O que dizem nossos <span className="text-brand-gold">Parceiros</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TestimonialCard 
                name="Juliano R."
                text="Entrei sem saber nada sobre crédito. Em menos de 60 dias já tinha clientes e fechei minhas primeiras operações. Hoje já virou minha principal renda."
                delay={0}
            />
             <TestimonialCard 
                name="Patrícia M."
                text="Eu estava negativada e sem perspectiva. Aprendi a estruturar meu CPF e ainda comecei a atender outras pessoas. Nunca imaginei faturar com isso."
                delay={0.1}
            />
             <TestimonialCard 
                name="Carlos E."
                text="O método é simples e direto. Não é promessa vazia. Seguindo o passo a passo consegui bater mais de 10K em poucos meses operando."
                delay={0.2}
            />
             <TestimonialCard 
                name="Renata S."
                text="Além de reabilitar meu nome, hoje tenho uma operação rodando. Foi a melhor decisão que tomei financeiramente."
                delay={0.3}
            />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;