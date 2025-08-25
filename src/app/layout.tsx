import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Luppets",
  description: "La app que te ayuda a cuidar a tu mascota con recordatorios personalizados, consejos y comunidad.",
  keywords: ["mascotas", "cuidado", "salud animal", "Luppets"],
  openGraph: {
    title: "Luppets - Cuida y Protege a tu Mascota",
    description: "Más salud, más vida, más amor para tu mascota 🐾",
    url: "https://luppets.vercel.app",
    siteName: "Luppets",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Luppets - app de cuidado de mascotas",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
