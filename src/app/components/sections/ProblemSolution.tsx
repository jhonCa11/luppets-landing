import Button from "../ui/Button";
import { Bell, Lightbulb, Target } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <section className="py-16 bg-white" id="problem">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl mb-4">
          ¿Olvidas las vacunas o cuidados importantes de tu mascota?
        </h2>
        <p className="text-gray-600 mb-8">
          Sabemos que cuidar de tu mascota puede ser un reto. Por eso creamos
          <span className="text-orange-500 font-semibold"> Luppets</span>: la app que te recuerda TODO
          para que nunca falte nada.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-orange-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <Bell className="w-12 h-12 text-orange-500" />
            </div>
            <h3 className="mb-2 font-semibold text-gray-800">Recordatorios</h3>
            <p className="text-gray-600">Para vacunas y cuidados</p>
          </div>
          <div className="p-6 bg-orange-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <Lightbulb className="w-12 h-12 text-orange-500" />
            </div>
            <h3 className="mb-2 font-semibold text-gray-800">Consejos expertos</h3>
            <p className="text-gray-600">Alimentación, ejercicio e higiene</p>
          </div>
          <div className="p-6 bg-orange-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <Target className="w-12 h-12 text-orange-500" />
            </div>
            <h3 className="mb-2 font-semibold text-gray-800">Recomendaciones</h3>
            <p className="text-gray-600">Adaptadas a su raza, tamaño y edad</p>
          </div>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl">
          Quiero dejar de preocuparme
        </button>
      </div>
    </section>
  );
}
