import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Painel', href: '#' },
    { name: 'Apresentação', href: '#hero' },
    { name: 'Serviços', href: '#services' },
    { name: 'Academy', href: '#academy' },
    { name: 'Suporte', href: '#support' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <img 
            src="http://life360parceiros.com.br/wp-content/uploads/2026/02/versao-1-dourada.png" 
            alt="Life 360 Parceiros" 
            className="h-10 md:h-12 w-auto object-contain"
            onError={(e) => {
              // Fallback if image fails (using a text fallback just in case)
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement?.classList.add('fallback-logo');
            }}
          />
          {/* Fallback Text hidden by default, visible if img fails */}
          <span className="hidden text-xl font-bold tracking-tight text-white fallback-logo-text">
            LIFE 360 <span className="text-brand-gold">PARCEIROS</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white hover:text-brand-gold transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 absolute w-full px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-300 hover:text-brand-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
      
      {/* Helper style for logo fallback logic inline if needed */}
      <style>{`
        .group:has(img[style*="display: none"]) .fallback-logo-text {
          display: block;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;