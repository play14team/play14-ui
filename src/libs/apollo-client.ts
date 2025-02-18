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
  const { data } = await getClient().query({
    query,
    variables: variables ?? {},
  })

  return data as TQuery
}

export function attributesAs<TEntity>(result: {
  data?: { attributes?: unknown }
}) {
  const attributes = result?.data?.attributes
  if (!attributes)
    throw new Error("Query response does not return expected attributes")

  const entity = attributes as TEntity
  if (!entity) throw new Error("Query response does not return expected entity")

  return entity
}

export function dataAsArrayOf<TEntity>(result: { data?: unknown }) {
  return dataAs<TEntity[]>(result)
}

export function dataAs<TEntity>(result: { data?: unknown }) {
  const data = result?.data
  if (!data) throw new Error("Query response does not return expected data")

  const entity = data as TEntity
  if (!entity) throw new Error("Query response does not return expected entity")

  return entity
}

export function getPagination(result: { meta: { pagination: Pagination } }) {
  return result.meta.pagination as Pagination
}
