import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";

export const ContactSection = () => {
  // const whatsappNumber = "12025690707"; // Número personal - Pendiente de actualizar a número empresarial
  const message = encodeURIComponent("Hola, estoy interesado en comprar producción de StructoViga.");

  return (
    <section id="contacto" className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Información de Contacto */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-2 font-bold">
              Contacto Directo
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">
              Hablemos de <br /> <span className="text-gray-400">tu proyecto</span>
            </h2>
            
            <p className="text-gray-600 leading-relaxed mb-10 text-sm md:text-base uppercase tracking-wide">
              Estructuras de acero fabricadas en El Salvador para El Salvador y Centroamérica. 
              Contáctanos para cotizar cerchas, vigas y viguetas de alma abierta.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-black flex items-center justify-center text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Llamadas</p>
                  <p className="text-lg font-bold">+503 7752 3949</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center text-black">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Correo Electrónico</p>
                  <p className="text-lg font-bold">structoviga@gmail.com</p>
                </div>
              </div>

              {/* WhatsApp Comentado temporalmente
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-green-600 flex items-center justify-center text-white">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">WhatsApp</p>
                  <p className="text-lg font-bold">+1 202 569 0707</p>
                </div>
              </div> 
              */}

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center text-black">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Sede</p>
                  <p className="text-lg font-bold">El Salvador, C.A.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Acción Principal */}
          <div className="bg-gray-50 p-8 md:p-12 border border-black/5 flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-black uppercase mb-6">¿Listo para cotizar?</h3>
            <p className="text-gray-500 text-sm mb-8 uppercase tracking-tight">
              Escríbenos a nuestro correo o llámanos directamente para iniciar tu presupuesto.
            </p>
            
            <a
              href="mailto:structoviga@gmail.com"
              className="w-full py-5 bg-black text-white font-bold text-xs tracking-[0.2em] uppercase hover:bg-gray-800 transition-all shadow-xl flex items-center justify-center gap-3"
            >
              <Mail size={16} />
              Enviar Correo Directo
            </a>
            
            <p className="mt-6 text-[9px] text-gray-400 uppercase tracking-[0.3em]">
              Respuesta profesional • Structoviga.com
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};