import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PortableTextContent from "@/app/components/blog/PortableTextContent";
import { sanityFetch } from "@/sanity/fetch";
import { urlForImage } from "@/sanity/image";
import { POST_BY_SLUG_QUERY, POST_SLUGS_QUERY } from "@/sanity/queries";
import type { BlogPost, SitemapPost } from "@/sanity/types";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await sanityFetch<SitemapPost[]>({
    query: POST_SLUGS_QUERY,
    revalidate: 60,
    fallback: [],
  });

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = await sanityFetch<BlogPost | null>({
    query: POST_BY_SLUG_QUERY,
    params: { slug },
    revalidate: 60,
    fallback: null,
  });

  if (!post) {
    return {
      title: "Artículo no encontrado | Luppets",
    };
  }

  const coverUrl = post.coverImage
    ? urlForImage(post.coverImage).width(1200).height(630).quality(85).url()
    : undefined;

  return {
    title: post.seoTitle ?? `${post.title} | Luppets`,
    description: post.seoDescription ?? post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    robots: post.noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
    openGraph: {
      type: "article",
      title: post.seoTitle ?? post.title,
      description: post.seoDescription ?? post.excerpt,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      images: coverUrl
        ? [
            {
              url: coverUrl,
              alt: post.coverImage.alt ?? post.title,
            },
          ]
        : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const post = await sanityFetch<BlogPost | null>({
    query: POST_BY_SLUG_QUERY,
    params: { slug },
    revalidate: 60,
    fallback: null,
  });

  if (!post) {
    notFound();
  }

  const coverUrl = urlForImage(post.coverImage)
    .width(1400)
    .height(788)
    .quality(88)
    .url();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: coverUrl,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": post.author ? "Person" : "Organization",
      name: post.author?.name ?? "Fundación Luppets",
    },
    publisher: {
      "@type": "Organization",
      name: "Fundación Luppets",
    },
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <article>
        <header className="bg-orange-50/70">
          <div className="mx-auto max-w-4xl px-6 py-14">
            <Link
              href="/blog"
              className="font-semibold text-orange-600 transition hover:text-orange-700"
            >
              ← Volver al blog
            </Link>

            {post.category?.title && (
              <div className="mt-8">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">
                  {post.category.title}
                </span>
              </div>
            )}

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              {post.title}
            </h1>

            <p className="mt-6 text-xl leading-8 text-gray-600">{post.excerpt}</p>

            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-gray-500">
              <span>{post.author?.name ?? "Fundación Luppets"}</span>
              {post.author?.role && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{post.author.role}</span>
                </>
              )}
              <span aria-hidden="true">•</span>
              <time dateTime={post.publishedAt}>
                {new Intl.DateTimeFormat("es-CO", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }).format(new Date(post.publishedAt))}
              </time>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-5xl px-6 py-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-orange-50">
            <Image
              src={coverUrl}
              alt={post.coverImage.alt ?? post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
          {post.coverImage.caption && (
            <p className="mt-3 text-center text-sm text-gray-500">
              {post.coverImage.caption}
            </p>
          )}
        </div>

        <div className="mx-auto max-w-3xl px-6 pb-20">
          <div className="blog-prose max-w-none">
            {post.body && <PortableTextContent value={post.body} />}
          </div>

          {post.medicalReview?.reviewed && (
            <section className="mt-12 rounded-2xl border border-green-200 bg-green-50 p-6">
              <p className="font-semibold text-green-900">
                Contenido revisado profesionalmente
              </p>
              <p className="mt-2 text-sm text-green-800">
                {post.medicalReview.reviewerName}
                {post.medicalReview.reviewerRole
                  ? ` · ${post.medicalReview.reviewerRole}`
                  : ""}
              </p>
            </section>
          )}

          {post.sources && post.sources.length > 0 && (
            <section className="mt-12 border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900">Fuentes</h2>
              <ul className="mt-4 space-y-3">
                {post.sources.map((source) => (
                  <li key={source._key}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 underline"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <aside className="mt-16 rounded-3xl bg-orange-500 p-8 text-white md:p-10">
            <h2 className="text-2xl font-bold text-white">
              No dejes el cuidado de tu mascota en manos del olvido
            </h2>
            <p className="mt-3 text-orange-50">
              Organiza sus próximos cuidados y recibe recordatorios importantes
              con Luppets.
            </p>
            <Link
              href="/#cta"
              className="mt-6 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-orange-600 transition hover:bg-orange-50"
            >
              Conocer Luppets
            </Link>
          </aside>

          <p className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-5 text-sm leading-6 text-gray-600">
            Este contenido es educativo y no reemplaza la valoración, el
            diagnóstico ni las recomendaciones de un profesional veterinario.
          </p>
        </div>
      </article>
    </main>
  );
}
