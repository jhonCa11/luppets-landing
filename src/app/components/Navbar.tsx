"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

const NAV_SECTIONS = [
  "hero",
  "benefits",
  "testimonials",
  "how",
  "security",
  "cta",
] as const;
const NAVBAR_HEIGHT = 58;
const SCROLL_THROTTLE_MS = 100;
const SCROLL_OFFSET = 100;

type SectionId = (typeof NAV_SECTIONS)[number];

const SECTION_LABELS: Partial<Record<SectionId, string>> = {
  benefits: "Beneficios",
  testimonials: "Testimonios",
  how: "Cómo Funciona",
  security: "Seguridad",
};

const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  delay: number,
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
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isBlog = pathname?.startsWith("/blog") ?? false;
  const isFundacion = pathname === "/fundacion";
  const [activeSection, setActiveSection] = useState<SectionId>("hero");

  const scrollToSection = useCallback((sectionId: SectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.offsetTop - NAVBAR_HEIGHT;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, sectionId: SectionId) => {
      if (!isHome) {
        return;
      }

      e.preventDefault();
      scrollToSection(sectionId);
    },
    [isHome, scrollToSection],
  );

  useEffect(() => {
    if (!isHome) {
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + SCROLL_OFFSET;

      for (let i = NAV_SECTIONS.length - 1; i >= 0; i--) {
        const section = document.getElementById(NAV_SECTIONS[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_SECTIONS[i]);
          break;
        }
      }
    };

    const throttledHandleScroll = throttle(handleScroll, SCROLL_THROTTLE_MS);

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, [isHome]);

  const getNavLinkClasses = useCallback(
    (sectionId: SectionId) => {
      const baseClasses =
        "hover:text-orange-500 transition-all duration-300 cursor-pointer px-3 py-1.5 rounded-lg";
      const activeClasses =
        "text-orange-500 bg-orange-50 border-b-2 border-orange-500";
      const inactiveClasses = "hover:bg-gray-50";

      return `${baseClasses} ${
        isHome && activeSection === sectionId ? activeClasses : inactiveClasses
      }`;
    },
    [activeSection, isHome],
  );

  const getCtaButtonClasses = useMemo(() => {
    const baseClasses =
      "px-6 py-1.5 rounded-lg font-semibold transition-all duration-300 cursor-pointer";
    const activeClasses = "bg-orange-600 text-white shadow-lg scale-105";
    const inactiveClasses =
      "bg-orange-500 hover:bg-orange-600 text-white hover:shadow-lg";

    return `${baseClasses} ${
      isHome && activeSection === "cta" ? activeClasses : inactiveClasses
    }`;
  }, [activeSection, isHome]);

  const getStaticLinkClasses = useCallback((isActive: boolean) => {
    const baseClasses =
      "hover:text-orange-500 transition-all duration-300 cursor-pointer px-3 py-1.5 rounded-lg";
    const activeClasses =
      "text-orange-500 bg-orange-50 border-b-2 border-orange-500";
    const inactiveClasses = "hover:bg-gray-50";

    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  }, []);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-white px-6 py-2 shadow-md">
      <Link
        href="/"
        className="flex items-center gap-2 transition-opacity hover:opacity-80"
      >
        <Image
          src="/logo.webp"
          alt="Luppets Logo"
          width={40}
          height={40}
          className="h-10 w-10"
        />
        <div className="text-2xl font-bold text-orange-500">Luppets</div>
      </Link>

      <ul className="hidden gap-6 font-medium text-gray-700 md:flex">
        {NAV_SECTIONS.slice(1, -1).map((sectionId) => (
          <li key={sectionId}>
            <Link
              href={isHome ? `#${sectionId}` : `/#${sectionId}`}
              onClick={(e) => handleNavClick(e, sectionId)}
              className={getNavLinkClasses(sectionId)}
            >
              {SECTION_LABELS[sectionId]}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/blog" className={getStaticLinkClasses(isBlog)}>
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/fundacion"
            className={getStaticLinkClasses(isFundacion)}
          >
            Nosotros
          </Link>
        </li>
      </ul>

      <Link
        href={isHome ? "#cta" : "/#cta"}
        onClick={(e) => handleNavClick(e, "cta")}
        className={getCtaButtonClasses}
      >
        Empieza Gratis
      </Link>
    </nav>
  );
}
