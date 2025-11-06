---
description: "Documentation standards and best practices"
applyTo: "**"
---

# Documentation Instructions

## Documentation Philosophy

### Purpose-Driven Documentation

- Write documentation that serves a specific purpose
- Focus on user needs and common use cases
- Keep documentation up-to-date with code changes
- Make documentation discoverable and accessible

### Documentation Types

- **README**: Project overview, setup, and basic usage
- **API Documentation**: Function signatures, parameters, and examples
- **Code Comments**: Inline explanations for complex logic
- **Architecture Docs**: High-level system design and patterns
- **User Guides**: Step-by-step instructions for common tasks

## Code Documentation

### JSDoc Standards

- Document all public APIs with JSDoc comments
- Include parameter types, return types, and descriptions
- Provide usage examples for complex functions
- Document any side effects or important behavior

````typescript
/**
 * Calculates the total price including tax and discounts
 * @param basePrice - The base price before tax and discounts
 * @param taxRate - Tax rate as a decimal (e.g., 0.08 for 8%)
 * @param discountPercent - Discount percentage as a number (e.g., 10 for 10%)
 * @returns The final price after applying tax and discounts
 * @example
 * ```typescript
 * const total = calculateTotalPrice(100, 0.08, 10);
 * // Returns 97.2 (100 - 10% discount = 90, + 8% tax = 97.2)
 * ```
 */
````

### Inline Comments

- Explain the "why" behind complex logic, not just the "what"
- Use comments to clarify business rules and requirements
- Document any workarounds or temporary solutions
- Keep comments concise and relevant

### Component Documentation

- Document component props and their purposes
- Explain component behavior and usage patterns
- Provide examples of common use cases
- Document any accessibility considerations

## Project Documentation

### README Structure

- Project description and purpose
- Prerequisites and system requirements
- Installation and setup instructions
- Basic usage examples
- Configuration options
- Contributing guidelines
- License information

### Architecture Documentation

- System overview and high-level architecture
- Key design decisions and rationale
- Component relationships and data flow
- External dependencies and integrations
- Deployment and infrastructure details

### API Documentation

- Complete endpoint documentation
- Request/response examples
- Error handling and status codes
- Authentication and authorization requirements
- Rate limiting and usage guidelines

## Maintenance and Updates

### Documentation Lifecycle

- Create documentation alongside feature development
- Update documentation during code reviews
- Regular documentation audits and cleanup
- Version documentation with code releases

### Quality Standards

- Use clear, concise language
- Provide practical examples
- Include relevant diagrams and visuals
- Test documentation accuracy regularly

### Accessibility

- Use proper heading hierarchy
- Provide alt text for images and diagrams
- Ensure documentation is screen reader friendly
- Use sufficient color contrast for text

## Tools and Formats

### Markdown Standards

- Use consistent formatting and structure
- Implement proper heading hierarchy
- Include table of contents for long documents
- Use code blocks with appropriate language tags

### Diagram and Visuals

- Create diagrams for complex system interactions
- Use screenshots for UI-related documentation
- Keep visuals up-to-date with interface changes
- Provide alternative text descriptions
