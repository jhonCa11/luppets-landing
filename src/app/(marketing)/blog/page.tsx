import type { Metadata } from "next";

import BlogCard from "@/app/components/blog/BlogCard";
import { sanityFetch } from "@/sanity/fetch";
import { POSTS_QUERY } from "@/sanity/queries";
import type { BlogPost } from "@/sanity/types";

export const metadata: Metadata = {
  title: "Blog | Fundación Luppets",
  description:
    "Consejos, noticias y recursos para el cuidado preventivo de mascotas.",
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage() {
  const posts = await sanityFetch<BlogPost[]>({
    query: POSTS_QUERY,
    revalidate: 60,
    fallback: [],
  });

  return (
    <main className="min-h-screen bg-orange-50/40">
      <section className="border-b border-orange-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center sm:py-10">
          <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">
            Blog Luppets
          </span>

          <h1 className="mx-auto mt-3 max-w-3xl text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
            Aprende a cuidar mejor a quien siempre está contigo
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-gray-600">
            Información preventiva, noticias y recursos para acompañarte durante
            cada etapa de la vida de tu mascota.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 sm:py-12">
        {posts.length === 0 ? (
          <div className="rounded-3xl bg-white p-12 text-center shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">
              Muy pronto encontrarás nuevos artículos
            </h2>

            <p className="mt-3 text-gray-600">
              Estamos preparando información útil para ayudarte a proteger y
              cuidar mejor a tu mascota.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
