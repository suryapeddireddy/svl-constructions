import Image from "next/image";
import { Building2, Compass, MapPin } from "lucide-react";
import { company } from "@/data/company";
import type { AboutIconName } from "@/types/company";
import Reveal from "@/components/ui/Reveal";

function PillarIcon({ name }: { name: AboutIconName }) {
  if (name === "Building2") {
    return <Building2 aria-hidden="true" className="size-5" strokeWidth={1.8} />;
  }

  if (name === "MapPin") {
    return <MapPin aria-hidden="true" className="size-5" strokeWidth={1.8} />;
  }

  return <Compass aria-hidden="true" className="size-5" strokeWidth={1.8} />;
}

export default function AboutSection() {
  const { about } = company;

  return (
    <section id="about" className="bg-base py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <figure className="overflow-hidden rounded-2xl border border-surface-border bg-surface">
            <div className="relative aspect-[4/3] overflow-hidden bg-elevated">
              <Image
                src="/images/hero/hero-architecture.jpg"
                alt="Architectural structure representing SVL Constructions engineering expertise"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="border-t border-surface-border px-5 py-3 text-xs text-copy-muted">
              Engineering-led residential and institutional execution
            </figcaption>
          </figure>

          <div className="mt-6 rounded-2xl border border-surface-border bg-surface p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
              SVL Milestones
            </p>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <p className="font-display text-xl font-semibold leading-snug text-copy-primary">
                  {about.experienceLabel}
                </p>
                <p className="mt-2 text-sm text-copy-secondary">
                  {about.foundedLabel}
                </p>
              </div>
              <div className="sm:border-l sm:border-surface-border sm:pl-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-copy-muted">
                  Regional Footprint
                </p>
                <p className="mt-2 text-sm font-medium leading-6 text-copy-secondary">
                  {about.regionalFootprint}
                </p>
              </div>
            </div>
            <p className="mt-5 border-t border-surface-border pt-5 text-sm font-semibold text-copy-primary">
              {about.upcomingProjectsLabel}
            </p>
          </div>
        </Reveal>

        <Reveal>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-brand sm:text-sm">
            {about.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-copy-primary sm:text-4xl lg:text-5xl">
            {about.headline}
          </h2>
          <div className="mt-6 space-y-5">
            {about.narrative.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-7 text-copy-secondary sm:text-lg sm:leading-8"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            {about.pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="flex items-start gap-4 rounded-2xl border border-surface-border bg-surface p-5"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-dim text-brand">
                  <PillarIcon name={pillar.iconName} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-copy-primary">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-copy-secondary">
                    {pillar.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
