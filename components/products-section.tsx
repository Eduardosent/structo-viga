// const products = [
//   { id: 1, name: "Viga I-Beam Estructural", img: "/product-1.jpg" },
//   { id: 2, name: "Perfil H-Steel Premium", img: "/product-2.jpg" },
//   { id: 3, name: "Canal U Reforzado", img: "/product-3.jpg" },
// ];
"use client";

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export const OurProducts = () => {
  const t = useTranslations('Landing.OurProducts');

  const products = [
    {
      title: t('items.0.title'),
      image: "/viga-alma-abierta.jpg",
      description: t('items.0.description')
    },
    {
      title: t('items.1.title'),
      image: "/pilar-de-celosia.avif",
      description: t('items.1.description')
    },
    {
      title: t('items.2.title'),
      image: "/pasarela.webp",
      description: t('items.2.description')
    }
  ];

  return (
    <section id="productos" className="py-24 bg-[#0a0a0a] text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-l-4 border-orange-500 pl-8">
          <div>
            <h2 className="text-4xl font-bold tracking-tighter uppercase sm:text-5xl">
              {t('titleMain')} <span className="text-orange-500">{t('titleAccent')}</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl text-lg font-light">
              {t('subtitle')}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {products.map((p, index) => (
            <div key={index} className="group flex flex-col h-full bg-[#111] border border-white/5 hover:border-orange-500/50 transition-all duration-500">
              <div className="relative overflow-hidden aspect-[4/5]">
                <Image 
                  src={p.image} 
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-4 leading-tight group-hover:text-orange-500 transition-colors uppercase">
                  {p.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                  {p.description}
                </p>
                
                <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-end">
                  <div className="w-8 h-[1px] bg-orange-500 group-hover:w-12 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};