import Button from "../ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-orange-50 py-20" id="hero">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna izquierda - Texto */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl mb-6">
              Transforma el cuidado de tu mascota: <br />
              <span className="text-orange-500">más salud, más vida, más amor</span>
            </h1>
            <p className="text-lg text-gray-800 mb-6 max-w-2xl lg:max-w-none mx-auto lg:mx-0">
              Luppets te ayuda a cuidar a tu mascota con recordatorios personalizados
              y consejos basados en datos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button>Empieza Gratis Ahora</Button>
            </div>
            <p className="text-sm text-gray-700 mt-2">
              Sin tarjetas, sin compromiso
            </p>
          </div>

          {/* Columna derecha - Imagen limpia con difuminado inferior */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-xl">
              <Image
                src="/heroImage.webp"
                alt="Mascota feliz y saludable usando Luppets"
                width={600}
                height={600}
                className="w-full h-auto"
                priority={true}
                quality={90}
              />
              {/* Difuminado sutil debajo de la imagen */}
              <div className="absolute -bottom-8 left-0 right-0 h-16 bg-gradient-to-t from-orange-50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
