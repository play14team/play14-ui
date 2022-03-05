import type { NextPage } from "next";
import Layout from "../../components/layout";
import Head from "next/head";
import Container from "../../components/container";

const Games: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>#play14 - Games</title>
      </Head>
      <Container>
        <h1>Games coming soon</h1>
      </Container>
    </Layout>
  );
};

export default Games;
