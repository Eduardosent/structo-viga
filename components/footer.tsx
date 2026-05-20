"use client";

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTiktok, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  const t = useTranslations('Landing.Footer');

  return (
    <footer className="bg-black text-white border-t border-white/10 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          
          {/* Logo e Info Optimizados */}
          <div className="max-w-md">
            <Image 
              src="/logo.png" 
              alt="StructoViga" 
              width={91}
              height={48}
              className="h-12 w-auto mb-6 brightness-0 invert object-contain" 
            />
            <p className="text-gray-400 text-xs uppercase tracking-widest leading-relaxed">
              {t('description')}
            </p>
          </div>
          
          {/* Redes Sociales con Etiquetas Aria para Accesibilidad y SEO */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">
              {t('followUs')}
            </h4>
            <div className="flex gap-8 items-center text-gray-500">
              <a 
                href="https://www.instagram.com/structoviga/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
                aria-label="Instagram de Structoviga"
              >
                <FaInstagram size={24} aria-hidden="true" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61584997876580" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
                aria-label="Facebook de Structoviga"
              >
                <FaFacebookF size={22} aria-hidden="true" />
              </a>
              <a 
                href="https://www.tiktok.com/@structoviga" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
                aria-label="TikTok de Structoviga"
              >
                <FaTiktok size={22} aria-hidden="true" />
              </a>
              <a 
                href="https://www.linkedin.com/in/structo-viga-2068853b4/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
                aria-label="LinkedIn de Structoviga"
              >
                <FaLinkedinIn size={24} aria-hidden="true" />
              </a>
              <a 
                href="https://api.whatsapp.com/send/?phone=12025690707" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
                aria-label="Contactar a Structoviga por WhatsApp"
              >
                <FaWhatsapp size={26} className="hover:text-white transition-colors" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 tracking-[0.5em] font-bold">
          <p>© {new Date().getFullYear()} Structoviga {t('rights')}</p>
          <p>{t('madeIn')}</p>
        </div>
      </div>
    </footer>
  );
};