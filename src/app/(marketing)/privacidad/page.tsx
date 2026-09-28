import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Política de privacidad de Fundación Luppets para el sitio web luppets.com y la aplicación móvil Luppets. Pública, sin inicio de sesión.",
  alternates: {
    canonical: "/privacidad",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const UPDATED = "28 de septiembre de 2026";

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-orange-50/40">
      <section className="border-b border-orange-100 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-10 text-center sm:py-14">
          <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">
            Legal
          </span>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Política de privacidad
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
            Esta política explica cómo Fundación Luppets trata los datos
            personales en el sitio web luppets.com y en la aplicación móvil
            Luppets.
          </p>
          <p className="mt-3 text-sm text-gray-500">
            Última actualización: {UPDATED}
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl space-y-8 px-6 py-10 text-base leading-7 text-gray-700 sm:py-14">
        <section>
          <h2 className="text-xl font-bold text-gray-900">1. Responsable</h2>
          <p className="mt-3">
            El responsable del tratamiento es la{" "}
            <strong className="font-semibold text-gray-900">
              Fundación Luppets
            </strong>
            , organización sin ánimo de lucro constituida en Colombia, NIT
            902076974-7, registrada el 16 de junio de 2026. &quot;Luppets&quot;
            es su nombre comercial.
          </p>
          <p className="mt-3">
            Dominio oficial:{" "}
            <a
              href="https://luppets.com"
              className="font-medium text-orange-600 underline decoration-orange-200 underline-offset-4 hover:text-orange-700"
            >
              https://luppets.com
            </a>
          </p>
          <p className="mt-3">
            Contacto de privacidad:{" "}
            <a
              href="mailto:contacto@luppets.com"
              className="font-medium text-orange-600 underline decoration-orange-200 underline-offset-4 hover:text-orange-700"
            >
              contacto@luppets.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">2. Alcance</h2>
          <p className="mt-3">
            Esta política aplica al sitio{" "}
            <strong className="font-semibold text-gray-900">
              https://luppets.com
            </strong>{" "}
            y a la aplicación móvil Luppets publicada en tiendas de
            aplicaciones. Puedes leerla en{" "}
            <strong className="font-semibold text-gray-900">
              https://luppets.com/privacidad
            </strong>{" "}
            sin crear una cuenta y sin iniciar sesión. También está disponible
            desde la aplicación.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">
            3. Datos que podemos recoger
          </h2>
          <p className="mt-3">
            Recogemos solo los datos necesarios para prestar el servicio.
            Según cómo uses el sitio o la app, pueden incluir:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong className="font-semibold text-gray-900">
                Cuenta y contacto:
              </strong>{" "}
              nombre, correo electrónico y el método de acceso que elijas.
            </li>
            <li>
              <strong className="font-semibold text-gray-900">
                Perfil de la mascota:
              </strong>{" "}
              nombre, especie, raza, edad, peso, fotografía y datos de cuidado
              que registres, como vacunas, medicamentos, citas veterinarias,
              recordatorios y notas.
            </li>
            <li>
              <strong className="font-semibold text-gray-900">
                Notificaciones:
              </strong>{" "}
              un identificador del dispositivo para enviarte recordatorios, si
              autorizas las notificaciones.
            </li>
            <li>
              <strong className="font-semibold text-gray-900">
                Contenido que compartes:
              </strong>{" "}
              publicaciones o comentarios en funciones de comunidad, visibles
              para otros usuarios de esa función.
            </li>
            <li>
              <strong className="font-semibold text-gray-900">
                Uso y diagnóstico:
              </strong>{" "}
              tipo de dispositivo, sistema operativo, versión de la app,
              idioma, eventos de uso, fallos y registros técnicos necesarios
              para mantener el servicio.
            </li>
            <li>
              <strong className="font-semibold text-gray-900">
                Sitio web:
              </strong>{" "}
              páginas visitadas, dirección IP aproximada y cookies o
              tecnologías similares de medición, incluido Google Tag Manager.
            </li>
          </ul>
          <p className="mt-3">
            La ubicación precisa no es necesaria para los recordatorios ni para
            el cuidado básico. Si alguna función la necesitara, te pediremos
            permiso en el dispositivo y la usaremos solo para esa función.
          </p>
          <p className="mt-3">
            No solicitamos datos de salud humana. La información veterinaria se
            refiere a tu mascota y la ingresas tú.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">
            4. Para qué usamos los datos
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Crear y administrar tu cuenta y el perfil de tus mascotas.</li>
            <li>
              Enviar recordatorios de vacunas, medicamentos, citas y hábitos de
              cuidado.
            </li>
            <li>Mostrar consejos y contenido relacionados con el cuidado animal.</li>
            <li>Operar las funciones de comunidad que decidas usar.</li>
            <li>
              Atender solicitudes de soporte enviadas a contacto@luppets.com.
            </li>
            <li>
              Proteger el servicio, prevenir abusos y corregir errores
              técnicos.
            </li>
            <li>
              Entender el uso agregado del sitio y de la app para mejorarlos.
            </li>
            <li>Cumplir obligaciones legales aplicables en Colombia.</li>
          </ul>
          <p className="mt-3">
            No vendemos datos personales. No usamos la información de tu
            mascota para publicidad de terceros.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">5. Base del tratamiento</h2>
          <p className="mt-3">
            Tratamos datos personales conforme a la Ley 1581 de 2012 y demás
            normas colombianas de protección de datos. Las bases son tu
            autorización, la ejecución del servicio que solicitas, el interés
            legítimo de operar y proteger la plataforma, y el cumplimiento de
            deberes legales.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">
            6. Con quién compartimos datos
          </h2>
          <p className="mt-3">
            Compartimos datos solo cuando hace falta para operar Luppets:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              Proveedores que alojan la plataforma, envían notificaciones,
              miden el uso o dan soporte técnico, bajo instrucciones de
              Fundación Luppets.
            </li>
            <li>
              Tiendas de aplicaciones (por ejemplo Google Play o App Store) en
              la medida en que procesen datos de la descarga, compras o
              reseñas según sus propias políticas.
            </li>
            <li>
              Autoridades, cuando una ley vigente en Colombia lo exija.
            </li>
            <li>
              Otros usuarios, únicamente respecto del contenido que publiques
              en funciones de comunidad.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">
            7. Transferencias internacionales
          </h2>
          <p className="mt-3">
            Algunos proveedores pueden procesar datos fuera de Colombia. En
            ese caso exigimos medidas de seguridad acordes con la normativa
            aplicable y usamos esos datos solo para prestar el servicio.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">8. Conservación</h2>
          <p className="mt-3">
            Conservamos los datos mientras mantengas tu cuenta y sean
            necesarios para los fines descritos. Si eliminas tu cuenta o nos
            pides suprimir tus datos, los borraremos o anonimizaremos, salvo
            la información que debamos guardar por un deber legal.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">9. Seguridad</h2>
          <p className="mt-3">
            Aplicamos medidas técnicas y organizativas para proteger la
            información, incluido el acceso restringido y el cifrado en tránsito.
            Ningún sistema es absolutamente infalible; si detectamos un
            incidente que te afecte, te informaremos cuando la ley lo exija.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">10. Tus derechos</h2>
          <p className="mt-3">
            Puedes conocer, actualizar, rectificar y suprimir tus datos, y
            revocar la autorización, escribiendo a{" "}
            <a
              href="mailto:contacto@luppets.com"
              className="font-medium text-orange-600 underline decoration-orange-200 underline-offset-4 hover:text-orange-700"
            >
              contacto@luppets.com
            </a>
            . También puedes solicitar la eliminación de tu cuenta desde la
            aplicación, cuando esa opción esté disponible, o por el mismo
            correo.
          </p>
          <p className="mt-3">
            Si consideras que el tratamiento no se ajusta a la ley, puedes
            presentar una queja ante la Superintendencia de Industria y
            Comercio de Colombia.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">11. Menores de edad</h2>
          <p className="mt-3">
            Luppets está dirigida a personas cuidadoras de mascotas y no está
            destinada a menores de 18 años. No recogemos a sabiendas datos de
            menores. Si crees que un menor nos ha facilitado datos, escríbenos
            para eliminarlos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">
            12. Permisos del dispositivo
          </h2>
          <p className="mt-3">
            La app puede pedir permiso para enviar notificaciones y, si quieres
            añadir una foto de tu mascota, para acceder a la cámara o a la
            galería. Puedes rechazar o revocar esos permisos en los ajustes del
            teléfono. Algunas funciones, como los recordatorios, dependen de
            las notificaciones.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">
            13. Cookies en el sitio web
          </h2>
          <p className="mt-3">
            El sitio puede usar cookies técnicas y de medición, incluido
            Google Tag Manager, para saber qué páginas se visitan y mejorar el
            contenido. Puedes limitar las cookies desde la configuración de tu
            navegador. La aplicación móvil no depende de las cookies del sitio.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">14. Cambios</h2>
          <p className="mt-3">
            Si actualizamos esta política, publicaremos la versión vigente en
            esta misma dirección: https://luppets.com/privacidad. La fecha de
            la parte superior indica la última revisión.
          </p>
        </section>

        <section className="rounded-2xl border border-orange-100 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900">15. Contacto</h2>
          <dl className="mt-4 space-y-3">
            <div>
              <dt className="text-sm font-medium text-gray-500">Responsable</dt>
              <dd className="font-semibold text-gray-900">Fundación Luppets</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">NIT</dt>
              <dd className="font-semibold text-gray-900">902076974-7</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">País</dt>
              <dd className="font-semibold text-gray-900">Colombia</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Correo</dt>
              <dd>
                <a
                  href="mailto:contacto@luppets.com"
                  className="font-semibold text-orange-600 underline decoration-orange-200 underline-offset-4 hover:text-orange-700"
                >
                  contacto@luppets.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">
                Política pública
              </dt>
              <dd className="font-semibold text-gray-900">
                https://luppets.com/privacidad
              </dd>
            </div>
          </dl>
        </section>

        <p>
          <Link
            href="/"
            className="font-medium text-orange-600 underline decoration-orange-200 underline-offset-4 hover:text-orange-700"
          >
            Volver al inicio
          </Link>
        </p>
      </article>
    </main>
  );
}
