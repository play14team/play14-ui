---
agent: "agent"
model: Claude Haiku 4.5 (copilot)
tools: ["codebase", "search", "usages", "edit"]
description: "Refactor code to improve maintainability, performance, and readability"
---

# Refactor Code

Improve code quality through systematic refactoring while maintaining functionality and following project patterns.

## Refactoring Strategy

### Before Starting

1. **Understand the current code** - Analyze existing functionality and patterns
2. **Identify pain points** - Look for code smells, duplication, and complexity
3. **Plan incrementally** - Break large refactoring into smaller, safe steps
4. **Ensure tests exist** - Verify test coverage before making changes

## Common Refactoring Patterns

### Component Refactoring

#### Extract Components

```tsx
// Before: Large component with multiple responsibilities
export default function EventDetails({ event }: { event: Event }) {
  return (
    <div>
      <div className="event-header">
        <h1>{event.name}</h1>
        <img src={event.image} alt={event.name} />
        <p>{formatDate(event.start, event.end, event.timezone)}</p>
      </div>
      <div className="event-description">
        <div dangerouslySetInnerHTML={{ __html: event.description }} />
      </div>
      <div className="event-venue">
        <h3>Venue</h3>
        <p>{event.venue?.name}</p>
        <p>{event.venue?.address}</p>
      </div>
    </div>
  )
}

// After: Extracted into focused components
export default function EventDetails({ event }: { event: Event }) {
  return (
    <div>
      <EventHeader event={event} />
      <EventDescription description={event.description} />
      <EventVenue venue={event.venue} />
    </div>
  )
}
```

#### Extract Custom Hooks

```tsx
// Before: Logic mixed in component
function EventList() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchEvents()
      .then(setEvents)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  return (
    // JSX
  )
}

// After: Logic extracted to custom hook
function useEvents() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchEvents()
      .then(setEvents)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  return { events, loading, error }
}

function EventList() {
  const { events, loading, error } = useEvents()

  return (
    // JSX
  )
}
```

### Server Action Refactoring

#### Extract Common Patterns

```typescript
// Before: Duplicated error handling
export async function getEvents(page: number, pageSize: number) {
  try {
    return await query({
      query: EventsDocument,
      variables: { page, pageSize },
    })
  } catch (error) {
    console.error("Failed to fetch events:", error)
    throw error
  }
}

export async function getEvent(slug: string) {
  try {
    const response = await query({
      query: EventDocument,
      variables: { slug },
    })
    return response.events?.data[0].attributes as Event
  } catch (error) {
    console.error("Failed to fetch event:", error)
    throw error
  }
}

// After: Common error handling extracted
async function queryWithErrorHandling<T>(
  queryDoc: DocumentNode,
  variables: any,
  errorMessage: string,
): Promise<T> {
  try {
    return await query({ query: queryDoc, variables })
  } catch (error) {
    console.error(errorMessage, error)
    throw error
  }
}

export async function getEvents(page: number, pageSize: number) {
  return queryWithErrorHandling(
    EventsDocument,
    { page, pageSize },
    "Failed to fetch events",
  )
}

export async function getEvent(slug: string) {
  const response = await queryWithErrorHandling(
    EventDocument,
    { slug },
    "Failed to fetch event",
  )
  return response.events?.data[0].attributes as Event
}
```

### Type Improvements

#### Better Type Definitions

```typescript
// Before: Loose typing
interface ComponentProps {
  data: any
  onClick: (item: any) => void
}

// After: Strict typing
interface ComponentProps<T> {
  data: T[]
  onClick: (item: T) => void
}

// Usage with specific types
interface EventListProps extends ComponentProps<Event> {
  filters?: EventFilters
}
```

### Performance Optimizations

#### Memoization

```tsx
// Before: Expensive recalculations on every render
function EventGrid({ events, filters }) {
  const filteredEvents = events.filter((event) =>
    matchesFilters(event, filters),
  )

  const sortedEvents = filteredEvents.sort(
    (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime(),
  )

  return (
    <div>
      {sortedEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  )
}

// After: Memoized calculations
function EventGrid({ events, filters }) {
  const filteredAndSortedEvents = useMemo(() => {
    const filtered = events.filter((event) => matchesFilters(event, filters))
    return filtered.sort(
      (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime(),
    )
  }, [events, filters])

  return (
    <div>
      {filteredAndSortedEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  )
}
```

## Refactoring Checklist

### Safety Measures

- [ ] Run existing tests before changes
- [ ] Make one small change at a time
- [ ] Run tests after each change
- [ ] Commit frequently with descriptive messages

### Code Quality

- [ ] Reduce complexity and nesting
- [ ] Eliminate code duplication
- [ ] Improve naming and clarity
- [ ] Follow established patterns
- [ ] Enhance type safety

### Performance

- [ ] Identify and fix performance bottlenecks
- [ ] Add appropriate memoization
- [ ] Optimize re-rendering patterns
- [ ] Reduce bundle size where possible

### Maintainability

- [ ] Extract reusable components and hooks
- [ ] Improve code organization
- [ ] Add or update documentation
- [ ] Enhance error handling
