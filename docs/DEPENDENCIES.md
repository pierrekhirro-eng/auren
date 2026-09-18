# AUREN dependency policy

This is the intended frontend foundation, not a list of libraries to add casually.

## Runtime

| Package | Version | Purpose |
|---|---:|---|
| React | 19.3.0 | UI runtime |
| React DOM | 19.3.0 | Browser rendering |
| React Router | 8.4.0 | Routing and data-router primitives |
| TanStack Query | 5.103.1 | Server-state cache and async data |
| React Hook Form | 7.88.0 | Performant forms |
| Zod | 4.6.5 | Runtime schema validation |
| @hookform/resolvers | 5.9.1 | RHF/Zod integration |
| Anime.js | 4.5.0 | Complex animation orchestration |
| Lucide React | 1.47.0 | UI icons |
| Fontsource Inter Variable | 5.3.0 | Primary typography, self-hosted |
| Fontsource Sora Variable | 5.3.0 | Secondary/display typography, self-hosted |

## Development and quality

| Package | Version | Purpose |
|---|---:|---|
| Vite | 8.3.0 | Dev server and production build |
| @vitejs/plugin-react | 6.1.1 | React + Fast Refresh integration |
| TypeScript | 6.0.3 | Static typing |
| ESLint | 10.10.0 | Linting |
| typescript-eslint | 8.70.0 | TypeScript-aware ESLint rules |
| @eslint-react/eslint-plugin | 5.19.1 | Modern React + TypeScript linting |
| Prettier | 3.9.7 | Formatting |
| Vitest | 5.0.1 | Unit/integration test runner |
| Testing Library | 16.3.3 | User-focused React tests |
| jsdom | 29.1.1 | DOM environment for Vitest on Node 24.14 |
| @vitest/coverage-v8 | 5.0.1 | V8 coverage |
| Playwright | 1.63.0 | Browser E2E |

## Deliberate exclusions

Do not add Redux/Zustand, Tailwind, Three.js/WebGL, Axios, Storybook or a backend just because the platform may use them later. Add a dependency when a concrete feature needs it.

Accessibility is enforced first through semantic HTML, keyboard/focus requirements and browser-level tests. `eslint-plugin-jsx-a11y` is not included in this baseline because its current stable release does not declare ESLint 10 support. The same accessibility goals are handled through semantic HTML, keyboard/focus requirements and browser-level tests until a compatible plugin release exists.
