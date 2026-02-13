import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-10 md:py-24 px-6 bg-[#080808] border-t border-white/5 relative">
        {/* Decorative top line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-8 md:mb-12"
            >
                <img 
                    src="https://life360parceiros.com.br/wp-content/uploads/2026/02/versao-1-dourada.png" 
                    alt="Life 360 Parceiros Logo" 
                    className="h-12 md:h-16 w-auto mx-auto mb-6 opacity-90"
                />
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">Quem somos</h2>
                <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full"></div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-6 text-gray-300 text-sm md:text-lg leading-relaxed text-justify md:text-center font-light"
            >
                <p>
                    A <strong className="text-white font-medium">Life 360 Parceiros</strong> é uma plataforma para profissionais e empresas que vendem e operam crédito e precisam de processo, direção e suporte para conduzir cada caso com mais clareza. A gente une tecnologia e operação em uma esteira completa, com <strong>Diagnóstico CreditIA</strong>, consultas, CRM, propostas e contratos, além de soluções integradas como Rating Bancário, Diagnóstico de Crédito e Limpa Nome.
                </p>
                <p>
                    Nosso foco é o parceiro: ajudar você a organizar a rotina, reduzir retrabalho e vender com mais confiança, com um fluxo padronizado e acompanhamento de ponta a ponta. Você não fica sozinho: tem suporte diário, treinamento e uma estrutura pronta para começar no <strong>Empreendedor</strong> (marca Life360) ou escalar no <strong>Business White Label</strong> (sua marca).
                </p>
                <p>
                    A Life 360 Parceiros atua com <span className="text-brand-gold">responsabilidade e transparência</span>. A operação deve seguir boas práticas, ética e LGPD, e cada caso é conduzido conforme regras aplicáveis e documentação necessária.
                </p>
            </motion.div>
        </div>
    </section>
  );
};

export default About;