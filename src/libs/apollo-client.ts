import "server-only"

import { ApolloLink, HttpLink, TypedDocumentNode } from "@apollo/client"
import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from "@apollo/experimental-nextjs-app-support"

import { Pagination } from "@/models/graphql"
import { setContext } from "@apollo/client/link/context"

const STRAPI_GRAPHQL_ENDPOINT = process.env.STRAPI_API_URL + "/graphql"

// Feature flag to control response format during migration
// Set to 'true' to use Strapi 5 native format (flat structure)
// Set to 'false' to use Strapi 4 compatibility format (nested data.attributes)
const USE_V5_FORMAT = process.env.STRAPI_USE_V5_FORMAT === "true"

const { getClient } = registerApolloClient(() => {
  const httpLink = new HttpLink({
    uri: STRAPI_GRAPHQL_ENDPOINT,
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

    console.log("Apollo Client making request:", {
      endpoint: STRAPI_GRAPHQL_ENDPOINT,
      hasToken: !!token,
      useV5Format: USE_V5_FORMAT,
    })

    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
        // TEMPORARILY DISABLED: Add Strapi v4 compatibility header when not using v5 format
        // This allows gradual migration from Strapi 4 to Strapi 5
        // ...(!USE_V5_FORMAT && { "Strapi-Response-Format": "v4" }),
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
  } catch (error: any) {
    console.error(
      "==================== GraphQL Query Error ====================",
    )
    console.error("Message:", error.message)
    console.error("Variables:", JSON.stringify(variables, null, 2))

    if (error.networkError) {
      console.error("Network Error Details:")
      console.error("  Status Code:", error.networkError.statusCode)
      console.error(
        "  Result:",
        JSON.stringify(error.networkError.result, null, 2),
      )
    }

    if (error.graphQLErrors && error.graphQLErrors.length > 0) {
      console.error("GraphQL Errors:")
      error.graphQLErrors.forEach((err: any, index: number) => {
        console.error(`  Error ${index + 1}:`, JSON.stringify(err, null, 2))
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
  // v5 format: direct entity without wrappers
  if (USE_V5_FORMAT) {
    // For v5, if result is an array, return the first item
    if (Array.isArray(result)) {
      const entity = result[0] as TEntity
      if (!entity)
        throw new Error("Query response does not return expected entity")
      return entity
    }
    // Otherwise treat result itself as the entity
    const entity = result as unknown as TEntity
    if (!entity)
      throw new Error("Query response does not return expected entity")
    return entity
  }

  // v4 format: data.attributes structure
  const attributes = result?.data?.attributes
  if (!attributes)
    throw new Error("Query response does not return expected attributes")

  const entity = attributes as TEntity
  if (!entity) throw new Error("Query response does not return expected entity")

  return entity
}

export function dataAsArrayOf<TEntity>(result: { data?: unknown }): TEntity[] {
  // v5 format: direct array access
  if (USE_V5_FORMAT) {
    const data = result?.data
    if (!data) return []
    return (Array.isArray(data) ? data : [data]) as TEntity[]
  }

  // v4 format: array items have attributes
  const arrayResult = dataAs<TEntity[]>(result)
  return arrayResult ?? []
}

export function dataAs<TEntity>(result: { data?: unknown }): TEntity | null {
  // v5 format: direct access to data
  if (USE_V5_FORMAT) {
    const data = result?.data
    if (!data) return null as unknown as TEntity
    return data as TEntity
  }

  // v4 format: nested structure
  const data = result?.data
  if (!data) throw new Error("Query response does not return expected data")

  const entity = data as TEntity
  if (!entity) throw new Error("Query response does not return expected entity")

  return entity
}

export function getPagination(result: {
  pageInfo?: Pagination
  meta?: { pagination?: Pagination }
}): Pagination | null {
  // v5 format: use pageInfo
  if (USE_V5_FORMAT) {
    return (result?.pageInfo as Pagination) || null
  }
  // v4 format: use meta.pagination
  return (result?.meta?.pagination as Pagination) || null
}

/**
 * Helper to get document ID (Strapi 5) or numeric ID (Strapi 4)
 * In v5, documentId is the primary identifier (string)
 * In v4, id is a numeric value
 */
export function getDocumentId(item: any): string | null {
  if (USE_V5_FORMAT) {
    return item?.documentId || item?.id?.toString() || null
  }
  return item?.id?.toString() || null
}
