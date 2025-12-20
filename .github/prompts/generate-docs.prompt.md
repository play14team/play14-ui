---
agent: "agent"
model: Claude Haiku 4.5 (copilot)
tools: ["codebase", "search", "usages"]
description: "Generate comprehensive documentation for code and APIs"
---

# Generate Documentation

Create comprehensive, user-friendly documentation for components, functions, and APIs following the project's documentation standards.

## Documentation Types

### Component Documentation

Generate complete documentation for React components including props, usage examples, and behavior descriptions.

#### Component Documentation Template

````typescript
/**
 * EventCard - Displays event information in a card format
 *
 * @component
 * @example
 * ```tsx
 * <EventCard
 *   event={event}
 *   showStatus={true}
 *   onClick={(event) => navigateToEvent(event.slug)}
 * />
 * ```
 */
interface EventCardProps {
  /** Event data to display */
  event: Event
  /** Whether to show event status badge */
  showStatus?: boolean
  /** Callback fired when card is clicked */
  onClick?: (event: Event) => void
  /** Additional CSS classes */
  className?: string
}

export default function EventCard({
  event,
  showStatus = false,
  onClick,
  className,
}: EventCardProps) {
  // Component implementation
}
````

### API Documentation

Document server actions, utility functions, and REST API integrations.

#### Server Action Documentation

````typescript
/**
 * Fetches paginated events from the Strapi CMS
 *
 * @param page - Page number (1-based)
 * @param pageSize - Number of events per page
 * @param filters - Optional filters for events
 * @returns Promise containing events data and pagination info
 *
 * @example
 * ```typescript
 * const result = await getEvents(1, 10, { status: 'upcoming' })
 * const events = result.events?.data
 * const pagination = result.events?.meta.pagination
 * ```
 *
 * @throws {Error} When API request fails
 */
export async function getEvents(
  page: number,
  pageSize: number,
  filters?: EventFilters,
) {
  // Implementation
}
````

### README Documentation

Generate or update README files for the project or specific modules.

#### README Structure

````markdown
# Project Name

Brief description of what this project/module does.

## Features

- Key feature 1
- Key feature 2
- Key feature 3

## Installation

```bash
pnpm install
```
````

## Usage

Basic usage example:

```typescript
import { ComponentName } from './component-name'

function App() {
  return <ComponentName prop1="value" />
}
```

## API Reference

### Components

#### ComponentName

Description of the component.

**Props:**

| Prop  | Type   | Default | Description          |
| ----- | ------ | ------- | -------------------- |
| prop1 | string | -       | Description of prop1 |
| prop2 | number | 0       | Description of prop2 |

**Example:**

```tsx
<ComponentName prop1="example" prop2={42} />
```

## Configuration

Environment variables and configuration options.

## Contributing

Guidelines for contributing to the project.

````

### Architecture Documentation
Document system design, data flow, and architectural decisions.

#### Architecture Doc Template
```markdown
# Architecture Overview

## System Design

High-level description of the system architecture.

## Data Flow

1. User interacts with UI components
2. Components call server actions
3. Server actions fetch data from Strapi 5 REST API
4. Data flows back through the chain
5. UI updates with new data

## Key Patterns

### Server/Client Component Pattern
- Server Components handle data fetching and initial rendering
- Client Components handle user interactions and state

### REST API Integration
- Server actions use fetch to call Strapi 5 REST API endpoints
- TypeScript interfaces define response types
- Server actions handle data transformation and error handling

## Directory Structure

````

src/
├── app/ # Next.js App Router routes
├── components/ # Reusable UI components and server actions
├── libs/ # Utility libraries
├── models/ # TypeScript type definitions
└── hooks/ # Custom React hooks

```

## External Dependencies

### Strapi CMS
- Content management system
- GraphQL API endpoint
- Authentication via API tokens

### Mapbox
- Map visualization
- Geocoding services
- Requires API token

## Deployment

Information about deployment process and infrastructure.
```

## Documentation Generation Process

### Step 1: Analyze Code

- Examine existing code structure and patterns
- Identify components, functions, and APIs to document
- Understand the purpose and usage of each element

### Step 2: Generate Content

- Write clear, concise descriptions
- Include practical usage examples
- Document all parameters and return values
- Add error handling information

### Step 3: Format and Structure

- Use consistent formatting and style
- Follow JSDoc standards for inline documentation
- Use Markdown for standalone documentation
- Include code examples with proper syntax highlighting

### Step 4: Validate and Review

- Ensure examples are accurate and runnable
- Verify all parameters and types are documented
- Check for clarity and completeness
- Review for consistency with existing documentation

## Documentation Standards

### Writing Style

- Use clear, concise language
- Write from the user's perspective
- Include practical examples
- Explain the "why" behind complex decisions

### Code Examples

- Provide complete, runnable examples
- Use realistic data and scenarios
- Include error handling where appropriate
- Show both basic and advanced usage

### Maintenance

- Update documentation with code changes
- Review documentation during code reviews
- Keep examples current and working
- Remove or update deprecated information
