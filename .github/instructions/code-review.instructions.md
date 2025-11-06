---
description: "Code review standards and GitHub review guidelines"
applyTo: "**"
---

# Code Review Instructions

## Code Review Philosophy

### Goals of Code Review

- Ensure code quality and maintainability
- Share knowledge and best practices across the team
- Catch bugs and potential issues early
- Maintain consistent coding standards
- Improve overall system architecture

### Review Mindset

- Be constructive and respectful in feedback
- Focus on the code, not the person
- Explain reasoning behind suggestions
- Acknowledge good practices and improvements
- Ask questions to understand intent when unclear

## Review Process

### Before Submitting for Review

- Self-review your changes thoroughly
- Ensure all tests pass locally
- Run linting and formatting tools
- Update documentation as needed
- Write clear commit messages and PR descriptions

### Review Scope and Focus

- **Functionality**: Does the code do what it's supposed to do?
- **Design**: Is the code well-structured and maintainable?
- **Complexity**: Is the code as simple as it can be?
- **Tests**: Are there appropriate tests for the changes?
- **Security**: Are there any security vulnerabilities?
- **Performance**: Will the changes impact performance?

### Review Guidelines

#### What to Look For

- Logical errors and edge cases
- Code that doesn't follow established patterns
- Missing error handling
- Security vulnerabilities
- Performance issues
- Unclear or missing documentation
- Inconsistent formatting or style

#### Review Priorities

1. **Critical**: Security issues, bugs, breaking changes
2. **Important**: Design problems, maintainability issues
3. **Minor**: Style suggestions, minor optimizations
4. **Nit**: Very minor style or preference issues

## GitHub Review Best Practices

### Pull Request Guidelines

- Use clear, descriptive PR titles
- Write comprehensive PR descriptions
- Link related issues and documentation
- Include screenshots for UI changes
- Break large changes into smaller, focused PRs

### Review Comments

- Use GitHub's suggestion feature for small changes
- Prefix comments with priority indicators (Critical, Important, Minor, Nit)
- Provide specific examples and alternatives
- Ask questions to understand unclear code
- Acknowledge positive aspects of the code

### Approval Criteria

- All critical and important issues are addressed
- Tests pass and cover new functionality
- Documentation is updated appropriately
- Code follows established patterns and standards
- No obvious security or performance issues

## Common Review Areas

### Code Quality

- Function and variable naming clarity
- Code duplication and reusability
- Proper error handling and logging
- Appropriate use of design patterns
- SOLID principles adherence

### React/Next.js Specific

- Proper use of hooks and lifecycle methods
- Component composition and reusability
- State management patterns
- Performance optimization (memo, useMemo, useCallback)
- Accessibility considerations

### TypeScript Specific

- Proper type definitions and interfaces
- Avoiding `any` type usage
- Generic usage and type safety
- Proper error type handling

### Testing

- Test coverage for new functionality
- Test quality and maintainability
- Edge case coverage
- Mock usage and test isolation

## Review Response Guidelines

### As a Code Author

- Respond to all review comments
- Clarify intent when questioned
- Be open to feedback and suggestions
- Make requested changes promptly
- Thank reviewers for their time and input

### As a Reviewer

- Provide timely reviews (within 1-2 business days)
- Be specific and actionable in feedback
- Suggest solutions, not just problems
- Follow up on previous review rounds
- Approve when all concerns are addressed

## Automated Review Tools

### Integration with CI/CD

- Automated linting and formatting checks
- Test coverage reporting
- Security vulnerability scanning
- Performance impact analysis
- Dependency vulnerability checks

### Tool Configuration

- ESLint and Prettier for code style
- Jest for test coverage
- SonarQube or similar for code quality metrics
- Dependabot for dependency updates
