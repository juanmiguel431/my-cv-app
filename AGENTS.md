<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project: my-cv-app

A personal CV/portfolio website for Juan Miguel Paulino Carpio (Senior Software Engineer). Single-page app built with Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS 4.

## Architecture

- **One route**: `app/page.tsx` renders `components/curriculum.tsx` — the entire CV as a single client component.
- **Data lives in `constants/cv-data.ts`**: all experiences, education, technologies, and personal info. Update content here, not in components.
- **Types in `models/cv.ts`**: TypeScript interfaces for all CV data structures.
- **Icons in `components/icons.tsx`**: custom SVG components, all accept an optional `className` prop.
- **Theme**: light/dark toggle implemented with `useSyncExternalStore` + `localStorage`. No external state library.

## Conventions

- Tailwind utility classes only — no custom CSS classes beyond what's in `globals.css`.
- Color palette: Slate, Cyan, Sky. Keep additions consistent with these.
- `app/layout.tsx` is a server component; `components/curriculum.tsx` is a client component (`"use client"`). Keep this boundary.
- Standalone Next.js output (`next.config.ts`) — do not remove; the app is built for containerized deployment.
- Path alias `@/*` maps to the project root (configured in `tsconfig.json`).

## Updating CV content

All dynamic content is data-driven. To add or edit experiences, skills, or education, edit `constants/cv-data.ts` and follow the existing TypeScript interfaces in `models/cv.ts`. Do not hard-code content in components.
