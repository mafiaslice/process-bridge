# Process Bridge

Corporate marketing site for [Process Bridge](https://processbridge.org) — a business-analysis and process-improvement consulting firm.

**Aligning People, Process & Technology.**

This repository is the source of truth for the website. Production hosting will be pulled into Replit later; local development is Next.js.

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS
- shadcn/ui (Button, Dialog, NavigationMenu, Sheet, Field, Input, Textarea, Separator, Badge, Card)
- File-based routes for Home, About, What We Do, Our Approach, Insights, Start With Clarity, Careers, plus Privacy, Terms, Research and Case Studies placeholders
- `POST /api/contact` stores submissions as JSON on disk (no third-party keys)

## Visual direction

The site is **lilac-forward**, not dark-luxury. First paint is the real homepage: a lilac field, the white lockup, and vivid black type. There is no skip-intro overlay and no `localStorage` gate.

| Token | Hex | Role |
| --- | --- | --- |
| Lilac | `#D4CAF7` | Hero, header, brand field. White logo lives here. |
| Blue | `#96AED7` | Section tint and secondary accent |
| Yellow | `#F8D97A` | Belief/CTA bands and primary buttons |
| White | `#FFFFFF` | Page surface |
| Shades | `#000000` `#393939` `#747474` `#D0D0D0` `#E1E1E1` `#F8F8F8` | Hairlines and chrome only — not page backgrounds |

Readable type is vivid black (`#000000` / `#111`) on light fields. The logo is white on lilac; use the dark lockup on white. Do not set a black hero or a white logo on black as the first impression.

The logo is a geometric SVG lockup (`src/components/Logo.tsx`, also `public/logo.svg` / `public/logo-dark.svg`). Do not add a second text wordmark beside it.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

`npm run build` is the production compile. `npm start` serves that build.

## Contact form

The Start With Clarity form posts to `/api/contact`. Valid submissions are appended to `data/submissions.json` (created at runtime, not committed). The field named `website` is a honeypot.

The endpoint needs a writable `data/` directory. That works on a conventional Node host and on Replit. No API keys are required.

## Notes for Replit

Clone this repo, run `npm install`, then `npm run dev` (or `npm run build` + `npm start`). Keep the `data/` folder writable so the contact form can store submissions.
