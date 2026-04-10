# Aamir Naved Portfolio

A single-page, notebook-style portfolio built with Next.js App Router, React, Tailwind CSS, and Framer Motion. The site uses a hand-drawn paper aesthetic, section-by-section scrolling, subtle doodle motion, and resume-driven content.

## Stack

- Next.js
- React
- Tailwind CSS
- Framer Motion
- TypeScript

## Folder Structure

```text
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── assets/
│   └── site-content.ts
├── components/
│   ├── contact-form.tsx
│   ├── doodles.tsx
│   ├── home-page.tsx
│   ├── notebook-button.tsx
│   ├── notebook-sheet.tsx
│   ├── project-card.tsx
│   └── reveal.tsx
├── public/
│   └── resume/
│       └── aamir-naved-resume.pdf
├── styles/
│   ├── notebook.css
│   └── utilities.css
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm start
```

## What Is Included

- single long-scroll portfolio layout with one notebook-style section at a time
- locally bundled handwriting fonts
- subtle section-specific animations and doodle motion
- resume download from `public/resume/aamir-naved-resume.pdf`
- contact section that opens the user’s email client with `mailto:`

## Customize Content

- Update portfolio text and section data in `assets/site-content.ts`
- Replace the resume at `public/resume/aamir-naved-resume.pdf`
- Adjust notebook styling in `styles/notebook.css`
- Extend doodles and motion in `components/doodles.tsx` and `components/home-page.tsx`

## Git / Push Notes

- `package-lock.json` should be committed
- `.next/`, `node_modules/`, `.vercel/`, and local `.env*` files are ignored
- the repo is ready to push without build artifacts or dependency directories

## Deploy To Vercel

1. Push this project to a Git repository.
2. Import the repository into Vercel.
3. Keep the default framework preset as `Next.js`.
4. Use the build command: `npm run build`.
5. Use the default output setting detected by Vercel.
6. Deploy.

For CLI deploys:

```bash
npm install -g vercel
vercel
```

## Notes

- The production build uses Webpack explicitly to avoid Turbopack sandbox issues that can appear in restricted environments.
- The site uses locally installed font packages to avoid build-time dependency on remote font downloads.
- The contact form opens the user’s email client via `mailto:` for a lightweight, no-backend setup.
