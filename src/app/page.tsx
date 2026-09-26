"use client";

import { TerminalComponent } from "../components/features/TerminalComponent";
import { HeroSection } from "../components/sections/HeroSection";
import { Navbar } from "../components/sections/navbarsection";
import { ProjectSection } from "../components/sections/projectsection";
import { StackSection } from "../components/sections/stacksection";


export default function Home() {
  return (
    <main className="min-h-screen bg-transparent px-4 pb-8 pt-24 text-surface-layer-1 sm:px-8 sm:pb-10 sm:pt-28 lg:px-10">
      <Navbar />
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:gap-10">
        <HeroSection />
        <TerminalComponent />
      </section>
      <ProjectSection />
      <StackSection />
    </main>
  );
}
