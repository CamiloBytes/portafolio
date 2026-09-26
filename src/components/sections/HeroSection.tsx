import { Button } from "../ui/button";
import { heroStats } from "../../data/hero";
import { AiOutlineThunderbolt } from "react-icons/ai";

export const HeroSection = () => {
  return (
    <section className="flex w-full items-center px-0 py-8 text-surface-layer-1 sm:py-12 lg:w-1/2 lg:px-4 lg:py-16">
      <div className="flex w-full flex-col items-start gap-5 text-start sm:gap-6">
        <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-surface-layer-2 bg-surface-base px-3 py-1.5 font-mono text-[10px] font-medium uppercase text-foreground shadow-[0_0_18px_rgba(0,242,254,0.06)] sm:px-4 sm:text-xs">
          <span className="text-base leading-none text-primary " aria-hidden="true">
            <AiOutlineThunderbolt />
          </span>
          <span className="truncate">Distributed Systems &amp; Full Stack Engineer</span>
        </div>
        <div className="max-w-2xl pt-2 sm:pt-5">
          <h1 className="text-4xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Construyendo
            <br />
            software de alto
            <br />
            <span className="bg-linear-to-r from-primary via-primary-muted to-foreground bg-clip-text text-transparent">
              rendimiento,
            </span>
            <br />
            escalable y resiliente.
          </h1>
        </div>
        <div className="max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">
          <p>
            Especialista con más de 6 años articulando infraestructuras cloud-native,
            microservicios de baja latencia con tolerancia a particiones (CAP) y consolas
            tácticas para desarrolladores exigentes.
          </p>
        </div>
        <div className="flex w-full flex-wrap gap-3 pt-2 sm:gap-4 sm:pt-4">
          <Button text="Explorar Proyectos" />
          <Button text="Sesión SSH / Contacto" variant="secondary" />
        </div>

        <span className="block h-px w-full bg-text-secondary" aria-hidden="true" />
        <div className="grid w-full grid-cols-1 gap-5 pt-2 sm:grid-cols-3 sm:gap-4">
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <strong
                className={`font-mono text-base font-semibold sm:text-lg ${
                  stat.tone === "primary"
                    ? "text-primary"
                    : stat.tone === "secondary"
                      ? "text-foreground"
                      : "text-secondary-muted"
                }`}
              >
                {stat.value}
              </strong>
              <span className="text-sm text-text-secondary sm:text-base">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
