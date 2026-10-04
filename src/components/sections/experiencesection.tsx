"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { HeaderSection } from "../ui/headersection";
import { experienceData } from "../../data/experience";
import { fadeInUp, staggerContainer } from "../../utils/motion";

interface TimelineItemProps {
  exp: (typeof experienceData.experiences)[number];
  progress: MotionValue<number>;
  index: number;
  total: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  exp,
  progress,
  index,
  total,
}) => {
  const start = Math.max(0, index / total - 0.04);
  const end = Math.min(1, index / total + 0.03);
  const glowOpacity = useTransform(progress, [start, end], [
    exp.status === "current" ? 0.7 : 0,
    1,
  ]);

  return (
    <motion.div variants={fadeInUp} className="relative group">
      {/* Nodo del timeline: se enciende cuando la línea lo alcanza */}
      <div
        className="absolute -left-6 sm:-left-9 top-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4 -translate-x-1/2 rounded-full border-2 bg-background transition-transform duration-300 group-hover:scale-125"
        style={{ borderColor: exp.nodeColor }}
        aria-hidden="true"
      >
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{
            backgroundColor: exp.nodeColor,
            boxShadow: `0 0 10px ${exp.nodeColor}`,
            opacity: glowOpacity,
          }}
        />
      </div>

      {/* Encabezado del Hito: Período, Cargo y Compañía */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <span
          className={`rounded border px-2.5 py-0.5 font-mono text-[11px] font-semibold tracking-wider ${exp.periodBadgeClass}`}
        >
          {exp.period}
        </span>
        <h3 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
          {exp.role}
        </h3>
        <span className="font-mono text-xs sm:text-sm text-[#849495]">
          @ {exp.company}
        </span>
      </div>

      {/* Descripción */}
      <p className="mt-3.5 max-w-4xl text-sm sm:text-[15px] leading-relaxed text-[#b9cacb]">
        {exp.description}
      </p>

      {/* Chips de Tecnologías */}
      <div className="mt-4 flex flex-wrap gap-2">
        {exp.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded border border-[#3a494b]/30 bg-[#161b22]/70 px-2.5 py-0.5 font-mono text-[11px] text-[#849495] transition-colors hover:border-[#00f2fe]/30 hover:text-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export const ExperienceSection: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 60%"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  const lineHeight = useTransform(progress, [0, 1], ["0%", "100%"]);
  const dotTop = useTransform(progress, [0, 1], ["0%", "100%"]);
  const dotOpacity = useTransform(progress, [0, 0.02, 0.97, 1], [0, 1, 1, 0]);

  const total = experienceData.experiences.length;

  return (
    <section
      id="experience"
      className="mx-auto w-full max-w-7xl scroll-mt-24 space-y-10 px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8"
    >
      <HeaderSection
        title={experienceData.header.title}
        subtitle={experienceData.header.subtitle}
        message={experienceData.header.comment}
      />

      <div ref={timelineRef} className="relative ml-2 sm:ml-4 pl-6 sm:pl-9">
        {/* Línea vertical conectora: base atenuada */}
        <div
          className="absolute left-0 top-3 bottom-3 w-px bg-white/[0.08]"
          aria-hidden="true"
        />

        {/* Tracker de la línea que se dibuja con el progreso del scroll */}
        <div
          className="absolute left-0 top-3 bottom-3 w-px"
          aria-hidden="true"
        >
          <motion.div
            className="absolute inset-0 origin-top bg-linear-to-b from-primary via-primary-muted to-secondary shadow-[0_0_8px_rgba(0,242,254,0.5)]"
            style={{ scaleY: lineHeight }}
          />
          {/* Punto luminoso que sigue el borde de avance */}
          <motion.div
            className="absolute left-1/2 h-2.5 w-2.5 -mt-1.5 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_12px_#00f2fe,0_0_24px_rgba(0,242,254,0.6)]"
            style={{ top: dotTop, opacity: dotOpacity }}
          />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="space-y-12 sm:space-y-14"
        >
          {experienceData.experiences.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              exp={exp}
              progress={progress}
              index={index}
              total={total}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
