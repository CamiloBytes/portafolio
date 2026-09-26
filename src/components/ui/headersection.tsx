import React from 'react'
import { LuBox } from 'react-icons/lu';


interface HeaderSectionProps {
  title: string;
  subtitle: string;
  message?: string;
}

export const HeaderSection = ({ title, subtitle, message }: HeaderSectionProps) => {
  return (
    <div className="flex flex-col gap-4 border-b border-white/[0.07] pb-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
        <div>
          <div className="mb-2 flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-primary sm:text-xs">
            <span className="text-sm leading-none" aria-hidden="true">
             <LuBox />
            </span>
            <span>{subtitle}</span>
          </div>
          <h2 className="text-4xl font-bold leading-none tracking-[-0.04em] text-foreground sm:text-5xl">
            {title}
          </h2>
        </div>
        <p className="font-mono text-[10px] tracking-[0.08em] text-text-secondary sm:pb-1 sm:text-xs">
          {"//"} {message}
        </p>
      </div>
  )
}
