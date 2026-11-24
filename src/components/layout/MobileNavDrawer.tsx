"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import BrandLogo from "@/components/ui/BrandLogo";
import type { CompanyNavigationLink } from "@/types/company";

interface MobileNavDrawerProps {
  links: CompanyNavigationLink[];
  phoneHref: string;
  whatsappHref: string;
}

export default function MobileNavDrawer({
  links,
  phoneHref,
  whatsappHref,
}: MobileNavDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    function handleDesktopResize(event: MediaQueryListEvent) {
      if (event.matches) {
        setIsOpen(false);
      }
    }

    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    desktopQuery.addEventListener("change", handleDesktopResize);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      desktopQuery.removeEventListener("change", handleDesktopResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function closeDrawer() {
    setIsOpen(false);
  }

  function handleLinkClick(
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    event.preventDefault();
    setIsOpen(false);

    window.requestAnimationFrame(() => {
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", href);
    });
  }

  const drawer = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeDrawer}
            className="fixed inset-0 z-50 size-full cursor-default bg-dark/40 backdrop-blur-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.aside
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 bottom-0 z-50 flex w-full max-w-sm flex-col justify-between border-l border-surface-border bg-base p-6"
          >
            <div>
              <div className="flex items-center justify-between border-b border-surface-border pb-5">
                <Link
                  href="/"
                  aria-label="SVL Constructions home"
                  onClick={closeDrawer}
                  className="flex items-center"
                >
                  <BrandLogo className="h-14 w-auto text-copy-primary" />
                </Link>
                <button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={closeDrawer}
                  className="inline-flex size-11 items-center justify-center rounded-md border border-surface-border text-copy-primary transition-colors hover:bg-surface"
                >
                  <X aria-hidden="true" className="size-5" />
                </button>
              </div>

              <nav aria-label="Mobile" className="pt-5">
                <ul>
                  {links.map((link) => (
                    <li key={link.href} className="border-b border-surface-border">
                      <a
                        href={link.href}
                        onClick={(event) => handleLinkClick(event, link.href)}
                        className="flex min-h-16 items-center font-display text-2xl font-semibold text-copy-primary transition-colors hover:text-brand"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="-mx-6 -mb-6 border-t border-surface-border bg-surface p-6">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={phoneHref}
                  className="flex min-h-12 items-center justify-center gap-2 rounded-md border border-surface-border bg-base text-sm font-semibold text-copy-primary transition-colors hover:border-brand"
                >
                  <Phone aria-hidden="true" className="size-4 text-brand" />
                  Call
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-12 items-center justify-center gap-2 rounded-md border border-surface-border bg-base text-sm font-semibold text-copy-primary transition-colors hover:border-brand"
                >
                  <MessageCircle aria-hidden="true" className="size-4 text-brand" />
                  WhatsApp
                </a>
              </div>
              <a
                href="#contact"
                onClick={closeDrawer}
                className="mt-3 flex min-h-12 w-full items-center justify-center rounded-md bg-brand text-base font-semibold text-bg-base transition-colors hover:bg-brand/90"
              >
                Request a Quote
              </a>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <button
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen(true)}
        className="inline-flex size-10 items-center justify-center rounded-md border border-surface-border text-copy-primary transition-colors hover:bg-surface lg:hidden"
      >
        <Menu aria-hidden="true" className="size-5" />
      </button>
      {isMounted && createPortal(drawer, document.body)}
    </>
  );
}
