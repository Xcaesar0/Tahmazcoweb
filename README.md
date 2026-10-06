# Tahmaz × UPTOMEDIA: New Website Design (case study)

Arabic-first (RTL) presentation page for the new Tahmaz website design. Static, no framework: Vite + vanilla JS/CSS. Design source: Figma (read only). Website only: the loyalty app and admin dashboard are intentionally excluded.

## Run
```bash
npm install
npm run dev        # http://localhost:5173
```

## Build
```bash
npm run build      # outputs dist/
npm run preview
```

## Deploy (Netlify)
Connect the repo; `netlify.toml` already sets build command `npm run build`, publish dir `dist`, Node 20. `public/_headers` gives `/assets/*` long-term caching. Vite uses `base: './'`, so it works on any path.

## Structure
- `index.html`: semantic markup, one `<section>` per story beat
- `src/styles/*.css`: `base.css` (tokens, type scale) plus one file per section
- `src/main.js`: fade-in on enter (IntersectionObserver, once, disabled for `prefers-reduced-motion`) and the thin progress bar. Content is visible if JS fails.
- `src/img/*.webp` (hashed into `dist/assets/` at build, so updated exports never hit stale cache): Figma exports (desktop sections 1440px wide, mobile 390px wide, logo)
- Fonts are self-hosted via `@fontsource` (Alexandria, Cairo, IBM Plex Mono)
