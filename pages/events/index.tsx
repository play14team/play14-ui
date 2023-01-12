import type { NextPage } from "next";
import Head from "next/head";
import EventGrid from "../../components/events/grid";

const Events: NextPage = () => {
  return (
    <section id="events">
      <Head>
        <title>#play14 - Events</title>
        <meta
          name="description"
          content="All #play14 events thoughout the globe"
        />
      </Head>
      <h1>Events</h1>
      <EventGrid first={1000} />
    </section>
  );
};

export default Events;
