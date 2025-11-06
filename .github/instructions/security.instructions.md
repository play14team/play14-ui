---
description: "Security best practices and OWASP guidelines for web applications"
applyTo: "**"
---

# Security Instructions

## General Security Principles

### Defense in Depth

- Implement multiple layers of security controls
- Never rely on a single security mechanism
- Validate data at every boundary (client, server, database)
- Use the principle of least privilege for all access controls

### Input Validation and Sanitization

- Validate all user inputs on both client and server sides
- Use allow-lists rather than block-lists for input validation
- Sanitize data before storing or displaying
- Use parameterized queries to prevent SQL injection
- Validate file uploads (type, size, content)

## OWASP Top 10 Protection

### A01: Broken Access Control

- Implement proper authentication and authorization
- Verify user permissions for every protected resource
- Use role-based access control (RBAC) where appropriate
- Protect against privilege escalation attacks

### A02: Cryptographic Failures

- Use strong encryption algorithms (AES-256, RSA-2048+)
- Never store passwords in plain text; use proper hashing (bcrypt, scrypt, Argon2)
- Use HTTPS for all data transmission
- Implement proper key management and rotation

### A03: Injection

- Use parameterized queries and prepared statements
- Validate and sanitize all inputs
- Use Content Security Policy (CSP) to prevent XSS
- Escape output data based on context (HTML, JavaScript, CSS, URL)

### A04: Insecure Design

- Follow secure coding practices from the start
- Implement threat modeling for new features
- Use established security patterns and libraries
- Regular security code reviews and testing

### A05: Security Misconfiguration

- Remove or disable unnecessary features and services
- Keep all software components up to date
- Use security headers (CSP, HSTS, X-Frame-Options)
- Implement proper error handling without information disclosure

## Authentication and Authorization

### Password Security

- Enforce strong password policies
- Implement account lockout mechanisms
- Use multi-factor authentication (MFA) when possible
- Implement secure password reset mechanisms

### Session Management

- Use secure session tokens (random, long, complex)
- Implement proper session timeout and invalidation
- Use secure cookies (HttpOnly, Secure, SameSite)
- Protect against session fixation and hijacking

### API Security

- Use proper authentication for all API endpoints
- Implement rate limiting and throttling
- Validate API inputs thoroughly
- Use CORS policies appropriately
- Implement proper API versioning and deprecation

## Data Protection

### Sensitive Data Handling

- Identify and classify sensitive data
- Encrypt sensitive data at rest and in transit
- Implement data masking for non-production environments
- Use secure methods for data deletion

### Privacy Compliance

- Follow GDPR, CCPA, and other relevant privacy regulations
- Implement proper consent mechanisms
- Provide data portability and deletion capabilities
- Maintain audit logs for data access and modifications

## Client-Side Security

### Cross-Site Scripting (XSS) Prevention

- Use framework-provided XSS protection mechanisms
- Implement Content Security Policy (CSP)
- Validate and escape all user-generated content
- Use trusted types where available

### Cross-Site Request Forgery (CSRF) Protection

- Use CSRF tokens for state-changing operations
- Implement SameSite cookie attributes
- Verify origin and referer headers
- Use double-submit cookie pattern where appropriate

## Infrastructure Security

### Network Security

- Use HTTPS everywhere
- Implement proper firewall rules
- Use VPNs for remote access
- Monitor network traffic for anomalies

### Dependency Management

- Keep all dependencies up to date
- Regularly audit dependencies for vulnerabilities
- Use software composition analysis (SCA) tools
- Implement dependency pinning and lock files

### Logging and Monitoring

- Log security-relevant events
- Implement real-time security monitoring
- Set up alerting for suspicious activities
- Regular security audits and penetration testing
