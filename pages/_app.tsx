import "../styles/scss/global.scss";

import type { AppProps } from "next/app";
import Layout from "../components/layout";
import StrapiApolloProvider from "../graphql/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StrapiApolloProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StrapiApolloProvider>
  );
}

export default MyApp;
