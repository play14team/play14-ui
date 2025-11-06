---
description: "Testing standards and best practices for comprehensive test coverage"
applyTo: "**/*.test.ts, **/*.test.tsx, **/*.spec.ts, **/*.spec.tsx"
---

# Testing Instructions

## Testing Strategy

### Test Types

- **Unit Tests**: Test individual components, functions, and modules in isolation
- **Integration Tests**: Test interactions between components and services
- **End-to-End Tests**: Test complete user workflows and application behavior
- **Visual Regression Tests**: Test UI appearance and layout consistency

### Testing Framework

- Use Jest as the primary testing framework for unit and integration tests
- Use React Testing Library for component testing (focus on user behavior)
- Use Playwright for end-to-end testing
- Avoid implementation details testing; focus on behavior and user interactions

## Test Organization

### File Structure

- Co-locate test files with the code they test when possible
- Use `.test.ts` or `.test.tsx` extensions for Jest tests
- Use `.spec.ts` for Playwright specifications
- Group related tests in `__tests__` directories for complex modules

### Test Naming

- Use descriptive test names that explain the expected behavior
- Follow the pattern: `describe('ComponentName', () => { it('should do something when condition', () => {}) })`
- Use nested describe blocks to group related functionality
- Start test descriptions with "should" to clarify expectations

## Testing Best Practices

### Component Testing

- Test user interactions, not implementation details
- Query elements by accessibility roles, labels, or text content
- Use `userEvent` for realistic user interactions
- Test error states, loading states, and edge cases
- Verify accessibility features and keyboard navigation

### Mocking Strategy

- Mock external dependencies (APIs, databases, file systems)
- Use `jest.mock()` for module-level mocks
- Use `jest.spyOn()` for specific function mocks
- Reset mocks between tests with `jest.resetAllMocks()` in `afterEach`
- Mock only what's necessary; prefer real implementations when possible

### Async Testing

- Always use async/await or return promises in async tests
- Use `waitFor` for elements that appear asynchronously
- Set appropriate timeouts for slow operations
- Test loading states and error handling in async operations

### Data Management

- Use factory functions or fixtures for test data
- Keep test data minimal and focused on the specific test case
- Use realistic but anonymized data
- Clean up test data after each test

## Code Coverage

### Coverage Goals

- Aim for 80% code coverage as a minimum baseline
- Focus on covering critical business logic and user paths
- Don't sacrifice test quality for coverage numbers
- Identify and address coverage gaps in critical functionality

### Coverage Reporting

- Generate coverage reports as part of CI/CD pipeline
- Review coverage trends over time
- Use coverage to identify untested code paths
- Exclude generated files and vendor code from coverage reports

## Testing Patterns

### Arrange-Act-Assert

- Structure tests with clear setup, execution, and verification phases
- Keep each phase distinct and well-organized
- Use descriptive variable names for test data and expected results

### Test Data Builders

- Create builder functions for complex test objects
- Use default values with override capabilities
- Make test data creation reusable across multiple tests

### Custom Matchers

- Create custom Jest matchers for domain-specific assertions
- Improve test readability with expressive matchers
- Document custom matchers for team usage

## Performance Testing

### Load Testing

- Test component performance with large datasets
- Verify memory usage and cleanup
- Test scroll performance and virtual rendering
- Profile component rendering times

### Bundle Testing

- Verify code splitting and lazy loading
- Test bundle size impacts of new features
- Monitor dependency sizes and updates
