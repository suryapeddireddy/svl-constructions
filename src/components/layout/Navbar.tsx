import Link from "next/link";
import { company } from "@/data/company";
import MobileNavDrawer from "@/components/layout/MobileNavDrawer";

export default function Navbar() {
  const { contact, navigation } = company;

  return (
    <header className="sticky top-0 z-50 border-b border-surface-border bg-base/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="SVL Constructions home"
          className="flex shrink-0 items-center gap-3"
        >
          <span className="flex size-11 items-center justify-center rounded-md border border-surface-border bg-surface text-brand">
            <svg
              aria-hidden="true"
              viewBox="0 0 32 32"
              fill="none"
              className="size-7"
            >
              <path
                d="M5 26V13L16 5L27 13V26M10 26V16H22V26M14 26V20H18V26"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />
            </svg>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight text-copy-primary">
              SVL
            </span>
            <span className="mt-1 text-[0.6rem] font-semibold tracking-[0.19em] text-copy-secondary">
              CONSTRUCTIONS
            </span>
          </span>
        </Link>

        <nav
          aria-label="Main"
          className="hidden items-center gap-7 lg:flex lg:gap-9"
        >
          {navigation.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-copy-secondary transition-colors hover:text-copy-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-5 lg:flex">
          <a
            href={contact.phoneHref}
            className="text-sm font-medium text-copy-secondary transition-colors hover:text-copy-primary"
          >
            {contact.phone}
          </a>
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-copy-secondary transition-colors hover:text-copy-primary"
          >
            WhatsApp
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-brand px-4 py-2.5 text-sm font-semibold text-bg-base transition-colors hover:bg-brand/90"
          >
            Request Quote
          </a>
        </div>

        <MobileNavDrawer
          links={navigation}
          phoneHref={contact.phoneHref}
          whatsappHref={contact.whatsappHref}
        />
      </div>
    </header>
  );
}
