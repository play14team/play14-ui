import "server-only"

import { ApolloLink, HttpLink, TypedDocumentNode } from "@apollo/client"
import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from "@apollo/client-integration-nextjs"

import { Pagination } from "@/models/graphql"
import { setContext } from "@apollo/client/link/context"

const STRAPI_GRAPHQL_ENDPOINT = process.env.STRAPI_API_URL + "/graphql"

// Configure fetch with timeout to prevent hanging connections
const fetchWithTimeout = async (
  uri: RequestInfo | URL,
  options: RequestInit = {},
) => {
  const timeout = 30000 // 30 seconds
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeout)

  try {
    return await fetch(uri, {
      ...options,
      signal: controller.signal,
    })
  } finally {
    clearTimeout(timeoutId)
  }
}

const { getClient } = registerApolloClient(() => {
  const httpLink = new HttpLink({
    uri: STRAPI_GRAPHQL_ENDPOINT,
    fetch: fetchWithTimeout,
    // you can disable result caching here if you want to
    // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
    // fetchOptions: { cache: "no-store" },
  })

  const authenticatedLink = getAuthenticatedLink(httpLink)

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authenticatedLink,
  })
})

function getAuthenticatedLink(link: ApolloLink) {
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from env variable if it exists
    const token = process.env.STRAPI_API_SECRET

    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    }
  })

  return authLink.concat(link)
}

interface QueryParameters<TQuery, TQueryVariables> {
  query: TypedDocumentNode<TQuery, TQueryVariables>
  variables?: TQueryVariables | undefined
}

export async function query<TQuery, TQueryVariables>({
  query,
  variables,
}: QueryParameters<TQuery, TQueryVariables>) {
  try {
    const { data } = await getClient().query({
      query,
      variables: variables ?? {},
    })

    return data as TQuery
  } catch (error: unknown) {
    const err = error as {
      message: string
      networkError?: { statusCode: number; result: unknown }
      graphQLErrors?: Array<unknown>
      cause?: Error & { code?: string }
    }

    console.error(
      "==================== GraphQL Query Error ====================",
    )
    console.error("Endpoint:", STRAPI_GRAPHQL_ENDPOINT)
    console.error("Message:", err.message)
    console.error("Variables:", JSON.stringify(variables, null, 2))

    // Enhanced network error diagnostics
    if (err.networkError) {
      console.error("Network Error Details:")
      console.error("  Status Code:", err.networkError.statusCode)
      console.error(
        "  Result:",
        JSON.stringify(err.networkError.result, null, 2),
      )
    }

    // Check for connection errors
    if (
      err.message.includes("fetch failed") ||
      err.cause?.code === "ECONNRESET"
    ) {
      console.error("\nConnection Error Detected:")
      console.error(
        "  The server at",
        STRAPI_GRAPHQL_ENDPOINT,
        "is not reachable.",
      )
      console.error("  Possible causes:")
      console.error("    - Strapi server is not running")
      console.error("    - Wrong STRAPI_API_URL in .env.local")
      console.error("    - Network connectivity issues")
      console.error("\n  To fix:")
      console.error("    1. Check if Strapi is running: http://localhost:1337")
      console.error(
        "    2. Or switch to production: STRAPI_API_URL=https://community.play14.org",
      )
    }

    if (err.graphQLErrors && err.graphQLErrors.length > 0) {
      console.error("GraphQL Errors:")
      err.graphQLErrors.forEach((gqlErr: unknown, index: number) => {
        console.error(`  Error ${index + 1}:`, JSON.stringify(gqlErr, null, 2))
      })
    }
    console.error(
      "============================================================",
    )
    throw error
  }
}

export function attributesAs<TEntity>(result: {
  data?: { attributes?: unknown }
}) {
  // For v5, if result is an array, return the first item
  if (Array.isArray(result)) {
    const entity = result[0] as TEntity
    if (!entity)
      throw new Error("Query response does not return expected entity")
    return entity
  }
  // Otherwise treat result itself as the entity
  const entity = result as unknown as TEntity
  if (!entity) throw new Error("Query response does not return expected entity")
  return entity
}

export function dataAsArrayOf<TEntity>(result: { data?: unknown }): TEntity[] {
  const data = result?.data
  if (!data) return []
  return (Array.isArray(data) ? data : [data]) as TEntity[]
}

export function dataAs<TEntity>(result: { data?: unknown }): TEntity | null {
  const data = result?.data
  if (!data) return null as unknown as TEntity
  return data as TEntity
}

export function getPagination(result: {
  pageInfo?: Pagination
  meta?: { pagination?: Pagination }
}): Pagination | null {
  return (result?.pageInfo as Pagination) || null
}

/**
 * Helper to get document ID (Strapi 5)
 * documentId is the primary identifier (string)
 */
export function getDocumentId(
  item: { documentId?: string; id?: string | number } | null | undefined,
): string | null {
  return item?.documentId || item?.id?.toString() || null
}
