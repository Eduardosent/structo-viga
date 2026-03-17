// const products = [
//   { id: 1, name: "Viga I-Beam Estructural", img: "/product-1.jpg" },
//   { id: 2, name: "Perfil H-Steel Premium", img: "/product-2.jpg" },
//   { id: 3, name: "Canal U Reforzado", img: "/product-3.jpg" },
// ];

import React from 'react';

const products = [
  {
    title: "Cerchas de alma abierta (Open Web Trusses)",
    image: "viga-alma-abierta.jpg",
    description: "Estructuras personalizables diseñadas para optimizar la relación resistencia-peso, permitiendo cubrir grandes luces con un peso mínimizado."
  },
  {
    title: "Columnas o Pilares de celosía (Open Web Pillars/Posts)",
    image: "pilar-de-celosia.avif",
    description: "Elementos verticales de alta capacidad estructural y diseño calado, ideales para soportar cargas pesadas con gran rigidez torsional."
  },
  {
    title: "Pasarelas de gran claro (Long-span Walkways)",
    image: "pasarela.webp",
    description: "Puentes peatonales tipo pasarela diseñados para claros superiores al promedio, ligeros pero sumamente robustos para el tránsito industrial."
  }
];

export const OurProducts = () => {
  return (
    <section id="productos" className="py-24 bg-[#0a0a0a] text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-l-4 border-orange-500 pl-8">
          <div>
            <h2 className="text-4xl font-bold tracking-tighter uppercase sm:text-5xl">
              Ingeniería <span className="text-orange-500">Estructural</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl text-lg font-light">
              Soluciones de acero fabricadas para proyectos de alta exigencia.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {products.map((p, index) => (
            <div key={index} className="group flex flex-col h-full bg-[#111] border border-white/5 hover:border-orange-500/50 transition-all duration-500">
              <div className="relative overflow-hidden aspect-[4/5]">
                <img 
                  src={p.image} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  alt={p.title}
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