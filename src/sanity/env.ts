export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-07-01";

/** Vacío si no está en env; no lanzar en import (rompe el build de Vercel). */
export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() || "production";

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim() || "";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://luppets.com";

export const isSanityConfigured =
  Boolean(projectId) && projectId !== "placeholder";
