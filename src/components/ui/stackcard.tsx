"use client";

import React from "react";
import { motion } from "motion/react";
import { fadeInUp } from "../../utils/motion";

interface StackCardProps {
  title: string;
  badge: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const StackCard: React.FC<StackCardProps> = ({
  title,
  badge,
  icon,
  children,
  className = "",
}) => {
  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className={`group flex flex-col justify-between rounded-xl border border-[#3a494b]/40 bg-[#1a1b21]/70 p-6 transition-colors duration-300 hover:border-[#00f2fe]/50 hover:shadow-[0_0_25px_-5px_rgba(0,242,254,0.12)] ${className}`}
    >
      <div>
        {/* Card Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-xl text-primary" aria-hidden="true">
              {icon}
            </span>
            <h3 className="text-xl font-bold tracking-tight text-[#e0fdff]">
              {title}
            </h3>
          </div>
          <span className="font-mono text-xs tracking-wider text-[#849495]">
            {badge}
          </span>
        </div>

        {/* Card Body */}
        {children}
      </div>
    </motion.article>
  );
};
