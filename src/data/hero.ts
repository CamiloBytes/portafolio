export interface HeroStat {
  value: string;
  label: string;
  tone: "primary" | "secondary" | "accent";
}

export const heroStats: HeroStat[] = [
  { value: "99.99% SLA", label: "Uptime en prod", tone: "primary" },
  { value: "12M+ req/día", label: "Tráfico gestionado", tone: "secondary" },
  { value: "15+ OSS", label: "Repositorios clave", tone: "accent" },
];
