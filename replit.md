# Perfect Metabolism Website

## Overview

Premium, luxurious single-page website for Perfect Metabolism — India's most advanced medical weight loss and aesthetics clinic led by Dr. Nihara Sudarshan.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React + Vite + Tailwind CSS + Framer Motion
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Design System

- **Color Palette**:
  - Background: #F5F0E8 (Warm Cream)
  - Primary text: #1C1C1A (Near Black)
  - Gold accent: #C9A96E (Warm Gold)
  - Subheadings: #8A8A85 (Warm Mid-Grey)
  - Nav items: #4A4A45 (Dark Warm Grey)
  - Badge buttons: #B89A6A (Muted Gold Tan)
- **Typography**: Georgia (serif headings) + Helvetica Neue / Arial (body)
- **Aesthetic**: Luxury medical wellness, inspired by Skinney Medspa

## Key Files

- `artifacts/perfect-metabolism/src/pages/Home.tsx` — Main landing page
- `artifacts/perfect-metabolism/src/index.css` — Theme/color configuration
- `artifacts/perfect-metabolism/public/` — Doctor image and generated treatment images

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
