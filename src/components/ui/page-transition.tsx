"use client";

import type { PropsWithChildren } from "react";
import { motion, useReducedMotion } from "motion/react";

type PageTransitionProps = PropsWithChildren<{
  className?: string;
}>;

/** Applies a restrained initial page transition while respecting motion preferences. */
export function PageTransition({ children, className }: PageTransitionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.main
      initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.main>
  );
}
