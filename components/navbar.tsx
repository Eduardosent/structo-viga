export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Contenedor del Logo - Ahora sobre fondo claro resalta el negro */}
        <div className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Structo Viga Logo" 
            className="h-12 w-auto object-contain" 
          />
        </div>
        
        {/* Links - Texto oscuro que cambia a negro puro en hover */}
        <div className="hidden md:flex space-x-10 text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">
          <a href="#inicio" className="hover:text-black transition-colors">Inicio</a>
          <a href="#productos" className="hover:text-black transition-colors">Productos</a>
          <a href="#nosotros" className="hover:text-black transition-colors">Nosotros</a>
          <a href="#contacto" className="hover:text-black transition-colors">Contacto</a>
        </div>

        {/* Botón - Ahora negro con texto blanco para mantener el contraste */}
        <button 
          onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-black text-white text-[10px] font-bold uppercase tracking-widest px-6 py-3 hover:bg-gray-800 transition-all shadow-sm"
        >
          Cotizar
        </button>
      </div>
    </nav>
  );
};