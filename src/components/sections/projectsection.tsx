import { projects } from "../../data/projects";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { HeaderSection } from "../ui/headersection";

export const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-7xl scroll-mt-24 space-y-8 px-4 pb-16 pt-14 sm:px-6 sm:pb-10 sm:pt-20 lg:px-8"
    >
        <HeaderSection 
        title="Proyectos Destacados"
        subtitle="SYSTEMS LEDGER & ARCHITECTURE"
        message="Filtrado por rendimiento de misión crítica"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((project) => {
          const accentClass =
            project.accent === "primary" ? "bg-primary" : "bg-secondary-muted";
          const valueClass =
            project.accent === "primary"
              ? "text-primary"
              : "text-secondary-muted";

          return (
            <article
              key={project.id}
              className="group flex flex-col justify-between rounded-xl border border-[#3a494b]/40 bg-[#1a1b21]/70 p-6 transition-all duration-300 hover:border-[#00f2fe]/50 hover:shadow-[0_0_25px_-5px_rgba(0,242,254,0.12)]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-block h-2.5 w-2.5 rounded-full ${accentClass}`}
                      aria-hidden="true"
                    />
                    <span className="font-mono text-[11px] font-medium tracking-wider text-[#b9cacb]">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-[#b9cacb]">
                    <a
                      href={project.href}
                      aria-label={`Ver repositorio de ${project.title}`}
                      title="Ver repositorio"
                      className="p-1 transition-colors hover:text-[#00f2fe] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00f2fe]"
                    >
                      <FaCode className="h-4 w-4" />
                    </a>
                    <a
                      href={project.href}
                      aria-label={`Ver arquitectura de ${project.title}`}
                      title="Ver arquitectura"
                      className="p-1 transition-colors hover:text-[#00f2fe] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00f2fe]"
                    >
                      <FaExternalLinkAlt className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <a
                  href={project.href}
                  className="group/title block cursor-pointer text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00f2fe]"
                  aria-label={`Abrir detalles de ${project.title}`}
                >
                  <h3 className="flex items-center justify-between text-xl font-bold text-[#e0fdff] transition-colors group-hover/title:text-[#00f2fe]">
                    <span>{project.title}</span>
                    <FaExternalLinkAlt className="h-4 w-4 text-[#00f2fe] opacity-0 transition-opacity group-hover/title:opacity-100" />
                  </h3>
                </a>

                <p className="text-sm leading-relaxed text-[#b9cacb]">
                  {project.description}
                </p>

                <div className="space-y-1.5 rounded border border-[#3a494b]/30 bg-[#0d0e13]/80 p-3 font-mono text-xs">
                  <div className="flex justify-between gap-3">
                    <span className="text-[#849495]">{project.metric.label}:</span>
                    <strong className={`text-right font-semibold ${valueClass}`}>
                      {project.metric.value}
                    </strong>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#849495]">{project.metric.secondaryLabel}:</span>
                    <strong className="text-right font-semibold text-[#c0c1ff]">
                      {project.metric.secondaryValue}
                    </strong>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between gap-3 border-t border-[#3a494b]/30 pt-6">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, index) => (
                    <span
                      key={tag}
                      className={`rounded border px-2 py-0.5 font-mono text-[11px] ${index === 0 ? "border-[#00f2fe]/30 bg-[#1e1f25] text-[#00f2fe]" : "border-[#3a494b]/30 bg-[#1e1f25] text-[#b9cacb]"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.href}
                  className="ml-2 flex shrink-0 items-center gap-1 font-mono text-xs text-[#00f2fe] hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00f2fe]"
                >
                  <span>RFC spec</span>
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};