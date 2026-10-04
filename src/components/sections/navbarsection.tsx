"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaCode } from "react-icons/fa";
import { MdMenu, MdClose } from "react-icons/md";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { mobileMenuVariants } from "../../utils/motion";

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "stack", label: "Stack", href: "#stack" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "contact", label: "Contact", href: "#contact" },
];

const sectionIds = navItems.map((item) => item.id);

export const Navbar: React.FC = () => {
  const { activeSection, setActiveSection } = useScrollSpy(sectionIds, 180);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsScrolled(latest > 0.02);
  });

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 w-full px-4 py-3 sm:px-8 sm:py-5 lg:px-10"
      aria-label="Main navigation"
    >
      <div
        className={`mx-auto flex w-full max-w-7xl items-center justify-between gap-4 border border-surface-layer-1 bg-surface-base/80 backdrop-blur-md transition-all duration-300 sm:px-5 ${
          isScrolled
            ? "rounded-md px-3 py-1.5 shadow-[0_8px_32px_-12px_rgba(0,242,254,0.15)] sm:py-2"
            : "rounded-sm px-3 py-2 sm:py-3"
        }`}
      >
        <div className="flex min-w-0 items-center gap-3">
          <Link
            href="/"
            className="shrink-0 font-mono text-sm font-semibold tracking-tight text-foreground transition hover:text-primary sm:text-base cursor-pointer"
          >
            <span className="mr-2 text-primary">&gt;</span>
            sys://Camilo.devnova.dev
          </Link>

          {/* Badge interactivo hacia Contacto */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="#contact"
              className="hidden shrink-0 items-center gap-2 rounded-full border border-surface-layer-2 bg-surface-layer-1 px-3 py-1 font-mono text-[10px] font-medium tracking-widest text-text-secondary transition hover:border-primary/50 hover:text-foreground cursor-pointer sm:inline-flex"
              title="Disponible para nuevos proyectos - Iniciar contacto"
            >
              <span
                className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_#00f2fe]"
                aria-hidden="true"
              />
              Open to roles
            </Link>
          </motion.div>
        </div>

        {/* Enlaces de escritorio con línea azul fluorescente activa */}
        <div className="hidden items-center gap-8 font-mono text-sm lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setActiveSection(item.id)}
                className={`relative py-1.5 transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? "text-foreground font-semibold"
                    : "text-text-secondary hover:text-foreground"
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-indicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full bg-primary shadow-[0_0_8px_#00f2fe,0_0_16px_#00f2fe]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Botones de acción derecha */}
        <div className="flex shrink-0 items-center gap-2">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#projects"
              onClick={() => setActiveSection("projects")}
              aria-label="Ver proyectos"
              title="Ver proyectos de código"
              className="hidden h-8 w-8 items-center justify-center rounded border border-surface-layer-2 bg-surface-base font-mono text-base text-text-secondary transition hover:border-primary hover:text-primary cursor-pointer sm:flex"
            >
              <FaCode />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="#contact"
              className="rounded bg-primary px-3 py-2 font-mono text-xs font-semibold text-surface-layer-1 transition hover:-translate-y-0.5 hover:shadow-[0_0_14px_#00f2fe] cursor-pointer sm:px-4 sm:text-sm"
            >
              Get in Touch <span aria-hidden="true">-&gt;</span>
            </Link>
          </motion.div>

          {/* Botón menú móvil */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-8 w-8 items-center justify-center rounded border border-surface-layer-2 bg-surface-base text-text-secondary transition hover:text-primary lg:hidden cursor-pointer"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? <MdClose className="h-5 w-5" /> : <MdMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Barra de progreso de scroll */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden"
        aria-hidden="true"
      >
        <motion.div
          className="h-[2px] w-full origin-left bg-linear-to-r from-primary via-primary-muted to-secondary shadow-[0_0_8px_rgba(0,242,254,0.6)]"
          style={{ scaleX: scrollYProgress }}
        />
      </div>

      {/* Menú móvil desplegable con animación AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="mx-auto mt-2 overflow-hidden w-full max-w-7xl rounded-md border border-surface-layer-1 bg-surface-base/95 p-4 backdrop-blur-lg lg:hidden"
          >
            <div className="flex flex-col gap-3 font-mono text-sm">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => {
                      setActiveSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between py-1.5 transition-colors ${
                      isActive
                        ? "text-primary font-bold border-l-2 border-primary pl-2 shadow-[0_0_10px_rgba(0,242,254,0.2)]"
                        : "text-text-secondary hover:text-foreground pl-2"
                    }`}
                  >
                    <span>&gt; {item.label}</span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_#00f2fe]" />
                    )}
                  </Link>
                );
              })}
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 border-t border-white/[0.08] pt-3 text-primary font-semibold transition hover:underline"
              >
                &gt; Get in Touch (Contacto)
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
