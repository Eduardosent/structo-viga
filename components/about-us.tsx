export const AboutUs = () => {
  return (
    <section id="nosotros" className="py-24 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        <div className="z-10">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">
            Suministro <br/> 
            <span className="text-gray-400">Estructural</span>
          </h2>
          
          <div className="space-y-6 text-gray-700 text-sm md:text-base leading-relaxed uppercase tracking-wide">
            <p>
              En StructoViga nos especializamos en la distribución de soluciones en acero de alta resistencia para proyectos de infraestructura y edificación.
            </p>
            <p className="font-medium text-black">
              Nuestro enfoque es la entrega precisa de componentes esenciales:
            </p>
          </div>

          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
              <div className="w-8 h-[1px] bg-black"></div>
              Vigas y Columnas de Acero
            </li>
            <li className="flex items-center gap-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
              <div className="w-8 h-[1px] bg-black"></div>
              Perfiles Estructurales
            </li>
            <li className="flex items-center gap-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
              <div className="w-8 h-[1px] bg-black"></div>
              Suministro para Obra
            </li>
          </ul>
        </div>

        <div className="relative">
          {/* Imagen real del material */}
          <div className="relative group"> 
            <img 
              src="/about-img.jpg" 
              className="w-full shadow-xl grayscale contrast-125" 
              alt="Materiales de acero estructural" 
            />
            {/* Elemento decorativo minimalista sin textos inventados */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-black/10 hidden md:block" />
          </div>
        </div>

      </div>
    </section>
  );
};