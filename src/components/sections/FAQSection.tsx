import { ArrowUpRight } from "lucide-react";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { company } from "@/data/company";
import Reveal from "@/components/ui/Reveal";

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="border-t border-surface-border bg-surface py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <Reveal className="lg:col-span-4 lg:self-start lg:sticky lg:top-28">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-brand sm:text-sm">
            COMMON QUESTIONS
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-copy-primary sm:text-4xl">
            Answers for a clearer project path.
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-copy-secondary">
            Understand the consultation, scope, quality, coordination, and
            estimate process before you decide on the next step.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-copy-primary"
          >
            Still have a specific plot or project question?
            <ArrowUpRight
              aria-hidden="true"
              className="size-4"
              strokeWidth={1.8}
            />
          </a>
        </Reveal>

        <Reveal className="lg:col-span-8">
          <FAQAccordion items={company.faqs} />
        </Reveal>
      </div>
    </section>
  );
}
