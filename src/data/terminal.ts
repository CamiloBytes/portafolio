export type ViewId = "bio" | "skills" | "contact" | "metrics" | "projects";
export type Tone = "normal" | "muted" | "primary" | "secondary";

export interface TerminalLine {
  text: string;
  tone?: Tone;
}

export interface TerminalAction {
  id: ViewId;
  label: string;
  command: string;
  tone: "primary" | "secondary";
}

export const tabs: TerminalAction[] = [
  { id: "bio", label: "whoami.sh", command: "cat bio.md", tone: "primary" },
  { id: "skills", label: "skills.json", command: "cat skills.json | jq .", tone: "secondary" },
  { id: "contact", label: "contact.sh", command: "curl -s https://api.camilo.dev/v1/contact", tone: "secondary" },
];

export const commands: TerminalAction[] = [
  tabs[0],
  { id: "metrics", label: "curl /metrics", command: "curl /metrics", tone: "secondary" },
  { id: "projects", label: "view projects", command: "view projects", tone: "primary" },
];

export const outputByView: Record<ViewId, TerminalLine[]> = {
  bio: [
    { text: "Camilo Parra - Desarrollador de Software" },
    { text: "[Barranquilla, Colombia UTC-5] / Remoto Global." },
    { text: "Desarrollador de software enfocado en la creación de aplicaciones web modernas. Especializado en React, Next.js, TypeScript, Node.js y Express, con conocimientos en bases de datos y desarrollo de APIs.", tone: "muted" },
    { text: "[Disponibilidad: Inmediata para proyectos de alta complejidad técnica]", tone: "primary" },
  ],
  skills: [
    { text: '"core_languages": ["TypeScript", "JavaScript", "Python", "SQL"],' },
    { text: '"frontend": ["React", "Next.js", "Tailwind CSS"],' },
    { text: '"backend": ["Node.js", "Express", "Prisma", "REST APIs"],' },
    { text: '"database": ["PostgreSQL", "SQL"]', tone: "primary" },
    { text: '"workflow": ["Git", "Docker", "CI/CD"]', tone: "muted" },
  ],
  contact: [
    { text: "EMAIL: camiloandres02222@gmail.com" },
    { text: "GITHUB: github.com/CamiloBytes" },
    { text: "LOCATION: Barranquilla, Colombia (UTC-5)" },
    { text: "STACK: React / Next.js / TypeScript / Node.js", tone: "primary" },
    { text: "AVAILABILITY: Open to collaboration", tone: "muted" },
  ],
  metrics: [
    { text: "STATUS: operational", tone: "primary" },
    { text: "REQUESTS: 1,284,902 / day" },
    { text: "P99 LATENCY: 14ms" },
    { text: "UPTIME: 99.98%", tone: "primary" },
    { text: "ERROR RATE: 0.02%", tone: "muted" },
  ],
  projects: [
    { text: "01  EventMesh - Eventual sync engine", tone: "primary" },
    { text: "02  Atlas - Multi-region data sharding" },
    { text: "03  Pulse - Low-latency telemetry pipeline" },
    { text: "Use the project cards below to inspect each system.", tone: "muted" },
    { text: "STATUS: systems operational", tone: "primary" },
  ],
};

export const toneClasses: Record<Tone, string> = {
  normal: "text-foreground",
  muted: "text-text-secondary",
  primary: "text-primary",
  secondary: "text-secondary-muted",
};
