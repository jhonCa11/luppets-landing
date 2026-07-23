import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fundación Luppets",
  description:
    "Luppets es una iniciativa de la Fundación Luppets, organización sin ánimo de lucro legalmente constituida en Colombia. El dominio luppets.com es el principal de nuestra organización.",
  alternates: {
    canonical: "/fundacion",
  },
};

export default function FundacionPage() {
  return (
    <main className="min-h-screen bg-orange-50/40">
      <section className="border-b border-orange-100 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-10 text-center sm:py-14">
          <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">
            Nosotros
          </span>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Fundación Luppets
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Luppets es una iniciativa desarrollada por la Fundación Luppets,
            organización sin ánimo de lucro legalmente constituida en Colombia.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-10 sm:py-14">
        <div className="space-y-8 text-base leading-7 text-gray-700">
          <p>
            Nuestra misión es promover el bienestar animal mediante tecnología
            preventiva, educación y acompañamiento a los cuidadores de mascotas.
          </p>

          <div>
            <p className="font-semibold text-gray-900">
              El dominio oficial de nuestra organización es:
            </p>
            <p className="mt-2">
              <a
                href="https://luppets.com"
                className="font-medium text-orange-600 underline decoration-orange-200 underline-offset-4 hover:text-orange-700"
              >
                https://luppets.com
              </a>
            </p>
            <p className="mt-3">
              Desde este sitio desarrollamos nuestra plataforma tecnológica,
              compartimos información institucional y administramos nuestros
              servicios digitales.
            </p>
          </div>

          <div className="rounded-2xl border border-orange-100 bg-white p-6 sm:p-8">
            <h2 className="text-lg font-bold text-gray-900">
              Información institucional
            </h2>

            <dl className="mt-5 space-y-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">
                  Razón social
                </dt>
                <dd className="mt-1 font-semibold text-gray-900">
                  Fundación Luppets
                </dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-500">NIT</dt>
                <dd className="mt-1 font-semibold text-gray-900">
                  902076974-7
                </dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-500">
                  Fecha de registro
                </dt>
                <dd className="mt-1 font-semibold text-gray-900">16/06/2026</dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-500">País</dt>
                <dd className="mt-1 font-semibold text-gray-900">
                  Colombia
                </dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-500">
                  Nombre comercial
                </dt>
                <dd className="mt-1 font-semibold text-gray-900">Luppets</dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-500">
                  Dominio principal
                </dt>
                <dd className="mt-1 font-semibold text-gray-900">
                  luppets.com
                </dd>
              </div>
            </dl>
          </div>


          <p>
            <Link
              href="/"
              className="font-medium text-orange-600 underline decoration-orange-200 underline-offset-4 hover:text-orange-700"
            >
              Volver al inicio
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
