import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    whatsapp: '',
    email: '',
    city: '',
    role: '',
    volume: '',
    objective: '',
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
    alert("Recebemos seu cadastro e um especialista vai falar com você em breve.");
  };

  return (
    <section id="contact-form" className="py-10 md:py-24 px-6 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">Solicite acesso e comece do jeito certo</h2>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">Preencha os dados e um especialista te orienta no melhor plano para a sua fase. Tempo médio: 1 minuto.</p>
        </div>

        <div className="bg-[#101010] p-6 md:p-12 rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-1 md:space-y-2">
                        <label className="text-xs md:text-sm font-medium text-gray-400">Nome completo*</label>
                        <input required name="name" onChange={handleChange} className="w-full bg-[#050505] border border-white/10 rounded-lg p-2.5 md:p-3 text-white focus:border-brand-gold focus:outline-none transition-colors text-sm" />
                    </div>
                    <div className="space-y-1 md:space-y-2">
                        <label className="text-xs md:text-sm font-medium text-gray-400">WhatsApp com DDD*</label>
                        <input required name="whatsapp" type="tel" onChange={handleChange} className="w-full bg-[#050505] border border-white/10 rounded-lg p-2.5 md:p-3 text-white focus:border-brand-gold focus:outline-none transition-colors text-sm" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-1 md:space-y-2">
                        <label className="text-xs md:text-sm font-medium text-gray-400">E-mail*</label>
                        <input required name="email" type="email" onChange={handleChange} className="w-full bg-[#050505] border border-white/10 rounded-lg p-2.5 md:p-3 text-white focus:border-brand-gold focus:outline-none transition-colors text-sm" />
                    </div>
                    <div className="space-y-1 md:space-y-2">
                        <label className="text-xs md:text-sm font-medium text-gray-400">Cidade e UF*</label>
                        <input required name="city" onChange={handleChange} className="w-full bg-[#050505] border border-white/10 rounded-lg p-2.5 md:p-3 text-white focus:border-brand-gold focus:outline-none transition-colors text-sm" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-1 md:space-y-2">
                        <label className="text-xs md:text-sm font-medium text-gray-400">Você atua como*</label>
                        <select required name="role" onChange={handleChange} className="w-full bg-[#050505] border border-white/10 rounded-lg p-2.5 md:p-3 text-white focus:border-brand-gold focus:outline-none transition-colors appearance-none text-sm">
                            <option value="">Selecione...</option>
                            <option>Correspondente bancário</option>
                            <option>Consultor Financeiro</option>
                            <option>Corretor de imóveis</option>
                            <option>Contador</option>
                            <option>Empresário</option>
                            <option>Outros</option>
                        </select>
                    </div>
                    <div className="space-y-1 md:space-y-2">
                         <label className="text-xs md:text-sm font-medium text-gray-400">Volume mensal de solicitações</label>
                         <select name="volume" onChange={handleChange} className="w-full bg-[#050505] border border-white/10 rounded-lg p-2.5 md:p-3 text-white focus:border-brand-gold focus:outline-none transition-colors appearance-none text-sm">
                            <option value="">Selecione...</option>
                            <option>1 – 10</option>
                            <option>11 – 30</option>
                            <option>31 – 60</option>
                            <option>60+</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-1 md:space-y-2">
                     <label className="text-xs md:text-sm font-medium text-gray-400">Objetivo principal</label>
                     <select name="objective" onChange={handleChange} className="w-full bg-[#050505] border border-white/10 rounded-lg p-2.5 md:p-3 text-white focus:border-brand-gold focus:outline-none transition-colors appearance-none text-sm">
                        <option value="">Selecione...</option>
                        <option>Aprovar mais</option>
                        <option>Acessar mais instituições</option>
                        <option>Organizar operação</option>
                        <option>Aumentar ticket médio</option>
                        <option>Começar do zero</option>
                    </select>
                </div>

                <div className="space-y-1 md:space-y-2">
                    <label className="text-xs md:text-sm font-medium text-gray-400">Mensagem (opcional)</label>
                    <textarea name="message" onChange={handleChange} rows={3} className="w-full bg-[#050505] border border-white/10 rounded-lg p-2.5 md:p-3 text-white focus:border-brand-gold focus:outline-none transition-colors text-sm" />
                </div>

                <div className="flex items-start gap-3">
                    <input required type="checkbox" name="agreed" onChange={handleChange} className="mt-1 w-4 h-4 accent-brand-gold shrink-0" />
                    <span className="text-[10px] md:text-xs text-gray-500">Eu concordo em receber contato da Life 360 Parceiros por WhatsApp e e-mail e aceito a Política de Privacidade.</span>
                </div>

                <button type="submit" className="w-full btn-luxury py-3 md:py-4 rounded-xl font-bold group text-sm md:text-base">
                    <div className="btn-border-container"><div className="btn-border-anim"></div></div>
                    <span className="relative z-10 flex items-center justify-center gap-2">Quero falar com um especialista <Send size={16} className="md:w-[18px]" /></span>
                    <div className="btn-luxury-shine"></div>
                </button>
                
                <p className="text-center text-[10px] md:text-xs text-gray-600">Resposta por WhatsApp e sem compromisso.</p>
            </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;