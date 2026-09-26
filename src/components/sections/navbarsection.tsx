import Link from "next/link";
import { FaCode } from "react-icons/fa";
import { MdOutlineTerminal } from "react-icons/md";

export const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 w-full px-4 py-3 sm:px-8 sm:py-5 lg:px-10" aria-label="Main navigation">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 rounded-sm border border-surface-layer-1 bg-surface-base/70 px-3 py-2 backdrop-blur sm:px-5">
        <div className="flex min-w-0 items-center gap-3">
        <Link
          href="/"
          className="shrink-0 font-mono text-sm font-semibold tracking-tight text-foreground transition hover:text-primary sm:text-base"
        >
          <span className="mr-2 text-primary">&gt;</span>
          sys://alex.dev
        </Link>
          <span className="hidden shrink-0 items-center gap-2 rounded-full border border-surface-layer-2 bg-surface-layer-1 px-3 py-1 font-mono text-[10px] font-medium tracking-widest text-text-secondary sm:inline-flex">
            <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_#00f2fe]" aria-hidden="true" />
            Open to roles
          </span>
        </div>

        <div className="hidden items-center gap-7 font-mono text-sm text-text-secondary lg:flex">
          <Link className="border-b border-primary pb-1 text-foreground transition hover:text-primary" href="#projects">
            Projects
          </Link>
          <Link className="transition hover:text-foreground" href="#stack">
            Stack
          </Link>
          <Link className="transition hover:text-foreground" href="#experience">
            Experience
          </Link>
          <Link className="transition hover:text-foreground" href="#terminal">
            Terminal
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="#terminal"
            aria-label="Open terminal"
            className="hidden h-8 w-8 items-center justify-center rounded border border-surface-layer-2 bg-surface-base font-mono text-base text-text-secondary transition hover:border-primary hover:text-primary sm:flex"
          >
            <MdOutlineTerminal />
          </Link>
          <Link
            href="#projects"
            aria-label="View code projects"
            className="hidden h-8 w-8 items-center justify-center rounded border border-surface-layer-2 bg-surface-base font-mono text-base text-text-secondary transition hover:border-primary hover:text-primary sm:flex"
          >
            <FaCode />
          </Link>
          <Link
            href="#contact"
            className="rounded bg-primary px-3 py-2 font-mono text-xs font-semibold text-surface-layer-1 transition hover:-translate-y-0.5 hover:shadow-[0_0_12px_#00f2fe] sm:px-4 sm:text-sm"
          >
            Get in Touch <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
