import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import ConsultationForm from "@/components/sections/ConsultationForm";
import { company } from "@/data/company";
import Reveal from "@/components/ui/Reveal";

export default function ContactSection() {
  const { contact } = company;

  return (
    <section
      id="contact"
      className="border-t border-surface-border bg-base py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
        <Reveal className="lg:col-span-5">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-brand sm:text-sm">
            START A CONVERSATION
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-copy-primary sm:text-4xl lg:text-5xl">
            A considered first step for your next project.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-copy-secondary">
            Tell us about your site, plans, or project requirements. We welcome
            residential, land development, and commercial conversations.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <a
              href={contact.phoneHref}
              className="rounded-2xl border border-surface-border bg-surface p-6 transition-colors hover:border-brand/50"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-brand-dim text-brand">
                <Phone aria-hidden="true" className="size-5" strokeWidth={1.8} />
              </span>
              <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.14em] text-copy-muted">
                Direct Phone
              </span>
              <span className="mt-1 block font-display text-lg font-semibold text-copy-primary">
                {contact.phone}
              </span>
            </a>

            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-surface-border bg-surface p-6 transition-colors hover:border-brand/50"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-brand-dim text-brand">
                <MessageCircle
                  aria-hidden="true"
                  className="size-5"
                  strokeWidth={1.8}
                />
              </span>
              <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.14em] text-copy-muted">
                WhatsApp Desk
              </span>
              <span className="mt-1 block font-display text-lg font-semibold text-copy-primary">
                {contact.whatsappNumber}
              </span>
            </a>

            <a
              href={`mailto:${contact.email}`}
              className="rounded-2xl border border-surface-border bg-surface p-6 transition-colors hover:border-brand/50"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-brand-dim text-brand">
                <Mail aria-hidden="true" className="size-5" strokeWidth={1.8} />
              </span>
              <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.14em] text-copy-muted">
                Email
              </span>
              <span className="mt-1 block break-all font-display text-lg font-semibold text-copy-primary">
                {contact.email}
              </span>
            </a>

            <div className="rounded-2xl border border-surface-border bg-surface p-6">
              <span className="flex size-10 items-center justify-center rounded-full bg-brand-dim text-brand">
                <MapPin aria-hidden="true" className="size-5" strokeWidth={1.8} />
              </span>
              <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.14em] text-copy-muted">
                Active Operating Regions
              </span>
              <span className="mt-1 block font-display text-lg font-semibold text-copy-primary">
                {contact.serviceRegions.join(" • ")}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7">
          <ConsultationForm />
        </Reveal>
      </div>
    </section>
  );
}
