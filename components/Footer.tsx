import React from 'react';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const whatsappLink = "https://chat.whatsapp.com/G720XYiM1I2HMMB20nMwX6";

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-10 px-6 relative z-10">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-10 mb-12">
        {/* Brand Section */}
        <div className="space-y-4 flex flex-col items-center">
          <img 
            src="https://life360parceiros.com.br/wp-content/uploads/2026/02/versao-1-dourada.png" 
            alt="Life 360 Parceiros" 
            className="h-10 w-auto object-contain opacity-90"
          />
          <p className="text-gray-500 text-sm leading-relaxed max-w-md">
            Estrutura completa para profissionais de crédito.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-black transition-all">
                <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-black transition-all">
                <Linkedin size={18} />
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-black transition-all">
                <MessageCircle size={18} />
            </a>
          </div>
        </div>

        {/* Legal Section */}
        <div className="space-y-2">
           <h4 className="text-white font-bold mb-2">Avisos Legais</h4>
           <p className="text-xs text-gray-500 leading-relaxed max-w-md mx-auto">
             Não somos instituição financeira. Operações realizadas por parceiros autorizados.
           </p>
           <p className="text-xs text-gray-500 leading-relaxed">
             LGPD dados tratados com sigilo.
           </p>
        </div>

        {/* Links Section */}
        <div>
          <h4 className="text-white font-bold mb-4">Links Úteis</h4>
          <ul className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <li><a href="#" className="hover:text-brand-gold transition-colors">Política de Privacidade</a></li>
            <li><a href="#" className="hover:text-brand-gold transition-colors">Termos de Uso</a></li>
            <li><a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">Fale Conosco</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-3xl mx-auto border-t border-white/5 pt-8 flex flex-col items-center justify-center text-xs text-gray-600">
        <p>&copy; 2026 Life 360 Parceiros. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;