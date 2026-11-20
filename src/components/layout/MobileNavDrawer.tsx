"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { CompanyNavigationLink } from "@/types/company";

interface MobileNavDrawerProps {
  links: CompanyNavigationLink[];
  phone: string;
  phoneHref: string;
  whatsappHref: string;
}

export default function MobileNavDrawer({
  links,
  phone,
  phoneHref,
  whatsappHref,
}: MobileNavDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  function closeDrawer() {
    setIsOpen(false);
  }

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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={closeDrawer}
              className="absolute inset-0 size-full cursor-default bg-copy-primary/20"
            />
            <motion.aside
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="absolute inset-y-0 right-0 flex h-full w-[min(22rem,100%)] flex-col border-l border-surface-border bg-base p-6 shadow-xl"
            >
              <div className="flex items-center justify-between border-b border-surface-border pb-5">
                <span className="font-display text-lg font-semibold text-copy-primary">
                  Navigation
                </span>
                <button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={closeDrawer}
                  className="inline-flex size-10 items-center justify-center rounded-md border border-surface-border text-copy-primary transition-colors hover:bg-surface"
                >
                  <X aria-hidden="true" className="size-5" />
                </button>
              </div>

              <nav aria-label="Mobile" className="flex-1 py-6">
                <ul className="space-y-1">
                  {links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={closeDrawer}
                        className="block rounded-md px-3 py-3 font-display text-xl font-medium text-copy-primary transition-colors hover:bg-surface"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="space-y-3 border-t border-surface-border pt-5">
                <a
                  href={phoneHref}
                  className="flex items-center gap-3 rounded-md px-3 py-3 text-copy-secondary transition-colors hover:bg-surface hover:text-copy-primary"
                >
                  <Phone aria-hidden="true" className="size-5 text-brand" />
                  <span>{phone}</span>
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-md px-3 py-3 text-copy-secondary transition-colors hover:bg-surface hover:text-copy-primary"
                >
                  <MessageCircle
                    aria-hidden="true"
                    className="size-5 text-brand"
                  />
                  <span>WhatsApp</span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="ml-auto size-4"
                  />
                </a>
                <a
                  href="#contact"
                  onClick={closeDrawer}
                  className="flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand px-5 py-3 text-base font-semibold text-bg-base transition-colors hover:bg-brand/90"
                >
                  Request Quote
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
