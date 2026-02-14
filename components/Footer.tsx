import React, { useState } from 'react';
import { Instagram, MessageCircle, X } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);
  const whatsappLink = "https://chat.whatsapp.com/G720XYiM1I2HMMB20nMwX6";
  const closeModal = () => setModalType(null);

  return (
    <>
      <footer className="bg-black border-t border-white/5 pt-16 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-center md:text-left">
          
          {/* Brand */}
          <div className="space-y-6">
            <img 
              src="https://life360parceiros.com.br/wp-content/uploads/2026/02/versao-1-dourada.png" 
              alt="Life 360" 
              className="h-8 opacity-90 mx-auto md:mx-0"
            />
            <p className="text-gray-500 text-xs leading-relaxed">
              Estrutura completa para profissionais de crédito.
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
                <a href="#" className="w-8 h-8 rounded-full bg-[#151515] flex items-center justify-center text-gray-400 hover:text-brand-gold hover:bg-[#202020] transition-all">
                    <Instagram size={14} />
                </a>
                <a href={whatsappLink} target="_blank" className="w-8 h-8 rounded-full bg-[#151515] flex items-center justify-center text-gray-400 hover:text-brand-gold hover:bg-[#202020] transition-all">
                    <MessageCircle size={14} />
                </a>
            </div>
            <p className="text-xs text-gray-500">
                contato@life360parceiros.com.br
            </p>
          </div>

          {/* Legal Notices */}
          <div className="md:col-span-2">
             <h4 className="text-white font-bold text-sm mb-4">Avisos Legais</h4>
             <div className="space-y-3 text-[11px] text-gray-500 leading-relaxed max-w-md mx-auto md:mx-0">
                <p>Não somos instituição financeira. Operações realizadas por parceiros autorizados.</p>
                <p>LGPD dados tratados com sigilo.</p>
             </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Links Úteis</h4>
            <ul className="space-y-3 text-xs text-gray-500">
              <li><button onClick={() => setModalType('privacy')} className="hover:text-white transition-colors">Política de Privacidade</button></li>
              <li><button onClick={() => setModalType('terms')} className="hover:text-white transition-colors">Termos de Uso</button></li>
              <li><a href={whatsappLink} target="_blank" className="hover:text-white transition-colors">Fale Conosco</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 text-center md:text-left">
            <p className="text-[10px] text-gray-700">© 2026 Life 360 Parceiros. Todos os direitos reservados.</p>
        </div>
      </footer>

       {/* Modal Logic */}
       <AnimatePresence>
        {modalType && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={closeModal} />
            <div className="relative bg-[#101010] border border-white/10 w-full max-w-2xl max-h-[80vh] rounded-xl flex flex-col p-6">
                <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-white"><X size={20}/></button>
                <h2 className="text-xl font-bold text-white mb-4">{modalType === 'privacy' ? 'Política de Privacidade' : 'Termos de Uso'}</h2>
                <div className="overflow-y-auto text-gray-400 text-sm h-full">
                    <p className="mb-4">Este é um texto de exemplo para {modalType === 'privacy' ? 'Política de Privacidade' : 'Termos de Uso'}.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;