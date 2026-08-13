# BrightEdge-style Creative Agency Site

Recreating the reference video: a dark fixed left rail, oversized editorial typography, coral-red accents, and scroll-driven reveals — front-end only, no backend.

## Stack notes

- React components in plain **JavaScript (.jsx)**, styling in **SCSS** (no Tailwind classes in new components).
- The routing layer stays TanStack Router (platform requirement): `src/routes/index.tsx` remains a 6-line entry that renders `<Home />`. All real code lives in `.jsx` files.
- No PHP/MySQL. The contact form is fully built and validated client-side, submitting to a stubbed `src/services/api.js` that can be pointed at any real endpoint later via an env var.

## Sections (single page, matching the reference order)

1. **Fixed left rail** — round hamburger, vertical wordmark, social icons; opens a full-screen animated menu overlay.
2. **Hero** — split layout: oversized "digital design / CREATORS" headline on off-white, large rounded image panel on the right, scroll-cue circle button, marquee strip below.
3. **Services** — numbered accordion rows (BRANDING, WEB DESIGN, DEVELOPMENT, MARKETING) with hovering skewed image preview that follows the cursor, and a `+` expand affordance.
4. **About / Stats** — image collage plus counters (10+ years, 500+ projects, 140+ clients, 98%) that count up on scroll.
5. **Client logos** — two greyscale rows, opacity lift on hover.
6. **Featured projects** — large rounded cards with image zoom + title slide on hover.
7. **Process** — 5-step vertical timeline with alternating image blocks, big numerals, and a progress line that draws on scroll.
8. **Team** — 6-card responsive grid, rounded portraits, name/role reveal.
9. **Testimonials** — quote slider with dot navigation.
10. **Contact** — dark section with founder bio on the left and a Name / Email / Service select / Message form plus coral Submit button.
11. **Footer** — big outlined wordmark, link columns, socials.

## Design system

- Palette: near-white `#FAF9F7` canvas, ink `#1A1A1A`, dark rail/contact `#141414`, accent coral `#F0523B`.
- Type: heavy condensed-grotesk display for headlines (uppercase, tight tracking) + neutral sans for body; fluid `clamp()` scaling.
- Tokens in `_variables.scss`, breakpoints/type/flex helpers in `_mixins.scss`.

## Animations

IntersectionObserver-driven reveal hook (`useReveal`) for fade/slide/scale entrances, staggered children, sticky rail, count-up stats, cursor-following service preview, magnetic button hover, image zoom on card hover, and animated mobile menu. All transform/opacity based, `prefers-reduced-motion` respected.

## Responsive

Rail collapses to a top bar with hamburger under 900px; hero stacks; services rows shrink and drop the cursor preview on touch; project/team grids go 3 → 2 → 1; overflow guarded globally.

## Assets

Generated original imagery: hero abstract 3D panel, 4 service previews, 3 about collage shots, 4 project covers, 5 process shots, 6 team portraits — all lazy-loaded with width/height set and alt text.

## File layout

```text
src/
  routes/index.tsx        thin entry + SEO head()
  pages/Home.jsx
  components/  Rail.jsx MenuOverlay.jsx Hero.jsx Services.jsx Stats.jsx
               Logos.jsx Projects.jsx Process.jsx Team.jsx Testimonials.jsx
               Contact.jsx Footer.jsx Button.jsx Card.jsx SectionHeading.jsx Reveal.jsx
  hooks/       useReveal.js useCountUp.js useMediaQuery.js
  data/        content.js
  services/    api.js
  styles/      main.scss _variables.scss _mixins.scss components/*.scss pages/home.scss
```

## Accessibility

Semantic landmarks, single H1, real `<button>`/`<a>`, labeled form fields with inline errors and `aria-live` status, focus-visible rings, keyboard-operable accordion and menu, AA contrast.
