import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTiktok, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          
          {/* Logo e Info Real de El Salvador */}
          <div className="max-w-md">
            <img 
              src="/logo.png" 
              alt="StructoViga" 
              className="h-12 w-auto mb-6 brightness-0 invert" 
            />
            <p className="text-gray-400 text-xs uppercase tracking-widest leading-relaxed">
              Estructuras de acero: Cerchas, vigas y viguetas de alma abierta. <br />
              Hecho en El Salvador para El Salvador y Central America.
            </p>
          </div>
          
          {/* Redes Sociales - Con Iconos Oficiales y Color Uniforme */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">Síguenos</h4>
            <div className="flex gap-8 items-center text-gray-500"> {/* Color uniforme para todos */}
              <a href="https://www.instagram.com/structoviga/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61584997876580" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <FaFacebookF size={22} />
              </a>
              <a href="https://www.tiktok.com/@structoviga" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <FaTiktok size={22} />
              </a>
              <a href="https://www.linkedin.com/in/structo-viga-2068853b4/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <FaLinkedinIn size={24} />
              </a>
              <a href="https://api.whatsapp.com/send/?phone=12025690707" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"> {/* Color uniforme también para WhatsApp */}
                <FaWhatsapp size={26} className="hover:text-white transition-colors"/>
              </a>
            </div>
          </div>
        </div>

{/* Footer Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 tracking-[0.5em] font-bold">
          <p>© {new Date().getFullYear()} Structoviga Todos los derechos reservados</p>
          <p>Hecho en El Salvador</p>
        </div>
      </div>
    </footer>
  );
};