# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**play14-ui** is a Next.js 16 App Router application for the #play14 global community platform. It fetches content from a **Strapi 5 CMS REST API** and displays events, games, articles, and player profiles with server-side rendering and client-side interactivity.

**Tech Stack:** Next.js 16.0.8 (App Router) • React 19 • TypeScript 5.9 • Strapi 5 REST API • SCSS • Mapbox • Azure Static Web Apps

**Package Manager:** `pnpm` (version 10.15.1 - pinned in package.json)

## Essential Commands

```bash
# Development
pnpm dev                    # Start dev server with Turbopack at http://localhost:3000
pnpm run build              # Production build (standalone output)
pnpm start                  # Run production server

# Code Quality
pnpm run lint               # ESLint check
pnpm run format             # Prettier format all files
```

## Architecture: REST API → Server Actions → Components

### Data Flow Pattern

1. **Server Actions** → `*.action.ts` files with `"use server"` fetch data from Strapi 5 REST API
2. **Components** → Import and call server actions directly (React Server Component pattern)

**Example:**

```typescript
// 1. src/components/events/get.action.ts exports:
export async function getEvents(page: number, pageSize: number) {
  const response = await fetch(
    `${STRAPI_API_URL}/api/events?pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
  )
  return await response.json()
}
// 2. src/app/events/page.tsx calls getEvents() directly
```

### Server/Client Component Boundaries

- **Server Components (default):** Pages, layouts, data-fetching components
- **Client Components (`"use client"`):** Interactive UI like `load-more.tsx`, `navbar.tsx`, `map/index.tsx`
- **Server Actions (`"use server"`):** All `*.action.ts` files

### Directory Structure

```
src/
├── app/{domain}/              # Next.js routes (page.tsx, [slug]/page.tsx)
├── components/{domain}/       # Domain components + get.action.ts
├── libs/                      # Utilities (fetch helpers, dates, arrays, safe-actions)
├── models/                    # TypeScript types and interfaces
├── hooks/                     # Custom React hooks (useIntersection)
└── styles/                    # SCSS, CSS, fonts, images
```

## Critical Workflows

### Creating New Features

1. Create server action: `src/components/{domain}/get.action.ts`
   - Use `fetch` to call Strapi 5 REST API endpoints
   - Handle errors appropriately
   - Return typed data
2. Build component: `src/components/{domain}/feature-name.tsx`
3. Use in route: `src/app/{domain}/page.tsx`

### Working with Strapi 5 REST API

- **Base URL:** `STRAPI_API_URL` environment variable
- **Authentication:** Use `STRAPI_API_SECRET` for server-side requests
- **Endpoints:** Follow Strapi 5 REST API conventions
  - Collections: `/api/{collection-name}`
  - Single entries: `/api/{collection-name}/{id}`
  - Query parameters: `?populate=*&filters[field][$eq]=value`
- **Response format:** Strapi 5 JSON API format with `data`, `meta`, and `attributes`

### Styling Approach

- **NO Tailwind or CSS Modules** - uses traditional SCSS + Bootstrap-like utilities
- Global styles: `src/styles/main.scss`
- Component styles: Reuse classes from `src/styles/scss/`
- Responsive: Use existing breakpoints in `responsive.scss`
- **SCSS Module System:** Uses modern `@use` for SCSS files, `@import` for plain CSS files
  - SCSS modules (\*.scss): Use `@use "path/to/file.scss"`
  - CSS files (\*.css): Use `@import "path/to/file.css"`

## Environment Variables

### Required Variables

```bash
# Backend API
STRAPI_API_URL=https://community.play14.org    # Production CMS endpoint
STRAPI_API_SECRET=<token>                      # Server-side auth token

# Map Integration
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=<token>        # Client-side Mapbox API key

# Optional
NEXT_PUBLIC_WEB_VITALS=true                    # Enable Web Vitals reporting
```

### Local Development

```bash
STRAPI_API_URL=http://localhost:1337           # Local Strapi instance
STRAPI_API_SECRET=<token>                      # Local auth token
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=<token>        # Mapbox key
```

## Type Safety Helpers

- Define TypeScript interfaces in `@/models/` for Strapi response types
- Use type assertions when working with API responses
- Validate data shape in server actions before returning to components

## Path Aliases (tsconfig.json)

Always use `@/*` imports:

- `@/components` → src/components
- `@/models` → src/models
- `@/libs` → src/libs
- `@/hooks` → src/hooks

## File Naming Conventions

- Components: `PascalCase.tsx` (`Navbar.tsx`, `GameGrid.tsx`)
- Server actions: `get.action.ts` (consistent naming across domains)
- Utilities: `camelCase.ts`
- Route params: Use `SlugParamsProps` from `@/libs/slug-params` for `[slug]` routes

## Important Patterns

### Pagination & Infinite Scroll

All list pages use the `load-more.tsx` pattern:

- Initial server render with page 1
- Client component observes intersection (`useIntersection` hook)
- Calls server action to load next page
- Recursively renders `<LoadMore>` for subsequent pages

### Date Handling

- Use `moment` + `moment-timezone` (configured globally)
- Helper: `formatDate()` from `@/libs/dates`
- All events include `timezone` field from Strapi

### Maps & Geolocation

- Mapbox GL JS via `react-map-gl`
- Components: `src/components/map/index.tsx`, `src/components/events/map.tsx`
- Geocoding: `@mapbox/mapbox-sdk`

## Common Pitfalls

1. **Wrong directive** - Use `"use server"` in `*.action.ts`, `"use client"` for interactive components
2. **Cache issues** - Server components cache by default; set `revalidate` or `dynamic` exports as needed
3. **Image domains** - Remote images must be configured in `next.config.js` remotePatterns
4. **API errors** - Always handle fetch errors and check response status codes
5. **Environment variables** - Server-side variables (without `NEXT_PUBLIC_`) only available in server components and actions

## Next.js Configuration

### Output Mode

- `output: "standalone"` - Optimized for containerization/Azure deployment
- Produces minimal production build

### Image Configuration

Remote patterns configured for:

- `cdn.play14.org` (Azure CDN)
- `play14-cdn.azureedge.net` (Azure CDN fallback)
- `localhost:1337` (local development)

### Development Mode

Uses **Turbopack** for faster builds (`next dev --turbopack`)

## Testing

**Status:** No testing framework currently configured. No test files exist.

## Deployment

- **Platform:** Azure Static Web Apps
- **Node Version:** 20
- **Build Output:** Standalone
- **CI/CD:** GitHub Actions (`.github/workflows/`)
- **Deployment Flow:**
  1. Install pnpm
  2. Install dependencies
  3. Run `pnpm run lint` (quality job)
  4. Run `pnpm run typecheck` (quality job)
  5. Set backend URL (acceptance for PRs, production for main)
  6. Run `pnpm run build`
  7. Deploy to Azure Static Web Apps

## Git Workflow

- **Default branch:** `main`
- **Current branch:** `strapi5`
- **Pre-commit:** Husky + lint-staged runs Prettier on all files
- **Code quality:** ESLint + Prettier configured

## Authentication & Authorization

**Status:** Not implemented yet. Placeholder exists in `src/libs/safe-actions.ts` for future session-based auth middleware using `next-safe-action`.

## Code Quality Rules (Codacy Integration)

When using Codacy MCP Server:

- Provider: `gh`
- Organization: `play14team`
- Repository: `play14-ui`

**CRITICAL:** After editing files or installing dependencies, run Codacy CLI analysis immediately.
