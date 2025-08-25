import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="bg-orange-50 py-20 text-center" id="hero">
      <h1 className="text-4xl md:text-5xl mb-6">
        Transforma el cuidado de tu mascota: <br />
        <span className="text-orange-500">más salud, más vida, más amor</span>
      </h1>
      <p className="text-lg text-gray-800 mb-6 max-w-2xl mx-auto">
        Luppets te ayuda a cuidar a tu mascota con recordatorios personalizados
        y consejos basados en datos.
      </p>
      <Button>Empieza Gratis Ahora</Button>
      <p className="text-sm text-gray-700 mt-2">
        Sin tarjetas, sin compromiso
      </p>
    </section>
  );
}
