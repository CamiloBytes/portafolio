import { HeroSection } from "../components/sections/HeroSection";

import { Navbar } from "../components/sections/navbarsection";
import { ProjectSection } from "../components/sections/projectsection";
import { StackSection } from "../components/sections/stacksection";
import { ExperienceSection } from "../components/sections/experiencesection";
import { ContactSection } from "../components/sections/contactsection";
import { Footer } from "../components/sections/footersection";
import { PageTransition } from "../components/ui/page-transition";
import { TerminalComponent } from "../components/features/TerminalComponent";


export default function Home() {
  return (
    <>
      <PageTransition className="min-h-screen bg-transparent px-4 pb-8 pt-24 text-surface-layer-1 sm:px-8 sm:pb-10 sm:pt-28 lg:px-10">
        <Navbar />
        <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:gap-10">
          <HeroSection />
          <TerminalComponent />
        </section>
        <ProjectSection />
        <StackSection />
        <ExperienceSection />
        <ContactSection />
      </PageTransition>
      <Footer />
    </>
  );
}
