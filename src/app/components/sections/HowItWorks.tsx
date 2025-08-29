export default function HowItWorks() {
  return (
    <section className="py-16 bg-orange-50" id="how">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl mb-10">Comienza en 3 simples pasos</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <span className="text-4xl">📲</span>
            <h3 className="mt-2">Descarga la app</h3>
          </div>
          <div>
            <span className="text-4xl">🔔</span>
            <h3 className="mt-2">Recibe recordatorios</h3>
          </div>
          <div>
            <span className="text-4xl">❤️</span>
            <h3 className="mt-2">Disfruta de una mascota sana</h3>
          </div>
        </div>
        
        {/* Botón CTA */}
        <div className="text-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            ¡Quiero empezar ahora!
          </button>
          <p className="text-gray-600 mt-3 text-sm">Descarga gratuita • Sin registro requerido</p>
        </div>
      </div>
    </section>
  );
}
