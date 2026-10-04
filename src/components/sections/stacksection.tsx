"use client";

import React from "react";
import { LuCode, LuCloud, LuMonitor, LuNetwork, LuListFilter } from "react-icons/lu";
import { motion } from "motion/react";
import { HeaderSection } from "../ui/headersection";
import { StackCard } from "../ui/stackcard";
import { stackData } from "../../data/stack";
import { staggerContainer } from "../../utils/motion";

export const StackSection: React.FC = () => {
  return (
    <section
      id="stack"
      className="mx-auto w-full max-w-7xl scroll-mt-24 space-y-8 px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8"
    >
      <HeaderSection
        title={stackData.header.title}
        subtitle={stackData.header.subtitle}
        message={stackData.header.comment}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-1 gap-6 lg:grid-cols-2"
      >
        {/* 1. Lenguajes Núcleo */}
        <StackCard
          title={stackData.coreLanguages.title}
          badge={stackData.coreLanguages.badge}
          icon={<LuCode className="h-5 w-5" />}
        >
          <div className="flex flex-col gap-3">
            {stackData.coreLanguages.items.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-lg border border-[#3a494b]/30 bg-[#0d0e13]/60 px-4 py-3 transition-colors hover:border-[#00f2fe]/30"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-full shadow-[0_0_8px_currentColor]"
                    style={{ backgroundColor: item.dotColor, color: item.dotColor }}
                    aria-hidden="true"
                  />
                  <div>
                    <span className="font-semibold text-foreground text-sm">
                      {item.name}
                    </span>
                    <p className="text-xs text-[#849495]">{item.description}</p>
                  </div>
                </div>
                <span className="font-mono text-xs font-semibold text-primary shrink-0 pl-3">
                  {item.years}
                </span>
              </div>
            ))}
          </div>
        </StackCard>

        {/* 2. Sistemas, Cloud & Datos */}
        <StackCard
          title={stackData.cloudSystems.title}
          badge={stackData.cloudSystems.badge}
          icon={<LuCloud className="h-5 w-5" />}
        >
          <div className="flex flex-col justify-between gap-6">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {stackData.cloudSystems.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex flex-col justify-center rounded-lg border border-[#3a494b]/30 bg-[#0d0e13]/60 p-3.5 transition-colors hover:border-[#00f2fe]/30"
                >
                  <span className="font-semibold text-foreground text-xs sm:text-sm">
                    {tool.name}
                  </span>
                  <p className="mt-1 text-[11px] leading-tight text-[#849495]">
                    {tool.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-[#3a494b]/30 pt-4">
              <p className="font-mono text-[11px] text-[#849495]">
                {stackData.cloudSystems.paradigmsNote}
              </p>
              <LuListFilter className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
            </div>
          </div>
        </StackCard>

        {/* 3. Frontend & Interfaces de Control */}
        <StackCard
          title={stackData.frontendControl.title}
          badge={stackData.frontendControl.badge}
          icon={<LuMonitor className="h-5 w-5" />}
        >
          <div className="flex flex-col justify-between space-y-6">
            <p className="text-sm leading-relaxed text-[#b9cacb]">
              {stackData.frontendControl.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {stackData.frontendControl.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-[#3a494b]/40 bg-[#1e1f25] px-3 py-1 font-mono text-xs text-[#b9cacb] transition-colors hover:border-[#00f2fe]/40 hover:text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </StackCard>

        {/* 4. Arquitectura & Metodología */}
        <StackCard
          title={stackData.architectureMethodology.title}
          badge={stackData.architectureMethodology.badge}
          icon={<LuNetwork className="h-5 w-5" />}
        >
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {stackData.architectureMethodology.patterns.map((pattern) => (
              <div
                key={pattern.name}
                className="flex flex-col justify-start rounded-lg border border-[#3a494b]/30 bg-[#0d0e13]/60 p-4 transition-colors hover:border-[#00f2fe]/30"
              >
                <span className="font-mono text-xs sm:text-sm font-semibold text-primary">
                  {pattern.name}
                </span>
                <p className="mt-1.5 text-xs leading-relaxed text-[#849495]">
                  {pattern.description}
                </p>
              </div>
            ))}
          </div>
        </StackCard>
      </motion.div>
    </section>
  );
};
