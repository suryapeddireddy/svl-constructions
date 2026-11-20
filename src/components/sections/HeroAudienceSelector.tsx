"use client";

import { useState } from "react";

const audiences = [
  { value: "homeowner", label: "Homeowner" },
  { value: "joint-venture", label: "Landowner — Joint Venture" },
  { value: "commercial-industrial", label: "Commercial / Industrial" },
] as const;

type Audience = (typeof audiences)[number]["value"];

export default function HeroAudienceSelector() {
  const [selectedAudience, setSelectedAudience] =
    useState<Audience>("homeowner");

  function requestConsultation() {
    const url = new URL(window.location.href);
    url.searchParams.set("audience", selectedAudience);
    url.hash = "contact";
    window.history.pushState(null, "", `${url.pathname}${url.search}${url.hash}`);

    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="rounded-xl border border-surface-border bg-surface p-4 sm:p-5">
      <p className="mb-3 text-sm font-semibold text-copy-primary">
        Who are you building for?
      </p>
      <div
        aria-label="Choose your project type"
        className="grid gap-2 sm:grid-cols-3"
        role="group"
      >
        {audiences.map((audience) => {
          const isSelected = selectedAudience === audience.value;

          return (
            <button
              key={audience.value}
              type="button"
              aria-pressed={isSelected}
              onClick={() => setSelectedAudience(audience.value)}
              className={`min-h-11 rounded-lg border px-3 py-2 text-left text-sm font-medium transition-colors ${
                isSelected
                  ? "border-brand bg-brand-dim text-brand"
                  : "border-surface-border bg-surface text-copy-secondary hover:bg-elevated"
              }`}
            >
              {audience.label}
            </button>
          );
        })}
      </div>
      <button
        type="button"
        onClick={requestConsultation}
        className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-brand px-5 py-3 text-sm font-semibold text-copy-primary transition-colors hover:bg-brand/90 sm:w-auto"
      >
        Request a Consultation
      </button>
    </div>
  );
}
