import Image from "next/image";
import { company } from "@/data/company";
import HeroAudienceSelector from "@/components/sections/HeroAudienceSelector";

export default function HeroSection() {
  const { hero } = company;

  return (
    <section className="bg-base">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-20">
        <div className="flex flex-col items-start lg:col-span-7">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-brand sm:text-sm">
            {hero.eyebrow}
          </p>
          <h1 className="max-w-2xl font-display text-3xl font-semibold leading-[1.12] tracking-tight text-copy-primary sm:text-4xl lg:text-5xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-copy-secondary sm:text-lg sm:leading-8">
            {hero.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-brand px-5 py-3 text-sm font-semibold text-bg-base transition-colors hover:bg-brand/90"
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
        </div>

        <figure className="w-full lg:col-span-5">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-surface-border bg-surface">
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
