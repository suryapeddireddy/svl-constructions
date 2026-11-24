# SVL Constructions — Project Overview

## Website scope

Build a high-trust corporate website for SVL Constructions, an Indian civil engineering, residential, and commercial construction firm. The site should communicate engineering discipline, reliable execution, and clear paths to consultation. The visual direction combines generous architectural whitespace, crisp editorial typography, clean white and cool light-slate surfaces, deep navy-slate ink, Cerulean / Steel Blue accents, and subtle motion.

Use jkassociatesonline.com as a reference for its conversion-oriented journey: a clear opening proposition, an early consultation path, scannable proof and service cards, a legible project process, credible work examples, answers to common questions, and a repeated closing CTA. Translate those patterns into SVL's more corporate, architectural voice; do not copy its wording, layout details, brand assets, offers, or claims.

## Audience

- Homeowners planning residential construction or villas.
- Landowners exploring Joint Ventures and land development.
- Commercial and industrial clients seeking construction, structural, or civil works.

## Homepage architecture

1. **Sticky Glass Navbar** — Brand mark, section links, direct phone and WhatsApp actions, and a “Request Quote” CTA.
2. **Architectural Hero + Early Consultation** — Strong positioning statement, primary actions, and a short consultation path visible at or immediately after the hero. Let visitors identify as a homeowner, landowner, or commercial / industrial client.
3. **Track Record & Engineering Credibility** — Years of Experience, Sq. Ft. Delivered, Completed Projects, and On-Time Handover. Show only verified figures; unverified values remain visibly marked as TBD in source data and must not be presented as fact.
4. **Core Capabilities / Services Grid** — Image-led, scannable cards for Turnkey Residential & Villas; Commercial & Industrial; Joint Ventures / Land Development; and Structural & Civil Works.
5. **SVL Execution Commitments** — Explain approved practices such as quality assurance, IS-code compliance, safety, progress communication, and transparent scope. Publish a commitment only after SVL confirms that it is an actual practice.
6. **Filterable Project Showcase** — All / Ongoing / Completed filters. Each project presents location, built-up area, and scope. Use clearly marked TBD placeholders until verified project information is supplied.
7. **How We Work** — A concise, easy-to-follow journey from first consultation and site understanding through planning, execution, quality checks, and handover. Keep the sequence appropriate for residential, joint-venture, and commercial work.
8. **Engineering Story & Verified Client Proof** — Editorial company / engineering legacy content with IS-code compliance and quality assurance. Add client testimonials or partner marks only when SVL has verified permission and source material; otherwise omit the proof block.
9. **Frequently Asked Questions** — Answer common questions about scope, consultation, project coordination, safety, quality, and delivery using SVL-approved policies only.
10. **Closing Consultation CTA + Corporate Footer** — Repeat the inquiry action and provide phone, WhatsApp, email, service-area, and corporate navigation details.

## Application architecture

- Keep `src/app/page.tsx` as a server-rendered composition root that assembles the homepage in the sequence above; keep content and section markup in focused components rather than growing one monolithic page.
- Put shared chrome in `src/components/layout/` and homepage sections in `src/components/sections/`.
- Keep interactive behavior in narrow client leaves: mobile navigation, project filters, and the inquiry form. Their containing sections and the rest of the homepage remain Server Components.
- Keep all reusable company, service, project, process, credibility, FAQ, testimonial, and contact content typed and centralized in `src/types/company.ts` and `src/data/company.ts`. Do not embed unverified facts in JSX.
- Keep the inquiry form concise and audience-aware, collecting only the information needed for a first response (for example: audience / project type, name, phone, and location).

## Content integrity

All unverified company figures, project details, contact information, policies, testimonials, partner relationships, pricing, service areas, and claims are placeholders. Keep them clearly marked as TBD in centralized data until SVL Constructions confirms the facts. Do not adopt reference-site-specific offers such as advance-payment terms, package prices, ratings, warranty periods, or response-time promises.
