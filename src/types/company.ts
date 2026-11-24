export type ProjectStatus = "Ongoing" | "Completed";

export interface CompanyStats {
  yearsExperience: string;
  foundedYear: string;
  activeCompletedProjects: string;
  upcomingProjects: string;
}

export interface CompanyContact {
  phone: string;
  phoneHref: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  whatsappHref: string;
  email: string;
  officeAddress: string;
  googleMapsHref: string;
  serviceRegions: string[];
  city: string;
  country: string;
}

export interface CompanyLeadership {
  name: string;
  title: string;
  experience: string;
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
  id: string;
  title: string;
  subtitle?: string;
  audienceTag?: string;
  description: string;
  deliverables: string[];
  imageUrl: string;
  imageAlt: string;
}

export type CommitmentIconName =
  | "ShieldCheck"
  | "Ruler"
  | "HardHat"
  | "FileCheck2";

export interface CompanyCommitment {
  id: string;
  title: string;
  description: string;
  standardTag: string;
  iconName: CommitmentIconName;
}

export interface CompanyProject {
  id: string;
  title: string;
  status: ProjectStatus;
  category: string;
  location: string;
  builtUpArea: string;
  scope: string;
  imageUrl: string;
  imageAlt: string;
}

export interface CompanyProcessStep {
  stepNumber: string;
  title: string;
  phaseLabel: string;
  description: string;
  keyOutputs: string[];
}

export type AboutIconName = "Compass" | "Building2" | "MapPin";

export interface CompanyLeadershipPillar {
  title: string;
  description: string;
  iconName: AboutIconName;
}

export interface CompanyAbout {
  eyebrow: string;
  headline: string;
  narrative: string[];
  experienceLabel: string;
  foundedLabel: string;
  regionalFootprint: string;
  upcomingProjectsLabel: string;
  pillars: CompanyLeadershipPillar[];
}

export interface CompanyFaq {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Company {
  name: string;
  tagline: string;
  positioningStatement: string;
  hero: CompanyHero;
  navigation: CompanyNavigationLink[];
  stats: CompanyStats;
  leadership: CompanyLeadership;
  about: CompanyAbout;
  contact: CompanyContact;
  services: CompanyService[];
  commitments: CompanyCommitment[];
  projects: CompanyProject[];
  processSteps: CompanyProcessStep[];
  faqs: CompanyFaq[];
}
