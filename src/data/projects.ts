import type { Project } from "../types/projects";

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
    repoUrl: "https://github.com/CamiloBytes",
    rfc: {
      architecture:
        "Topología Leader-Follower con Raft Consensus protocol. Motor de almacenamiento LSM-Tree con compresión concurrente en segundo plano.",
      protocol: "gRPC sobre HTTP/2 con serialización flatbuffers zero-copy.",
      guarantees: "Consistencia linealizable (CP en teorema CAP) con quórum mayoritario.",
      benchmarks: "p99 < 1.2ms en cargas de escritura concurrentes de 100k ops/seg.",
    },
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
    repoUrl: "https://github.com/CamiloBytes",
    rfc: {
      architecture:
        "Sondas en espacio de kernel (Linux eBPF kprobes/tracepoints) que capturan sockets TCP sin inyección en espacio de usuario.",
      protocol: "Buffer circular lockless de kernel hacia pipeline de ingesta Kafka.",
      guarantees: "Garantía at-least-once con particionamiento de tópicos por cluster ID.",
      benchmarks: "Consumo de CPU inferior a 1.2% por nodo worker con tasa de 1.8M spans/seg.",
    },
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
    repoUrl: "https://github.com/CamiloBytes",
    rfc: {
      architecture:
        "TUI asíncrona renderizada con Ratatui y tokio runtime. Conexión directa a Kubernetes API server vía WebSockets duplex.",
      protocol: "Diff de árbol de estados de pods y nodos en memoria con algoritmo de double-buffering.",
      guarantees: "Cero leaks de descriptores de archivos incluso con reconexiones forzadas.",
      benchmarks: "Frame rate estable de 60fps con refresco de métricas en 50ms.",
    },
  },
];
