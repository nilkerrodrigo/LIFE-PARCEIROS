import React from 'react';
import { Shield, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 px-6 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="bg-brand-gold p-1.5 rounded-lg">
              <Shield className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              LIFE 360 <span className="text-brand-gold">PARCEIROS</span>
            </span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Transformando realidades financeiras através de conhecimento, tecnologia e consultoria especializada.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-black transition-all">
                <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-black transition-all">
                <Youtube size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-black transition-all">
                <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Links Column 1 */}
        <div>
          <h4 className="text-white font-bold mb-6">Navegação</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-brand-gold transition-colors">Painel do Cliente</a></li>
            <li><a href="#services" className="hover:text-brand-gold transition-colors">Serviços</a></li>
            <li><a href="#academy" className="hover:text-brand-gold transition-colors">Academy</a></li>
            <li><a href="#support" className="hover:text-brand-gold transition-colors">Suporte</a></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h4 className="text-white font-bold mb-6">Legal</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-brand-gold transition-colors">Termos de Uso</a></li>
            <li><a href="#" className="hover:text-brand-gold transition-colors">Política de Privacidade</a></li>
            <li><a href="#" className="hover:text-brand-gold transition-colors">Compliance</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="text-white font-bold mb-6">Contato</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li>São Paulo, SP - Brasil</li>
            <li>Av. Paulista, 1000 - Sala 42</li>
            <li>contato@life360parceiros.com.br</li>
            <li className="pt-2 text-xs text-gray-600">CNPJ: 00.000.000/0001-00</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4">
        <p>&copy; 2024 Life 360 Parceiros. Todos os direitos reservados.</p>
        <p>Designed with <span className="text-brand-gold">♥</span> for excellence.</p>
      </div>
    </footer>
  );
};

export default Footer;