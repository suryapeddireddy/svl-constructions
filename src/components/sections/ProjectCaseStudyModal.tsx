"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import {
  CheckCircle2,
  Circle,
  MapPin,
  MessageCircle,
  X,
} from "lucide-react";
import type {
  CompanyProject,
  ProjectProgressStatus,
} from "@/types/company";

interface ProjectCaseStudyModalProps {
  project: CompanyProject;
  onClose: () => void;
}

const progressStages = [
  "Foundation & Plinth",
  "RCC Columns & Slab Casting",
  "Brickwork, Plastering & MEP",
  "Elevation & Interior Finishing",
];

function getStatusStyle(status: ProjectProgressStatus) {
  if (status === "Completed") {
    return "bg-brand-dim text-brand";
  }
  if (status === "In Progress") {
    return "border border-brand/40 bg-base text-brand";
  }
  return "bg-elevated text-copy-muted";
}

export default function ProjectCaseStudyModal({
  project,
  onClose,
}: ProjectCaseStudyModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const activeImage = project.gallery[activeImageIndex];
  const whatsappMessage = `Hello P. Srinivasula Reddy, I would like to discuss a project similar to ${project.title} in ${project.location}.`;
  const whatsappHref = `https://wa.me/918008696864?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus();
      }
    };
  }, []);

  function handleDialogKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }
    if (event.key !== "Tab" || !dialogRef.current) {
      return;
    }

    const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement?.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement?.focus();
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand/40 p-2 backdrop-blur-sm sm:p-5"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-case-study-title"
        onKeyDown={handleDialogKeyDown}
        className="relative max-h-[90dvh] w-full max-w-5xl overflow-y-auto overscroll-contain rounded-2xl border border-surface-border bg-base shadow-2xl"
      >
        <header className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-surface-border bg-base/95 px-4 py-4 backdrop-blur sm:px-7">
          <div className="min-w-0">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-elevated px-3 py-1 text-xs font-medium text-copy-secondary">
                <MapPin aria-hidden="true" className="size-3.5" />
                {project.location}
              </span>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  project.status === "Ongoing"
                    ? "bg-brand-dim text-brand"
                    : project.status === "Completed"
                      ? "border border-surface-border bg-surface text-copy-primary"
                      : "bg-elevated text-copy-muted"
                }`}
              >
                {project.status}
              </span>
            </div>
            <h2
              id="project-case-study-title"
              className="font-display text-xl font-semibold leading-tight text-copy-primary sm:text-2xl"
            >
              {project.title}
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close project case study"
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-surface-border bg-surface text-copy-secondary transition-colors hover:bg-elevated hover:text-copy-primary"
          >
            <X aria-hidden="true" className="size-5" />
          </button>
        </header>

        <div className="space-y-7 p-4 sm:space-y-9 sm:p-7">
          <section aria-label="Project photo gallery">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-surface-border bg-elevated sm:aspect-[2/1]">
              {activeImage ? (
                <Image
                  src={activeImage.src}
                  alt={activeImage.caption}
                  fill
                  priority
                  sizes="(min-width: 1024px) 900px, 100vw"
                  className="object-cover"
                />
              ) : null}
              {activeImage ? (
                <>
                  <span className="absolute left-3 top-3 rounded-full bg-base/95 px-3 py-1.5 text-xs font-semibold text-copy-primary sm:left-4 sm:top-4">
                    {activeImage.stage}
                  </span>
                  <p className="absolute inset-x-0 bottom-0 bg-brand/90 px-4 py-3 text-sm text-base">
                    {activeImage.caption}
                  </p>
                </>
              ) : null}
            </div>
            {project.gallery.length > 1 ? (
              <div
                className="mt-3 flex flex-wrap gap-2"
                aria-label="Choose a project photo"
              >
                {project.gallery.map((image, index) => (
                  <button
                    key={`${image.src}-${image.stage}`}
                    type="button"
                    aria-pressed={activeImageIndex === index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                      activeImageIndex === index
                        ? "border-brand bg-brand-dim text-brand"
                        : "border-surface-border bg-surface text-copy-secondary hover:border-brand/50"
                    }`}
                  >
                    {image.stage}
                  </button>
                ))}
              </div>
            ) : null}
          </section>

          <div className="grid gap-7 md:grid-cols-2 md:gap-9">
            <section aria-labelledby="project-scope-heading">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                {project.clientType}
              </p>
              <h3
                id="project-scope-heading"
                className="font-display text-lg font-semibold text-copy-primary"
              >
                Engineering Scope
              </h3>
              <p className="mt-2 text-sm leading-6 text-copy-secondary">
                {project.scopeSummary}
              </p>
              <h4 className="mt-6 text-sm font-semibold text-copy-primary">
                Structural Specifications
              </h4>
              <ul className="mt-3 space-y-3">
                {project.structuralSpecs.map((specification) => (
                  <li
                    key={specification}
                    className="flex items-start gap-2.5 text-sm leading-6 text-copy-secondary"
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-1 size-4 shrink-0 text-brand"
                    />
                    <span>{specification}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="project-progress-heading">
              <h3
                id="project-progress-heading"
                className="font-display text-lg font-semibold text-copy-primary"
              >
                Site Progress
              </h3>
              <ol className="mt-4 space-y-0">
                {progressStages.map((stage, index) => {
                  const progress = project.progressTimeline.find(
                    (item) => item.stage === stage,
                  );
                  if (!progress) {
                    return null;
                  }
                  const isComplete = progress.status === "Completed";
                  const StageIcon = isComplete ? CheckCircle2 : Circle;

                  return (
                    <li key={stage} className="relative flex gap-3 pb-5 last:pb-0">
                      {index < progressStages.length - 1 ? (
                        <span
                          aria-hidden="true"
                          className="absolute left-[0.4375rem] top-5 h-full w-px bg-surface-border"
                        />
                      ) : null}
                      <StageIcon
                        aria-hidden="true"
                        className={`relative z-[1] mt-0.5 size-4 shrink-0 ${
                          isComplete
                            ? "text-brand"
                            : progress.status === "In Progress"
                              ? "fill-brand-dim text-brand"
                              : "text-copy-muted"
                        }`}
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="text-sm font-semibold text-copy-primary">
                            {stage}
                          </h4>
                          <span
                            className={`rounded-full px-2.5 py-1 text-[0.65rem] font-semibold ${getStatusStyle(progress.status)}`}
                          >
                            {progress.status}
                          </span>
                        </div>
                        <p className="mt-1 text-xs leading-5 text-copy-muted">
                          {progress.note}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </section>
          </div>
        </div>

        <footer className="sticky bottom-0 border-t border-surface-border bg-base/95 p-4 backdrop-blur sm:px-7">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-center text-sm font-semibold text-base transition-colors hover:bg-brand-secondary sm:w-auto"
          >
            <MessageCircle aria-hidden="true" className="size-4" />
            Discuss a Similar Project on WhatsApp
          </a>
        </footer>
      </div>
    </div>
  );
}
