import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle } from 'lucide-react';

const Plans: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    whatsapp: '',
    email: '',
    city: '',
    role: 'Correspondente',
    volume: '1-10',
    objective: 'Aprovar mais',
    message: '',
    agreed: false
  });

  const handleChange = (e: any) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    alert("Obrigado! Um especialista entrará em contato em breve.");
  };

  return (
    <section id="contact-form" className="py-24 px-6 bg-[#050505] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Solicite seu acesso à Life 360</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Preencha os dados e um especialista entra em contato para te orientar no melhor caminho para começar. Tempo médio: 1 minuto.</p>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#101010] p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl"
        >
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Nome Completo*</label>
                        <input required name="name" onChange={handleChange} className="w-full bg-[#050505] border border-white/10 rounded-lg p-3 text-white focus:border-brand-gold focus:outline-none transition-colors" placeholder="Seu nome" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">WhatsApp com DDD*</label>
                        <input required name="whatsapp" type="tel" onChange={handleChange} className="w-full bg-[#050505] border border-white/10 rounded-lg p-3 text-white focus:border-brand-gold focus:outline-none transition-colors" placeholder="(00) 00000-0000" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">E-mail*</label>
                        <input required name="email" type="email" onChange={handleChange} className="w-full bg-[#050505] border border-white/10 rounded-lg p-3 text-white focus:border-brand-gold focus:outline-none transition-colors" placeholder="seu@email.com" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Cidade/UF*</label>
                        <input required name="city" onChange={handleChange} className="w-full bg-[#050505] border border-white/10 rounded-lg p-3 text-white focus:border-brand-gold focus:outline-none transition-colors" placeholder="São Paulo - SP" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Você atua como:*</label>
                        <select name="role" onChange={handleChange} className="w-full bg-[#050505] border border-white/10 rounded-lg p-3 text-white focus:border-brand-gold focus:outline-none transition-colors appearance-none">
                            <option>Correspondente</option>
                            <option>Consultor Financeiro</option>
                            <option>Corretor</option>
                            <option>Contador</option>
                            <option>Empresário</option>
                            <option>Outro</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                         <label className="text-sm font-medium text-gray-400">Volume mensal de solicitações</label>
                         <select name="volume" onChange={handleChange} className="w-full bg-[#050505] border border-white/10 rounded-lg p-3 text-white focus:border-brand-gold focus:outline-none transition-colors appearance-none">
                            <option>1 – 10</option>
                            <option>11 – 30</option>
                            <option>31 – 60</option>
                            <option>60+</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                     <label className="text-sm font-medium text-gray-400">Objetivo Principal</label>
                     <select name="objective" onChange={handleChange} className="w-full bg-[#050505] border border-white/10 rounded-lg p-3 text-white focus:border-brand-gold focus:outline-none transition-colors appearance-none">
                        <option>Aprovar mais (aumentar taxa)</option>
                        <option>Acessar mais instituições</option>
                        <option>Organizar operação</option>
                        <option>Aumentar ticket médio</option>
                        <option>Começar do zero</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Mensagem (opcional)</label>
                    <textarea name="message" onChange={handleChange} rows={3} className="w-full bg-[#050505] border border-white/10 rounded-lg p-3 text-white focus:border-brand-gold focus:outline-none transition-colors" placeholder="Gostaria de saber mais sobre..." />
                </div>

                <div className="flex items-start gap-3">
                    <input required type="checkbox" name="agreed" onChange={handleChange} className="mt-1 w-4 h-4 accent-brand-gold" />
                    <span className="text-xs text-gray-500">Concordo em receber contato da Life 360 Parceiros por WhatsApp/E-mail e aceito a Política de Privacidade.</span>
                </div>

                <button type="submit" className="w-full btn-luxury py-4 rounded-xl font-bold group">
                    <div className="btn-border-container"><div className="btn-border-anim"></div></div>
                    <span className="relative z-10 flex items-center justify-center gap-2">QUERO FALAR COM UM ESPECIALISTA <Send size={18} /></span>
                    <div className="btn-luxury-shine"></div>
                </button>
                
                <p className="text-center text-xs text-gray-600">Sem compromisso. Seus dados ficam protegidos.</p>
            </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Plans;