import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Administración | Fundación Luppets",
  description: "Panel editorial del Blog Luppets",
  robots: {
    index: false,
    follow: false,
  },
};

export default function StudioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="fixed inset-0 z-[100] bg-white">{children}</div>
  );
}
