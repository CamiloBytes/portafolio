export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterStatus {
  indicatorColor: string;
  label: string;
}

export interface FooterData {
  systemTag: string;
  copyright: string;
  status: FooterStatus;
  links: FooterLink[];
}
