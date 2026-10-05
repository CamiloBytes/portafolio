import type { StackData } from "../types/stack";

export const stackData: StackData = {
  header: {
    subtitle: "TECNOLOGÍAS PRESENTES EN MIS PROYECTOS",
    title: "Stack Tecnológico",
    comment: "Herramientas que uso para construir productos web y APIs",
  },
  coreLanguages: {
    title: "Lenguajes Núcleo",
    badge: "Base",
    items: [
      {
        name: "TypeScript",
        description: "Aplicaciones Next.js, APIs Node.js y tipado de extremo a extremo",
        years: "3 proyectos",
        dotColor: "#38bdf8",
      },
      {
        name: "JavaScript",
        description: "Runtime Node.js, tooling y lógica de integración",
        years: "Backend",
        dotColor: "#eab308",
      },
      {
        name: "PHP",
        description: "Laravel 12 para APIs REST, autenticación y persistencia",
        years: "Laravel",
        dotColor: "#a78bfa",
      },
      {
        name: "SQL",
        description: "Modelado relacional y consultas sobre PostgreSQL",
        years: "Prisma",
        dotColor: "#00f2fe",
      },
    ],
  },
  cloudSystems: {
    title: "Sistemas, Cloud & Datos",
    badge: "Backend",
    tools: [
      {
        name: "PostgreSQL",
        description: "Memoria persistente para chats y proyectos",
      },
      {
        name: "Prisma ORM",
        description: "Esquemas, migraciones y acceso tipado a datos",
      },
      {
        name: "Docker",
        description: "Contenedores reproducibles para APIs Node y Laravel",
      },
      {
        name: "REST / SSE",
        description: "APIs HTTP y respuestas de IA en streaming",
      },
      {
        name: "NextAuth",
        description: "Autenticación y sesiones para aplicaciones full-stack",
      },
      {
        name: "Laravel Sanctum",
        description: "Autenticación para endpoints protegidos",
      },
    ],
    paradigmsNote: "Persistencia relacional · APIs stateless · streaming de respuestas",
  },
  frontendControl: {
    title: "Frontend & Experiencia",
    badge: "UI",
    description:
      "Construyo interfaces web con Next.js y React, combinando formularios validados, estado global y componentes accesibles.",
    tags: [
      "Next.js 16 (App Router)",
      "React 19",
      "Tailwind CSS",
      "React Hook Form",
      "Zod",
      "Zustand",
    ],
  },
  architectureMethodology: {
    title: "Arquitectura & Metodología",
    badge: "Patrones",
    patterns: [
      {
        name: "Full-stack por dominios",
        description: "Frontend, backend y persistencia organizados alrededor de cada producto.",
      },
      {
        name: "CRUD REST",
        description: "Endpoints HTTP claros para crear, consultar, actualizar y eliminar recursos.",
      },
      {
        name: "Validación tipada",
        description: "TypeScript, Zod y React Hook Form para reducir errores de entrada.",
      },
      {
        name: "Streaming con contexto",
        description: "SSE para respuestas de IA, memoria persistente e instrucciones dinámicas.",
      },
    ],
  },
};
