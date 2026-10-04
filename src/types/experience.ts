export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
  status: "current" | "past" | "initial";
  nodeColor: string;
  periodBadgeClass: string;
}

export interface ExperienceData {
  header: {
    subtitle: string;
    title: string;
    comment: string;
  };
  experiences: ExperienceItem[];
}
