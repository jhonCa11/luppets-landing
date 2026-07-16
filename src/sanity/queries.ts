import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(`
  *[
    _type == "post" &&
    defined(slug.current) &&
    defined(publishedAt) &&
    publishedAt <= now()
  ]
  | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage {
      asset,
      alt,
      caption,
      hotspot,
      crop
    },
    "category": category->{
      _id,
      title,
      "slug": slug.current
    },
    "author": author->{
      _id,
      name,
      role,
      image
    },
    publishedAt,
    updatedAt,
    featured,
    seoTitle,
    seoDescription
  }
`);

export const FEATURED_POSTS_QUERY = defineQuery(`
  *[
    _type == "post" &&
    featured == true &&
    defined(slug.current) &&
    defined(publishedAt) &&
    publishedAt <= now()
  ]
  | order(publishedAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage {
      asset,
      alt,
      hotspot,
      crop
    },
    "category": category->{
      title,
      "slug": slug.current
    },
    publishedAt
  }
`);

export const POST_BY_SLUG_QUERY = defineQuery(`
  *[
    _type == "post" &&
    slug.current == $slug &&
    defined(publishedAt) &&
    publishedAt <= now()
  ][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage {
      asset,
      alt,
      caption,
      hotspot,
      crop
    },
    "category": category->{
      _id,
      title,
      "slug": slug.current
    },
    "author": author->{
      _id,
      name,
      role,
      bio,
      image
    },
    body,
    sources,
    publishedAt,
    updatedAt,
    medicalReview,
    seoTitle,
    seoDescription,
    noIndex
  }
`);

export const POST_SLUGS_QUERY = defineQuery(`
  *[
    _type == "post" &&
    defined(slug.current) &&
    defined(publishedAt) &&
    publishedAt <= now()
  ] {
    "slug": slug.current,
    publishedAt,
    updatedAt
  }
`);
