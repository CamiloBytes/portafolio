"use client";

import { useState } from "react";
import {
  commands,
  outputByView,
  tabs,
  toneClasses,
  type TerminalAction,
  type ViewId,
} from "../../data/terminal";

const TerminalTabs = ({ activeView, onSelect }: { activeView: ViewId; onSelect: (action: TerminalAction) => void }) => (
  <nav className="flex min-w-0 flex-1 items-center justify-center gap-2 sm:gap-6" aria-label="Terminal files">
    {tabs.map((tab) => (
      <button
        key={tab.id}
        type="button"
        aria-pressed={activeView === tab.id}
        onClick={() => onSelect(tab)}
        className={`border-b-2 px-2 pb-2 pt-1 font-mono text-[10px] transition sm:text-xs ${activeView === tab.id ? "border-primary text-foreground" : "border-transparent text-text-secondary hover:text-foreground"}`}
      >
        {tab.label}
      </button>
    ))}
  </nav>
);

const CommandBar = ({ activeView, onSelect }: { activeView: ViewId; onSelect: (action: TerminalAction) => void }) => (
  <div className="flex min-h-8 flex-wrap items-center gap-1.5 border-b border-surface-layer-1 pb-4">
    <span>PilIts ejecutables:</span>
    {commands.map((command) => (
      <button
        key={command.id}
        type="button"
        aria-pressed={activeView === command.id}
        onClick={() => onSelect(command)}
        className={`rounded bg-surface-layer-1 px-2 py-1 transition hover:bg-surface-layer-2 ${command.tone === "primary" ? "text-primary" : "text-secondary-muted"}`}
      >
        $ {command.label}
      </button>
    ))}
  </div>
);

const TerminalOutput = ({ view, command }: { view: ViewId; command: string }) => (
  <div className="min-h-64 space-y-3 sm:min-h-56">
    <p>Linux 6.8.9-arch1-1 x86_64 SMP PREEMPT_DYNAMIC #1</p>
    <p className="font-semibold text-primary">
      sys://guest@alex.dev:~$ <span className="text-foreground">{command}</span>
    </p>
    <div className="space-y-2 border-l-2 border-primary pl-3 text-foreground">
      {outputByView[view].map((line) => (
        <p key={line.text} className={toneClasses[line.tone ?? "normal"]}>
          {line.text}
        </p>
      ))}
    </div>
    <p className="font-semibold text-primary">
      sys://guest@alex.dev:~$ <span className="inline-block h-4 w-1.5 animate-pulse bg-primary align-middle" />
    </p>
  </div>
);

export const TerminalComponent = () => {
  const [activeView, setActiveView] = useState<ViewId>("bio");
  const activeAction = [...tabs, ...commands].find((action) => action.id === activeView) ?? tabs[0];

  return (
    <section className="flex h-[420px] w-full max-w-2xl self-center flex-col overflow-hidden rounded-xl border border-surface-layer-2 bg-surface-base text-[10px] shadow-2xl sm:h-[400px] sm:text-xs lg:w-1/2">
      <header className="flex items-center gap-3 border-b border-surface-layer-2 bg-surface-layer-1 px-3 py-2">
        <div className="flex shrink-0 items-center gap-1.5" aria-label="Window controls">
          <span className="h-2.5 w-2.5 rounded-full bg-danger" />
          <span className="h-2.5 w-2.5 rounded-full bg-warning" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary" />
        </div>
        <TerminalTabs activeView={activeView} onSelect={(action) => setActiveView(action.id)} />
      </header>
      <div className="min-h-0 flex-1 space-y-4 overflow-y-auto p-3 font-mono leading-5 text-text-secondary sm:p-4">
        <CommandBar activeView={activeView} onSelect={(action) => setActiveView(action.id)} />
        <TerminalOutput view={activeView} command={activeAction.command} />
      </div>
    </section>
  );
};
