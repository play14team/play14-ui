# Play14 UI - AI Coding Instructions

## Project Overview

This is a **Next.js 15 App Router** application for the #play14 community platform, fetching content from a **Strapi CMS GraphQL API**. The app showcases events, games, articles, and players with server-side rendering and client-side interactivity.

## Architecture & Key Patterns

### Data Flow: Strapi GraphQL → Server Actions → Components

1. **GraphQL queries** live in `src/graphql/{domain}/*.graphql` (e.g., `events/grid.graphql`, `games/details.graphql`)
2. Run `bun run codegen` to generate TypeScript types in `src/models/` from these queries
3. **Server Actions** (`*.action.ts` files with `"use server"`) wrap queries using `src/libs/apollo-client.ts`
4. Components import and call these actions directly (RSC pattern)

Example pattern:

```typescript
// src/graphql/events/grid.graphql defines EventsDocument
// src/components/events/get.action.ts exports:
export async function getEvents(page: number, pageSize: number) {
  return await query({ query: EventsDocument, variables: { page, pageSize } })
}
// src/app/events/page.tsx calls getEvents() directly
```

### Client/Server Boundaries

- **Server Components** (default): Pages, layouts, data-fetching components
- **Client Components** (`"use client"`): Interactive features like `load-more.tsx` (infinite scroll), `navbar.tsx`, `map/index.tsx`, `ical.tsx`
- **Server Actions** (`"use server"`): All `*.action.ts` files in component directories

### Component Organization

```
src/
  app/{domain}/              # Routes (page.tsx, layout.tsx, [slug]/page.tsx)
  components/{domain}/       # Domain-specific components + get.action.ts
  graphql/{domain}/          # GraphQL queries (.graphql files)
  libs/                      # Shared utilities (apollo-client, dates, arrays)
  models/                    # Generated types (DO NOT EDIT - run codegen)
```

## Essential Commands

```bash
bun run dev           # Start dev server (uses Turbopack)
bun run codegen       # Regenerate GraphQL types after editing .graphql files
bun run build         # Production build
bun run lint          # ESLint check
bun run format        # Prettier format
```

## Critical Environment Variables

### Production

```
STRAPI_API_URL=https://community.play14.org   # Strapi GraphQL endpoint
STRAPI_API_SECRET=<token>                     # Auth token for server queries
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=<token>       # Mapbox API key for maps/geocoding
NEXT_PUBLIC_WEB_VITALS=true                   # Optional: Enable Web Vitals reporting
```

### Local Development

```
STRAPI_API_URL=http://localhost:1337          # Local Strapi instance
STRAPI_API_SECRET=<token>                     # Auth token for local Strapi
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=<token>       # Mapbox API key
```

## Development Workflow

### Adding/Modifying GraphQL Queries

1. Edit `.graphql` files in `src/graphql/{domain}/`
2. Run `bun run codegen` to update types
3. Import generated documents from `@/models/graphql`
4. Use in server actions via `query()` helper

### Creating New Features

1. Add GraphQL query in `src/graphql/{domain}/your-feature.graphql`
2. Run codegen
3. Create server action in `src/components/{domain}/get.action.ts`
4. Build component in `src/components/{domain}/your-feature.tsx`
5. Use in route at `src/app/{domain}/page.tsx`

### Styling

- Global styles: `src/styles/main.scss` (imports Bootstrap, custom SCSS, Font Awesome)
- Component styles: Use existing CSS classes from `src/styles/scss/`
- NO Tailwind or CSS Modules - project uses traditional SCSS + Bootstrap

### Pagination & Infinite Scroll

All list pages (events, games, articles, players) use the `load-more.tsx` pattern:

- Initial server render with page 1
- Client component observes intersection (`useIntersection` hook)
- Calls server action to load next page
- Recursively renders `<LoadMore>` for subsequent pages

## Project-Specific Conventions

### File Naming

- Server actions: `get.action.ts` (consistent across all domains)
- GraphQL queries: Descriptive names (`grid.graphql`, `details.graphql`, `slugs.graphql`)
- Route params: Use `SlugParamsProps` from `@/libs/slug-params` for `[slug]` routes

### Type Handling

- Import types from `@/models/graphql` (generated code)
- Use helper functions from `src/libs/apollo-client.ts`:
  - `dataAs<T>()`, `dataAsArrayOf<T>()` - Extract typed data
  - `attributesAs<T>()` - Extract attributes from Strapi response
  - `getPagination()` - Extract pagination metadata

### Date Formatting

- Use `moment` + `moment-timezone` (already configured)
- Helper: `formatDate()` from `@/libs/dates.ts`
- All events have `timezone` field from Strapi

### Maps & Geolocation

- Mapbox GL JS integration via `react-map-gl`
- Requires `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN` environment variable
- See `src/components/map/index.tsx` and `src/components/events/map.tsx`
- Geocoding via `@mapbox/mapbox-sdk`

### Authentication

- **TODO**: Authentication is not yet implemented
- Placeholder exists in `src/libs/safe-actions.ts` for future session-based auth middleware
- See commented code for next-safe-action middleware pattern

### Testing

- **No tests currently exist** in this project
- Testing framework has not been set up yet

## Common Pitfalls

1. **Editing generated files** - Never modify `src/models/` files; they're overwritten by codegen
2. **Missing codegen run** - Type errors after GraphQL changes? Run `bun run codegen`
3. **Wrong directive** - Use `"use server"` in `*.action.ts`, `"use client"` in interactive components
4. **Cache issues** - Server components cache by default; set `revalidate` or `dynamic` exports as needed
5. **Path aliases** - Always use `@/*` imports (configured in `tsconfig.json`)

## Deployment

- Target: Azure Static Web Apps
- Node runtime: 20 (see `staticwebapp.config.json`)
- Build output: `standalone` (see `next.config.js`)
- CI/CD: GitHub Actions (`.github/workflows/`)
