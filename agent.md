# Project Overview

This repository contains a personal CV website for Tobias Köhler. It is built using modern web technologies to be performant, easily maintainable, and visually appealing.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (with Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: Custom components and utilities from `clsx`, `tailwind-merge`, and `lucide-react`.

## Project Structure

The project follows a standard Next.js `src` directory structure.

- `src/app/`: Contains the main application logic, layout, and pages.
  - `page.tsx`: The main entry point that renders the CV.
  - `layout.tsx`: The root layout for the application.
  - `globals.css`: Global styles for the application.
- `src/components/`: Reusable React components.
  - `cv/`: Components specifically for the CV layout (e.g., `CVHeader`, `ExperienceItem`).
  - `ui/`: General-purpose UI components (e.g., `Button`, `Card`).
- `src/data/`: a centralized data management.
  - `cvData.ts`: A single file containing all the CV data, making it easy to update the content without touching the code.
- `src/lib/`: Utility functions.
  - `utils.ts`: a file containing helper functions.

## Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## To-Do List

- [ ] Add a profile image to the `public` folder and update the path in `src/data/cvData.ts`.
- [ ] Implement a theme switcher (light/dark mode).
- [ ] Add a print-friendly version of the CV.
- [ ] Add animations and transitions to improve the user experience.

## Design Notes – Subtle Interactivity (Hover/Focus)

Principles:
- Keep motion subtle, fast (150–200ms), and reversible.
- Always mirror hover with accessible `:focus-visible` states.
- Respect `prefers-reduced-motion: reduce` and degrade to color/underline only.

## Interaction Backlog (Prioritized)

- [ ] P0 — Standardize link micro-interactions (`InteractiveLink` styles) across all anchors
- [ ] P0 — Card/list item hover for `ExperienceItem` and skills rows: soft tint + shadow-sm
- [ ] P0 — Strong, accessible focus-visible ring tokens across the site
- [ ] P1 — Section header underline grow on hover (accent underline animation)
- [ ] P1 — Contact links: subtle underline-in and icon fade-in
- [ ] P1 — Profile image: 1% scale + 0.3deg tilt + soft ring on hover/focus
- [ ] P2 — Staggered fade-in on scroll (IntersectionObserver + reduced motion guard)

## Handoff / Implementation Notes

- Create utility classes/components instead of scattering Tailwind classes (e.g., `InteractiveLink`, `CardHover`).
- Use data attributes like `data-intent="interactive"` to opt-in per component.
- Add a single CSS block in `globals.css` to gate animations by `@media (prefers-reduced-motion: reduce)`.
- Roll out incrementally: links → cards → headers → optional image motion.