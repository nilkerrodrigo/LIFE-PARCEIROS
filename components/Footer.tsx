import React from 'react';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-10 px-6 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="space-y-6 md:col-span-1">
          <div className="flex items-center gap-2">
            <img 
              src="https://life360parceiros.com.br/wp-content/uploads/2026/02/versao-1-dourada.png" 
              alt="Life 360 Parceiros" 
              className="h-10 w-auto object-contain"
            />
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Estrutura completa para profissionais de crédito.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-black transition-all">
                <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-black transition-all">
                <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-black transition-all">
                <MessageCircle size={18} />
            </a>
          </div>
        </div>

        {/* Legal Column */}
        <div className="md:col-span-2">
           <h4 className="text-white font-bold mb-4">Avisos Legais</h4>
           <p className="text-xs text-gray-500 leading-relaxed mb-4">
             Não somos instituição financeira. Operações realizadas por parceiros autorizados.
           </p>
           <p className="text-xs text-gray-500 leading-relaxed">
             LGPD dados tratados com sigilo.
           </p>
        </div>

        {/* Links Column */}
        <div>
          <h4 className="text-white font-bold mb-6">Links Úteis</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><a href="#" className="hover:text-brand-gold transition-colors">Política de Privacidade</a></li>
            <li><a href="#" className="hover:text-brand-gold transition-colors">Termos de Uso</a></li>
            <li><a href="#contact-form" className="hover:text-brand-gold transition-colors">Fale Conosco</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4">
        <p>&copy; 2024 Life 360 Parceiros. Todos os direitos reservados.</p>
        <p>São Paulo, SP - Brasil</p>
      </div>
    </footer>
  );
};

export default Footer;