export type ProjectStatus = "ongoing" | "completed";

export interface CompanyStats {
  yearsExperience: string;
  builtUpAreaDelivered: string;
  completedProjects: string;
  onTimeHandover: string;
}

export interface CompanyContact {
  phone: string;
  phoneHref: string;
  whatsappHref: string;
  email: string;
  city: string;
  country: string;
}

export interface CompanyNavigationLink {
  label: string;
  href: string;
}

export interface CompanyHero {
  eyebrow: string;
  headline: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  imageCaption: string;
}

export interface CompanyService {
  title: string;
  description: string;
}

export interface CompanyProject {
  title: string;
  status: ProjectStatus;
  location: string;
  builtUpArea: string;
  scope: string;
}

export interface Company {
  name: string;
  positioningStatement: string;
  hero: CompanyHero;
  navigation: CompanyNavigationLink[];
  stats: CompanyStats;
  contact: CompanyContact;
  services: CompanyService[];
  projects: CompanyProject[];
}
