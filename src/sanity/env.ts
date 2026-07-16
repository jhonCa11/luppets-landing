export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-07-01";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Falta NEXT_PUBLIC_SANITY_DATASET en las variables de entorno",
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Falta NEXT_PUBLIC_SANITY_PROJECT_ID en las variables de entorno",
);

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://luppets.com";

export const isSanityConfigured =
  Boolean(projectId) && projectId !== "placeholder";

function assertValue<T>(value: T | undefined, errorMessage: string): T {
  if (value === undefined || value === "") {
    throw new Error(errorMessage);
  }

  return value;
}
