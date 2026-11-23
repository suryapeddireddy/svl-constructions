import ProjectFilterGrid from "@/components/sections/ProjectFilterGrid";
import { company } from "@/data/company";
import Reveal from "@/components/ui/Reveal";

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-base py-14 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 max-w-2xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-brand sm:text-sm">
            Selected Portfolio
          </p>
          <h2 className="font-display text-2xl font-semibold leading-tight tracking-tight text-copy-primary sm:text-3xl lg:text-4xl">
            A portfolio shaped by purposeful delivery.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-copy-secondary">
            Explore a selection of residential, commercial, and industrial work.
            Project details are marked for verification where information is
            still being confirmed.
          </p>
        </Reveal>

        <Reveal>
          <ProjectFilterGrid projects={company.projects} />
        </Reveal>
      </div>
    </section>
  );
}
