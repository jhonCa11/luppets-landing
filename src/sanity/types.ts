import type { PortableTextBlock } from "@portabletext/types";

export interface SanityImage {
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  caption?: string;
  hotspot?: unknown;
  crop?: unknown;
}

export interface BlogCategory {
  _id?: string;
  title: string;
  slug: string;
}

export interface BlogAuthor {
  _id?: string;
  name: string;
  role?: string;
  bio?: string;
  image?: SanityImage;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: SanityImage;
  category?: BlogCategory;
  author?: BlogAuthor;
  body?: PortableTextBlock[];
  sources?: Array<{
    _key: string;
    title: string;
    url: string;
  }>;
  publishedAt: string;
  updatedAt?: string;
  featured?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  noIndex?: boolean;
  medicalReview?: {
    reviewed?: boolean;
    reviewerName?: string;
    reviewerRole?: string;
    reviewedAt?: string;
  };
}

export interface SitemapPost {
  slug: string;
  publishedAt: string;
  updatedAt?: string;
}
