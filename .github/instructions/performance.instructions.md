---
description: "Performance optimization guidelines for web applications"
applyTo: "**"
---

# Performance Instructions

## Core Performance Principles

### Performance Budget

- Set performance budgets for bundle sizes, load times, and runtime metrics
- Monitor Core Web Vitals (LCP, FID, CLS)
- Aim for sub-3-second load times on mobile networks
- Target 60fps for animations and interactions

### Measurement and Monitoring

- Use performance profiling tools regularly
- Implement real user monitoring (RUM)
- Set up performance alerts and regression detection
- Test performance across different devices and network conditions

## Loading Performance

### Bundle Optimization

- Implement code splitting and lazy loading
- Use tree shaking to eliminate dead code
- Optimize bundle sizes with webpack-bundle-analyzer or similar tools
- Implement proper caching strategies

### Image Optimization

- Use Next.js Image component for automatic optimization
- Implement responsive images with appropriate sizes
- Use modern image formats (WebP, AVIF) with fallbacks
- Implement lazy loading for images below the fold

### Font Optimization

- Use Next.js Font optimization features
- Implement font-display: swap for web fonts
- Preload critical fonts
- Minimize the number of font variants

### Critical Resource Loading

- Inline critical CSS
- Preload important resources
- Use resource hints (dns-prefetch, preconnect)
- Implement service workers for caching

## Runtime Performance

### React Performance

- Use React.memo for expensive components
- Implement useMemo and useCallback judiciously
- Avoid unnecessary re-renders through proper state management
- Use React Profiler to identify performance bottlenecks

### JavaScript Performance

- Minimize main thread blocking
- Use requestAnimationFrame for animations
- Implement debouncing and throttling for frequent operations
- Avoid memory leaks through proper cleanup

### CSS Performance

- Minimize CSS selector complexity
- Use CSS containment for isolated components
- Implement efficient animations with transform and opacity
- Avoid layout thrashing

## Data Loading Performance

### API Optimization

- Implement request batching and caching
- Use GraphQL query optimization
- Implement proper pagination
- Use compression for API responses

### State Management

- Minimize state updates and re-renders
- Use efficient data structures
- Implement proper state normalization
- Cache computed values appropriately

### Offline Performance

- Implement service workers for offline functionality
- Use proper caching strategies
- Implement background sync for data updates
- Provide meaningful offline experiences

## Monitoring and Analysis

### Performance Metrics

- Monitor First Contentful Paint (FCP)
- Track Largest Contentful Paint (LCP)
- Measure Cumulative Layout Shift (CLS)
- Monitor Time to Interactive (TTI)

### Profiling Tools

- Use React DevTools Profiler
- Implement Chrome DevTools performance analysis
- Use Lighthouse for comprehensive audits
- Set up continuous performance monitoring

### Performance Regression Detection

- Implement performance testing in CI/CD
- Set up alerts for performance degradation
- Regular performance audits and optimization
- Performance impact assessment for new features
