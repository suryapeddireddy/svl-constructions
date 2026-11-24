import { company } from "@/data/company";

interface BrandLogoProps {
  showTagline?: boolean;
  className?: string;
}

export default function BrandLogo({
  showTagline = false,
  className,
}: BrandLogoProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      role="img"
      viewBox={showTagline ? "0 0 360 124" : "0 0 360 104"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="5"
        y="68"
        fill="currentColor"
        fontFamily="var(--font-heading), sans-serif"
        fontSize="82"
        fontWeight="900"
        letterSpacing="-8"
      >
        SVL
      </text>
      <g
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeWidth="3"
      >
        <path d="M199 68V43l8 5v20M214 68V28l9 7v33M231 68V43l8 5v20" />
        <path d="M250 67V38l8 5v24" />
      </g>
      <path
        className="stroke-brand-secondary"
        d="M126 54C156 12 217 3 258 21c22 10 29 24 16 41"
        strokeLinecap="round"
        strokeWidth="7"
      />
      <path
        className="stroke-brand"
        d="M260 69c18-8 29-19 34-32M268 76c19-8 32-19 38-32"
        strokeLinecap="round"
        strokeWidth="4"
      />
      {showTagline ? (
        <text
          x="7"
          y="90"
          fill="currentColor"
          fontFamily="var(--font-heading), sans-serif"
          fontSize="13"
          fontStyle="italic"
          fontWeight="800"
          letterSpacing="1.2"
        >
          {company.tagline}
        </text>
      ) : null}
      <text
        x="7"
        y={showTagline ? "116" : "98"}
        fill="currentColor"
        fontFamily="var(--font-heading), sans-serif"
        fontSize="17"
        fontWeight="800"
        letterSpacing="2.6"
      >
        SVL CONSTRUCTIONS
      </text>
    </svg>
  );
}
