# Agent Notes

Personal CV site (Next.js 15 static export, Tailwind CSS 4). See `README.md` for commands and
structure. Content changes belong in `src/data/cvData.ts` only.

## Design rules

- Black and white, minimal text, technical look. No accent colours.
- No rounded corners anywhere: do not add `rounded-*` classes; markers and dots are squares.
- Font: Sora (`font-sans`), Geist Mono for small labels (`font-mono`).
- Section headers are solid black bars (`CVSection`).
- Interactions stay subtle and fast (150–200 ms): tint, `shadow-sm`, underline grow.
- Project images keep their colours; the Projects tab sits on `BackgroundBoxes`.
- Keep dependencies minimal: plain Tailwind classes, no UI kits or animation libraries.

## Gotchas

- Dark mode is the `cv-inverted` class on `<html>` (toggled in `CVHeader`). It remaps the
  gray/black/white utility classes in `globals.css`, so prefer those classes over custom
  colours, and add an override there when introducing a new one.
- Printing (the PDF download) relies on `.cv-main-grid` and `.cv-content` in the print block of
  `globals.css`, and must stay on one A4 page. Check `npm run build` + print preview after
  layout changes.
- `CVTabs` keeps the CV grid mounted (hidden) while Projects is open, so printing always
  outputs the CV.
- The site is a static export (`output: "export"`): no server features, images are unoptimized.
