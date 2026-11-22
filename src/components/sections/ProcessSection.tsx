import { CheckCircle2 } from "lucide-react";
import { company } from "@/data/company";
import Reveal from "@/components/ui/Reveal";

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="border-y border-surface-border bg-surface py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-brand sm:text-sm">
            HOW WE WORK
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-copy-primary sm:text-4xl lg:text-5xl">
            A clear path from first conversation to handover.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-copy-secondary">
            A coordinated four-stage journey keeps planning, execution,
            inspection, and finishing aligned across the project.
          </p>
        </Reveal>

        <Reveal className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {company.processSteps.map((step) => (
            <article
              key={step.stepNumber}
              className="flex flex-col justify-between rounded-2xl border border-surface-border bg-base p-6"
            >
              <div>
                <div className="flex size-12 items-center justify-center rounded-xl bg-brand-dim text-brand">
                  <span className="font-semibold">{step.stepNumber}</span>
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-copy-muted">
                  {step.phaseLabel}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-copy-primary">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-copy-secondary">
                  {step.description}
                </p>
              </div>

              <ul className="mt-6 space-y-3">
                {step.keyOutputs.map((output) => (
                  <li
                    key={output}
                    className="flex items-start gap-2 text-sm leading-5 text-copy-secondary"
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-brand"
                      strokeWidth={1.8}
                    />
                    <span>{output}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
