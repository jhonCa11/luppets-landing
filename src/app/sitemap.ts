import type { MetadataRoute } from "next";

import { siteUrl } from "@/sanity/env";
import { sanityFetch } from "@/sanity/fetch";
import { POST_SLUGS_QUERY } from "@/sanity/queries";
import type { SitemapPost } from "@/sanity/types";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await sanityFetch<SitemapPost[]>({
    query: POST_SLUGS_QUERY,
    revalidate: 60,
    fallback: [],
  });

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/fundacion`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt ?? post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
