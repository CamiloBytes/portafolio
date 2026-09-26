export interface ProjectMetric {
  label: string;
  value: string;
  secondaryLabel: string;
  secondaryValue: string;
}

export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  metric: ProjectMetric;
  tags: string[];
  accent: "primary" | "secondary";
  href: string;
}

export const projects: Project[] = [
  {
    id: "nexusdb",
    category: "Engine distribuido",
    title: "NexusDB",
    description:
      "Motor de almacenamiento clave-valor distribuido basado en Raft Consensus y LSM-Trees. Optimizado para escrituras masivas en memoria NVMe con zero-copy serialization.",
    metric: {
      label: "Rendimiento",
      value: "Reducción de latencia en 42%",
      secondaryLabel: "Social Proof",
      secondaryValue: "5.2k ⭐ en GitHub",
    },
    tags: ["Rust", "Raft", "gRPC", "LSM-Trees"],
    accent: "primary",
    href: "#contact",
  },
  {
    id: "aurapulse",
    category: "Observabilidad cloud",
    title: "AuraPulse",
    description:
      "Plataforma de telemetría y trazas distribuidas eBPF en tiempo real para topologías Kubernetes masivas. Detección autónoma de anomalías con propagación de eventos vía Apache Kafka.",
    metric: {
      label: "Capacidad",
      value: "1.8M spans/sec ingestion",
      secondaryLabel: "Despliegue",
      secondaryValue: "46+ Clústeres K8s",
    },
    tags: ["Go", "eBPF", "Kafka", "Kubernetes"],
    accent: "secondary",
    href: "#contact",
  },
  {
    id: "kubelens",
    category: "CLI / TUI core",
    title: "KubeLens",
    description:
      "Interfaz de terminal interactiva (TUI) para orquestación y debugging forense de contenedores efímeros. Renderizado nativo por GPU con integración directa a OpenTelemetry.",
    metric: {
      label: "Overhead CPU",
      value: "< 0.4% en carga máxima",
      secondaryLabel: "Comunidad",
      secondaryValue: "120k descargas Homebrew",
    },
    tags: ["Rust", "Ratatui", "K8s API", "Docker"],
    accent: "primary",
    href: "#contact",
  },
];
