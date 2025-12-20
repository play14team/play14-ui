## <!-- Based on: https://github.com/github/awesome-copilot/blob/main/prompts/javascript-typescript-jest.prompt.md -->

description: 'Best practices for writing JavaScript/TypeScript tests using Jest, including mocking strategies, test structure, and common patterns.'
mode: 'agent'
model: Claude Sonnet 4
tools: ['codebase', 'search', 'usages', 'runTests']

---

# Write Tests

Generate comprehensive tests for components and functions using Jest and React Testing Library.

## Test Strategy

### Test Structure

- Name test files with `.test.ts` or `.test.tsx` suffix
- Place test files next to the code they test
- Use descriptive test names that explain the expected behavior
- Use nested describe blocks to organize related tests
- Follow the pattern: `describe('Component/Function/Class', () => { it('should do something', () => {}) })`

### Testing Approach

- Test user behavior, not implementation details
- Focus on component interactions and state changes
- Test error states, loading states, and edge cases
- Verify accessibility features

## React Component Testing

### Query Strategy

- Use React Testing Library queries by accessibility roles, labels, or text content
- Prefer `getByRole`, `getByLabelText`, `getByText` over `getByTestId`
- Use `userEvent` for realistic user interactions
- Use `waitFor` for asynchronous operations

### Example Component Test

```typescript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ComponentName from './component-name'

describe('ComponentName', () => {
  it('should render with required props', () => {
    render(<ComponentName prop1="value1" prop2="value2" />)

    expect(screen.getByText('Expected Text')).toBeInTheDocument()
  })

  it('should handle user interaction', async () => {
    const user = userEvent.setup()
    const mockCallback = jest.fn()

    render(<ComponentName onClick={mockCallback} />)

    await user.click(screen.getByRole('button', { name: /button text/i }))

    expect(mockCallback).toHaveBeenCalledTimes(1)
  })
})
```

## Server Action Testing

### Testing Server Actions

- Mock the fetch API and responses
- Test error handling and validation
- Verify correct data transformation

```typescript
import { getEvents } from "./get.action"

global.fetch = jest.fn()
const mockedFetch = jest.mocked(fetch)

describe("getEvents", () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it("should fetch events with correct parameters", async () => {
    const mockResponse = {
      data: [{ id: "1", attributes: { name: "Test Event" } }],
      meta: { pagination: { page: 1, pageSize: 10, total: 1 } },
    }

    mockedFetch.mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    } as Response)

    const result = await getEvents(1, 10)

    expect(mockedFetch).toHaveBeenCalledWith(
      expect.stringContaining("/api/events"),
    })
    expect(result).toEqual(mockResponse)
  })
})
```

## Effective Mocking

### Module Mocking

- Mock external dependencies (APIs, utilities)
- Use `jest.mock()` for module-level mocks
- Use `jest.spyOn()` for specific function mocks
- Reset mocks between tests with `jest.resetAllMocks()` in `afterEach`

### Next.js Specific Mocking

```typescript
// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
  useSearchParams: () => new URLSearchParams(),
}))

// Mock Next.js Image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: any) => <img src={src} alt={alt} {...props} />,
}))
```

## Testing Async Code

- Always use async/await or return promises in async tests
- Use `resolves`/`rejects` matchers for promises
- Set appropriate timeouts for slow tests
- Test loading states and error handling

## Common Jest Matchers

- Basic: `expect(value).toBe(expected)`, `expect(value).toEqual(expected)`
- Truthiness: `expect(value).toBeTruthy()`, `expect(value).toBeFalsy()`
- Numbers: `expect(value).toBeGreaterThan(3)`, `expect(value).toBeLessThanOrEqual(3)`
- Strings: `expect(value).toMatch(/pattern/)`, `expect(value).toContain('substring')`
- Arrays: `expect(array).toContain(item)`, `expect(array).toHaveLength(3)`
- Objects: `expect(object).toHaveProperty('key', value)`
- Mock functions: `expect(mockFn).toHaveBeenCalled()`, `expect(mockFn).toHaveBeenCalledWith(arg1, arg2)`
