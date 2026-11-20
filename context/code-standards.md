# Code Standards

- Define strict TypeScript interfaces for shared data structures; avoid implicit or untyped company content.
- Centralize typed company content in `src/data/company.ts`, with its interfaces in `src/types/company.ts`.
- Use Next.js App Router Server Components by default. Add `"use client"` only to interactive leaves such as project filters, the mobile menu, and the inquiry form.
- Keep `src/app/page.tsx` as a server-component composition root. Place shared site chrome in `src/components/layout/` and homepage sections in `src/components/sections/`; keep interactive client logic isolated in leaf components.
- Keep proof-bearing content (statistics, projects, process details, FAQs, testimonials, partner marks, pricing, policies, and service areas) in typed centralized data. Render testimonials, logos, or commercial claims only when SVL has verified and approved the underlying information.
- Keep the initial inquiry form short and audience-aware; avoid adding fields or promising response times, pricing, payment terms, or services without SVL approval.
- Style components only with semantic CSS custom property tokens defined in `src/app/globals.css`. Do not hardcode hex values or use raw `zinc-*`/`gray-*` utility classes in components.
- Keep design tokens and their Tailwind v4 `@theme inline` mappings in `src/app/globals.css`.
- Do not modify foundation primitives under `src/components/ui/*` unless explicitly instructed.
- Mark unverified company statistics, project entries, and contact details with `// TBD: Replace with real SVL Constructions data` at their source.
