import React, { useState } from 'react';
import { Instagram, MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PrivacyContent = () => (
  <div className="space-y-4 text-sm md:text-base text-gray-300 leading-relaxed text-justify">
    <p><strong>Life 360 Parceiros</strong><br/>Site: life360parceiros.com.br<br/>E-mail: contato@life360parceiros.com.br<br/>Última atualização: 13/02/2026</p>
    
    <p>A Life 360 Parceiros (“Life 360”, “nós”) valoriza sua privacidade e está comprometida com a proteção dos dados pessoais tratados por meio do site life360parceiros.com.br, formulários, atendimento e plataformas relacionadas (conjuntamente, “Serviços”). Esta Política explica como coletamos, usamos, compartilhamos e protegemos seus dados pessoais, conforme a Lei Geral de Proteção de Dados Pessoais (LGPD, Lei 13.709/2018).</p>

    <h3 className="text-white font-bold text-lg mt-6">1. Quem somos e como falar com a gente</h3>
    <p>A controladora dos dados tratados nos Serviços é a Life 360 Parceiros.<br/>Canal para dúvidas e solicitações de privacidade: contato@life360parceiros.com.br</p>

    <h3 className="text-white font-bold text-lg mt-6">2. Quais dados coletamos</h3>
    <p>Podemos coletar as seguintes categorias de dados, conforme seu relacionamento conosco.</p>
    
    <h4 className="text-white font-semibold mt-2">2.1 Dados fornecidos por você</h4>
    <ul className="list-disc pl-5 space-y-1">
      <li>Nome completo</li>
      <li>E-mail</li>
      <li>Telefone ou WhatsApp</li>
      <li>Cidade e UF</li>
      <li>Profissão ou área de atuação e informações comerciais relacionadas (por exemplo volume estimado)</li>
      <li>Mensagens e informações enviadas via formulário, atendimento ou e-mail</li>
      <li>Dados de cadastro e autenticação, quando aplicável</li>
    </ul>

    <h4 className="text-white font-semibold mt-2">2.2 Dados coletados automaticamente</h4>
    <ul className="list-disc pl-5 space-y-1">
      <li>Endereço IP, data e hora de acesso</li>
      <li>Informações do dispositivo e do navegador</li>
      <li>Páginas acessadas, cliques e origem de tráfego</li>
      <li>Cookies e tecnologias similares, conforme seção 8</li>
    </ul>

    <h4 className="text-white font-semibold mt-2">2.3 Dados recebidos de terceiros</h4>
    <p>Podemos receber dados de parceiros e provedores (por exemplo ferramentas de CRM, automação, hospedagem, analytics), sempre conforme as finalidades descritas nesta Política.</p>

    <h3 className="text-white font-bold text-lg mt-6">3. Para que usamos seus dados</h3>
    <p>Tratamos dados pessoais para as seguintes finalidades:</p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Responder contatos e solicitações feitas por formulário e e-mail</li>
      <li>Realizar atendimento comercial e suporte aos Serviços</li>
      <li>Avaliar perfil e elegibilidade operacional para acesso aos Serviços e programas de parceria</li>
      <li>Prevenir fraudes e garantir segurança do site e dos usuários</li>
      <li>Cumprir obrigações legais e regulatórias aplicáveis</li>
      <li>Melhorar nossos Serviços e a experiência no site</li>
      <li>Enviar comunicações sobre novidades, conteúdos e ofertas, quando permitido</li>
    </ul>

    <h3 className="text-white font-bold text-lg mt-6">4. Bases legais</h3>
    <p>O tratamento pode ocorrer com base em:</p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Consentimento, quando você aceita receber contato e comunicações</li>
      <li>Execução de contrato ou procedimentos preliminares, quando você solicita acesso, proposta ou atendimento</li>
      <li>Legítimo interesse, para melhoria, segurança, prevenção a fraudes e comunicações institucionais limitadas</li>
      <li>Cumprimento de obrigação legal ou regulatória, quando aplicável</li>
    </ul>

    <h3 className="text-white font-bold text-lg mt-6">5. Com quem compartilhamos seus dados</h3>
    <p>Podemos compartilhar dados pessoais somente quando necessário e de forma compatível com as finalidades desta Política, com:</p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Provedores de tecnologia (hospedagem, e-mail, CRM, analytics, automação, atendimento)</li>
      <li>Parceiros operacionais e comerciais, quando necessário para viabilizar atendimento ou serviços relacionados</li>
      <li>Autoridades públicas, mediante obrigação legal, ordem judicial ou requisição válida</li>
    </ul>
    <p>A Life 360 não vende dados pessoais.</p>

    <h3 className="text-white font-bold text-lg mt-6">6. Retenção e descarte</h3>
    <p>Guardamos seus dados pelo tempo necessário para cumprir as finalidades desta Política, atender prazos legais e resguardar direitos em processos. Após esse período, os dados serão excluídos ou anonimizados quando possível.</p>

    <h3 className="text-white font-bold text-lg mt-6">7. Direitos do titular</h3>
    <p>Você pode solicitar:</p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Confirmação e acesso aos dados</li>
      <li>Correção de dados incompletos, inexatos ou desatualizados</li>
      <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade</li>
      <li>Portabilidade, quando aplicável</li>
      <li>Informações sobre compartilhamento</li>
      <li>Revogação do consentimento, quando o tratamento se basear nele</li>
    </ul>
    <p>Canal para solicitações: contato@life360parceiros.com.br</p>

    <h3 className="text-white font-bold text-lg mt-6">8. Cookies e tecnologias similares</h3>
    <p>Usamos cookies para funcionamento do site, estatísticas, desempenho, segurança e mensuração. Você pode gerenciar cookies nas configurações do navegador. Dependendo do cookie, a desativação pode afetar funcionalidades do site.</p>

    <h3 className="text-white font-bold text-lg mt-6">9. Segurança</h3>
    <p>Adotamos medidas técnicas e organizacionais para proteger dados pessoais contra acessos não autorizados, perda, alteração ou divulgação indevida. Mesmo assim, nenhum sistema é totalmente infalível.</p>

    <h3 className="text-white font-bold text-lg mt-6">10. Transferência internacional</h3>
    <p>Alguns provedores podem armazenar ou processar dados fora do Brasil. Quando isso ocorrer, adotaremos medidas para garantir proteção adequada, conforme a LGPD.</p>

    <h3 className="text-white font-bold text-lg mt-6">11. Crianças e adolescentes</h3>
    <p>Nossos Serviços são voltados ao público profissional e empresarial. Se você acredita que dados de menor foram coletados indevidamente, entre em contato pelo e-mail contato@life360parceiros.com.br.</p>

    <h3 className="text-white font-bold text-lg mt-6">12. Alterações desta Política</h3>
    <p>Podemos atualizar esta Política a qualquer momento. A versão vigente ficará disponível em life360parceiros.com.br com a data de última atualização.</p>

    <h3 className="text-white font-bold text-lg mt-6">13. Contato</h3>
    <p>Dúvidas e solicitações: contato@life360parceiros.com.br</p>
  </div>
);

const TermsContent = () => (
  <div className="space-y-4 text-sm md:text-base text-gray-300 leading-relaxed text-justify">
    <p><strong>Life 360 Parceiros</strong><br/>Site: life360parceiros.com.br<br/>E-mail: contato@life360parceiros.com.br<br/>Última atualização: 13/02/2026</p>

    <p>Estes Termos regulam o uso do site life360parceiros.com.br e dos serviços digitais da Life 360 Parceiros (“Life 360”, “nós”). Ao acessar ou usar nossos Serviços, você concorda com estes Termos e com a nossa Política de Privacidade.</p>

    <h3 className="text-white font-bold text-lg mt-6">1. Aceitação dos Termos</h3>
    <p>Ao navegar no site, preencher formulários, solicitar contato, criar cadastro ou utilizar qualquer funcionalidade, você declara que leu e concorda com estes Termos. Se não concordar, não utilize os Serviços.</p>

    <h3 className="text-white font-bold text-lg mt-6">2. Quem pode usar</h3>
    <p>Os Serviços são direcionados a pessoas que possam celebrar contratos conforme a lei e a profissionais ou empresas interessados em parcerias, produtos e serviços relacionados.</p>

    <h3 className="text-white font-bold text-lg mt-6">3. Sobre os Serviços</h3>
    <p>A Life 360 oferece estrutura, plataforma e suporte para organização de atendimentos e serviços relacionados a parceiros e operações comerciais.</p>
    <p>A Life 360 não é instituição financeira. Aprovação, contratação, limites, taxas, prazos e condições finais dependem de regras e análises de terceiros e do envio correto de informações e documentos.</p>

    <h3 className="text-white font-bold text-lg mt-6">4. Informações fornecidas pelo usuário</h3>
    <p>Você se compromete a fornecer informações verdadeiras e atualizadas e a não usar dados de terceiros sem autorização. Podemos recusar, suspender ou cancelar acessos quando houver indícios de fraude, uso indevido, informações falsas ou violação destes Termos.</p>

    <h3 className="text-white font-bold text-lg mt-6">5. Responsabilidades do usuário</h3>
    <p>Você concorda em usar os Serviços de forma ética e conforme a lei e em não:</p>
    <ul className="list-disc pl-5 space-y-1">
      <li>tentar violar a segurança do site ou sistemas</li>
      <li>praticar engenharia reversa, cópia indevida, automações abusivas ou coleta massiva de dados</li>
      <li>enviar conteúdo ilícito, ofensivo, discriminatório ou que viole direitos de terceiros</li>
    </ul>

    <h3 className="text-white font-bold text-lg mt-6">6. Propriedade intelectual</h3>
    <p>Todo conteúdo do site e dos Serviços, incluindo marca, textos, layout, materiais, logos, gráficos e funcionalidades, é de propriedade da Life 360 ou licenciado a ela. Você não pode copiar, reproduzir, modificar, distribuir ou explorar comercialmente qualquer parte do conteúdo sem autorização prévia e por escrito.</p>

    <h3 className="text-white font-bold text-lg mt-6">7. Comunicações</h3>
    <p>Ao preencher um formulário ou solicitar contato, você autoriza a Life 360 a entrar em contato pelos canais informados, conforme a Política de Privacidade. Você pode solicitar a interrupção de comunicações a qualquer momento pelo e-mail contato@life360parceiros.com.br.</p>

    <h3 className="text-white font-bold text-lg mt-6">8. Disponibilidade e alterações</h3>
    <p>Podemos atualizar, modificar, suspender ou encerrar funcionalidades, corrigir erros e realizar manutenções. Também podemos atualizar estes Termos e a Política de Privacidade, publicando a versão vigente no site.</p>

    <h3 className="text-white font-bold text-lg mt-6">9. Links e serviços de terceiros</h3>
    <p>Podemos disponibilizar links e integrações com serviços de terceiros. A Life 360 não se responsabiliza por conteúdo, políticas ou práticas desses terceiros.</p>

    <h3 className="text-white font-bold text-lg mt-6">10. Isenção de garantias</h3>
    <p>Os Serviços são fornecidos como estão e conforme disponíveis. Não garantimos disponibilidade contínua e nem resultados específicos, pois dependem de fatores externos, regras de terceiros e informações fornecidas pelos usuários.</p>

    <h3 className="text-white font-bold text-lg mt-6">11. Limitação de responsabilidade</h3>
    <p>Na medida permitida por lei, a Life 360 não será responsável por perdas indiretas, lucros cessantes ou danos consequenciais, nem por falhas de terceiros, integrações, operadoras ou serviços externos.</p>

    <h3 className="text-white font-bold text-lg mt-6">12. Privacidade e proteção de dados</h3>
    <p>O tratamento de dados pessoais é regido pela Política de Privacidade, que integra estes Termos.</p>

    <h3 className="text-white font-bold text-lg mt-6">13. Lei aplicável e foro</h3>
    <p>Estes Termos são regidos pelas leis do Brasil. Fica eleito o foro da comarca de São Paulo, SP, com renúncia a qualquer outro, salvo disposições legais em contrário.</p>

    <h3 className="text-white font-bold text-lg mt-6">14. Contato</h3>
    <p>E-mail: contato@life360parceiros.com.br<br/>Site: life360parceiros.com.br</p>
  </div>
);

const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);
  const whatsappLink = "https://chat.whatsapp.com/G720XYiM1I2HMMB20nMwX6";

  const closeModal = () => setModalType(null);

  return (
    <>
      <footer className="bg-black border-t border-white/10 pt-16 pb-10 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-10 md:gap-4 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <img 
              src="https://life360parceiros.com.br/wp-content/uploads/2026/02/versao-1-dourada.png" 
              alt="Life 360 Parceiros" 
              className="h-10 w-auto object-contain opacity-90"
            />
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs md:max-w-sm">
              Estrutura completa para profissionais de crédito.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-black transition-all">
                  <Instagram size={18} />
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-black transition-all">
                  <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Legal Section */}
          <div className="space-y-2 md:max-w-xs">
             <h4 className="text-white font-bold mb-2">Avisos Legais</h4>
             <p className="text-xs text-gray-500 leading-relaxed">
               Não somos instituição financeira. Operações realizadas por parceiros autorizados.
             </p>
             <p className="text-xs text-gray-500 leading-relaxed">
               LGPD dados tratados com sigilo.
             </p>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="text-white font-bold mb-4">Links Úteis</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li>
                <button onClick={() => setModalType('privacy')} className="hover:text-brand-gold transition-colors text-left">
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button onClick={() => setModalType('terms')} className="hover:text-brand-gold transition-colors text-left">
                  Termos de Uso
                </button>
              </li>
              <li><a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">Fale Conosco</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 text-xs text-gray-600 text-center md:text-left">
          <p>&copy; 2026 Life 360 Parceiros. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Modal Overlay */}
      <AnimatePresence>
        {modalType && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={closeModal}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-[#101010] border border-white/10 w-full max-w-3xl max-h-[85vh] rounded-2xl shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/5 bg-[#101010] sticky top-0 z-10 rounded-t-2xl">
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  {modalType === 'privacy' ? 'Política de Privacidade' : 'Termos de Uso'}
                </h2>
                <button 
                  onClick={closeModal}
                  className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
                {modalType === 'privacy' ? <PrivacyContent /> : <TermsContent />}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;