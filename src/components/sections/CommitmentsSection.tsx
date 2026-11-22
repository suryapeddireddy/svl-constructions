import {
  FileCheck2,
  HardHat,
  Ruler,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { company } from "@/data/company";
import type { CommitmentIconName } from "@/types/company";
import Reveal from "@/components/ui/Reveal";

const commitmentIcons: Record<CommitmentIconName, LucideIcon> = {
  ShieldCheck,
  Ruler,
  HardHat,
  FileCheck2,
};

export default function CommitmentsSection() {
  return (
    <section
      id="commitments"
      className="border-y border-surface-border bg-surface py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-brand sm:text-sm">
            Engineering Standards
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-copy-primary sm:text-4xl lg:text-5xl">
            Execution commitments built into every stage.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-copy-secondary">
            Disciplined structural, quality, safety, and communication practices
            provide a clear framework for coordinated construction.
          </p>
        </Reveal>

        <Reveal className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {company.commitments.map((commitment) => {
            const Icon = commitmentIcons[commitment.iconName];

            return (
              <article
                key={commitment.id}
                className="flex flex-col justify-between rounded-2xl border border-surface-border bg-base p-6"
              >
                <div>
                  <div className="flex size-12 items-center justify-center rounded-xl bg-brand-dim text-brand">
                    <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
                  </div>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-copy-muted">
                    {commitment.standardTag}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-copy-primary">
                    {commitment.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-copy-secondary">
                    {commitment.description}
                  </p>
                </div>
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
