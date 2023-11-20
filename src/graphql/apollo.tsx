import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { PropsWithChildren } from "react"

const STRAPI_SERVER =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
const GRAPHQL_ENDPOINT = STRAPI_SERVER + "/graphql"
const client = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
})

const StrapiApolloProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export { client }
export default StrapiApolloProvider
