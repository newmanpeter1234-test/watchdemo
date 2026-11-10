# Pegasus Qatar — Redesign

Production-ready redesign of **pegasus-qatar.com** — Pegasus Trading and
Contracting W.L.L., manpower supply for construction and oil & gas, Doha, Qatar.

Built with Next.js (App Router), Tailwind CSS v4, and Motion. Self-hosted
fonts, no external CDNs, static prerender.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

- **Redesign rationale & plan:** [`REDESIGN-PLAN.md`](./REDESIGN-PLAN.md)
- **Copy / content:** `src/lib/content.ts`, `src/lib/site.ts`
- **Design tokens (colour, type, easing):** `src/app/globals.css`
- **Imagery:** `public/images`

### Notes before launch
- The enquiry form is front-end only; connect `onSubmit` in
  `src/components/contact.tsx` to your email/CRM endpoint.
- Client marks in `src/components/clients.tsx` are representative placeholders.
- Replace `public/images` with licensed brand photography when available.
