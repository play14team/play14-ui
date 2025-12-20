# Azure Container Apps - Quick Start Guide

## TL;DR

Run these commands to set up the acceptance environment:

```bash
# 1. Create the container app (replace placeholders with actual values)
az containerapp create \
  --name play14-ui-acc \
  --resource-group play14-community \
  --environment play14-container-env \
  --image mcr.microsoft.com/k8se/quickstart:latest \
  --target-port 3000 \
  --ingress external \
  --min-replicas 1 \
  --max-replicas 1 \
  --cpu 0.5 \
  --memory 1Gi \
  --secrets \
    strapi-api-secret=YOUR_STRAPI_SECRET \
    mapbox-token=YOUR_MAPBOX_TOKEN \
  --env-vars \
    STRAPI_API_URL=https://community-acc.play14.org/ \
    STRAPI_API_SECRET=secretref:strapi-api-secret \
    NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=secretref:mapbox-token

# 2. Create service principal for GitHub Actions
SUBSCRIPTION_ID=$(az account show --query id -o tsv)

az ad sp create-for-rbac \
  --name "play14-github-actions" \
  --role contributor \
  --scopes "/subscriptions/${SUBSCRIPTION_ID}/resourceGroups/play14-community" \
  --json-auth

# 3. Grant ACR push permission
az role assignment create \
  --assignee CLIENT_ID_FROM_STEP_2 \
  --role AcrPush \
  --scope "/subscriptions/${SUBSCRIPTION_ID}/resourceGroups/play14-community/providers/Microsoft.ContainerRegistry/registries/play14containerregistry"

# 4. Set up OIDC for GitHub (get app object ID first)
APP_OBJECT_ID=$(az ad app list --display-name "play14-github-actions" --query "[0].id" -o tsv)

# Add federated credential for PRs
az ad app federated-credential create \
  --id $APP_OBJECT_ID \
  --parameters '{
    "name": "play14-ui-pr",
    "issuer": "https://token.actions.githubusercontent.com",
    "subject": "repo:play14team/play14-ui:pull_request",
    "audiences": ["api://AzureADTokenExchange"]
  }'

# Add federated credential for main branch
az ad app federated-credential create \
  --id $APP_OBJECT_ID \
  --parameters '{
    "name": "play14-ui-main",
    "issuer": "https://token.actions.githubusercontent.com",
    "subject": "repo:play14team/play14-ui:ref:refs/heads/main",
    "audiences": ["api://AzureADTokenExchange"]
  }'
```

## GitHub Secrets to Add

Go to: `https://github.com/play14team/play14-ui/settings/secrets/actions`

Add these secrets:

| Secret Name                       | Where to get it                      |
| --------------------------------- | ------------------------------------ |
| `AZURE_CLIENT_ID`                 | From step 2 output: `clientId`       |
| `AZURE_TENANT_ID`                 | From step 2 output: `tenantId`       |
| `AZURE_SUBSCRIPTION_ID`           | From step 2 output: `subscriptionId` |
| `STRAPI_API_SECRET`               | Your Strapi API authentication token |
| `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN` | Your Mapbox API key                  |

## Verify Deployment

```bash
# Get the container app URL
az containerapp show \
  --name play14-ui-acc \
  --resource-group play14-community \
  --query properties.configuration.ingress.fqdn \
  --output tsv

# Test the health endpoint
curl https://$(az containerapp show --name play14-ui-acc --resource-group play14-community --query properties.configuration.ingress.fqdn -o tsv)/api/health
```

## Test the Workflow

1. Create a test PR
2. Watch GitHub Actions: `https://github.com/play14team/play14-ui/actions`
3. Check the PR for a comment with the deployment URL

## Common Issues

### "Container app not found"

Make sure you ran step 1 to create the container app first.

### "Authentication failed"

- Verify GitHub secrets are set correctly
- Check OIDC federated credentials are created (step 4)

### "Permission denied on ACR"

Run step 3 to grant ACR push permission to the service principal.

### "Deployment succeeds but app doesn't work"

- Check secrets are set correctly in the container app
- View logs: `az containerapp logs show --name play14-ui-acc --resource-group play14-community --follow`

## Existing Azure Resources

✅ Already created (don't need to create these):

- **Resource Group:** `play14-community`
- **Container Registry:** `play14containerregistry.azurecr.io`
- **Container Apps Environment:** `play14-container-env`

## Next Steps After Setup

1. Test deployment by creating a PR
2. Once acceptance works, create production container app
3. Set up custom domain (optional)
4. Configure monitoring alerts (optional)

## Full Documentation

- [SETUP.md](./SETUP.md) - Complete setup guide with explanations
- [README.md](./README.md) - Architecture and monitoring guide
