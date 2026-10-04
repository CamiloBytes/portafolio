import type { StackData } from "../types/stack";

export const stackData: StackData = {
  header: {
    subtitle: "CAPACIDADES TÉCNICAS & ARQUITECTURA",
    title: "Stack Tecnológico",
    comment: "Modular, de alto rendimiento y comprobado",
  },
  coreLanguages: {
    title: "Lenguajes Núcleo",
    badge: "Tier 1",
    items: [
      {
        name: "Rust",
        description: "Concurrencia segura, Tokio, Zero-cost abstractions",
        years: "4+ años",
        dotColor: "#f97316",
      },
      {
        name: "Go (Golang)",
        description: "Microservicios de alta concurrencia, Goroutines, gRPC",
        years: "5+ años",
        dotColor: "#00f2fe",
      },
      {
        name: "TypeScript",
        description: "Tipado estricto, APIs distribuidas, Node / Deno runtimes",
        years: "6+ años",
        dotColor: "#38bdf8",
      },
      {
        name: "Python",
        description: "Data tooling, scripts de automatización, orquestación ML",
        years: "5+ años",
        dotColor: "#eab308",
      },
    ],
  },
  cloudSystems: {
    title: "Sistemas, Cloud & Datos",
    badge: "Infraestructura",
    tools: [
      {
        name: "Kubernetes",
        description: "Custom CRDs & Operators",
      },
      {
        name: "Apache Kafka",
        description: "Event streams de alta tasa",
      },
      {
        name: "AWS Ecosystem",
        description: "EKS, SQS, RDS, IAM",
      },
      {
        name: "PostgreSQL",
        description: "Partitioning & Tuning",
      },
      {
        name: "Docker / containerd",
        description: "Multi-stage builds mínimos",
      },
      {
        name: "Redis Cluster",
        description: "Pub/Sub & Caching",
      },
    ],
    paradigmsNote: "Paradigmas: Sharding, CAP Theorem, Consistencia Eventual",
  },
  frontendControl: {
    title: "Frontend & Interfaces de Control",
    badge: "UI Engine",
    description:
      "Diseño dashboards de operaciones tácticos y consolas interactivas donde la velocidad perceptiva y la ausencia de stuttering son vitales.",
    tags: [
      "Next.js 15 (App Router)",
      "Tailwind CSS",
      "WebGL / Three.js",
      "GraphQL / Apollo",
      "WebSockets",
    ],
  },
  architectureMethodology: {
    title: "Arquitectura & Metodología",
    badge: "Estrategia",
    patterns: [
      {
        name: "Event-Driven Design",
        description: "Desacoplamiento asíncrono con backpressure adaptativo.",
      },
      {
        name: "Zero-Trust Security",
        description: "mTLS entre microservicios, Vault y gestión de secrets efímeros.",
      },
      {
        name: "CI/CD GitOps",
        description: "ArgoCD, GitHub Actions con pipelines de seguridad estáticos.",
      },
      {
        name: "TDD & Fuzzing",
        description: "Chaos engineering, suite de pruebas automatizadas y benchs.",
      },
    ],
  },
};
