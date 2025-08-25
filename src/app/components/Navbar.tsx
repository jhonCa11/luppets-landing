"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      <Link href="#hero" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <Image 
          src="/logo.png" 
          alt="Luppets Logo" 
          width={40} 
          height={40}
          className="w-10 h-10"
        />
        <div className="text-2xl font-bold text-orange-500">Luppets</div>
      </Link>
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        <li><Link href="#benefits">Beneficios</Link></li>
        <li><Link href="#testimonials">Testimonios</Link></li>
        <li><Link href="#how">Cómo Funciona</Link></li>
        <li><Link href="#security">Seguridad</Link></li>
      </ul>
      <Link
        href="#cta"
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold"
      >
        Empieza Gratis
      </Link>
    </nav>
  );
}
