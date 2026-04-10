# Aamir Naved Portfolio

A single-page, notebook-style personal portfolio built with Next.js App Router, React, Tailwind CSS, and Framer Motion.

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
│   ├── floating-nav.tsx
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

## Customize Content

- Update portfolio text and section data in `assets/site-content.ts`
- Replace the resume at `public/resume/aamir-naved-resume.pdf`
- Adjust notebook styling in `styles/notebook.css`

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
- The site uses local/system font stacks to avoid build-time dependency on remote font downloads.
- The contact form opens the user’s email client via `mailto:` for a lightweight, no-backend setup.
# portfolio-web
