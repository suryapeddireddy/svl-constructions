import Link from "next/link";
import { company } from "@/data/company";
import BrandLogo from "@/components/ui/BrandLogo";
import MobileNavDrawer from "@/components/layout/MobileNavDrawer";

export default function Navbar() {
  const { contact, navigation } = company;

  return (
    <header className="sticky top-0 z-50 border-b border-surface-border bg-base/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="SVL Constructions home"
          className="flex shrink-0 items-center"
        >
          <BrandLogo className="h-12 w-auto text-copy-primary" />
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
