"use client"

import { ApolloLink, HttpLink } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr"
import { PropsWithChildren } from "react"
import ApolloDevTools from "./apollo-dev-tools"

const STRAPI_GRAPHQL_ENDPOINT = process.env.STRAPI_API_URL + "/graphql"

function makeClient() {
  const httpLink = new HttpLink({
    uri: STRAPI_GRAPHQL_ENDPOINT,
    // you can disable result caching here if you want to
    // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
    fetchOptions: { cache: "no-store" },
    // you can override the default `fetchOptions` on a per query basis
    // via the `context` property on the options passed as a second argument
    // to an Apollo Client data fetching hook, e.g.:
    // const { data } = useSuspenseQuery(MY_QUERY, { context: { fetchOptions: { cache: "force-cache" }}});
  })

  const authenticatedLink = getAuthenticatedLink(httpLink)

  return new NextSSRApolloClient({
    // use the `NextSSRInMemoryCache`, not the normal `InMemoryCache`
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            // in a SSR environment, if you use multipart features like
            // @defer, you need to decide how to handle these.
            // This strips all interfaces with a `@defer` directive from your queries.
            new SSRMultipartLink({
              stripDefer: true,
            }),
            authenticatedLink,
          ])
        : authenticatedLink,
  })
}

function getAuthenticatedLink(httpLink: HttpLink) {
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

  return authLink.concat(httpLink)
}

// you need to create a component to wrap your app in
export function ApolloProvider({ children }: PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
      <ApolloDevTools />
    </ApolloNextAppProvider>
  )
}
