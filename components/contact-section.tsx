"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { Phone, MapPin, Mail } from "lucide-react";

export const ContactSection = () => {
  const t = useTranslations('Landing.Contact');

  return (
    <section 
      id="contacto" 
      className="py-24 bg-white text-black" 
      aria-labelledby="contacto-title"
      itemScope 
      itemType="https://schema.org/LocalBusiness"
    >
      {/* Schema.org Meta para asegurar el nombre del negocio en el rastreo */}
      <meta itemProp="name" content="Structoviga" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Información de Contacto Semántica */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-2 font-bold">
              {t('overline')}
            </p>
            <h2 id="contacto-title" className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">
              {t('titleMain')} <br /> <span className="text-gray-400">{t('titleAccent')}</span>
            </h2>
            
            <p className="text-gray-600 leading-relaxed mb-10 text-sm md:text-base uppercase tracking-wide">
              {t('description')}
            </p>

            {/* Contenedor Address con Atributos de Microdatos */}
            <address className="space-y-8 not-italic">
              
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-black flex items-center justify-center text-white">
                  <Phone size={20} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{t('labelPhone')}</p>
                  <p className="text-lg font-bold">
                    <a href="tel:+50377523949" itemProp="telephone" className="hover:underline">
                      +503 7752 3949
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center text-black">
                  <Mail size={20} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{t('labelEmail')}</p>
                  <p className="text-lg font-bold">
                    <a href="mailto:structoviga@gmail.com" itemProp="email" className="hover:underline">
                      structoviga@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center text-black">
                  <MapPin size={20} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{t('labelLocation')}</p>
                  <p className="text-lg font-bold" itemProp="streetAddress">
                    {t('locationValue')}
                  </p>
                  {/* Meta tag para indicar el país de operación en SEO local */}
                  <meta itemProp="addressCountry" content="SV" />
                </div>
              </div>

            </address>
          </div>

          {/* Acción Principal */}
          <div className="bg-gray-50 p-8 md:p-12 border border-black/5 flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-black uppercase mb-6">{t('ctaTitle')}</h3>
            <p className="text-gray-500 text-sm mb-8 uppercase tracking-tight">
              {t('ctaDescription')}
            </p>
            
            <a
              href="mailto:structoviga@gmail.com"
              className="w-full py-5 bg-black text-white font-bold text-xs tracking-[0.2em] uppercase hover:bg-gray-800 transition-all shadow-xl flex items-center justify-center gap-3"
            >
              <Mail size={16} aria-hidden="true" />
              {t('ctaButton')}
            </a>
            
            <p className="mt-6 text-[9px] text-gray-400 uppercase tracking-[0.3em]">
              {t('footerNote')}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};