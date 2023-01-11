import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { PropsWithChildren } from "react";

const STRAPI_SERVER =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
const GRAPHQL_ENDPOINT = STRAPI_SERVER + "/graphql";

const StrapiApolloProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const client = new ApolloClient({
    uri: GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default StrapiApolloProvider;
