import { CodegenConfig } from "@graphql-codegen/cli"

const SERVER = process.env.STRAPI_API_URL || "http://localhost:1337"

const config: CodegenConfig = {
  overwrite: true,
  schema: SERVER + "/graphql",
  documents: ["src/graphql/**/*.graphql"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "src/models/": {
      preset: "client",
      plugins: [
        {
          add: {
            content: "/* tslint:disable */",
          },
        },
      ],
    },
  },
}

export default config
