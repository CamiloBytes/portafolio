export interface CoreLanguage {
  name: string;
  description: string;
  years: string;
  dotColor: string;
}

export interface CloudTool {
  name: string;
  description: string;
}

export interface ArchPattern {
  name: string;
  description: string;
}

export interface StackData {
  header: {
    subtitle: string;
    title: string;
    comment: string;
  };
  coreLanguages: {
    title: string;
    badge: string;
    items: CoreLanguage[];
  };
  cloudSystems: {
    title: string;
    badge: string;
    tools: CloudTool[];
    paradigmsNote: string;
  };
  frontendControl: {
    title: string;
    badge: string;
    description: string;
    tags: string[];
  };
  architectureMethodology: {
    title: string;
    badge: string;
    patterns: ArchPattern[];
  };
}
