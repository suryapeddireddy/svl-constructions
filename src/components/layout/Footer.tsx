import Link from "next/link";
import { company } from "@/data/company";
import BrandLogo from "@/components/ui/BrandLogo";

const footerLinks = [
  ...company.navigation,
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const { contact, leadership } = company;

  return (
    <footer className="bg-dark pt-12 pb-8 text-bg-base">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 border-b border-bg-base/15 pb-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bg-base/80">
              BUILD WITH CLARITY
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Start a conversation about your project.
            </h2>
          </div>
          <Link
            href="#contact"
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-md bg-brand px-5 py-3 text-sm font-semibold text-bg-base transition-colors hover:bg-brand/90"
          >
            Request a consultation
          </Link>
        </div>

        <div className="grid gap-10 py-10 md:grid-cols-12 lg:gap-12">
          <div className="md:col-span-5">
            <Link
              href="/"
              aria-label="SVL Constructions home"
              className="inline-flex"
            >
              <BrandLogo
                showTagline
                className="h-20 w-auto text-bg-base"
              />
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-6 text-bg-base/70">
              {leadership.name} · {leadership.title}
              <br />
              {leadership.experience} · Established 2024
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <h3 className="text-sm font-semibold">Explore</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-bg-base/70 transition-colors hover:text-bg-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold">Contact & regional footprint</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-bg-base/70">
              <li>
                <a
                  href={contact.phoneHref}
                  className="transition-colors hover:text-bg-base"
                >
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-bg-base"
                >
                  WhatsApp: {contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="break-all transition-colors hover:text-bg-base"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.googleMapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block break-words transition-colors hover:text-bg-base"
                >
                  Office address: {contact.officeAddress}
                </a>
              </li>
              <li>{contact.serviceRegions.join(" • ")}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-bg-base/15 pt-6 text-xs text-bg-base/60">
          © 2026 {company.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
