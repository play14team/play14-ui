import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc"

const STRAPI_GRAPHQL_ENDPOINT = process.env.STRAPI_API_URL + "/graphql"

export const { getClient } = registerApolloClient(() => {
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
