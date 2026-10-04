"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { footerData } from "../../data/footer";

export const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full border-t border-white/[0.08] bg-transparent"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
        {/* Bloque Izquierdo: Identificador y Copyright */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-center sm:justify-start sm:text-left">
          <Link
            href="/"
            className="font-mono text-xs font-semibold text-foreground transition-colors hover:text-primary sm:text-sm"
          >
            {footerData.systemTag}
          </Link>
          <span className="hidden text-[#3a494b] sm:inline" aria-hidden="true">
            |
          </span>
          <span className="font-mono text-[11px] text-[#849495] sm:text-xs">
            {footerData.copyright}
          </span>
        </div>

        {/* Bloque Derecho: Enlaces y Status Badge */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
          <div className="flex items-center gap-5">
            {footerData.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-mono text-xs text-[#849495] transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded border border-[#3a494b]/40 bg-[#161b22]/90 px-3 py-1 font-mono text-xs text-[#e0fdff]">
            <span
              className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_#00f2fe]"
              aria-hidden="true"
            />
            <span>{footerData.status.label}</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
