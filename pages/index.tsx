import type { NextPage } from "next";
import Head from "next/head";
import EventGrid from "../components/events/grid";
import Title from "../components/layout/title";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>#play14 - we believe in playfulness</title>
      </Head>
      <Title />
      <EventGrid pageSize={6} />
    </>
  );
};

export default Home;
