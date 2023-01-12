import { CodegenConfig } from "@graphql-codegen/cli";

const STRAPI_SERVER =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

const config: CodegenConfig = {
  overwrite: true,
  schema: STRAPI_SERVER + "/graphql",
  documents: ["pages/**/*.tsx", "components/**/*.tsx"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./models/": {
      preset: "client",
      plugins: [
        {
          add: {
            content: "/* eslint-disable */",
          },
        },
        "typescript",
        // "typescript-resolvers"
      ],
    },
  },
};

export default config;
