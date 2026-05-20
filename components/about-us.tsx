"use client";

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export const AboutUs = () => {
  const t = useTranslations('Landing.AboutUs');

  return (
    <section id="nosotros" className="py-24 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        <div className="z-10">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">
            {t('titleMain')} <br/> 
            <span className="text-gray-400">{t('titleAccent')}</span>
          </h2>
          
          <div className="space-y-6 text-gray-700 text-sm md:text-base leading-relaxed uppercase tracking-wide">
            <p>{t('description1')}</p>
            <p className="font-medium text-black">
              {t('description2')}
            </p>
          </div>

          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
              <div className="w-8 h-[1px] bg-black"></div>
              {t('item1')}
            </li>
            <li className="flex items-center gap-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
              <div className="w-8 h-[1px] bg-black"></div>
              {t('item2')}
            </li>
            <li className="flex items-center gap-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
              <div className="w-8 h-[1px] bg-black"></div>
              {t('item3')}
            </li>
          </ul>
        </div>

        <div className="relative">
          <div className="relative group"> 
            <Image 
              src="/about-img.jpg" 
              className="w-full h-auto shadow-xl grayscale contrast-125" 
              alt={t('imgAlt')}
              width={584}
              height={584}
              sizes="(max-width: 768px) 100vw, 584px"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-black/10 hidden md:block" />
          </div>
        </div>

      </div>
    </section>
  );
};