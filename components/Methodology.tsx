import React from 'react';
import { motion } from 'framer-motion';
import { Users, ShieldCheck, DollarSign } from 'lucide-react';

const Methodology: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "Captação",
      desc: "Como encontrar clientes negativados todos os dias.",
      icon: <Users className="w-8 h-8 text-black" />
    },
    {
      number: "2",
      title: "Reabilitação",
      desc: "Como estruturar limpeza, negociação e fortalecimento do CPF.",
      icon: <ShieldCheck className="w-8 h-8 text-black" />
    },
    {
      number: "3",
      title: "Monetização",
      desc: "Como gerar faturamento com a operação e escalar atendimento.",
      icon: <DollarSign className="w-8 h-8 text-black" />
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Como funciona a estrutura</h2>
          <p className="text-gray-400">Um modelo validado dividido em 3 etapas simples.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative p-8 rounded-2xl bg-neutral-900 border border-white/5 hover:border-brand-gold/50 transition-colors"
            >
              <div className="absolute -top-6 left-8 w-12 h-12 bg-brand-gold rounded-xl flex items-center justify-center font-bold text-2xl text-black shadow-[0_4px_20px_rgba(212,175,55,0.4)]">
                {step.number}
              </div>
              <div className="mt-6">
                <div className="mb-4 text-brand-gold">{step.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;