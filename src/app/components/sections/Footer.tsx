import { Mail, Phone, MapPin, Linkedin, Instagram, Heart, Youtube } from 'lucide-react';

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
              <a 
                href="https://linkedin.com/company/luppets" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/luppets_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://tiktok.com/@luppets_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
              <a 
                href="https://open.spotify.com/episode/7KvjZVUAov0sVNY6DEtEvf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                aria-label="Spotify"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/@Luppets" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
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
