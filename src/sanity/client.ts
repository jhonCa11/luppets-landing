import { createClient } from "next-sanity";

import { apiVersion, dataset, isSanityConfigured, projectId } from "./env";

/**
 * Cliente solo válido cuando hay Project ID real.
 * createClient exige un string; usamos placeholder inerte si falta env en build.
 */
export const sanityClient = createClient({
  projectId: isSanityConfigured ? projectId : "placeholder",
  dataset,
  apiVersion,
  useCdn: true,
});
