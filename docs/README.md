# OpenAPI Types Generation

This directory contains the OpenAPI specification from Strapi, used to generate TypeScript types.

## Setup

1. **Generate the OpenAPI spec from Strapi backend:**

   ```bash
   # In your Strapi project directory
   yarn strapi openapi generate --output ./specification.json
   # or
   npm run strapi openapi generate --output ./specification.json
   ```

2. **Copy the specification to this directory:**

   ```bash
   cp /path/to/strapi/specification.json ./openapi/
   ```

3. **Generate TypeScript types:**

   ```bash
   bun run codegen:rest
   ```

   This will create `src/models/strapi.d.ts` with all the types.

## Updating Types

Whenever you make changes to content types in Strapi:

1. Regenerate the OpenAPI spec in Strapi
2. Copy the new `specification.json` here
3. Run `bun run codegen:rest`

## Notes

- The generated types are placed in `src/models/strapi.d.ts`
- The OpenAPI generation feature in Strapi 5 is experimental
- For more info, see: https://docs.strapi.io/cms/api/openapi
