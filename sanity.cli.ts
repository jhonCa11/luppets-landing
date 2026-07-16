import { defineCliConfig } from "sanity/cli";

/**
 * IDs públicos del proyecto (no son secretos).
 * Actualiza projectId tras crear el proyecto en Sanity Manage
 * o al completar `npx sanity@latest init`.
 */
export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  },
});
