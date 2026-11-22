import { company } from "@/data/company";
import Reveal from "@/components/ui/Reveal";

const metrics = [
  { label: "Years of Experience", value: company.stats.yearsExperience },
  { label: "SVL Constructions Founded", value: company.stats.foundedYear },
  { label: "Institutional & Residential Execution", value: company.stats.activeCompletedProjects },
  { label: "Expanding into Khammam", value: company.stats.upcomingProjects },
];

export default function CredibilityStrip() {
  return (
    <section
      aria-label="Track record and engineering credibility"
      className="border-y border-surface-border bg-surface"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="grid grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => {
            const isPlaceholder = metric.value === "TBD";
            const separatorClass =
              index === 1
                ? "border-l border-surface-border"
                : index === 2
                  ? "border-t border-surface-border lg:border-l lg:border-t-0"
                  : index === 3
                    ? "border-l border-t border-surface-border lg:border-t-0"
                    : "";

            return (
              <article
                key={metric.label}
                className={`px-5 py-6 sm:px-8 sm:py-8 ${separatorClass}`}
              >
                <div className="flex items-center gap-2">
                  <p className="font-display text-3xl font-semibold tracking-tight text-copy-primary sm:text-4xl">
                    {metric.value}
                  </p>
                  {isPlaceholder && (
                    <span className="rounded-full bg-brand-dim px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-brand">
                      TBD
                    </span>
                  )}
                </div>
                <p className="mt-2 font-sans text-sm font-medium text-copy-secondary">
                  {metric.label}
                </p>
              </article>
            );
          })}
        </Reveal>
        <p className="border-t border-surface-border py-3 font-sans text-xs leading-5 text-copy-muted">
          Verified leadership, founding, project, and expansion details.
        </p>
      </div>
    </section>
  );
}
