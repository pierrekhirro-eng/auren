# AUREN architecture

## Direction

The frontend is a React SPA designed as a premium B2B technology experience with a clear path toward an authenticated platform and technology marketplace.

## Boundaries

- `app/`: application composition, providers and routes.
- `components/`: reusable UI and domain components.
- `sections/`: page-level experience composition.
- `pages/`: route-level screens.
- `data/`: development fixtures and structured content.
- `services/`: business-facing data access; mocks can later be replaced by API calls.
- `lib/`: infrastructure-neutral utilities such as API and environment handling.
- `hooks/`: reusable React behavior.
- `animations/`: centralized animation primitives.
- `styles/`: brand tokens and global styling.
- `types/`: shared domain types.

## State

TanStack Query owns server state. Local component state remains local until a real cross-screen requirement exists. There is deliberately no global state manager in the base.

## Routing

React Router handles the public information architecture. Non-home routes are lazy-loaded to keep the initial bundle focused on the first experience.

## Animation

CSS is preferred for simple transitions. Intersection Observer coordinates visibility-based interaction. Anime.js is reserved for orchestrated motion where it adds real value. Reduced-motion preferences are respected.

## Backend boundary

The initial app uses structured mock services. The `apiFetch` boundary is ready for a future HTTP API, but the frontend does not pretend that a backend already exists.

## Security boundary

No secrets belong in the frontend. Client-side validation improves UX but is never treated as authorization. Authentication, authorization, rate limiting and data protection belong to the future backend.

## Performance boundary

The base uses route-level code splitting, responsive CSS, limited client JavaScript, no WebGL dependency and no animation library for simple effects. Production source maps are disabled in the default build.
