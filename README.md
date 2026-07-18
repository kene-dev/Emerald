# Emerald College — Website

A single-page React site for a Nigerian private school, built with Vite,
[GSAP](https://gsap.com/) (ScrollTrigger) for scroll-driven animation, and
[Lenis](https://lenis.darkroom.engineering/) for smooth inertia scrolling.

## Getting started

Requirements: **Node.js 18+** and npm.

```bash
npm install
npm run dev
```

Then open the local URL npm prints (usually `http://localhost:5173`).

Other scripts:

```bash
npm run build     # production build → dist/
npm run preview   # preview the production build locally
npm run lint      # run oxlint
```

## Project structure

```
src/
  main.jsx              # React entry point
  App.jsx                # page composition — imports every section in order
  index.css              # design tokens (color, type) + global styles

  components/             # cross-page UI
    Navbar.jsx / .css
    Footer.jsx / .css

  sections/                # one file per homepage section
    Hero.jsx / .css
    About.jsx / .css
    Programs.jsx / .css
    Admissions.jsx / .css
    Testimonials.jsx / .css
    Leadership.jsx / .css
    Gallery.jsx / .css
    Contact.jsx / .css

  data/
    content.js            # ALL editable copy, stats, staff, images, contact info

  lib/
    useLenis.js            # boots Lenis + syncs it with GSAP's ticker/ScrollTrigger
```

## Rebranding this for a different school

Almost everything you'd want to change lives in **`src/data/content.js`**:
school name, address, phone, social links, Google Maps embed, programs,
admissions steps/fees/deadlines, testimonials, leadership bios, and every
gallery/hero image URL. Swap those out and most of the site updates itself.

To change the color palette or fonts, edit the CSS variables at the top of
`src/index.css` (`--ink`, `--gold`, `--paper`, `--font-display`, etc.) —
every component references these variables rather than hard-coded colors.

## Notes on the animation approach

- **Lenis** (`src/lib/useLenis.js`) intercepts native scrolling and feeds it
  through GSAP's ticker, so `ScrollTrigger` and Lenis stay perfectly in sync.
  It's skipped entirely when the OS-level "reduce motion" setting is on.
- Each section owns its **own GSAP `gsap.context()`** scoped to a `ref`, so
  animations are automatically cleaned up if a component unmounts — no
  memory leaks or stray ScrollTriggers.
- The hero's crest badge "draws" itself using a manual `stroke-dashoffset`
  technique (not the paid DrawSVG plugin), so this works with the free
  `gsap` npm package with no license required.

## Images

All photography is sourced from [Unsplash](https://unsplash.com) under its
free license (commercial use permitted, no attribution required). Swap the
URLs in `src/data/content.js` for your own photography whenever you have it —
for a real school, **use only your own photos with signed parent/guardian
consent**, since these are stock placeholders, not photos of your students.

## Deploying

This is a static Vite build — `npm run build` outputs a `dist/` folder you
can drop into Netlify, Vercel, GitHub Pages, or any static host.
