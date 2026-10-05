import type { Project } from "../types/projects";

export const projects: Project[] = [
  {
    id: "greenpath-market",
    category: "E-commerce",
    title: "GreenPath Market",
    description:
      "Aplicación web de comercio electrónico construida con Next.js, con frontend, backend y una base preparada para evolucionar como marketplace.",
    metric: {
      label: "Framework",
      value: "Next.js",
      secondaryLabel: "Estado",
      secondaryValue: "Proyecto activo",
    },
    tags: ["Next.js", "TypeScript", "Marketplace"],
    accent: "primary",
    href: "#contact",
    repoUrl: "https://github.com/CamiloBytes/greenpath-market",
    rfc: {
      architecture:
        "Aplicación full-stack organizada por dominios, con frontend Next.js y un backend separado para mantener responsabilidades claras.",
      protocol: "Aplicación web sobre HTTP con rutas de servidor y APIs del proyecto.",
      guarantees:
        "Separación de capas para facilitar el mantenimiento y la evolución de las funcionalidades de marketplace.",
      benchmarks:
        "La documentación del repositorio no publica benchmarks cuantitativos; los datos mostrados aquí describen su estado actual.",
    },
  },
  {
    id: "api-rest-laravel",
    category: "API REST",
    title: "API REST Laravel",
    description:
      "API para gestionar productos mediante operaciones CRUD, migraciones, modelos y controladores de Laravel, con soporte para pruebas desde clientes HTTP.",
    metric: {
      label: "Operaciones",
      value: "CRUD de productos",
      secondaryLabel: "Persistencia",
      secondaryValue: "Migraciones Eloquent",
    },
    tags: ["Laravel", "PHP", "MySQL", "REST"],
    accent: "secondary",
    href: "#contact",
    repoUrl: "https://github.com/CamiloBytes/api-rest-laravel",
    rfc: {
      architecture:
        "API Laravel estructurada con rutas, controladores, modelos Eloquent y migraciones para separar transporte, lógica y persistencia.",
      protocol: "HTTP REST con endpoints GET, POST, PUT y DELETE para productos.",
      guarantees:
        "Validación del esquema mediante migraciones y asignación masiva controlada desde el modelo.",
      benchmarks:
        "El repositorio no publica benchmarks de rendimiento; incluye documentación y comandos para ejecutar pruebas manuales de la API.",
    },
  },
  {
    id: "tasklancer",
    category: "Gestión de proyectos",
    title: "TaskLancer",
    description:
      "Plataforma full-stack de gestión de proyectos y tareas creada con Next.js 16 para organizar relaciones con clientes, flujos de trabajo y colaboración de equipos.",
    metric: {
      label: "Framework",
      value: "Next.js 16",
      secondaryLabel: "Alcance",
      secondaryValue: "Proyectos y tareas",
    },
    tags: ["Next.js", "Prisma", "NextAuth", "TypeScript"],
    accent: "primary",
    href: "#contact",
    repoUrl: "https://github.com/CamiloBytes/tasklancer",
    rfc: {
      architecture:
        "Aplicación full-stack con Next.js, autenticación integrada y Prisma como capa de acceso al modelo de datos.",
      protocol: "Flujos web y acciones de servidor para gestionar proyectos, tareas y colaboración.",
      guarantees:
        "Acceso autenticado y persistencia relacional para centralizar el trabajo de equipos y clientes.",
      benchmarks:
        "La documentación del proyecto no publica benchmarks cuantitativos; sus capacidades funcionales están descritas en el README.",
    },
  },
  {
    id: "ia-test-node",
    category: "IA / Backend",
    title: "IA Test Node",
    description:
      "API Node.js para conversaciones con IA, persistencia de memoria y contexto dinámico, con respuestas en streaming y varios proveedores mediante round-robin.",
    metric: {
      label: "Transporte",
      value: "Streaming SSE",
      secondaryLabel: "Persistencia",
      secondaryValue: "PostgreSQL + Prisma",
    },
    tags: ["Node.js", "AI", "Prisma", "PostgreSQL"],
    accent: "secondary",
    href: "#contact",
    repoUrl: "https://github.com/CamiloBytes/ia-test-node",
    rfc: {
      architecture:
        "Backend Node.js con servicio de chat, memoria persistida en PostgreSQL mediante Prisma e inyección de contexto dinámico.",
      protocol:
        "Endpoint POST /chat con respuestas de texto transmitidas mediante Server-Sent Events.",
      guarantees:
        "Historial conversacional persistente y distribución round-robin entre proveedores de modelos de IA.",
      benchmarks:
        "El README documenta soporte para Nvidia, Cerebras y Qwen, pero no publica métricas de rendimiento.",
    },
  },
];
