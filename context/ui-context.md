# UI Context

## Visual system

Use a light-first corporate architectural theme drawn from the SVL Constructions business card: clean white canvas, cool light-slate surfaces, deep navy-slate typography, crisp borders, and Cerulean / Steel Blue accents. Favor whitespace, clear editorial hierarchy, measured geometry, and subtle transitions over decorative effects.

For the homepage, pair that architectural restraint with the reference site's conversion clarity: an outcome-led hero and visible consultation action, a compact credibility row, scannable service cards, a clear execution journey, image-forward project cards, and decisive closing CTAs. Maintain generous spacing and a premium editorial voice; do not reproduce the reference's exact composition or visual assets.

Use clear section headings, concise supporting copy, and repeated but non-intrusive inquiry actions. Make forms and calls to action welcoming to homeowners, landowners, and commercial / industrial clients. Testimonials, partner marks, package / price cards, ratings, warranties, and service-area claims require SVL-approved source data; omit them until confirmed.

## Semantic CSS tokens

Define these design tokens in `src/app/globals.css` and map them into Tailwind v4 with `@theme inline`:

| Token | Value | Use |
| --- | --- | --- |
| `--bg-base` | `#FFFFFF` | Main page canvas |
| `--bg-surface` | `#F5F8FA` | Cool light-slate sections and cards |
| `--bg-elevated` | `#EAF1F5` | Elevated or interactive surfaces |
| `--bg-dark` | `#0F2537` | Deep navy-slate emphasis |
| `--bg-dark-elevated` | `#162C3D` | Secondary deep navy-slate surface |
| `--border-default` | `#DCE5EB` | Standard borders |
| `--border-subtle` | `#C8D6E0` | Cool slate dividers |
| `--text-primary` | `#0F2537` | Primary navy-slate text |
| `--text-secondary` | `#40586A` | Supporting slate text |
| `--text-muted` | `#5B7180` | Muted labels |
| `--accent-primary` | `#0B69A3` | Cerulean action accent |
| `--accent-secondary` | `#1377B6` | Steel blue supporting accent |
| `--accent-primary-dim` | `rgba(11, 105, 163, 0.10)` | Soft accent surface |
| `--state-success` | `#15803D` | Success status |

Expose these Tailwind utility mappings: `bg-base`, `bg-surface`, `bg-elevated`, `bg-dark`, `bg-dark-elevated`, `text-copy-primary`, `text-copy-secondary`, `text-copy-muted`, `border-surface-border`, `text-brand`, `text-brand-secondary`, `bg-brand`, and `bg-brand-dim`.

Use semantic token utilities rather than literal colors or raw zinc/gray palette utilities in components. Keep the existing Tailwind v4 and shadcn theme integration functional.

## Type and iconography

- Use Plus Jakarta Sans for display and heading typography.
- Use Inter for body typography.
- Use Lucide icons with the standard stroke style.
- Motion should be subtle and support content hierarchy, not distract from it.
- Prefer high-quality, licensed project imagery with consistent crops; use neutral image treatments and restrained overlays so imagery supports the architecture rather than overwhelming content.
