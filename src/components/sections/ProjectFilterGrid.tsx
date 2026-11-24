"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Layers, MapPin, Maximize2 } from "lucide-react";
import { useState } from "react";
import type { CompanyProject, ProjectStatus } from "@/types/company";

type ProjectFilter = "All" | ProjectStatus;

const filters: ProjectFilter[] = ["All", "Ongoing", "Completed"];

interface ProjectFilterGridProps {
  projects: CompanyProject[];
}

export default function ProjectFilterGrid({
  projects,
}: ProjectFilterGridProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.status === activeFilter);

  return (
    <div>
      <div
        aria-label="Filter projects by status"
        className="mb-10 flex flex-wrap gap-3"
        role="group"
      >
        {filters.map((filter) => {
          const count =
            filter === "All"
              ? projects.length
              : projects.filter((project) => project.status === filter).length;
          const isActive = activeFilter === filter;

          return (
            <button
              key={filter}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveFilter(filter)}
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                isActive
                  ? "border-brand bg-brand text-bg-base"
                  : "border-surface-border bg-surface text-copy-secondary hover:border-brand/50 hover:text-copy-primary"
              }`}
            >
              {filter}
              <span
                className={`rounded-full px-2 py-0.5 text-xs ${
                  isActive
                    ? "bg-base/70 text-copy-primary"
                    : "bg-elevated text-copy-muted"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="flex flex-col justify-between overflow-hidden rounded-2xl border border-surface-border bg-surface transition-colors hover:border-brand/50"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden border-b border-surface-border bg-elevated">
                  <Image
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-xs font-semibold ${
                      project.status === "Ongoing"
                        ? "bg-brand-dim text-brand"
                        : "border border-surface-border bg-base text-copy-primary"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="p-5 sm:p-6 lg:p-8">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                    {project.category}
                  </p>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-copy-primary">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="mt-1 size-5 shrink-0 text-copy-muted"
                      strokeWidth={1.8}
                    />
                  </div>

                  <dl className="mt-6 space-y-4 border-t border-surface-border pt-5">
                    <div className="flex items-start gap-3">
                      <MapPin
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-copy-muted"
                        strokeWidth={1.8}
                      />
                      <div className="flex flex-1 items-baseline justify-between gap-3">
                        <dt className="text-sm text-copy-muted">Location</dt>
                        <dd className="text-right text-sm text-copy-secondary">
                          {project.location}
                        </dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Maximize2
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-copy-muted"
                        strokeWidth={1.8}
                      />
                      <div className="flex flex-1 items-baseline justify-between gap-3">
                        <dt className="text-sm text-copy-muted">
                          Built-Up Area
                        </dt>
                        <dd className="text-right text-sm text-copy-secondary">
                          {project.builtUpArea === "TBD" ? (
                            <span className="inline-flex rounded-full bg-brand-dim px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-brand">
                              TBD
                            </span>
                          ) : (
                            project.builtUpArea
                          )}
                        </dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Layers
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-copy-muted"
                        strokeWidth={1.8}
                      />
                      <div className="flex flex-1 items-baseline justify-between gap-3">
                        <dt className="text-sm text-copy-muted">Scope</dt>
                        <dd className="text-right text-sm text-copy-secondary">
                          {project.scope}
                        </dd>
                      </div>
                    </div>
                  </dl>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
