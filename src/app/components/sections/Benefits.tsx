import Image from "next/image";
import { Bell, Lightbulb, Shield, Heart, Users } from 'lucide-react';

export default function Benefits() {
  return (
    <section className="py-6 bg-orange-50" id="benefits">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-2 items-center">
          
          {/* Columna izquierda - Texto */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl mb-3">
              Luppets es más que una app: <br /> es el mejor amigo de tu mascota
            </h2>
            <ul className="text-left max-w-2xl lg:max-w-none mx-auto lg:mx-0 space-y-4 text-gray-700 mb-4">
              <li className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>Nunca más olvides una vacuna o cita veterinaria</span>
              </li>
              <li className="flex items-center gap-3">
                <Lightbulb className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>Cuida a tu mascota con consejos expertos y personalizados</span>
              </li>
              <li className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>Recibe alertas útiles sin saturarte de notificaciones</span>
              </li>
              <li className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>Fortalece el vínculo con tu mascota mediante hábitos saludables</span>
              </li>
              <li className="flex items-center gap-3">
                <Users className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>Únete a una comunidad que comparte tu amor por los animales</span>
              </li>
            </ul>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl">
              Quiero dejar de preocuparme
            </button>
          </div>

          {/* Columna derecha - Mockup de la app con hover effects */}
          <div className="flex justify-center group">
            <div className="relative w-64 lg:w-72 transform transition-all duration-500 ease-out group-hover:scale-105 group-hover:translate-x-1">
              <Image
                src="/mockupApp.webp"
                alt="Mockup de la aplicación Luppets en móvil"
                width={256}
                height={384}
                className="w-full h-auto transition-all duration-500 ease-out"
                priority={false}
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
