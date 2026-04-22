"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from './language-switcher';

export const Navbar = () => {
  const t = useTranslations('Landing.Navbar');

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Contenedor del Logo */}
        <div className="flex items-center">
          <img 
            src="/logo.png" 
            alt={t('logoAlt')} 
            className="h-12 w-auto object-contain" 
          />
        </div>
        
        {/* Links */}
        <div className="hidden md:flex space-x-10 text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">
          <a href="#inicio" className="hover:text-black transition-colors">{t('home')}</a>
          <a href="#productos" className="hover:text-black transition-colors">{t('products')}</a>
          <a href="#nosotros" className="hover:text-black transition-colors">{t('about')}</a>
          <a href="#contacto" className="hover:text-black transition-colors">{t('contact')}</a>
        </div>

        {/* Acciones Derecha */}
        <div className="flex items-center gap-3">         
          <button 
            onClick={() => scrollToSection('contacto')}
            className="bg-black text-white text-[10px] font-bold uppercase tracking-widest px-6 py-3 hover:bg-gray-800 transition-all shadow-sm"
          >
            {t('quote')}
          </button>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};
