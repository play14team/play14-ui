# Container Deployment Guide

This guide covers deploying the play14-ui application using containers with Podman or Docker.

## Table of Contents

- [Development Setup](#development-setup)
- [Production Deployment](#production-deployment)
- [Container Architecture](#container-architecture)
- [Troubleshooting](#troubleshooting)

## Development Setup

### Prerequisites

- Podman or Docker installed
- Podman Compose or Docker Compose installed

### Quick Start

1. **Copy environment template:**

   ```bash
   cp .env.example .env
   ```

2. **Edit `.env` with your development values:**

   ```bash
   STRAPI_API_URL=http://localhost:1337
   STRAPI_API_SECRET=your-dev-secret
   NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your-mapbox-token
   ```

3. **Start development environment:**

   ```bash
   podman compose up
   ```

4. **Access the application:**
   - URL: http://localhost:3000
   - Hot reload enabled for all source code changes

### Development Features

- **Hot Reload:** Changes to `src/`, `public/`, config files trigger automatic rebuild
- **Persistent Dependencies:** `node_modules` stored in named volume for faster rebuilds
- **Health Checks:** Automatic monitoring of container health
- **Logs:** View with `podman compose logs -f`

### Development Commands

```bash
# Start containers
podman compose up

# Start in detached mode
podman compose up -d

# Rebuild containers
podman compose up --build

# Stop containers
podman compose down

# View logs
podman compose logs -f

# Execute commands in container
podman compose exec app bun run lint
podman compose exec app sh  # Interactive shell
```

## Production Deployment

### Prerequisites

- Podman or Docker installed
- Production environment variables ready

### Quick Start

1. **Copy production environment template:**

   ```bash
   cp .env.production.example .env.production
   ```

2. **Edit `.env.production` with your production values:**

   ```bash
   STRAPI_API_URL=https://community.play14.org
   STRAPI_API_SECRET=your-production-secret
   NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your-production-token
   NEXT_PUBLIC_WEB_VITALS=true
   ```

3. **Build and run production container:**

   ```bash
   podman compose -f compose.prod.yaml up --build -d
   ```

4. **Verify deployment:**

   ```bash
   # Check health endpoint
   curl http://localhost:3000/api/health

   # View logs
   podman compose -f compose.prod.yaml logs -f
   ```

### Production Build Options

#### Option 1: Using Compose (Recommended)

```bash
# Build and run
podman compose -f compose.prod.yaml up --build -d

# Stop
podman compose -f compose.prod.yaml down
```

#### Option 2: Manual Build

```bash
# Build image with build args
podman build -t play14-ui:latest \
  --build-arg STRAPI_API_URL=https://community.play14.org \
  --build-arg STRAPI_API_SECRET=your-secret \
  --build-arg NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your-token \
  -f Dockerfile .

# Run container
podman run -d \
  --name play14-ui \
  -p 3000:3000 \
  --restart unless-stopped \
  --env-file .env.production \
  play14-ui:latest

# Check status
podman ps
podman logs play14-ui
```

#### Option 3: With Custom Port

```bash
# Run on port 8080 instead of 3000
podman run -d \
  --name play14-ui \
  -p 8080:3000 \
  --restart unless-stopped \
  --env-file .env.production \
  play14-ui:latest
```

### Production Features

- **Multi-stage build:** Minimal image size (~150MB)
- **Security hardened:**
  - Non-root user (nextjs:1001)
  - Read-only filesystem support
  - No new privileges
  - Minimal attack surface
- **Health checks:** Built-in monitoring via `/api/health`
- **Resource limits:** CPU and memory constraints (configurable in compose.prod.yaml)
- **Automatic restart:** Unless manually stopped

## Container Architecture

### Development Container (Dockerfile.dev)

```
Base: oven/bun:1.3.5-alpine
Size: ~500MB (with dev dependencies)
Purpose: Development with hot reload
Entry: bun run develop
```

### Production Container (Dockerfile)

```
Stage 1 (deps): Install dependencies
Stage 2 (builder): Build Next.js application
Stage 3 (runner): Minimal runtime with standalone output

Base: node:20-alpine
Size: ~150MB
User: nextjs (UID 1001)
Entry: node server.js
```

### Volumes

**Development:**

- `./src:/app/src:z` - Source code (hot reload)
- `./public:/app/public:z` - Static assets
- `node_modules:/app/node_modules` - Persistent dependencies

**Production:**

- No volumes needed (standalone build)

### Ports

- **3000:** Application HTTP port
- Configurable via `-p` flag or compose port mapping

### Health Checks

The application includes a health check endpoint at `/api/health`:

```bash
# Check health
curl http://localhost:3000/api/health

# Response
{
  "status": "ok",
  "timestamp": "2024-01-20T10:30:00.000Z",
  "uptime": 123.456
}
```

Health checks run every 30 seconds with 3 retries and 10s timeout.

## Deployment Targets

### Container Orchestration

**Kubernetes / OpenShift:**

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: play14-ui
spec:
  replicas: 3
  template:
    spec:
      containers:
        - name: play14-ui
          image: play14-ui:latest
          ports:
            - containerPort: 3000
          env:
            - name: STRAPI_API_URL
              valueFrom:
                secretKeyRef:
                  name: play14-secrets
                  key: strapi-url
          livenessProbe:
            httpGet:
              path: /api/health
              port: 3000
            initialDelaySeconds: 40
            periodSeconds: 30
```

### Azure Container Instances

```bash
az container create \
  --resource-group play14-rg \
  --name play14-ui \
  --image play14-ui:latest \
  --dns-name-label play14-ui \
  --ports 3000 \
  --environment-variables \
    STRAPI_API_URL=https://community.play14.org \
    NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your-token \
  --secure-environment-variables \
    STRAPI_API_SECRET=your-secret
```

### Azure Container Apps

```bash
az containerapp create \
  --name play14-ui \
  --resource-group play14-rg \
  --environment play14-env \
  --image play14-ui:latest \
  --target-port 3000 \
  --ingress external \
  --env-vars \
    STRAPI_API_URL=https://community.play14.org \
    NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your-token \
  --secrets \
    strapi-secret=your-secret
```

## Troubleshooting

### Container won't start

```bash
# Check logs
podman logs play14-ui

# Check health
podman inspect play14-ui --format='{{.State.Health.Status}}'

# Run interactively for debugging
podman run -it --rm play14-ui:latest sh
```

### Build fails

```bash
# Clean build (no cache)
podman build --no-cache -t play14-ui:latest .

# Check build args
podman build --build-arg STRAPI_API_URL=https://example.com -t play14-ui:latest .

# Verify .dockerignore
cat .dockerignore
```

### Health check fails

```bash
# Test health endpoint manually
curl http://localhost:3000/api/health

# Check if app is listening
podman exec play14-ui netstat -tuln | grep 3000

# View full health check logs
podman inspect play14-ui | grep -A 10 Health
```

### Permission issues

```bash
# Verify SELinux labels on volumes (Linux with SELinux)
ls -Z /path/to/volume

# Fix volume permissions
podman unshare chown -R 1001:1001 /path/to/volume
```

### High memory usage

```bash
# Check resource usage
podman stats play14-ui

# Adjust limits in compose.prod.yaml
deploy:
  resources:
    limits:
      cpus: '1'
      memory: 1G
```

### Environment variables not loaded

```bash
# Verify env vars in container
podman exec play14-ui env | grep STRAPI

# Check .env file
cat .env.production

# Pass env vars explicitly
podman run --env STRAPI_API_URL=https://example.com ...
```

## Security Considerations

1. **Never commit `.env` or `.env.production`** - Use examples only
2. **Use secrets management** for production credentials
3. **Scan images** for vulnerabilities:
   ```bash
   podman scan play14-ui:latest
   ```
4. **Keep base images updated:**
   ```bash
   podman pull node:20-alpine
   podman build --pull -t play14-ui:latest .
   ```
5. **Use TLS termination** at reverse proxy/load balancer level

## Performance Optimization

1. **Use CDN** for static assets
2. **Enable caching** at reverse proxy level
3. **Scale horizontally** with multiple containers
4. **Monitor metrics:**
   ```bash
   # Prometheus metrics endpoint
   curl http://localhost:3000/api/metrics
   ```
5. **Adjust resource limits** based on load testing

## Additional Resources

- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Podman Documentation](https://docs.podman.io/)
- [Docker Documentation](https://docs.docker.com/)
- [Next.js Standalone Output](https://nextjs.org/docs/advanced-features/output-file-tracing)
