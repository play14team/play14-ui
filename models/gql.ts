/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
  "\n  fragment EventItem on Event {\n    slug\n    name\n    start\n    end\n    status\n    images {\n      data {\n        attributes {\n          name\n          url\n        }\n      }\n    }\n    location {\n      data {\n        attributes {\n          name\n          country\n        }\n      }\n    }\n  }\n":
    types.EventItemFragmentDoc,
  '\n  query Events($first: Int!) {\n    events(sort: "start:desc", pagination: { limit: $first }) {\n      data {\n        id\n        attributes {\n          ...EventItem\n        }\n      }\n    }\n  }\n':
    types.EventsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment EventItem on Event {\n    slug\n    name\n    start\n    end\n    status\n    images {\n      data {\n        attributes {\n          name\n          url\n        }\n      }\n    }\n    location {\n      data {\n        attributes {\n          name\n          country\n        }\n      }\n    }\n  }\n"
): typeof documents["\n  fragment EventItem on Event {\n    slug\n    name\n    start\n    end\n    status\n    images {\n      data {\n        attributes {\n          name\n          url\n        }\n      }\n    }\n    location {\n      data {\n        attributes {\n          name\n          country\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query Events($first: Int!) {\n    events(sort: "start:desc", pagination: { limit: $first }) {\n      data {\n        id\n        attributes {\n          ...EventItem\n        }\n      }\n    }\n  }\n'
): typeof documents['\n  query Events($first: Int!) {\n    events(sort: "start:desc", pagination: { limit: $first }) {\n      data {\n        id\n        attributes {\n          ...EventItem\n        }\n      }\n    }\n  }\n'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
