import { company } from "@/data/company";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import Reveal from "@/components/ui/Reveal";

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="border-y border-surface-border bg-surface py-14 sm:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-brand sm:text-sm">
            HOW WE WORK
          </p>
          <h2 className="font-display text-2xl font-semibold leading-tight tracking-tight text-copy-primary sm:text-3xl lg:text-4xl">
            A clear path from first conversation to handover.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-copy-secondary">
            A coordinated four-stage journey keeps planning, execution,
            inspection, and finishing aligned across the project.
          </p>
        </Reveal>

        <ProcessTimeline steps={company.processSteps} />
      </div>
    </section>
  );
}
