import type { NextPage } from "next";
import Head from "next/head";
import { gql } from "@apollo/client";
import client from "../libs/apollo-client";
import EventGrid from "../components/events/eventsgrid";
import { EventsProps } from "../components/events/eventtypes";

const Home: NextPage<EventsProps> = ({ events }) => {
  return (
    <>
      <Head>
        <title>#play14</title>
      </Head>
      <EventGrid events={events} />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query getEvents {
        events {
          data {
            id
            attributes {
              slug
              name
              start
              end
              status
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      events: data.events.data,
    },
    revalidate: 10,
  };
}
