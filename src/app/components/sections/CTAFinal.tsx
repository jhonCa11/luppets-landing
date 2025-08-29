import Button from "../ui/Button";
import { Download, Smartphone, Star, ArrowRight } from 'lucide-react';

export default function CTAFinal() {
  return (
    <section className="py-12 bg-gradient-to-br from-orange-500 to-orange-600 text-white text-center relative overflow-hidden" id="cta">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Contenido principal */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl mb-6 font-bold text-white">
            No dejes que tu mascota espere más
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-orange-50">
            Descarga Luppets y cuida su salud desde hoy mismo.
          </p>
        </div>

        {/* Botones de descarga */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="bg-white text-orange-600 hover:bg-orange-50 font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group">
            <Download className="w-6 h-6" />
            <span>Descargar para iOS</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button className="bg-white text-orange-600 hover:bg-orange-50 font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group">
            <Download className="w-6 h-6" />
            <span>Descargar para Android</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Características destacadas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex flex-col items-center p-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2 text-white">App Nativa</h3>
            <p className="text-sm text-orange-50">Optimizada para tu dispositivo</p>
          </div>

          <div className="flex flex-col items-center p-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2 text-white">4.8/5 Estrellas</h3>
            <p className="text-sm text-orange-50">Miles de usuarios satisfechos</p>
          </div>

          <div className="flex flex-col items-center p-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
              <Download className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2 text-white">Descarga Gratis</h3>
            <p className="text-sm text-orange-50">Sin costos ocultos</p>
          </div>
        </div>

        {/* Texto final */}
        <div className="text-center">
          <p className="text-lg mb-4 text-white">Disponible en iOS y Android</p>
          <p className="text-sm text-orange-50">Empieza a cuidar a tu mascota en menos de 2 minutos</p>
        </div>
      </div>
    </section>
  );
}
