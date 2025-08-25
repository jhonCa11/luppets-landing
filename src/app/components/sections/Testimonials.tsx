export default function Testimonials() {
  return (
    <section className="py-16 bg-white" id="testimonials">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl mb-10">
          Únete a miles de dueños que ya confiaron en Luppets
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-orange-50 rounded-xl shadow">
            <p className="text-gray-700 italic">
              “Desde que uso Luppets me siento seguro de que Luna siempre recibe
              el mejor cuidado.”
            </p>
            <span className="block mt-4 font-bold">Laura – Bogotá</span>
          </div>
          <div className="p-6 bg-orange-50 rounded-xl shadow">
            <p className="text-gray-700 italic">
              “Los recordatorios me salvaron de olvidar la vacuna de Rocky.
              100% recomendado.”
            </p>
            <span className="block mt-4 font-bold">Carlos – México</span>
          </div>
          <div className="p-6 bg-orange-50 rounded-xl shadow">
            <p className="text-gray-700 italic">
              “El mejor apoyo para quienes amamos a nuestros perros y gatos.”
            </p>
            <span className="block mt-4 font-bold">Ana – Lima</span>
          </div>
        </div>
      </div>
    </section>
  );
}
