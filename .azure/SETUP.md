# Azure Container Apps Setup Guide

This guide walks you through setting up Azure Container Apps for the play14-ui application.

## Prerequisites

- Azure CLI installed (`az` command)
- Azure subscription with appropriate permissions
- GitHub repository with admin access

## Existing Azure Resources

The following resources already exist and will be used:

- **Resource Group:** `play14-community`
- **Container Registry:** `play14containerregistry.azurecr.io`
- **Container Apps Environment:** `play14-container-env`

## 1. Create Container App for Acceptance

```bash
az containerapp create \
  --name play14-ui-acc \
  --resource-group play14-community \
  --environment play14-container-env \
  --image mcr.microsoft.com/k8se/quickstart:latest \
  --target-port 3000 \
  --ingress external \
  --min-replicas 1 \
  --max-replicas 3 \
  --cpu 0.5 \
  --memory 1Gi \
  --secrets \
    strapi-api-secret=$STRAPI_API_SECRET \
    mapbox-token=$NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN \
  --env-vars \
    STRAPI_API_URL=https://community-acc.play14.org/ \
    STRAPI_API_SECRET=secretref:strapi-api-secret \
    NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=secretref:mapbox-token
```

**Note:** Replace the placeholder values above with your actual secrets:

- `$STRAPI_API_SECRET` - Your Strapi API secret token
- `$NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN` - Your Mapbox access token

## 2. Configure GitHub Secrets

### 2.1 Create Azure Service Principal for GitHub Actions

```bash
az ad sp create-for-rbac \
  --name "play14-github-actions" \
  --role contributor \
  --scopes /subscriptions/{subscription-id}/resourceGroups/play14-community \
  --json-auth
```

Save the output JSON. You'll need:

- `clientId` → `AZURE_CLIENT_ID`
- `clientSecret` → `AZURE_CLIENT_SECRET`
- `tenantId` → `AZURE_TENANT_ID`
- `subscriptionId` → `AZURE_SUBSCRIPTION_ID`

### 2.2 Grant ACR Push Permission

```bash
az role assignment create \
  --assignee {clientId-from-above} \
  --role AcrPush \
  --scope /subscriptions/{subscription-id}/resourceGroups/play14-community/providers/Microsoft.ContainerRegistry/registries/play14containerregistry
```

### 2.3 Add GitHub Secrets

Go to your GitHub repository → Settings → Secrets and variables → Actions, and add:

| Secret Name                       | Value             | Description                     |
| --------------------------------- | ----------------- | ------------------------------- |
| `AZURE_CLIENT_ID`                 | From step 2.1     | Service principal client ID     |
| `AZURE_TENANT_ID`                 | From step 2.1     | Azure AD tenant ID              |
| `AZURE_SUBSCRIPTION_ID`           | From step 2.1     | Azure subscription ID           |
| `STRAPI_API_SECRET`               | Your Strapi token | Strapi API authentication token |
| `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN` | Your Mapbox token | Mapbox API key                  |

**Note:** For OIDC authentication, you don't need `AZURE_CLIENT_SECRET`. The workflow uses workload identity federation.

## 3. Configure OIDC Federation (Recommended)

This allows GitHub Actions to authenticate without storing credentials:

```bash
# Get the application object ID
APP_OBJECT_ID=$(az ad app list --display-name "play14-github-actions" --query "[0].id" -o tsv)

# Add federated credential for pull requests
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

## 4. Update Container App Secrets (if needed)

To update secrets after initial creation:

```bash
# Update Strapi API secret
az containerapp secret set \
  --name play14-ui-acc \
  --resource-group play14-community \
  --secrets strapi-api-secret={new-value}

# Update Mapbox token
az containerapp secret set \
  --name play14-ui-acc \
  --resource-group play14-community \
  --secrets mapbox-token={new-value}
```

## 5. Verify Deployment

After the workflow runs, verify the deployment:

```bash
# Get the Container App URL
az containerapp show \
  --name play14-ui-acc \
  --resource-group play14-community \
  --query properties.configuration.ingress.fqdn \
  --output tsv
```

Visit the URL and append `/api/health` to verify the health endpoint.

## 6. Create Production Container App

When ready for production, create a separate container app:

```bash
az containerapp create \
  --name play14-ui-prod \
  --resource-group play14-community \
  --environment play14-container-env \
  --image mcr.microsoft.com/k8se/quickstart:latest \
  --target-port 3000 \
  --ingress external \
  --min-replicas 2 \
  --max-replicas 10 \
  --cpu 1.0 \
  --memory 2Gi \
  --secrets \
    strapi-api-secret=$STRAPI_API_SECRET_PROD \
    mapbox-token=$NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN \
  --env-vars \
    STRAPI_API_URL=https://community.play14.org \
    STRAPI_API_SECRET=secretref:strapi-api-secret \
    NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=secretref:mapbox-token
```

## Monitoring and Logs

### View Container App Logs

```bash
az containerapp logs show \
  --name play14-ui-acc \
  --resource-group play14-community \
  --follow
```

### View Metrics

```bash
az containerapp show \
  --name play14-ui-acc \
  --resource-group play14-community \
  --query properties.template
```

### Set Up Log Analytics (Optional)

Container Apps automatically integrates with Azure Monitor. To view logs in Azure Portal:

1. Go to Azure Portal → Container Apps
2. Select your container app
3. Go to "Logs" or "Metrics" section

## Troubleshooting

### Issue: Deployment fails with authentication error

**Solution:** Verify the service principal has the correct permissions:

```bash
az role assignment list \
  --assignee {client-id} \
  --resource-group play14-community
```

### Issue: Container app shows unhealthy

**Solution:** Check logs and verify environment variables:

```bash
az containerapp logs show \
  --name play14-ui-acc \
  --resource-group play14-community \
  --tail 50
```

### Issue: Unable to access the app URL

**Solution:** Verify ingress configuration:

```bash
az containerapp ingress show \
  --name play14-ui-acc \
  --resource-group play14-community
```

## Cost Optimization

- **Development/Acceptance:** Use `--min-replicas 1 --max-replicas 3` with smaller resources
- **Production:** Use `--min-replicas 2 --max-replicas 10` for high availability
- **Scale to Zero:** For dev environments, you can scale to 0: `--min-replicas 0`

## References

- [Azure Container Apps Documentation](https://learn.microsoft.com/azure/container-apps/)
- [GitHub Actions Azure Login](https://github.com/marketplace/actions/azure-login)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
