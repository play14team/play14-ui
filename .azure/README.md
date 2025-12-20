# Azure Container Apps Deployment

This directory contains Azure Container Apps deployment configuration and documentation.

## Quick Start

### For First-Time Setup

Follow the complete setup guide: [SETUP.md](./SETUP.md)

### For Developers

Once Azure resources are configured, the deployment is fully automated:

1. **Create a Pull Request** → Automatically deploys to acceptance environment
2. **Merge to main** → Will deploy to production (after production workflow is created)

## Files

- **SETUP.md** - Complete Azure Container Apps setup guide with CLI commands
- **README.md** - This file

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     GitHub Actions                          │
│  ┌────────────┐       ┌────────────┐                       │
│  │   PR Open  │       │   Merge    │                       │
│  │  /Update   │       │  to Main   │                       │
│  └─────┬──────┘       └─────┬──────┘                       │
│        │                    │                               │
└────────┼────────────────────┼───────────────────────────────┘
         │                    │
         ▼                    ▼
┌─────────────────────────────────────────────────────────────┐
│            Azure Container Registry                         │
│                                                             │
│  play14containerregistry.azurecr.io/play14-ui:pr-X-{sha}  │
│  play14containerregistry.azurecr.io/play14-ui:prod-{sha}  │
└─────────────────────────────────────────────────────────────┘
         │                    │
         ▼                    ▼
┌──────────────────┐  ┌──────────────────┐
│  Container App   │  │  Container App   │
│  (Acceptance)    │  │  (Production)    │
│                  │  │                  │
│  play14-ui-acc   │  │  play14-ui-prod  │
│  Min: 1          │  │  Min: 2          │
│  Max: 3          │  │  Max: 10         │
│  CPU: 0.5        │  │  CPU: 1.0        │
│  Memory: 1Gi     │  │  Memory: 2Gi     │
└──────────────────┘  └──────────────────┘
         │                    │
         ▼                    ▼
┌──────────────────┐  ┌──────────────────┐
│   Strapi CMS     │  │   Strapi CMS     │
│   (Acceptance)   │  │   (Production)   │
│                  │  │                  │
│  community.acc.  │  │  community.      │
│  play14.org      │  │  play14.org      │
└──────────────────┘  └──────────────────┘
```

## Deployment Workflow

### Acceptance (PR Preview)

**Trigger:** Pull request opened, updated, or reopened against `main`

**Workflow:** `.github/workflows/azure-container-apps-acceptance.yml`

**Steps:**

1. ✅ Code quality checks (lint, typecheck)
2. 🔐 Authenticate with Azure (OIDC)
3. 🏗️ Build Docker image with build args:
   - `STRAPI_API_URL=https://community-acc.play14.org/`
   - `STRAPI_API_SECRET` (from secret)
   - `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN` (from secret)
4. 📦 Push to Azure Container Registry
5. 🚀 Deploy to `play14-ui-acc` container app
6. 🏥 Health check on `/api/health`
7. 💬 Comment PR with deployment URL

**Result:** Each PR gets a unique deployment on the shared acceptance environment

### Production

**Trigger:** Push to `main` branch (workflow to be created)

**Workflow:** TBD - will follow same pattern as acceptance

## Environment Variables

### Build-time (Docker ARG)

Set during image build:

- `STRAPI_API_URL` - Backend API URL (baked into static assets)
- `STRAPI_API_SECRET` - Server-side auth token
- `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN` - Client-side Mapbox key

### Runtime (Container App Secrets)

Stored securely in Azure Container Apps:

- `strapi-api-secret` - Referenced as `secretref:strapi-api-secret`
- `mapbox-token` - Referenced as `secretref:mapbox-token`

## Monitoring

### View Logs

```bash
# Acceptance
az containerapp logs show \
  --name play14-ui-acc \
  --resource-group play14-community \
  --follow

# Production
az containerapp logs show \
  --name play14-ui-prod \
  --resource-group play14-community \
  --follow
```

### Check Health

```bash
# Get URL
URL=$(az containerapp show \
  --name play14-ui-acc \
  --resource-group play14-community \
  --query properties.configuration.ingress.fqdn \
  --output tsv)

# Test health endpoint
curl https://${URL}/api/health
```

### View Revisions

```bash
az containerapp revision list \
  --name play14-ui-acc \
  --resource-group play14-community \
  --output table
```

## Troubleshooting

### Deployment Failed

Check GitHub Actions logs and Container App logs:

```bash
az containerapp logs show \
  --name play14-ui-acc \
  --resource-group play14-community \
  --tail 100
```

### App Not Responding

1. Check revision status:

   ```bash
   az containerapp revision list \
     --name play14-ui-acc \
     --resource-group play14-community
   ```

2. Check replica status:

   ```bash
   az containerapp replica list \
     --name play14-ui-acc \
     --resource-group play14-community \
     --revision {revision-name}
   ```

3. Restart the app:
   ```bash
   az containerapp restart \
     --name play14-ui-acc \
     --resource-group play14-community
   ```

### Update Secrets

```bash
az containerapp secret set \
  --name play14-ui-acc \
  --resource-group play14-community \
  --secrets \
    strapi-api-secret={new-value} \
    mapbox-token={new-value}

# Restart to pick up new secrets
az containerapp restart \
  --name play14-ui-acc \
  --resource-group play14-community
```

## Cost Optimization

**Acceptance:**

- Scale to zero when not in use: `--min-replicas 0`
- Use consumption plan
- Delete old revisions: `az containerapp revision deactivate`

**Production:**

- Keep minimum replicas for availability
- Use autoscaling based on HTTP requests
- Monitor and adjust resource limits

## Security Best Practices

✅ **Implemented:**

- OIDC authentication (no stored credentials)
- Secrets stored in Azure Container Apps
- Non-root container user (UID 1001)
- Minimal container image (~150MB)
- Health checks enabled

🔒 **Recommended:**

- Enable container app authentication (Azure AD)
- Use managed identity for Strapi communication
- Implement rate limiting
- Enable Azure Front Door for DDoS protection
- Use Azure Key Vault for secret management

## Next Steps

1. ✅ Set up Azure resources (see [SETUP.md](./SETUP.md))
2. ✅ Configure GitHub secrets
3. ✅ Test acceptance deployment with a PR
4. ⏳ Create production deployment workflow
5. ⏳ Set up custom domain names
6. ⏳ Configure monitoring alerts
7. ⏳ Implement blue-green deployment strategy

## Support

- [Azure Container Apps Docs](https://learn.microsoft.com/azure/container-apps/)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [GitHub Actions Azure Login](https://github.com/marketplace/actions/azure-login)
