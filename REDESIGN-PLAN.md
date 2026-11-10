# Pegasus Qatar — Redesign Plan & Rationale

**Client:** Pegasus Trading and Contracting W.L.L. — manpower supply, Doha, Qatar
**Scope:** Full visual and interaction redesign of pegasus-qatar.com
**Deliverable:** A production-ready Next.js build (`npm run dev`)

---

## 1. Audit of the current site

What exists today, honestly assessed:

| Area | Current state | Problem |
| --- | --- | --- |
| Hero | Full-bleed photo, "Dedicated to meet your Goals", arrow link | Generic headline, no positioning, no proof, no clear action |
| Navigation | Anchor links, no sticky header | Orientation is lost while scrolling a long page |
| Structure | About → Vision → CEO → Who we are → What we do → Why choose → Clients → Certifications → Workforce | Nine flat blocks with no narrative, no hierarchy |
| Typography | Mixed serif headline + small sans body, inconsistent sizes | No scale system, no consistent voice |
| Vision | Four identical image + text columns, content duplicated | Reads as filler, not conviction |
| Workforce | 15 roles in two long horizontal scroll rows | The most valuable content is the hardest to read |
| Clients | Five low-resolution raster logos | Blurry on high-DPI screens, inconsistent weight |
| Contact | Phone + email in the footer area only | A B2B buyer has no way to send a specification |
| Colour | Navy / white / orange accents | Reads as a template, not a premium operator |
| Motion | None | Feels static and dated |

**The core insight:** the content is genuinely good — 15 named trades, three ISO
certifications, an address, two phone lines. What is missing is *editorial
discipline*: the site does not tell a buyer what Pegasus does, in what order,
and what to do next.

---

## 2. Strategy

### 2.1 Positioning
> **Manpower you can build on.**

Pegasus does not sell "workers". It sells *certainty of supply* for
construction and oil & gas programmes. The redesign reframes every section as
evidence of that certainty: trade coverage, documentation, compliance,
responsiveness.

### 2.2 Audience and jobs-to-be-done
1. **Main contractor / EPC procurement** — "Can you supply 20 civil supervisors by March?"
2. **Site / HSE management** — "Are your people certified, and do you understand permits?"
3. **Consultants** — "Is this supplier credible enough to put on a shortlist?"

The page order is built for exactly these three questions.

### 2.3 Design direction — "Industrial editorial"
- **Dark, warm, material.** Charcoal ink (#0A0B0A) as the base, sand (#F4EEE3)
  for type, and a single brass accent (#C8964F) drawn from Qatar's desert light.
  Brass is used sparingly — for rules, numerals, and one accent per view.
- **Serif for statement, sans for information.** Instrument Serif (with true
  italic for emphasis) carries headlines; Instrument Sans carries body copy;
  JetBrains Mono carries metadata, section numbers and labels. The mono layer is
  what makes it feel engineered rather than decorative.
- **Photography as evidence, not wallpaper.** Real site conditions — golden-hour
  plant, briefings, reinforcement, welds, rigging — graded to one warm palette so
  ten images read as one shoot.
- **Generous negative space and hairline rules** instead of cards, shadows and
  rounded blobs. Structure comes from typography and lines.

---

## 3. Page architecture

| # | Section | Purpose |
| --- | --- | --- |
| — | Intro curtain | 1.5s typographic opening; brand, city, no spinner |
| — | Hero | Positioning line, proof (2021 · 15+ trades · ISO), primary CTA |
| — | Sector ticker | Velocity-reactive marquee of served sectors |
| — | Stats band | Counters: 2021, 15+ trades, 3 ISO, 24/7 |
| 01 | About | The company, the founder's quote, three hard facts |
| — | Statement | Scroll-lit commitment sentence (word-by-word) |
| 02 | Capabilities | Three interactive rows with a sticky changing visual |
| 03 | Workforce | Accordion of all 15 roles in four disciplines |
| 04 | On site | Pinned horizontal filmstrip gallery (desktop) / swipe (mobile) |
| 05 | Why Pegasus | Sticky aerial image + four commitments |
| 06 | Vision | Four principles in a bordered grid, drifting oversized type |
| 07 | CEO message | Portrait + letter, signed off with the prime motto |
| 08 | Clients | Representative client wall (wordmark treatment) |
| 09 | Certifications | ISO 45001 / 9001 / 14001 as certificate cards |
| 10 | Contact | Specification request form + contact detail grid |
| — | Footer | Navigation, contact, oversized wordmark |

Content lives in `src/lib/content.ts` and `src/lib/site.ts` so copy can be
corrected without touching layout.

---

## 4. Interaction & motion system

Motion is used to direct attention, never to decorate:

- **Curtain** → lifts away on a single expo curve (0.85, 0, 0.15, 1).
- **Hero** → image scale 1.14 → 1 over 2.4s; headline lines mask up in
  sequence; parallax + fade out on scroll.
- **Section headings** → word-by-word masked reveal, once per page.
- **Statement** → each word owns a slice of scroll progress, so the sentence
  resolves at the reader's pace.
- **Capabilities** → hover/focus swaps the sticky image with a cross-fade.
- **On site** → a 320vh pin translates a filmstrip horizontally with spring
  easing and a progress hairline.
- **Marquee** → base speed plus scroll velocity, so it reacts to the reader.
- **Header** → hides on scroll down, reappears on scroll up, with a scroll
  progress bar in brass.
- **Cursor** → a faint 600px brass light, fine pointers only.
- **Smooth scroll** → Lenis with inertial wheel and anchor handling.

**Restraint:** 1500ms maximum for any single animation, one easing curve family
throughout, `prefers-reduced-motion` honoured globally via `MotionConfig`,
and no animation that blocks reading.

---

## 5. Accessibility & technical quality

- Semantic landmarks, one `h1`, ordered headings, skip-to-content link.
- Visible focus rings (brass, 2px, offset) on every interactive element.
- Contrast: body copy at sand-200/85 on ink-950 (≥ 7:1), metadata at the
  smallest sizes deliberately stepped up to ≥ 4.5:1.
- All decorative layers `aria-hidden`; icon-only buttons labelled.
- Reduced motion: hover/transform animations disabled, opacity retained;
  no hydration mismatch (verified with emulated media).
- Hydration-safe hooks (`useReducedMotion` wrapper, mount-resolved year).
- Images via `next/image` with explicit `sizes`, AVIF/WebP, and a priority
  hero; a grain overlay is CSS/SVG so it costs nothing.
- Static prerender, zero console errors, TypeScript strict, production build
  passes.

---

## 6. Imagery

The live site blocks direct asset requests, so the artwork set was rebuilt to a
single art direction: golden-hour Qatar industrial photography in a consistent
sand/charcoal/brass grade — hero site team, HSE engineer portrait, aerial
programme, welding, reinforcement, safety briefing, lifting supervisor,
inspection, CEO portrait, and the Doha skyline for the closing section.
Existing client logos are replaced by a typographic client wall because the
originals are low-resolution rasters; the site's real contact details,
certifications and 15-role workforce are carried across verbatim.

---

## 7. Handover notes

1. `npm install && npm run dev`
2. Copy edits: `src/lib/content.ts`, `src/lib/site.ts`
3. Colour/type tokens: `src/app/globals.css` (`@theme`)
4. Imagery: `public/images` (replace with licensed brand photography)
5. The contact form is front-end only — wire `onSubmit` in
   `src/components/contact.tsx` to an email service or CRM endpoint.
6. Client names in `clients.tsx` are representative placeholders and must be
   replaced with the real logo set before launch.
