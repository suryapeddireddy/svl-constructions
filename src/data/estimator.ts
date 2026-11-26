export const plotUnits = [
  { id: "sqYards", label: "Sq. Yards", squareFeetPerUnit: 9 },
  { id: "sqFeet", label: "Sq. Ft.", squareFeetPerUnit: 1 },
] as const;

export type PlotUnit = (typeof plotUnits)[number]["id"];

export const floorOptions = [
  { id: "G", label: "G", floors: 1 },
  { id: "G+1", label: "G+1", floors: 2 },
  { id: "G+2", label: "G+2", floors: 3 },
  { id: "G+3", label: "G+3", floors: 4 },
] as const;

export type FloorOption = (typeof floorOptions)[number]["id"];

export const specificationTiers = [
  {
    id: "essential",
    name: "Essential / Standard Turnkey",
    rateMin: 1850,
    rateMax: 2050,
    highlights: [
      "ISI-grade steel & cement",
      "Vitrified tile flooring",
      "Standard CPVC plumbing",
      "Modular switches & emulsion paint",
    ],
  },
  {
    id: "premium",
    name: "Premium Residential",
    rateMin: 2150,
    rateMax: 2450,
    highlights: [
      "Tata / JSW steel, OPC / PPC cement",
      "Premium vitrified / granite flooring",
      "Jaguar / Hindware sanitaryware",
      "UPVC windows, Birla putty + Royale finish",
    ],
  },
  {
    id: "luxury",
    name: "Luxury Villa Specification",
    rateMin: 2600,
    rateMax: 3000,
    highlights: [
      "Architectural elevation features",
      "Italian marble / engineered wood options",
      "Concealed plumbing & electrical",
      "Teakwood main door, insulation & custom waterproofing",
    ],
  },
] as const;

export type SpecificationTier = (typeof specificationTiers)[number]["id"];

export const siteWorkAddOns = [
  {
    id: "compound-wall",
    name: "Compound Wall & Main Gate",
    costMin: 450000,
    costMax: 750000,
    allowance: "Typical residential plot; varies with boundary length and gate design.",
  },
  {
    id: "water-tanks",
    name: "Underground Sump & Overhead Tank",
    costMin: 150000,
    costMax: 250000,
    allowance: "Allowance varies with storage capacity and site conditions.",
  },
  {
    id: "borewell-rainwater",
    name: "Borewell & Rainwater Harvesting Pit",
    costMin: 100000,
    costMax: 200000,
    allowance: "Borewell depth and local geology can materially change the cost.",
  },
] as const;

export const costStages = [
  { id: "structure", name: "Foundation & RCC Structure", share: 32 },
  {
    id: "masonry",
    name: "Brickwork, Plastering & Waterproofing",
    share: 18,
  },
  { id: "finishes", name: "Flooring, Doors & Windows", share: 20 },
  {
    id: "services",
    name: "Electrical, Plumbing & Sanitary",
    share: 15,
  },
  { id: "painting", name: "Painting, Elevation & Finishing", share: 15 },
] as const;

export const plotCoverageRatio = 0.75;

export interface EstimateSummary {
  builtUpArea: number;
  costMin: number;
  costMax: number;
  stageCosts: Array<{
    id: (typeof costStages)[number]["id"];
    name: string;
    share: number;
    costMin: number;
    costMax: number;
  }>;
}

export function calculateEstimate(
  plotAreaSquareFeet: number,
  floorOption: FloorOption,
  tierId: SpecificationTier,
  selectedAddOnIds: readonly string[],
): EstimateSummary {
  const tier = specificationTiers.find((item) => item.id === tierId);
  const floors = floorOptions.find((item) => item.id === floorOption);

  if (!tier || !floors || !Number.isFinite(plotAreaSquareFeet) || plotAreaSquareFeet <= 0) {
    throw new Error("A valid plot size, floor count, and specification tier are required.");
  }

  const builtUpArea =
    plotAreaSquareFeet * plotCoverageRatio * floors.floors;
  const selectedAddOns = siteWorkAddOns.filter((addOn) =>
    selectedAddOnIds.includes(addOn.id),
  );
  const addOnCostMin = selectedAddOns.reduce(
    (total, addOn) => total + addOn.costMin,
    0,
  );
  const addOnCostMax = selectedAddOns.reduce(
    (total, addOn) => total + addOn.costMax,
    0,
  );
  const costMin = builtUpArea * tier.rateMin + addOnCostMin;
  const costMax = builtUpArea * tier.rateMax + addOnCostMax;

  return {
    builtUpArea,
    costMin,
    costMax,
    stageCosts: costStages.map((stage) => ({
      ...stage,
      costMin: costMin * (stage.share / 100),
      costMax: costMax * (stage.share / 100),
    })),
  };
}
