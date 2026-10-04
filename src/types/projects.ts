export interface ProjectMetric {
  label: string;
  value: string;
  secondaryLabel: string;
  secondaryValue: string;
}

export interface ProjectRFC {
  architecture: string;
  protocol: string;
  guarantees: string;
  benchmarks: string;
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
  repoUrl: string;
  rfc: ProjectRFC;
}
