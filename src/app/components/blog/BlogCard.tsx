import Image from "next/image";
import Link from "next/link";

import { urlForImage } from "@/sanity/image";
import type { BlogPost } from "@/sanity/types";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const imageUrl = post.coverImage
    ? urlForImage(post.coverImage).width(900).height(560).quality(85).url()
    : null;

  return (
    <article className="group overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/blog/${post.slug}`} className="block">
        {imageUrl && (
          <div className="relative aspect-[16/10] overflow-hidden bg-orange-50">
            <Image
              src={imageUrl}
              alt={post.coverImage.alt ?? post.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        )}

        <div className="p-6">
          {post.category?.title && (
            <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">
              {post.category.title}
            </span>
          )}

          <h2 className="mt-4 text-xl font-bold text-gray-900 transition group-hover:text-orange-600">
            {post.title}
          </h2>

          <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
            {post.excerpt}
          </p>

          <div className="mt-5 flex items-center justify-between text-sm">
            <time dateTime={post.publishedAt} className="text-gray-500">
              {new Intl.DateTimeFormat("es-CO", {
                day: "numeric",
                month: "short",
                year: "numeric",
              }).format(new Date(post.publishedAt))}
            </time>

            <span className="font-semibold text-orange-600">
              Leer artículo →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
