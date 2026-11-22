import type { Company } from "@/types/company";

/*
 * Launch placeholder checklist:
 * [ ] Exact phone number
 * [ ] Exact WhatsApp number
 * [ ] Official email address
 * [ ] Office address
 * [ ] Built-up areas for all project entries
 * [ ] Real site photos for hero, services, projects, and about imagery
 */

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
    yearsExperience: "18+ Years",
    foundedYear: "Est. 2024",
    activeCompletedProjects: "3 Active & Completed Projects",
    upcomingProjects: "2 Upcoming Projects",
  },
  about: {
    eyebrow: "ENGINEERING LEGACY",
    headline: "Field experience translated into disciplined execution.",
    narrative: [
      "SVL Constructions brings 18 years of civil engineering field expertise into every project, formally established in 2024 to deliver considered residential and institutional construction.",
      "Hands-on structural supervision connects planning with site execution across institutional work in Jammalamadugu and custom villa construction in Shamshabad. The company is now preparing to expand with 2 upcoming projects in Khammam.",
    ],
    experienceLabel: "18+ Years Civil Engineering Experience",
    foundedLabel: "Founded 2024",
    regionalFootprint:
      "Jammalamadugu • Shamshabad • Khammam (Upcoming)",
    upcomingProjectsLabel: "2 Upcoming Projects in Khammam",
    pillars: [
      {
        title: "Direct Civil Engineer Supervision",
        description:
          "Structural decisions and on-site coordination remain closely supervised.",
        iconName: "Compass",
      },
      {
        title: "Institutional & Residential Versatility",
        description:
          "Experience spans school civil works and independently executed villas.",
        iconName: "Building2",
      },
      {
        title: "Disciplined Execution Across AP & Telangana",
        description:
          "A consistent project approach connects Andhra Pradesh and Telangana.",
        iconName: "MapPin",
      },
    ],
  },
  // TBD: Replace with real SVL Constructions data
  contact: {
    phone: "+91 90000 00000",
    phoneHref: "tel:+919000000000",
    whatsappNumber: "+91 90000 00000",
    whatsappHref: "https://wa.me/919000000000",
    email: "hello@svlconstructions.in",
    // TBD: Replace with real SVL Constructions data
    officeAddress: "TBD",
    // TBD: Replace with real SVL Constructions data
    serviceRegions: [
      "Shamshabad",
      "Hyderabad",
      "Jammalamadugu",
      "Khammam",
    ],
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
  commitments: [
    // TBD: Replace with real SVL Constructions data
    {
      id: "is-code-structural-compliance",
      title: "IS-Code Structural Compliance",
      description:
        "Structural execution guided by relevant Indian Standards and project-specific engineering requirements.",
      standardTag: "IS-CODE / STRUCTURAL",
      iconName: "Ruler",
    },
    // TBD: Replace with real SVL Constructions data
    {
      id: "stage-wise-quality-checks",
      title: "Stage-Wise Quality Checks",
      description:
        "Coordinated inspection checkpoints at key construction stages to support consistent quality.",
      standardTag: "QUALITY / CHECKPOINTS",
      iconName: "ShieldCheck",
    },
    // TBD: Replace with real SVL Constructions data
    {
      id: "site-safety-protocols",
      title: "Site Safety Protocols",
      description:
        "Planned site practices focused on orderly access, protective measures, and coordinated work.",
      standardTag: "SAFETY / SITE PRACTICE",
      iconName: "HardHat",
    },
    // TBD: Replace with real SVL Constructions data
    {
      id: "transparent-progress-reporting",
      title: "Transparent Scope & Progress Reporting",
      description:
        "Clear scope communication and progress updates to keep project decisions informed.",
      standardTag: "SCOPE / PROGRESS",
      iconName: "FileCheck2",
    },
  ],
  projects: [
    {
      id: "educational-institution-school-building",
      title: "Educational Institution / School Building",
      status: "Completed",
      category: "Institutional & Civil",
      location: "Jammalamadugu, Andhra Pradesh",
      // TBD: Replace with real SVL Constructions data
      builtUpArea: "TBD",
      scope: "Civil & Structural Execution",
      imageUrl: "/images/projects/project-1.jpg",
      imageAlt: "Institutional school building project",
    },
    {
      id: "independent-residential-villa-i",
      title: "Independent Residential Villa I",
      status: "Ongoing",
      category: "Turnkey Residential",
      location: "Shamshabad, Hyderabad",
      // TBD: Replace with real SVL Constructions data
      builtUpArea: "TBD",
      scope: "End-to-End Villa Construction",
      imageUrl: "/images/projects/project-2.jpg",
      imageAlt: "Independent residential villa in Shamshabad",
    },
    {
      id: "independent-residential-villa-ii",
      title: "Independent Residential Villa II",
      status: "Ongoing",
      category: "Turnkey Residential",
      location: "Shamshabad, Hyderabad",
      // TBD: Replace with real SVL Constructions data
      builtUpArea: "TBD",
      scope: "Structural & Turnkey Execution",
      imageUrl: "/images/projects/project-3.jpg",
      imageAlt: "Independent residential villa construction in Shamshabad",
    },
  ],
  // TBD: Replace with real SVL Constructions data
  processSteps: [
    // TBD: Replace with real SVL Constructions data
    {
      stepNumber: "01",
      title: "Consultation & Site Assessment",
      phaseLabel: "Discover",
      description:
        "Understand the project requirement, site context, and intended use before the next stage of planning.",
      keyOutputs: [
        "Project and audience brief",
        "Initial site assessment",
        "Scope questions documented",
      ],
    },
    // TBD: Replace with real SVL Constructions data
    {
      stepNumber: "02",
      title: "Structural Planning & Scope Alignment",
      phaseLabel: "Plan",
      description:
        "Align the engineering approach, project scope, and coordinated requirements for execution.",
      keyOutputs: [
        "Structural planning direction",
        "Scope alignment",
        "Execution requirements identified",
      ],
    },
    // TBD: Replace with real SVL Constructions data
    {
      stepNumber: "03",
      title: "Civil Execution & Stage-Wise Quality Checks",
      phaseLabel: "Build",
      description:
        "Coordinate civil works on site with inspection checkpoints at defined construction stages.",
      keyOutputs: [
        "Construction stage coordination",
        "Stage-wise quality checks",
        "Progress updates",
      ],
    },
    // TBD: Replace with real SVL Constructions data
    {
      stepNumber: "04",
      title: "Finishing, Inspection & Handover",
      phaseLabel: "Complete",
      description:
        "Review finishing and completed works before coordinating the final project handover.",
      keyOutputs: [
        "Finishing inspection",
        "Handover review",
        "Project documentation",
      ],
    },
  ],
  faqs: [
    // TBD: Replace with real SVL Constructions policy data
    {
      id: "initial-site-consultation",
      question: "What happens during the initial site consultation?",
      answer:
        "The first discussion focuses on your plot, intended use, site access, known constraints, and project priorities. SVL reviews the information needed for the next stage of planning and identifies questions that may require drawings, approvals, or a detailed site visit. The exact consultation format and follow-up process should be confirmed with SVL.",
      category: "Consultation",
    },
    // TBD: Replace with real SVL Constructions scope definitions
    {
      id: "turnkey-vs-structural",
      question: "What is the difference between turnkey and structural scope?",
      answer:
        "Structural scope covers the building frame and related civil works needed to form the structure. Turnkey residential scope can extend through coordinated planning, civil execution, finishes, and interiors, subject to an agreed scope schedule. The final inclusions and responsibilities should be documented before execution.",
      category: "Scope",
    },
    // TBD: Replace with real SVL Constructions quality procedures
    {
      id: "quality-is-code-supervision",
      question: "How are quality and IS-code requirements supervised?",
      answer:
        "Relevant Indian Standards and project specifications guide structural planning and site work, with stage-wise quality checkpoints coordinated during execution. The project team should confirm the applicable codes, inspection points, material requirements, and documentation for each assignment before work begins.",
      category: "Quality",
    },
    // TBD: Replace with real SVL Constructions regional coordination details
    {
      id: "project-location-coordination",
      question: "Can one project approach cover Jammalamadugu, Shamshabad, and Khammam?",
      answer:
        "SVL is active in Jammalamadugu and Shamshabad and is preparing work in Khammam. A consistent process can align site assessment, scope, structural coordination, progress reviews, and handover requirements across locations. Site travel, local approvals, and local project-team arrangements should be confirmed for the individual assignment.",
      category: "Coordination",
    },
    // TBD: Replace with real SVL Constructions estimating method
    {
      id: "how-estimates-are-prepared",
      question: "How is a project estimate prepared?",
      answer:
        "An estimate normally begins with the proposed scope, available drawings or site measurements, construction method, material assumptions, and the project schedule. It should clearly separate included works, exclusions, provisional items, approvals, and client-supplied items. Scope changes or site conditions discovered later should be reviewed and agreed before any variation is treated as a cost.",
      category: "Estimates",
    },
    // TBD: Replace with real SVL Constructions joint-venture and commercial policies
    {
      id: "joint-venture-commercial-considerations",
      question:
        "What should landowners and commercial clients clarify before engagement?",
      answer:
        "Landowners should clarify land title and due-diligence requirements, development objectives, proposed use, permissions, scope responsibilities, and commercial terms. Commercial or institutional clients should confirm operational requirements, technical specifications, approvals, delivery sequence, and reporting needs. A formal project-specific agreement should define the approved scope and responsibilities.",
      category: "Project Planning",
    },
  ],
};
