import React from 'react';

const useCases = [
  {
    id: "01",
    title: "Naves de Gran Claro",
    description: "Implementación en centros de distribución como AirCity, permitiendo espacios de maniobra libres de columnas de hasta 40 metros.",
    image: "/viga-de-alma-abierta.png",
  },
  {
    id: "02",
    title: "Soportes de Alta Carga",
    description: "Columnas de celosía diseñadas para resistir vientos críticos en autopistas y soportar tanques elevados con mínima huella de cimentación.",
    image: "/columnas-de-celosia.png",
  },
  {
    id: "03",
    title: "Conexiones Elevadas",
    description: "Pasarelas industriales para el tránsito seguro de personal entre naves y acceso a maquinaria de proceso sin interrumpir la planta.",
    image: "/pasarelas-de-gran-claro.png"
  }
];

export const UseCases = () => {
  return (
    <section id="casos-uso" className="py-24 bg-white text-black">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Cabecera */}
        <div className="mb-24 text-center">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase">
            Casos de <span className="text-slate-400">Uso</span>
          </h2>
          <div className="h-1 w-24 bg-black mx-auto mt-6"></div>
        </div>

        {/* Lista de Casos Centrados */}
        <div className="flex flex-col gap-40">
          {useCases.map((use) => (
            <div key={use.id} className="flex flex-col items-center text-center">
              
              {/* Texto Arriba */}
              <div className="mb-10 max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-black tracking-tight uppercase mb-4">
                  {use.title}
                </h3>
                <p className="text-slate-600 text-lg font-light leading-relaxed">
                  {use.description}
                </p>
              </div>

              {/* Imagen Centrada */}
              <div className="w-full bg-white border border-slate-100 shadow-sm">
                <img 
                  src={use.image} 
                  alt={use.title}
                  className="w-full h-auto block"
                />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};