import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="py-16 bg-white" id="testimonials">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl mb-8 sm:mb-12">
          Únete a miles de dueños que ya confiaron en Luppets
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          
          {/* Testimonio 1 - Kira - Paleta cálida naranja/amarilla */}
          <div className="flex flex-col items-center group">
            <div className="relative w-full aspect-square mb-6 transform transition-all duration-300 group-hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-3xl shadow-2xl"></div>
              <div className="absolute inset-2 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/img_testimonial.webp"
                  alt="Kira, perrita de Karen en Bogotá"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px"
                  priority={false}
                  quality={90}
                />
              </div>
              {/* Decoración sutil en tonos cálidos */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-400 rounded-full opacity-80"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full opacity-60"></div>
            </div>
            <div className="p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl shadow-lg w-full border border-orange-100">
              <p className="text-sm sm:text-base text-gray-700 italic mb-4 leading-relaxed">
                &ldquo;Desde que uso Luppets me siento segura de que Kira siempre recibe
                el mejor cuidado.&rdquo;
              </p>
              <span className="font-bold text-gray-800 text-sm sm:text-base">Karen – Bogotá, Colombia</span>
            </div>
          </div>

          {/* Testimonio 2 - Rosky y Molly - Paleta cálida roja/rosa */}
          <div className="flex flex-col items-center group">
            <div className="relative w-full aspect-square mb-6 transform transition-all duration-300 group-hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-pink-100 rounded-3xl shadow-2xl"></div>
              <div className="absolute inset-2 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/img_testimonial2.webp"
                  alt="Rosky y Molly, mascotas de Estefania en Durango"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px"
                  priority={false}
                  quality={90}
                />
              </div>
              {/* Decoración sutil en tonos cálidos */}
              <div className="absolute -top-2 -left-2 w-5 h-5 bg-red-400 rounded-full opacity-80"></div>
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-pink-400 rounded-full opacity-60"></div>
            </div>
            <div className="p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl shadow-lg w-full border border-red-100">
              <p className="text-sm sm:text-base text-gray-700 italic mb-4 leading-relaxed">
                &ldquo;Los recordatorios me salvaron de olvidar las vacunas de Rosky y Molly.
                100% recomendado.&rdquo;
              </p>
              <span className="font-bold text-gray-800 text-sm sm:text-base">Estefania – Durango, México</span>
            </div>
          </div>

          {/* Testimonio 3 - Mascotas de Greisy - Paleta cálida marrón/beige */}
          <div className="flex flex-col items-center group md:col-span-2 lg:col-span-1">
            <div className="relative w-full aspect-square mb-6 transform transition-all duration-300 group-hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl shadow-2xl"></div>
              <div className="absolute inset-2 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/img_testimonial3.webp"
                  alt="Mascotas de Greisy en Lima"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px"
                  priority={false}
                  quality={90}
                />
              </div>
              {/* Decoración sutil en tonos cálidos */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-400 rounded-full opacity-80"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-orange-400 rounded-full opacity-60"></div>
            </div>
            <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg w-full border border-amber-100">
              <p className="text-sm sm:text-base text-gray-700 italic mb-4 leading-relaxed">
                &ldquo;El mejor apoyo para quienes amamos a nuestros perros y gatos.&rdquo;
              </p>
              <span className="font-bold text-gray-800 text-sm sm:text-base">Greisy – Lima, Perú</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
