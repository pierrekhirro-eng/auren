# AUREN — Technology & Solutions

Frontend foundation v1.0.0.

This repository is the base for the AUREN corporate platform, with room to evolve into products, solutions, projects, professionals and a specialized technology marketplace.

## Stack

- React 19 + TypeScript 6
- Vite 8
- React Router 8 (Data Mode)
- TanStack Query for server state
- React Hook Form + Zod for typed forms
- Anime.js 4 for complex motion orchestration
- CSS / Web APIs for simple motion
- Lucide React for interface icons
- Self-hosted Inter and Sora via Fontsource
- Vitest + Testing Library for unit/integration tests
- Playwright for E2E tests
- ESLint 10 + ESLint React + typescript-eslint + Prettier

## Project layout

```text
src/
├── app/              # router, providers, application-level boundaries
├── assets/           # product and brand assets
├── animations/       # reusable motion orchestration
├── components/       # reusable UI and domain components
├── data/             # local mock/static data
├── hooks/            # reusable React hooks
├── lib/              # low-level utilities and configuration
├── pages/            # route-level screens
├── sections/         # composed page sections
├── services/         # API/data access boundary
├── styles/           # tokens and global styles
├── test/             # test setup
└── types/            # shared domain types

tests/e2e/             # Playwright E2E suite
docs/                  # architecture and workflow notes
```

## Install

Use Node.js 24.x. The project is tested against the modern Node line required by the current frontend tooling.

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Quality gates

```bash
npm run lint
npm run typecheck
npm run test:run
npm run build
```

Or run the standard gate in one command:

```bash
npm run verify
```

## E2E

Install the Chromium runtime once:

```bash
npm run e2e:install
```

Then:

```bash
npm run e2e
```

## Git workflow

Every meaningful unit of work should be validated before commit. Prefer small, focused commits.

```bash
git status
npm run verify
git add .
git commit -m "feat: describe the change"
git push
```

Do not use `npm install --force` or `npm install --legacy-peer-deps` to hide dependency conflicts.

## Brand

The repository contains placeholder SVG brand assets for the technical shell. The approved AUREN identity assets supplied by the team should replace those files in `public/brand/` without changing the React component API.
