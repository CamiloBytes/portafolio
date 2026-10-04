"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import {
  commands,
  outputByView,
  tabs,
  toneClasses,
  type TerminalAction,
  type ViewId,
} from "../../data/terminal";

interface TerminalTabsProps {
  activeView: ViewId;
  onSelect: (action: TerminalAction) => void;
}

function TerminalTabs({ activeView, onSelect }: TerminalTabsProps) {
  return (
    <nav className="flex min-w-0 flex-1 items-center justify-center gap-2 sm:gap-6" aria-label="Archivos de la terminal">
      {tabs.map((tab) => (
        <button key={tab.id} type="button" aria-pressed={activeView === tab.id} onClick={() => onSelect(tab)} className={`border-b-2 px-2 pb-2 pt-1 font-mono text-[10px] transition sm:text-xs ${activeView === tab.id ? "border-primary text-foreground" : "border-transparent text-text-secondary hover:text-foreground"}`}>
          {tab.label}
        </button>
      ))}
    </nav>
  );
}

function CommandBar({ activeView, onSelect }: TerminalTabsProps) {
  return (
    <div className="flex min-h-8 flex-wrap items-center gap-1.5 border-b border-surface-layer-1 pb-4">
      <span>Pills ejecutables:</span>
      {commands.map((command) => (
        <button key={command.id} type="button" aria-pressed={activeView === command.id} onClick={() => onSelect(command)} className={`rounded bg-surface-layer-1 px-2 py-1 transition hover:bg-surface-layer-2 ${command.tone === "primary" ? "text-primary" : "text-secondary-muted"}`}>
          $ {command.label}
        </button>
      ))}
    </div>
  );
}

function TerminalOutput({ view, command }: { view: ViewId; command: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={view}
        initial={shouldReduceMotion ? false : { opacity: 0, filter: "blur(4px)", y: 8 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        exit={shouldReduceMotion ? undefined : { opacity: 0, filter: "blur(3px)", y: -6 }}
        transition={{ duration: 0.24, ease: "easeOut" }}
        className="min-h-64 space-y-3 sm:min-h-56"
      >
        <p>Linux 6.8.9-arch1-1 x86_64 SMP PREEMPT_DYNAMIC #1</p>
        <p className="font-semibold text-primary">sys://guest@camilo.dev:~$ <span className="text-foreground">{command}</span></p>
        <div className="space-y-2 border-l-2 border-primary pl-3 text-foreground">
          {outputByView[view].map((line, index) => (
            <motion.p key={line.text} className={toneClasses[line.tone ?? "normal"]} initial={shouldReduceMotion ? false : { opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 + index * 0.05 }}>
              {line.text}
            </motion.p>
          ))}
        </div>
        <p className="font-semibold text-primary">sys://guest@camilo.dev:~$ <motion.span className="inline-block h-4 w-1.5 bg-primary align-middle" animate={shouldReduceMotion ? undefined : { opacity: [1, 0, 1] }} transition={{ duration: 0.9, repeat: Infinity }} /></p>
      </motion.div>
    </AnimatePresence>
  );
}

export function TerminalComponent() {
  const [activeView, setActiveView] = useState<ViewId>("bio");
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const activeAction = [...tabs, ...commands].find((action) => action.id === activeView) ?? tabs[0];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.div
      ref={containerRef}
      className="flex w-full justify-center lg:w-1/2"
      style={shouldReduceMotion ? undefined : { y: parallaxY }}
    >
      <motion.section initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0, boxShadow: shouldReduceMotion ? undefined : ["0 18px 40px rgba(0,0,0,.35)", "0 18px 48px rgba(0,242,254,.12)", "0 18px 40px rgba(0,0,0,.35)"] }} transition={{ opacity: { duration: 0.45, delay: 0.15 }, x: { duration: 0.45, delay: 0.15 }, boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" } }} whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.008 }} className="flex h-[420px] w-full max-w-2xl self-center flex-col overflow-hidden rounded-xl border border-surface-layer-2 bg-surface-base text-[10px] shadow-2xl sm:h-[400px] sm:text-xs lg:max-w-none" aria-label="Terminal interactiva">
      <header className="flex items-center gap-3 border-b border-surface-layer-2 bg-surface-layer-1 px-3 py-2">
        <div className="flex shrink-0 items-center gap-1.5" aria-label="Controles de ventana"><span className="h-2.5 w-2.5 rounded-full bg-danger" /><span className="h-2.5 w-2.5 rounded-full bg-warning" /><span className="h-2.5 w-2.5 rounded-full bg-primary" /></div>
        <TerminalTabs activeView={activeView} onSelect={(action) => setActiveView(action.id)} />
      </header>
      <div className="min-h-0 flex-1 space-y-4 overflow-y-auto p-3 font-mono leading-5 text-text-secondary sm:p-4">
        <CommandBar activeView={activeView} onSelect={(action) => setActiveView(action.id)} />
        <TerminalOutput view={activeView} command={activeAction.command} />
      </div>
    </motion.section>
    </motion.div>
  );
}
