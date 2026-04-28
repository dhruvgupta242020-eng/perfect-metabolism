# Threat Model

## Project Overview

This project deploys a public-facing marketing site for Perfect Metabolism and a small Express API under `/api`. The production stack is React + Vite on the frontend, Express 5 on the backend, and shared TypeScript libraries for the OpenAPI contract, generated API client, and PostgreSQL/Drizzle database access. Today, the production application is mostly static: the frontend is a brochure-style landing page with a client-only booking modal, and the backend currently exposes only a health check route.

Production assumptions for this repository:
- `NODE_ENV` is `production` in deployed API runs.
- TLS is provided by the platform.
- `artifacts/mockup-sandbox` is a development/design-only surface and should be treated as out of scope unless production reachability is demonstrated.

## Assets

- **Application availability** — the public landing page and `/api/healthz` endpoint must remain reachable because they back the deployed experience and health monitoring.
- **Deployment secrets and infrastructure configuration** — environment variables such as `DATABASE_URL`, port bindings, and future API credentials would allow deeper compromise if exposed.
- **Prospective patient contact details** — the UI collects name, phone number, and goals in a booking modal. In the current code these values remain client-side only, but if later wired to a backend they become sensitive personal data.
- **Shared API and database libraries** — `lib/api-spec`, `lib/api-zod`, `lib/api-client-react`, and `lib/db` define future trust boundaries and can introduce app-wide vulnerabilities if misused.

## Trust Boundaries

- **Browser to frontend application** — all browser state, DOM events, and any future form input are untrusted.
- **Browser to API (`/api`)** — any request reaching Express is attacker-controlled and must be validated server-side.
- **API to database** — `lib/db` provides direct PostgreSQL access. If production routes begin using it, injection or authorization flaws here would expose all stored data.
- **Production vs. dev-only artifacts** — `artifacts/mockup-sandbox` contains experimental UI/dev tooling and should not be scanned as a production surface unless it becomes reachable from production routing.

## Scan Anchors

- **Production entry points**: `artifacts/perfect-metabolism/src/main.tsx`, `artifacts/api-server/src/index.ts`, `artifacts/api-server/src/app.ts`
- **Highest-risk code areas**: `artifacts/api-server/src/**`, `lib/db/src/**`, `lib/api-client-react/src/**`
- **Public surface**: `/` static frontend and `/api/healthz`
- **Authenticated/admin surface**: none currently implemented in production code
- **Usually dev-only**: `artifacts/mockup-sandbox/**`

## Threat Categories

### Tampering

The browser and all future API callers are untrusted. Any new backend route added under `artifacts/api-server/src/routes` must validate request bodies, query parameters, and headers server-side instead of relying on frontend controls. If the dormant database layer becomes active, database operations must remain parameterized and must not derive SQL, identifiers, or file paths directly from user input.

### Information Disclosure

The main confidentiality risks in the current codebase are accidental exposure of deployment secrets, verbose error details, or future collection of patient contact information without adequate protection. Logs and API responses must avoid leaking credentials, cookies, tokens, or stack traces. If the booking modal is later connected to backend storage or messaging, submitted name/phone/message fields must be treated as sensitive personal data and protected accordingly.

### Denial of Service

The current API is minimal, but every public route under `/api` is internet-reachable. Any future endpoints that perform database access, outbound calls, or large body parsing must enforce reasonable request size limits, timeouts, and rate limiting so unauthenticated traffic cannot exhaust service resources.

### Spoofing and Elevation of Privilege

There is no production authentication or role model implemented today, so these threats are currently limited in scope. If authenticated or admin functionality is added later, authorization must be enforced on the server for every protected route, and shared client helpers in `lib/api-client-react` must not be treated as a trust boundary.