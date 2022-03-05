import type { NextPage } from "next";
import Layout from "../components/layout";
import Head from "next/head";
import Container from "../components/container";

import styles from "../styles/Home.module.css";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import Moment from "react-moment";
import "moment-timezone";

const Home: NextPage<Props> = ({ events }) => {
  return (
    <Layout>
      <Head>
        <title>#play14</title>
      </Head>
      <Container>
        <div className={styles.container}>
          <main className={styles.main}>
            <h1 className={styles.title}>Welcome to #play14</h1>

            <p className={styles.description}>We believe in playfulness</p>

            <div className={styles.grid}>
              {events.map((event: Entity<Event>) => {
                return (
                  <a
                    href="/event/{event.attributes.slug}"
                    key={event.id}
                    className={styles.card}
                  >
                    <h2>{event.attributes.name}</h2>
                    <p>
                      Start :{" "}
                      <Moment format="DD MMM YYYY">
                        {event.attributes.start}
                      </Moment>
                    </p>
                    <p>
                      End:{" "}
                      <Moment format="DD MMM YYYY">
                        {event.attributes.end}
                      </Moment>
                    </p>
                    <h3>{event.attributes.status}</h3>
                  </a>
                );
              })}
            </div>
          </main>
        </div>
      </Container>
    </Layout>
  );
};

export default Home;

interface Entity<T> {
  id: number;
  attributes: T;
}

interface Event {
  slug: string;
  name: string;
  start: Date;
  end: Date;
  status: string;
}

interface Props {
  events: Entity<Event>[];
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Events {
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
  };
}
