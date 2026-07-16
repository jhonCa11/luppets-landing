import type { QueryParams } from "next-sanity";

import { sanityClient } from "./client";
import { isSanityConfigured } from "./env";

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  revalidate = 60,
  fallback,
}: {
  query: string;
  params?: QueryParams;
  revalidate?: number | false;
  fallback?: QueryResponse;
}): Promise<QueryResponse> {
  if (!isSanityConfigured) {
    if (fallback !== undefined) {
      return fallback;
    }
    throw new Error(
      "Sanity no está configurado. Define NEXT_PUBLIC_SANITY_PROJECT_ID en .env.local",
    );
  }

  try {
    return await sanityClient.fetch<QueryResponse>(query, params, {
      next: {
        revalidate,
      },
    });
  } catch (error) {
    console.error("[sanityFetch]", error);
    if (fallback !== undefined) {
      return fallback;
    }
    throw error;
  }
}
