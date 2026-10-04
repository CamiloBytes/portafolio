import type { ExperienceData } from "../types/experience";

export const experienceData: ExperienceData = {
  header: {
    subtitle: "TRAYECTORIA PROFESIONAL & LOGROS",
    title: "Experiencia & Hitos",
    comment: "Registro cronológico de despliegues",
  },
  experiences: [
    {
      id: "hyperscale",
      period: "2023 — PRESENTE",
      role: "Staff Distributed Systems Engineer",
      company: "HyperScale Cloud Labs",
      description:
        "Liderazgo de la arquitectura de la malla de datos central (data-mesh) multirregión. Migración de monolito a más de 80 microservicios en Go/Rust orquestados en clústeres Kubernetes bare-metal, reduciendo los costos cloud en un 38% anual y garantizando latencias p99 inferiores a 12ms.",
      technologies: ["Go", "Rust", "Kubernetes", "Kafka", "eBPF"],
      status: "current",
      nodeColor: "#00f2fe",
      periodBadgeClass:
        "border-[#00f2fe]/40 text-[#00f2fe] bg-[#00f2fe]/5",
    },
    {
      id: "fintech",
      period: "2021 — 2023",
      role: "Senior Cloud & Backend Architect",
      company: "FinTech Core Protocols",
      description:
        "Diseño e implementación de un ledger de transacciones bancarias idempotente con consistencia estricta en PostgreSQL distribuido. Creación de una suite de fuzzing automatizada que identificó y mitigó 14 vectores críticos de condiciones de carrera antes de la auditoría SOC-2.",
      technologies: ["Rust", "PostgreSQL", "AWS", "Terraform"],
      status: "past",
      nodeColor: "#818cf8",
      periodBadgeClass:
        "border-[#818cf8]/40 text-[#c0c1ff] bg-[#818cf8]/5",
    },
    {
      id: "devstream",
      period: "2019 — 2021",
      role: "Full Stack Engineer & Tech Lead",
      company: "DevStream Systems",
      description:
        "Desarrollo de portales de observabilidad para pipelines de despliegue continuo. Conexión de dashboards en tiempo real con WebSockets y GraphQL, permitiendo el despliegue concurrente de 300+ ingenieros sin incidencias de sincronización.",
      technologies: ["TypeScript", "Node.js", "React", "Docker"],
      status: "initial",
      nodeColor: "#484f58",
      periodBadgeClass:
        "border-[#3a494b]/50 text-[#849495] bg-[#1a1b21]/50",
    },
  ],
};
