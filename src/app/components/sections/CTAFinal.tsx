import Button from "../ui/Button";

export default function CTAFinal() {
  return (
    <section className="py-20 bg-orange-500 text-white text-center" id="cta">
      <h2 className="text-3xl mb-4">
        No dejes que tu mascota espere más
      </h2>
      <p className="mb-6 text-lg">
        Descarga Luppets y cuida su salud desde hoy mismo.
      </p>
      <Button variant="secondary">Descargar la app</Button>
      <p className="text-sm mt-2">Disponible en iOS y Android</p>
    </section>
  );
}
