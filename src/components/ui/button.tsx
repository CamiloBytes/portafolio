"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export const Button = ({
  text,
  onClick,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) => {
  const variantStyles =
    variant === "secondary"
      ? "bg-surface-layer-1 text-foreground border-surface-layer-2 hover:border-[#00f2fe] hover:shadow-[0_0_12px_rgba(0,242,254,0.3)]"
      : "bg-primary text-surface-layer-1 border-primary hover:shadow-[0_0_16px_rgba(0,242,254,0.4)]";

  const baseClasses = `
    inline-flex items-center justify-center
    font-mono
    font-semibold
    px-6 sm:px-8
    py-2.5
    border
    rounded-sm
    transition-colors
    duration-200
    cursor-pointer
    ${variantStyles}
    ${className}
  `;

  if (href) {
    return (
      <motion.div
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="inline-block"
      >
        <Link href={href} className={baseClasses} onClick={onClick}>
          {text}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type="button"
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={baseClasses}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};
