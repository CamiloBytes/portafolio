"use client";

import React from "react";
import { LuBox } from "react-icons/lu";
import { motion, useReducedMotion } from "motion/react";
import { lineGrow, revealMask } from "../../utils/motion";

interface HeaderSectionProps {
  title: string;
  subtitle: string;
  message?: string;
}

export const HeaderSection: React.FC<HeaderSectionProps> = ({
  title,
  subtitle,
  message,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="relative flex flex-col gap-4 border-b border-white/[0.07] pb-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8"
    >
      <div className="min-w-0">
        <div className="mb-2 flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-primary sm:text-xs">
          <span className="text-sm leading-none" aria-hidden="true">
            <LuBox />
          </span>
          <span>{subtitle}</span>
        </div>
        <div className="overflow-hidden">
          <motion.h2
            variants={
              shouldReduceMotion ? undefined : revealMask
            }
            className="py-[0.1em] text-4xl font-bold leading-none tracking-[-0.04em] text-foreground sm:text-5xl"
          >
            {title}
          </motion.h2>
        </div>
      </div>
      {message && (
        <p className="font-mono text-[10px] tracking-[0.08em] text-text-secondary sm:pb-1 sm:text-xs">
          {"//"} {message}
        </p>
      )}
      {/* Línea de acento que crece como escaneo al entrar en viewport */}
      <motion.span
        variants={shouldReduceMotion ? undefined : lineGrow}
        className="absolute inset-x-0 bottom-[-1px] block h-px w-full origin-left bg-linear-to-r from-primary/60 via-primary/20 to-transparent"
        aria-hidden="true"
      />
    </motion.div>
  );
};
