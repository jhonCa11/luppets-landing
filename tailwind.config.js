/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./schemaTypes/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f97316",
        secondary: "#8C5E3C",
        bg: "#FFF5E4",
        dark: "#171717",
        light: "#ffffff",
        heading: "#2b2a28",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  // Tailwind config is CommonJS; require is the supported plugin pattern.
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("@tailwindcss/typography")],
};
