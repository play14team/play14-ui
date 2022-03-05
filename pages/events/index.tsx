import type { NextPage } from "next";
import Layout from "../../components/layout";
import Head from "next/head";
import Container from "../../components/container";

const Events: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>#play14 - Events</title>
      </Head>
      <Container>
        <h1>Events coming soon</h1>
      </Container>
    </Layout>
  );
};

export default Events;
