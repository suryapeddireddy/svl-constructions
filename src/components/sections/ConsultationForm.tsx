"use client";

import { CheckCircle2, MessageCircle, Phone, Send } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { company } from "@/data/company";

const audiences = [
  {
    value: "homeowner",
    label: "Homeowner — Residential / Villa",
  },
  {
    value: "joint-venture",
    label: "Landowner — Joint Venture",
  },
  {
    value: "commercial-industrial",
    label: "Commercial / Institutional",
  },
] as const;

type Audience = (typeof audiences)[number]["value"];

interface InquirySummary {
  audience: string;
  name: string;
  phone: string;
  location: string;
  scope: string;
  whatsappHref: string;
}

function isAudience(value: unknown): value is Audience {
  return audiences.some((audience) => audience.value === value);
}

function getAudienceFromLocation(): Audience | null {
  const searchAudience = new URLSearchParams(window.location.search).get(
    "audience",
  );
  const hashAudience = new URLSearchParams(
    window.location.hash.replace(/^#/, ""),
  ).get("audience");
  const audience = searchAudience ?? hashAudience;

  return isAudience(audience) ? audience : null;
}

export default function ConsultationForm() {
  const [selectedAudience, setSelectedAudience] =
    useState<Audience>("homeowner");
  const [submittedInquiry, setSubmittedInquiry] =
    useState<InquirySummary | null>(null);
  const [validationError, setValidationError] = useState("");

  useEffect(() => {
    function syncAudienceFromLocation() {
      const audience = getAudienceFromLocation();
      if (audience) setSelectedAudience(audience);
    }

    function handleAudienceChange(event: Event) {
      if (event instanceof CustomEvent && isAudience(event.detail)) {
        setSelectedAudience(event.detail);
      }
    }

    syncAudienceFromLocation();
    window.addEventListener("popstate", syncAudienceFromLocation);
    window.addEventListener("hashchange", syncAudienceFromLocation);
    window.addEventListener("svl:audience-change", handleAudienceChange);

    return () => {
      window.removeEventListener("popstate", syncAudienceFromLocation);
      window.removeEventListener("hashchange", syncAudienceFromLocation);
      window.removeEventListener("svl:audience-change", handleAudienceChange);
    };
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setValidationError("");

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("fullName") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const location = String(formData.get("location") ?? "").trim();
    const scope = String(formData.get("scope") ?? "").trim();

    if (!name || !phone || !location) {
      setValidationError("Please complete your name, phone number, and site location.");
      return;
    }

    if (!/^\+?[0-9\s()-]{7,20}$/.test(phone) || phone.replace(/\D/g, "").length < 7) {
      setValidationError("Enter a valid phone or WhatsApp number.");
      return;
    }

    const selectedLabel =
      audiences.find((audience) => audience.value === selectedAudience)?.label ??
      audiences[0].label;
    const inquiryDetails = [
      "Hello SVL Constructions, I would like to discuss a project.",
      `Project type: ${selectedLabel}`,
      `Name: ${name}`,
      `Phone / WhatsApp: ${phone}`,
      `Plot / site location: ${location}`,
      scope ? `Brief scope: ${scope}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    const whatsappUrl = new URL(company.contact.whatsappHref);
    whatsappUrl.searchParams.set("text", inquiryDetails);

    setSubmittedInquiry({
      audience: selectedLabel,
      name,
      phone,
      location,
      scope,
      whatsappHref: whatsappUrl.toString(),
    });
  }

  if (submittedInquiry) {
    return (
      <div
        aria-live="polite"
        className="w-full rounded-2xl border border-surface-border bg-surface p-5 sm:p-6 lg:p-8"
      >
        <div className="flex size-12 items-center justify-center rounded-full bg-brand-dim text-brand">
          <CheckCircle2 aria-hidden="true" className="size-6" strokeWidth={1.8} />
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-copy-primary">
          Your inquiry is ready to send.
        </h3>
        <p className="mt-2 leading-7 text-copy-secondary">
          Review your details, then continue the conversation on WhatsApp.
        </p>

        <dl className="mt-6 grid gap-4 border-y border-surface-border py-5 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-copy-muted">Project type</dt>
            <dd className="mt-1 font-medium text-copy-primary">
              {submittedInquiry.audience}
            </dd>
          </div>
          <div>
            <dt className="text-copy-muted">Full name</dt>
            <dd className="mt-1 font-medium text-copy-primary">
              {submittedInquiry.name}
            </dd>
          </div>
          <div>
            <dt className="text-copy-muted">Phone / WhatsApp</dt>
            <dd className="mt-1 font-medium text-copy-primary">
              {submittedInquiry.phone}
            </dd>
          </div>
          <div>
            <dt className="text-copy-muted">Plot / site location</dt>
            <dd className="mt-1 font-medium text-copy-primary">
              {submittedInquiry.location}
            </dd>
          </div>
          {submittedInquiry.scope ? (
            <div className="sm:col-span-2">
              <dt className="text-copy-muted">Brief scope note</dt>
              <dd className="mt-1 whitespace-pre-wrap font-medium text-copy-primary">
                {submittedInquiry.scope}
              </dd>
            </div>
          ) : null}
        </dl>

        <a
          href={submittedInquiry.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-copy-primary transition-colors hover:bg-brand/90 sm:w-auto"
        >
          <MessageCircle aria-hidden="true" className="size-4" strokeWidth={1.8} />
          Continue on WhatsApp
        </a>
        <button
          type="button"
          onClick={() => setSubmittedInquiry(null)}
          className="mt-4 block text-sm font-medium text-copy-secondary underline-offset-4 transition-colors hover:text-copy-primary hover:underline"
        >
          Edit inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="w-full rounded-2xl border border-surface-border bg-surface p-5 sm:p-6 lg:p-8"
    >
      <div className="mb-7">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
          CONSULTATION FORM
        </p>
        <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-copy-primary sm:text-3xl">
          Tell us what you&apos;re planning.
        </h3>
        <p className="mt-2 text-sm leading-6 text-copy-secondary">
          Share a few details to start a conversation about your project.
        </p>
      </div>

      <fieldset>
        <legend className="mb-3 text-sm font-medium text-copy-primary">
          Client / Project Type
        </legend>
        <div className="grid gap-2">
          {audiences.map((audience) => {
            const isSelected = selectedAudience === audience.value;

            return (
              <button
                key={audience.value}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedAudience(audience.value)}
                className={`min-h-11 rounded-lg border px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                  isSelected
                    ? "border-brand bg-brand-dim text-brand"
                    : "border-surface-border bg-base text-copy-secondary hover:bg-elevated"
                }`}
              >
                {audience.label}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="consultation-name"
            className="mb-2 block text-sm font-medium text-copy-primary"
          >
            Full Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="consultation-name"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            className="min-h-12 w-full rounded-lg border border-surface-border bg-base px-4 py-3 text-sm text-copy-primary outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </div>
        <div>
          <label
            htmlFor="consultation-phone"
            className="mb-2 block text-sm font-medium text-copy-primary"
          >
            Phone / WhatsApp Number <span aria-hidden="true">*</span>
          </label>
          <input
            id="consultation-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            pattern="\+?[0-9\s()-]{7,20}"
            title="Use 7 to 20 digits, with optional spaces, parentheses, hyphens, or a leading plus sign."
            required
            className="min-h-12 w-full rounded-lg border border-surface-border bg-base px-4 py-3 text-sm text-copy-primary outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="consultation-location"
            className="mb-2 block text-sm font-medium text-copy-primary"
          >
            Plot / Site Location <span aria-hidden="true">*</span>
          </label>
          <input
            id="consultation-location"
            name="location"
            type="text"
            autoComplete="address-level2"
            placeholder="e.g., Shamshabad, Hyderabad, Jammalamadugu, Khammam"
            required
            className="min-h-12 w-full rounded-lg border border-surface-border bg-base px-4 py-3 text-sm text-copy-primary outline-none transition placeholder:text-copy-muted focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="consultation-scope"
            className="mb-2 block text-sm font-medium text-copy-primary"
          >
            Brief Scope Note <span className="text-copy-muted">(optional)</span>
          </label>
          <textarea
            id="consultation-scope"
            name="scope"
            rows={3}
            maxLength={500}
            placeholder="A short note about your project or what you have in mind."
            className="w-full resize-y rounded-lg border border-surface-border bg-base px-4 py-3 text-sm leading-6 text-copy-primary outline-none transition placeholder:text-copy-muted focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </div>
      </div>

      {validationError ? (
        <p role="alert" className="mt-4 text-sm font-medium text-copy-primary">
          {validationError}
        </p>
      ) : null}

      <div className="mt-6 flex flex-col gap-4 border-t border-surface-border pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-copy-muted">
          Or reach us directly:
          <span className="mt-2 flex flex-wrap gap-4">
            <a
              href={company.contact.phoneHref}
              className="inline-flex items-center gap-1.5 font-medium text-copy-secondary hover:text-copy-primary"
            >
              <Phone aria-hidden="true" className="size-3.5" strokeWidth={1.8} />
              Call
            </a>
            <a
              href={company.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-copy-secondary hover:text-copy-primary"
            >
              <MessageCircle
                aria-hidden="true"
                className="size-3.5"
                strokeWidth={1.8}
              />
              WhatsApp
            </a>
          </span>
        </p>
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-copy-primary transition-colors hover:bg-brand/90"
        >
          Prepare inquiry
          <Send aria-hidden="true" className="size-4" strokeWidth={1.8} />
        </button>
      </div>
    </form>
  );
}
