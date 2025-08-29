"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback, useMemo } from "react";

// Constantes extraídas para mejor mantenibilidad
const NAV_SECTIONS = ['hero', 'benefits', 'testimonials', 'how', 'security', 'cta'] as const;
const NAVBAR_HEIGHT = 58; // Altura del navbar en píxeles
const SCROLL_THROTTLE_MS = 100; // Milisegundos para throttling
const SCROLL_OFFSET = 100; // Offset para detección de sección activa

// Tipos TypeScript más estrictos
type SectionId = typeof NAV_SECTIONS[number];

// Función de throttling personalizada (sin dependencias externas)
const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout | null = null;
  let lastExecTime = 0;
  
  return (...args: Parameters<T>) => {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func(...args);
      lastExecTime = currentTime;
    } else {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
};

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<SectionId>("hero");

  // Función para scroll suave a una sección específica - memoizada
  const scrollToSection = useCallback((sectionId: SectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.offsetTop - NAVBAR_HEIGHT;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  // Función para manejar el clic en los enlaces del navbar - memoizada
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, sectionId: SectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  }, [scrollToSection]);

  // Detectar la sección activa basada en el scroll - optimizada con throttling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + SCROLL_OFFSET;

      // Algoritmo optimizado: busca desde la última sección hacia atrás
      for (let i = NAV_SECTIONS.length - 1; i >= 0; i--) {
        const section = document.getElementById(NAV_SECTIONS[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_SECTIONS[i]);
          break;
        }
      }
    };

    // Aplicar throttling para mejor performance
    const throttledHandleScroll = throttle(handleScroll, SCROLL_THROTTLE_MS);
    
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  // Memoizar las clases CSS para evitar recálculos
  const getNavLinkClasses = useCallback((sectionId: SectionId) => {
    const baseClasses = "hover:text-orange-500 transition-all duration-300 cursor-pointer px-3 py-1.5 rounded-lg";
    const activeClasses = "text-orange-500 bg-orange-50 border-b-2 border-orange-500";
    const inactiveClasses = "hover:bg-gray-50";
    
    return `${baseClasses} ${activeSection === sectionId ? activeClasses : inactiveClasses}`;
  }, [activeSection]);

  // Memoizar las clases del botón CTA
  const getCtaButtonClasses = useMemo(() => {
    const baseClasses = "px-6 py-1.5 rounded-lg font-semibold transition-all duration-300 cursor-pointer";
    const activeClasses = "bg-orange-600 text-white shadow-lg scale-105";
    const inactiveClasses = "bg-orange-500 hover:bg-orange-600 text-white hover:shadow-lg";
    
    return `${baseClasses} ${activeSection === 'cta' ? activeClasses : inactiveClasses}`;
  }, [activeSection]);

  return (
    <nav className="flex justify-between items-center px-6 py-2 bg-white shadow-md sticky top-0 z-50">
      <Link href="#hero" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <Image 
          src="/logo.webp" 
          alt="Luppets Logo" 
          width={40} 
          height={40}
          className="w-10 h-10"
        />
        <div className="text-2xl font-bold text-orange-500">Luppets</div>
      </Link>
      
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        {NAV_SECTIONS.slice(1, -1).map((sectionId) => (
          <li key={sectionId}>
            <a 
              href={`#${sectionId}`}
              onClick={(e) => handleNavClick(e, sectionId)}
              className={getNavLinkClasses(sectionId)}
            >
              {sectionId === 'benefits' && 'Beneficios'}
              {sectionId === 'testimonials' && 'Testimonios'}
              {sectionId === 'how' && 'Cómo Funciona'}
              {sectionId === 'security' && 'Seguridad'}
            </a>
          </li>
        ))}
      </ul>
      
      <a
        href="#cta"
        onClick={(e) => handleNavClick(e, 'cta')}
        className={getCtaButtonClasses}
      >
        Empieza Gratis
      </a>
    </nav>
  );
}
