import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { company } from "@/data/company";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-base py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-brand sm:text-sm">
            Core Capabilities
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-copy-primary sm:text-4xl lg:text-5xl">
            Construction expertise across every scale.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-copy-secondary">
            From private homes to commercial, industrial, and land development
            work, our capabilities are structured around clear scope and
            coordinated execution.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {company.services.map((service) => (
            <article
              key={service.id}
              className="flex flex-col justify-between overflow-hidden rounded-2xl border border-surface-border bg-surface transition-colors hover:border-brand/50"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden border-b border-surface-border bg-elevated">
                  <Image
                    src={service.imageUrl}
                    alt={service.imageAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-6 sm:p-8">
                  {service.audienceTag && (
                    <p className="mb-4 inline-flex rounded-full bg-brand-dim px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-brand">
                      {service.audienceTag}
                    </p>
                  )}
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-copy-primary sm:text-[1.75rem]">
                    {service.title}
                  </h3>
                  {service.subtitle && (
                    <p className="mt-2 text-sm font-medium text-copy-secondary">
                      {service.subtitle}
                    </p>
                  )}
                  <p className="mt-4 text-sm leading-6 text-copy-secondary sm:text-base sm:leading-7">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {service.deliverables.map((deliverable) => (
                      <li
                        key={deliverable}
                        className="flex items-start gap-3 text-sm leading-6 text-copy-primary"
                      >
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-dim text-brand">
                          <Check aria-hidden="true" className="size-3.5" strokeWidth={2} />
                        </span>
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-copy-primary transition-colors hover:text-brand"
                >
                  Discuss this scope
                  <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={2} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
