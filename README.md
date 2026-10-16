# Tobias Köhler — CV

Personal CV website with a CV / Projects view, published at
[tobiaskoehlereth.github.io](https://tobiaskoehlereth.github.io/).

Built with Next.js 15 (static export), TypeScript and Tailwind CSS 4.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in out/
npm run lint
```

Pushing to `main` builds and deploys to GitHub Pages via
`.github/workflows/nextjs.yml`.

## Editing content

All content lives in [`src/data/cvData.ts`](src/data/cvData.ts):

- `experience` / `education`: one bullet per line in `description`; a line starting with
  `Publication:` followed by a URL renders as a link. `links` adds project links below the
  bullets, and `isCurrent` highlights the entry.
- `skills`: grouped into Hardware, Firmware, Software and AI.
- `languages`: level from 1 to 5.
- `githubProjects`: repositories shown in the Projects tab (`name` must match the repo name,
  `image` points to a file in `public/projects/`).

The profile picture is `public/profile.jpg`.

## Structure

```
src/
├── app/
│   ├── layout.tsx       # fonts (Sora, Geist Mono) and metadata
│   ├── page.tsx         # renders CVLayout with cvData
│   ├── icon.svg         # favicon (black square)
│   └── globals.css      # theme tokens, dark mode overrides, A4 print layout
├── components/cv/       # CVLayout, CVHeader, CVTabs, CVSection, ExperienceItem,
│                        # ContactInfo, SkillsSection
└── data/cvData.ts       # CV content
public/
├── profile.jpg
└── projects/            # project preview images
```

## PDF

The download button prints the page. Print styles in `globals.css` scale the CV tab onto a
single A4 page; the Projects tab is never printed.
