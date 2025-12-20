---
agent: agent
model: Claude Haiku 4.5 (copilot)
tools: ["codebase", "search", "usages", "problems", "runTests"]
description: "Systematic debugging assistance to identify and resolve issues"
---

# Debug Issue

Systematically identify, analyze, and resolve bugs in the application following a structured debugging approach.

## Debugging Process

### Phase 1: Problem Assessment

#### Gather Context

1. **Understand the issue**:
   - What is the expected behavior?
   - What is actually happening?
   - When did this issue start occurring?
   - Is it reproducible consistently?

2. **Examine error information**:
   - Read stack traces and error messages carefully
   - Look for patterns in error logs
   - Check browser console for client-side errors
   - Review server logs for API/server-side issues

3. **Document the problem**:
   - Steps to reproduce the issue
   - Environment details (browser, device, network)
   - Screenshots or recordings if applicable

#### Reproduction Steps

```typescript
// Example bug report format
const bugReport = {
  title: "Event calendar not displaying upcoming events",
  environment: {
    browser: "Chrome 118",
    device: "Desktop",
    url: "/events/calendar",
  },
  stepsToReproduce: [
    "1. Navigate to /events/calendar",
    "2. Select 'Upcoming Events' filter",
    "3. Observe empty calendar display",
  ],
  expectedResult: "Calendar should show upcoming events",
  actualResult: "Calendar displays no events",
  errorMessages: [
    "TypeError: Cannot read properties of undefined (reading 'data')",
  ],
}
```

### Phase 2: Investigation

#### Root Cause Analysis

1. **Trace execution path**:
   - Follow the code from user action to error
   - Identify where the failure occurs
   - Check data flow and transformations

2. **Common issue patterns**:
   - Null/undefined reference errors
   - Async timing issues
   - Type mismatches
   - Missing error handling
   - Incorrect API responses

#### Investigation Techniques

```typescript
// Add debugging logs
console.log("Events data:", events)
console.log("Pagination:", pagination)
console.log("API response:", response)

// Check data types and shapes
console.log("Type of events:", typeof events)
console.log("Events is array:", Array.isArray(events))
console.log("Events length:", events?.length)

// Verify assumptions
if (!events) {
  console.error("Events data is missing")
  return
}
```

### Phase 3: Common Bug Categories

#### REST API/Data Fetching Issues

```typescript
// Common issues and solutions

// Issue: Undefined data access
const events = response.events?.data // ❌ Might be undefined
const events = response.events?.data || [] // ✅ Safe fallback

// Issue: Missing error handling
export async function getEvents(page: number) {
  const result = await query({ query: EventsDocument, variables: { page } })
  return result.events.data // ❌ No error handling
}

// Solution: Proper error handling
export async function getEvents(page: number) {
  try {
    const result = await query({ query: EventsDocument, variables: { page } })
    return result.events?.data || []
  } catch (error) {
    console.error("Failed to fetch events:", error)
    throw new Error("Unable to load events")
  }
}
```

#### React Component Issues

```typescript
// Issue: Missing dependency in useEffect
useEffect(() => {
  fetchEvents(filters)
}, []) // ❌ Missing filters dependency

// Solution: Include all dependencies
useEffect(() => {
  fetchEvents(filters)
}, [filters]) // ✅ Correct dependencies

// Issue: State update after unmount
useEffect(() => {
  fetchEvents().then(setEvents) // ❌ Component might unmount
}, [])

// Solution: Cleanup and cancellation
useEffect(() => {
  let cancelled = false

  fetchEvents().then((data) => {
    if (!cancelled) {
      setEvents(data)
    }
  })

  return () => {
    cancelled = true
  }
}, [])
```

#### TypeScript Type Issues

```typescript
// Issue: Type assertion without validation
const event = response.events.data[0] as Event // ❌ Unsafe assertion

// Solution: Type guards and validation
function isEvent(obj: any): obj is Event {
  return obj && typeof obj.name === "string" && obj.start
}

const eventData = response.events?.data?.[0]
if (isEvent(eventData)) {
  const event: Event = eventData // ✅ Safe typing
}
```

#### Next.js Specific Issues

```typescript
// Issue: Client/Server hydration mismatch
export default function EventList() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true) // ❌ Causes hydration mismatch
  }, [])

  if (!mounted) return null

  return <ClientOnlyComponent />
}

// Solution: Proper SSR handling
export default function EventList() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ClientOnlyComponent />
    </Suspense>
  )
}
```

### Phase 4: Resolution and Testing

#### Fix Implementation

1. **Make minimal changes**: Address the root cause without unnecessary modifications
2. **Follow patterns**: Use existing patterns and conventions
3. **Add safeguards**: Implement proper error handling and validation
4. **Consider edge cases**: Think about boundary conditions and error scenarios

#### Verification Process

```typescript
// Test the fix
// 1. Reproduce original issue
// 2. Apply fix
// 3. Verify issue is resolved
// 4. Test related functionality
// 5. Run automated tests
```

#### Prevention Measures

```typescript
// Add TypeScript strict checks
// Enable ESLint rules for common issues
// Add error boundaries for React components
// Implement proper loading and error states
// Add comprehensive tests for bug scenarios
```

## Debugging Tools and Techniques

### Browser DevTools

- Use Console for logging and debugging
- Network tab for API request analysis
- React DevTools for component inspection
- Performance tab for performance issues

### VS Code Debugging

- Set breakpoints in code
- Step through execution
- Inspect variable values
- Use debug console for evaluation

### Testing for Debugging

```typescript
// Write tests that reproduce the bug
test('should handle empty events response', () => {
  const emptyResponse = { events: { data: [] } }

  render(<EventList response={emptyResponse} />)

  expect(screen.getByText('No events found')).toBeInTheDocument()
})
```

## Post-Resolution

### Documentation

- Document the issue and solution
- Update code comments if needed
- Share knowledge with team
- Consider adding to troubleshooting guide

### Follow-up

- Monitor for similar issues
- Consider architectural improvements
- Update testing to prevent regression
- Review code review process if needed
