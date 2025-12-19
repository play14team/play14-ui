# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**play14-ui** is a Next.js 16 App Router application for the #play14 global community platform. It fetches content from a **Strapi CMS GraphQL API** and displays events, games, articles, and player profiles with server-side rendering and client-side interactivity.

**Tech Stack:** Next.js 16.0.8 (App Router) • React 19 • TypeScript 5.9 • Apollo Client • Strapi GraphQL API • SCSS • Mapbox • Azure Static Web Apps

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

# GraphQL Type Generation (CRITICAL - run after editing .graphql files)
pnpm run codegen            # Generate TypeScript types from GraphQL queries
pnpm run codegen-watch      # Watch mode for continuous type generation
```

## Architecture: GraphQL → Server Actions → Components

### Data Flow Pattern

1. **GraphQL Queries** → `src/graphql/{domain}/*.graphql` (e.g., `events/grid.graphql`)
2. **Code Generation** → Run `pnpm run codegen` to generate types in `src/models/`
3. **Server Actions** → `*.action.ts` files with `"use server"` wrap queries using Apollo Client
4. **Components** → Import and call server actions directly (React Server Component pattern)

**Example:**

```typescript
// 1. src/graphql/events/grid.graphql defines EventsDocument
// 2. src/components/events/get.action.ts exports:
export async function getEvents(page: number, pageSize: number) {
  return await query({ query: EventsDocument, variables: { page, pageSize } })
}
// 3. src/app/events/page.tsx calls getEvents() directly
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
├── graphql/{domain}/          # GraphQL queries (.graphql files)
├── libs/                      # Utilities (apollo-client, dates, arrays, safe-actions)
├── models/                    # Generated types (DO NOT EDIT - run codegen)
├── hooks/                     # Custom React hooks (useIntersection)
└── styles/                    # SCSS, CSS, fonts, images
```

## Critical Workflows

### Adding/Modifying GraphQL Queries

1. Edit `.graphql` files in `src/graphql/{domain}/`
2. **MUST RUN:** `pnpm run codegen` to regenerate types
3. Import generated documents from `@/models/graphql`
4. Use in server actions via `query()` helper from `@/libs/apollo-client`

### Creating New Features

1. Add GraphQL query: `src/graphql/{domain}/feature-name.graphql`
2. Run `pnpm run codegen`
3. Create server action: `src/components/{domain}/get.action.ts`
4. Build component: `src/components/{domain}/feature-name.tsx`
5. Use in route: `src/app/{domain}/page.tsx`

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

Import from `@/libs/apollo-client`:

- `dataAs<T>()` - Extract typed data from GraphQL response
- `dataAsArrayOf<T>()` - Extract typed array from response
- `attributesAs<T>()` - Extract Strapi attributes
- `getPagination()` - Extract pagination metadata

## Path Aliases (tsconfig.json)

Always use `@/*` imports:

- `@/components` → src/components
- `@/models` → src/models (generated types)
- `@/libs` → src/libs
- `@/graphql` → src/graphql
- `@/hooks` → src/hooks

## File Naming Conventions

- Components: `PascalCase.tsx` (`Navbar.tsx`, `GameGrid.tsx`)
- Server actions: `get.action.ts` (consistent naming across domains)
- GraphQL queries: `kebab-case.graphql` (`grid.graphql`, `details.graphql`)
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

1. **Never edit generated files** - `src/models/` is overwritten by codegen
2. **Missing codegen** - Type errors after GraphQL changes? Run `pnpm run codegen`
3. **Wrong directive** - Use `"use server"` in `*.action.ts`, `"use client"` for interactive components
4. **Cache issues** - Server components cache by default; set `revalidate` or `dynamic` exports as needed
5. **Image domains** - Remote images must be configured in `next.config.js` remotePatterns

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
  3. Run `pnpm run codegen`
  4. Run `pnpm run lint`
  5. Run `pnpm run build`
  6. Deploy to Azure

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
