import type { Company } from "@/types/company";

export const company: Company = {
  name: "SVL Constructions",
  positioningStatement:
    "Engineering enduring spaces for living, working, and industry.",
  // TBD: Replace with real SVL Constructions data
  hero: {
    eyebrow: "Civil Engineering • Turnkey Construction",
    headline: "Engineering enduring spaces for living, working, and industry.",
    description:
      "From considered homes to commercial and industrial spaces, bring your next construction project into focus with SVL Constructions.",
    imageUrl: "/images/hero/hero-architecture.jpg",
    imageAlt: "Modern concrete and glass architecture framed by greenery",
    imageCaption: "Modern concrete and glass architecture · TBD",
  },
  navigation: [
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
  ],
  stats: {
    // TBD: Replace with real SVL Constructions data
    yearsExperience: "TBD",
    // TBD: Replace with real SVL Constructions data
    builtUpAreaDelivered: "TBD",
    // TBD: Replace with real SVL Constructions data
    completedProjects: "TBD",
    // TBD: Replace with real SVL Constructions data
    onTimeHandover: "TBD",
  },
  // TBD: Replace with real SVL Constructions data
  contact: {
    phone: "+91 90000 00000",
    phoneHref: "tel:+919000000000",
    whatsappHref: "https://wa.me/919000000000",
    email: "hello@svlconstructions.in",
    city: "Hyderabad",
    country: "India",
  },
  services: [
    // TBD: Replace with real SVL Constructions data
    {
      id: "turnkey-residential-villas",
      title: "Turnkey Residential & Villas",
      audienceTag: "Residential",
      description:
        "End-to-end planning and construction for considered homes and private villas.",
      deliverables: [
        "Planning and coordinated execution",
        "Residential structural works",
        "Turnkey interior and finishing scope",
      ],
      imageUrl: "/images/services/residential-villas.jpg",
      imageAlt: "Modern villa with clean architectural lines",
    },
    // TBD: Replace with real SVL Constructions data
    {
      id: "commercial-industrial",
      title: "Commercial & Industrial",
      audienceTag: "Commercial",
      description:
        "Purpose-built spaces engineered around operational needs and long-term use.",
      deliverables: [
        "Commercial and industrial planning",
        "Structural and building execution",
        "Coordinated project handover",
      ],
      imageUrl: "/images/services/commercial-industrial.jpg",
      imageAlt: "Contemporary commercial building facade",
    },
    // TBD: Replace with real SVL Constructions data
    {
      id: "joint-ventures-land-development",
      title: "Joint Ventures / Land Development",
      audienceTag: "Landowners",
      description:
        "Collaborative development opportunities shaped around landowner goals.",
      deliverables: [
        "Land and development assessment",
        "Collaborative scope planning",
        "Project coordination and execution",
      ],
      imageUrl: "/images/services/joint-ventures.jpg",
      imageAlt: "Aerial view of land prepared for development",
    },
    // TBD: Replace with real SVL Constructions data
    {
      id: "structural-civil-works",
      title: "Structural & Civil Works",
      audienceTag: "Engineering",
      description:
        "Reliable structural and civil execution guided by sound engineering practice.",
      deliverables: [
        "Structural and civil construction",
        "Site execution coordination",
        "Progress and quality checkpoints",
      ],
      imageUrl: "/images/services/structural-civil.jpg",
      imageAlt: "Civil engineering team reviewing building works",
    },
  ],
  // TBD: Replace with real SVL Constructions data
  projects: [
    {
      title: "Contemporary Family Residence",
      status: "completed",
      location: "Hyderabad, Telangana — TBD",
      builtUpArea: "TBD",
      scope: "Turnkey residential construction — TBD",
      imageUrl: "/images/projects/project-1.jpg",
    },
    {
      title: "Urban Commercial Complex",
      status: "ongoing",
      location: "Hyderabad, Telangana — TBD",
      builtUpArea: "TBD",
      scope: "Commercial construction — TBD",
      imageUrl: "/images/projects/project-2.jpg",
    },
    {
      title: "Industrial Facility",
      status: "completed",
      location: "Telangana — TBD",
      builtUpArea: "TBD",
      scope: "Structural and civil works — TBD",
      imageUrl: "/images/projects/project-3.jpg",
    },
  ],
};
