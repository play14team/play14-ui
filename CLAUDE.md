# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**play14-ui** is a Next.js 16 App Router application for the #play14 global community platform. It fetches content from a **Strapi 5 CMS REST API** and displays events, games, articles, and player profiles with server-side rendering and client-side interactivity.

**Tech Stack:** Next.js 16.0.8 (App Router) • React 19 • TypeScript 5.9 • Strapi 5 REST API • SCSS • Mapbox • Azure Static Web Apps

**Package Manager:** `bun` (version 1.3.5 - pinned in package.json)

## Essential Commands

```bash
# Development
bun run dev                 # Start local dev server with Turbopack at http://localhost:3000

# Container Development (Podman/Docker)
bun run up                  # Start containerized dev environment (detached + logs)
bun run down                # Stop and remove containers
podman compose up           # Start containerized dev environment (foreground)
podman compose up --build   # Rebuild and start containers
podman compose logs -f app  # Follow container logs

# Production
bun run build               # Production build (standalone output)
bun run start               # Run production server

# Code Quality
bun run lint                # ESLint check
bun run format              # Prettier format all files
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

### Container Setup

**Prerequisites:**

- Strapi backend (`play14-api`) running in its own container
- Strapi must be using the `Play14-api` Docker network (created by play14-api compose)

**Quick Start:**

1. Create `.env.local` file with your environment variables (see `.env.example` for reference)
2. Start Strapi backend first (in play14-api directory): `podman compose up -d`
3. Start Next.js UI: `pnpm up`
4. Access the applications:
   - Next.js UI: http://localhost:3000
   - Strapi API: http://localhost:1337 (from play14-api)
   - Database Admin (Adminer): http://localhost:9090 (from play14-api)
5. Stop services: `pnpm down`

**The containerized setup includes:**

- **Next.js UI** with hot reload for all source code changes
- Shared Docker network (`Play14-api`) for communication with Strapi
- Persistent volumes for node_modules
- Health checks for container monitoring
- Automatic connection to Strapi via service name

**Important Notes:**

- **Separate compose files**: Each repository manages its own services
- **Shared network**: Next.js connects to the external `Play14-api` network
- **Service discovery**: Next.js reaches Strapi via `http://play14-api:1337`
- **Start order**: Start play14-api services first, then play14-ui
- **Scripts**:
  - `pnpm up` - Start containerized Next.js
  - `pnpm down` - Stop containerized Next.js
  - `pnpm dev` - Run Next.js locally (no container)

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

### Azure Container Apps (Primary)

The application is deployed to **Azure Container Apps** which supports all Next.js features including SSR, ISR, and dynamic routes.

**Environments:**

- **Acceptance (play14-ui-acc):** Deployed automatically on PR creation/updates
  - Backend: `https://community-acc.play14.org/`
  - Workflow: `.github/workflows/azure-container-apps-acceptance.yml`
- **Production (play14-ui-prod):** Deployed from main branch
  - Backend: `https://community.play14.org`
  - Workflow: TBD

**Setup Guide:** See [`.azure/SETUP.md`](.azure/SETUP.md) for complete Azure Container Apps setup instructions.

**Deployment Flow:**

1. Code quality checks (lint, typecheck)
2. Build Docker image with Next.js standalone output
3. Push to Azure Container Registry
4. Deploy to Azure Container Apps
5. Health check verification
6. PR comment with deployment URL (for PRs)

### Azure Static Web Apps (Legacy)

**Note:** Azure SWA doesn't support Next.js SSR and is being phased out. Existing deployment:

- **Production Workflow:** `.github/workflows/azure-static-web-apps-blue-stone-057ce2a03.yml`
- **PR Preview Workflow:** `.github/workflows/azure-swa-pr-preview.yml`
- **Limitation:** Incompatible with Next.js standalone output and dynamic routes

### Local Container Development

The application can be deployed as a containerized application using the production-optimized Dockerfile.

**Quick Start:**

```bash
# 1. Configure production environment
cp .env.production.example .env.production
# Edit .env.production with your production values

# 2. Build and run with Podman Compose
podman compose -f compose.prod.yaml up --build

# Or with Docker Compose
docker compose -f compose.prod.yaml up --build
```

**Production Features:**

- **Multi-stage build:** Optimized for minimal image size (~150MB)
- **Non-root user:** Runs as `nextjs` user (UID 1001) for security
- **Standalone output:** Self-contained deployment with all dependencies
- **Health checks:** Built-in health monitoring on `/api/health`
- **Resource limits:** Configurable CPU and memory constraints
- **Security hardening:** Read-only filesystem support, no-new-privileges

**Manual Build & Deploy:**

```bash
# Build production image
podman build -t play14-ui:latest \
  --build-arg STRAPI_API_URL=https://community.play14.org \
  --build-arg STRAPI_API_SECRET=your-secret \
  --build-arg NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your-token \
  -f Dockerfile .

# Run production container
podman run -d \
  --name play14-ui \
  -p 3000:3000 \
  --restart unless-stopped \
  play14-ui:latest
```

**Deployment Targets:**

- Container orchestration platforms (Kubernetes, OpenShift)
- Azure Container Instances
- Azure Container Apps
- Azure Kubernetes Service (AKS)
- Any container runtime (Podman, Docker, containerd)

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
