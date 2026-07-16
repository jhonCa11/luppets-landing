import Link from "next/link";

import BlogCard from "@/app/components/blog/BlogCard";
import { sanityFetch } from "@/sanity/fetch";
import { FEATURED_POSTS_QUERY } from "@/sanity/queries";
import type { BlogPost } from "@/sanity/types";

export default async function BlogPreview() {
  const posts = await sanityFetch<BlogPost[]>({
    query: FEATURED_POSTS_QUERY,
    revalidate: 60,
    fallback: [],
  });

  if (posts.length === 0) {
    return null;
  }

  return (
    <section id="blog" className="bg-orange-50/60 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="font-semibold text-orange-600">Aprende con Luppets</span>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Consejos para cuidar mejor a tu mascota
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Información preventiva, noticias y recursos creados para acompañarte
            en cada etapa.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex rounded-xl bg-orange-500 px-7 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Ver todos los artículos
          </Link>
        </div>
      </div>
    </section>
  );
}
