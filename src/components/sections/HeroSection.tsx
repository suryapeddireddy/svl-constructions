import Image from "next/image";
import { company } from "@/data/company";
import HeroAudienceSelector from "@/components/sections/HeroAudienceSelector";
import Reveal from "@/components/ui/Reveal";

export default function HeroSection() {
  const { hero } = company;

  return (
    <section className="bg-base">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8 lg:py-24">
        <Reveal className="flex flex-col items-start">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-brand sm:text-sm">
            {hero.eyebrow}
          </p>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-[1.12] tracking-tight text-copy-primary sm:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-copy-secondary sm:text-lg sm:leading-8">
            {hero.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-brand px-5 py-3 text-sm font-semibold text-copy-primary transition-colors hover:bg-brand/90"
            >
              Request a Consultation
            </a>
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-surface-border bg-base px-5 py-3 text-sm font-semibold text-copy-primary transition-colors hover:bg-surface"
            >
              Explore Projects
            </a>
          </div>
          <div className="mt-9 w-full max-w-2xl">
            <HeroAudienceSelector />
          </div>
        </Reveal>

        <figure className="w-full">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-surface-border bg-surface sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src={hero.imageUrl}
              alt={hero.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 text-xs tracking-wide text-copy-muted">
            {hero.imageCaption}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
