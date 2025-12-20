---
agent: agent
model: Claude Haiku 4.5 (copilot)
tools: ["codebase", "search", "usages"]
description: "Generate a new React component based on project patterns"
---

# Create React Component

You are tasked with creating a new React component for this Next.js project. Follow the established patterns and conventions.

## Before You Start

1. **Understand the project structure** - Examine existing components in `src/components/` to understand naming conventions and patterns
2. **Check for similar components** - Look for existing components that serve similar purposes
3. **Understand the domain** - Determine which domain folder (`events/`, `games/`, `articles/`, `players/`) this component belongs to

## Requirements

Ask for the following information if not provided:

- Component name and purpose
- Which domain/folder it belongs to
- Props and functionality needed
- Whether it should be a Server Component or Client Component

## Implementation Steps

1. **Create the component file** in the appropriate domain folder (`src/components/{domain}/`)
2. **Follow naming conventions**:
   - Use PascalCase for component names
   - File name should match component name
   - Use descriptive, domain-specific names

3. **Implement proper TypeScript**:
   - Define interfaces for props
   - Use proper return types
   - Follow existing type patterns

4. **Follow React patterns**:
   - Use functional components with hooks
   - Implement proper error boundaries if needed
   - Add `"use client"` directive if component needs interactivity

5. **Add proper styling**:
   - Use existing CSS classes from `src/styles/scss/`
   - Follow Bootstrap conventions
   - Maintain responsive design patterns

6. **Consider integration**:
   - How will this component integrate with existing server actions?
   - Does it need to fetch data from the Strapi REST API?
   - Should it use existing utility functions from `src/libs/`?

## Component Template

For Server Components (default):

```tsx
interface ComponentNameProps {
  // Define props here
}

export default function ComponentName({ prop1, prop2 }: ComponentNameProps) {
  return <div className="existing-css-class">{/* Component JSX */}</div>
}
```

For Client Components (interactive):

```tsx
"use client"

import { useState } from "react"

interface ComponentNameProps {
  // Define props here
}

export default function ComponentName({ prop1, prop2 }: ComponentNameProps) {
  const [state, setState] = useState(initialValue)

  return <div className="existing-css-class">{/* Interactive JSX */}</div>
}
```

## Final Steps

1. **Test the component** - Ensure it renders correctly and functions as expected
2. **Update imports** - Add any necessary imports to parent components
3. **Check accessibility** - Verify proper semantic HTML and ARIA attributes
4. **Document usage** - Add JSDoc comments for complex components
