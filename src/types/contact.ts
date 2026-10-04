export interface SocialLink {
  label: string;
  href: string;
  iconType: "github" | "linkedin" | "twitter";
}

export interface ContactInfo {
  title: string;
  description: string;
  emailLabel: string;
  email: string;
  pgpLabel: string;
  pgpKey: string;
  pgpSubtext: string;
}

export interface ContactFormConfig {
  windowTitle: string;
  statusBadge: string;
  senderLabel: string;
  senderPlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePrefix: string;
  messagePlaceholder: string;
  defaultStatus: string;
  submitButton: string;
}

export interface ContactData {
  header: {
    subtitle: string;
    title: string;
    comment: string;
  };
  info: ContactInfo;
  socials: SocialLink[];
  form: ContactFormConfig;
}

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export interface ContactApiResponse {
  success?: boolean;
  simulated?: boolean;
  message?: string;
  error?: string;
  data?: unknown;
}
