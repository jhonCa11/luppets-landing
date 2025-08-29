import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Logo y descripción */}
          <div className="lg:col-span-1">
            <div className="text-xl font-bold mb-2 text-orange-500">Luppets</div>
            <p className="text-sm text-gray-300 mb-3">
              La app que cuida la salud de tu mascota con recordatorios inteligentes y seguimiento veterinario.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <div className="text-lg font-semibold mb-3 text-white border-b-2 border-orange-500 pb-1">Enlaces</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">Inicio</a></li>
              <li><a href="#how" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">Cómo funciona</a></li>
              <li><a href="#benefits" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">Beneficios</a></li>
              <li><a href="#cta" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">Descargar</a></li>
            </ul>
          </div>

          {/* Información legal */}
          <div>
            <div className="text-lg font-semibold mb-3 text-white border-b-2 border-orange-500 pb-1">Legal</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">Términos de servicio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">Política de privacidad</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">Cookies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">Soporte 24/7</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <div className="text-lg font-semibold mb-3 text-white border-b-2 border-orange-500 pb-1">Contacto</div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4 text-orange-500" />
                <span>contacto@luppets.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4 text-orange-500" />
                <span>+1 (555) 555-5555</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>Bogotá, Colombia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Línea de copyright */}
        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Luppets. Hecho con <Heart className="inline w-4 h-4 text-red-500" /> para mascotas felices.
          </p>
        </div>
      </div>
    </footer>
  );
}
