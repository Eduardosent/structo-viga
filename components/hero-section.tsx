"use client";

import React from 'react';
import Image from 'next/image'; // Importado para optimizar el fondo
import { useTranslations } from 'next-intl';

export const HeroSection = () => {
  const t = useTranslations('Landing.Hero');

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Imagen de fondo optimizada con Next.js */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Fondo Structoviga"
          fill   
          sizes="100vw"
          priority    
          className="object-cover object-center"
        />
      </div>
      
      {/* Gradiente por encima de la imagen */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      <div className="relative z-20 container mx-auto px-6 pt-24 text-center">
        <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase text-gray-300 mb-6 font-bold">
          {t('overline')}
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold uppercase leading-[0.9] text-white mb-8 tracking-tighter">
          {t('titleMain')}<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-500">
            {t('titleAccent')}
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-300 mb-12 font-light leading-relaxed uppercase tracking-[0.15em]">
          {t('description')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a
            href="#productos"
            className="w-full sm:w-auto px-10 py-4 bg-black text-white font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-gray-900 transition-all duration-300 shadow-2xl"
          >
            {t('ctaCatalog')}
          </a>
          
          <a
            href="#contacto"
            className="w-full sm:w-auto px-10 py-4 border border-white/30 text-white font-bold text-[10px] tracking-[0.2em] uppercase backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300"
          >
            {t('ctaQuote')}
          </a>
        </div>
      </div>

      {/* Detalle técnico */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent hidden md:block z-20" />
    </section>
  );
};