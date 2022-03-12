import "../styles/styles.scss";
import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
