"use client";

import React, { useRef } from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { Button } from "../ui/button";
import { heroStats } from "../../data/hero";
import { fadeInUp, staggerContainer } from "../../utils/motion";

export const HeroSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const titleWords = ["Construyendo", "software", "de", "alto", "rendimiento,", "escalable", "y", "resiliente."];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={sectionRef}
      className="relative flex w-full flex-col items-start justify-center overflow-hidden px-0 py-12 sm:py-16 lg:w-1/2 lg:py-20 text-surface-layer-1"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute inset-0"
          style={shouldReduceMotion ? undefined : { y: backgroundY }}
        >
          {[18, 37, 62, 81].map((top, index) => (
            <motion.span
              key={top}
              className="absolute left-0 h-px w-2/3 bg-linear-to-r from-transparent via-primary/35 to-transparent"
              style={{ top: `${top}%` }}
              animate={shouldReduceMotion ? undefined : { x: ["-45%", "85%"], opacity: [0, 0.75, 0] }}
              transition={{ duration: 3.4 + index * 0.55, delay: index * 0.35, repeat: Infinity, ease: "linear" }}
            />
          ))}
          <motion.div
            className="absolute -right-24 top-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
            style={shouldReduceMotion ? undefined : { y: glowY }}
            animate={shouldReduceMotion ? undefined : { scale: [0.8, 1.2, 0.8], opacity: [0.25, 0.6, 0.25] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
      <motion.div
        className="w-full"
        style={shouldReduceMotion ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex w-full max-w-4xl flex-col items-start gap-6 text-start"
        >
        {/* Badge superior */}
        <motion.div
          variants={fadeInUp}
          className="inline-flex max-w-full items-center gap-2 rounded-full border border-surface-layer-2 bg-surface-base px-3.5 py-1.5 font-mono text-[10px] font-medium uppercase text-foreground shadow-[0_0_18px_rgba(0,242,254,0.06)] sm:px-4 sm:text-xs"
        >
          <span className="text-base leading-none text-primary" aria-hidden="true">
            <AiOutlineThunderbolt />
          </span>
          <span className="truncate">Distributed Systems &amp; Full Stack Engineer</span>
        </motion.div>

        {/* Titular */}
        <motion.div variants={fadeInUp} className="max-w-3xl pt-1">
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {titleWords.map((word, index) => (
              <motion.span
                key={word}
                className={`mr-[0.24em] inline-block ${word === "rendimiento," ? "bg-linear-to-r from-primary via-primary-muted to-foreground bg-clip-text text-transparent" : ""}`}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 28, rotateX: -70 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.16 + index * 0.055, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* Resumen bio */}
        <motion.div variants={fadeInUp} className="max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">
          <p>
            Especialista con más de 6 años articulando infraestructuras cloud-native,
            microservicios de baja latencia con tolerancia a particiones (CAP) y consolas
            tácticas para desarrolladores exigentes.
          </p>
        </motion.div>

        {/* Acciones principales */}
        <motion.div variants={fadeInUp} className="flex w-full flex-wrap gap-3 pt-2 sm:gap-4 sm:pt-3">
          <Button text="Explorar Proyectos" href="#projects" />
          <Button text="Sesión SSH / Contacto" variant="secondary" href="#contact" />
        </motion.div>

        {/* Separador */}
        <motion.span
          variants={fadeInUp}
          className="block h-px w-full bg-white/[0.08] my-2"
          aria-hidden="true"
        />

        {/* Métricas clave */}
        <motion.div
          variants={fadeInUp}
          className="grid w-full grid-cols-1 gap-6 pt-1 sm:grid-cols-3 sm:gap-8"
        >
          {heroStats.map((stat) => (
            <motion.div
              key={stat.label}
              className="flex flex-col gap-1"
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              transition={{ type: "spring", stiffness: 420, damping: 24 }}
            >
              <strong
                className={`font-mono text-xl font-bold sm:text-2xl ${
                  stat.tone === "primary"
                    ? "text-primary"
                    : stat.tone === "secondary"
                      ? "text-foreground"
                      : "text-secondary-muted"
                }`}
              >
                {stat.value}
              </strong>
              <span className="text-xs sm:text-sm text-text-secondary">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
