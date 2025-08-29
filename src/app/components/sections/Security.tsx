import { Shield, Lock, Eye, CheckCircle } from 'lucide-react';

export default function Security() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white" id="security">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">
            Tu confianza es nuestra prioridad
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Protegemos tus datos con tecnología segura. Sin costos ocultos ni
            compromiso. Atención personalizada siempre disponible.
          </p>
        </div>

        {/* Características de seguridad */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Datos Protegidos</h3>
            <p className="text-gray-600 text-sm text-center">Encriptación de nivel bancario</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Lock className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Acceso Seguro</h3>
            <p className="text-gray-600 text-sm text-center">Autenticación de dos factores</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Eye className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Privacidad Total</h3>
            <p className="text-gray-600 text-sm text-center">Tus datos nunca se comparten</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Sin Compromiso</h3>
            <p className="text-gray-600 text-sm text-center">Cancela cuando quieras</p>
          </div>
        </div>

        {/* Enlaces de confianza */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/privacy" className="text-orange-500 hover:text-orange-600 underline font-medium transition-colors duration-300">
              Política de privacidad
            </a>
            <span className="text-gray-400">•</span>
            <a href="/terms" className="text-orange-500 hover:text-orange-600 underline font-medium transition-colors duration-300">
              Términos de servicio
            </a>
            <span className="text-gray-400">•</span>
            <a href="/support" className="text-orange-500 hover:text-orange-600 underline font-medium transition-colors duration-300">
              Soporte 24/7
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
