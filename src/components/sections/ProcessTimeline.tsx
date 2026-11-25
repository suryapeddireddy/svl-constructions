"use client";

import { MotionConfig, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { CompanyProcessStep } from "@/types/company";

interface ProcessTimelineProps {
  steps: CompanyProcessStep[];
}

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <MotionConfig reducedMotion="user">
      <ol className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
        {steps.map((step, index) => (
          <motion.li
            key={step.stepNumber}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            className="relative"
          >
            {index < steps.length - 1 ? (
              <motion.span
                aria-hidden="true"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1 + 0.2,
                  ease: "easeOut",
                }}
                className="pointer-events-none absolute left-20 top-14 z-10 hidden h-px w-[calc(100%-1rem)] origin-left bg-brand/30 lg:block"
              />
            ) : null}

            <article className="flex h-full flex-col justify-between rounded-2xl border border-surface-border bg-base p-5 sm:p-6 lg:p-8">
              <div>
                <div className="relative z-20 flex size-12 items-center justify-center rounded-xl bg-brand-dim text-brand">
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
          </motion.li>
        ))}
      </ol>
    </MotionConfig>
  );
}
