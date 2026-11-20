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
    imageUrl:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",
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
  // TBD: Replace with real SVL Constructions data
  stats: {
    yearsExperience: "15+",
    builtUpAreaDelivered: "1.2M+ sq. ft.",
    completedProjects: "40+",
    onTimeHandover: "95%",
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
    {
      title: "Turnkey Residential & Villas",
      description:
        "End-to-end planning and construction for considered homes and private villas.",
    },
    {
      title: "Commercial & Industrial",
      description:
        "Purpose-built spaces engineered around operational needs and long-term use.",
    },
    {
      title: "Joint Ventures & Land Development",
      description:
        "Collaborative development opportunities shaped around landowner goals.",
    },
    {
      title: "Structural & Civil Works",
      description:
        "Reliable structural and civil execution guided by sound engineering practice.",
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
    },
    {
      title: "Urban Commercial Complex",
      status: "ongoing",
      location: "Hyderabad, Telangana — TBD",
      builtUpArea: "TBD",
      scope: "Commercial construction — TBD",
    },
    {
      title: "Industrial Facility",
      status: "completed",
      location: "Telangana — TBD",
      builtUpArea: "TBD",
      scope: "Structural and civil works — TBD",
    },
  ],
};
