import type { NextPage } from "next";
import Layout from "../components/layout";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import Container from "../components/container";
import DateFormatter from "../components/date-formatter";
import { gql } from "@apollo/client";
import client from "../apollo-client";

import Link from "next/link";

type Entity<T> = {
  id: number;
  attributes: T;
};

type Event = {
  slug: string;
  name: string;
  start: Date;
  end: Date;
  status: string;
};

type Props = {
  events: Entity<Event>[];
};

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
                  <Link
                    key={event.id}
                    href={`/events/${encodeURIComponent(
                      event.attributes.slug
                    )}`}
                  >
                    <a className={styles.card}>
                      <h2>{event.attributes.name}</h2>
                      <p>
                        Start :{" "}
                        <DateFormatter
                          date={event.attributes.start}
                          formatString="dd MMM yyyy"
                        />
                      </p>
                      <p>
                        End:{" "}
                        <DateFormatter
                          date={event.attributes.end}
                          formatString="dd MMM yyyy"
                        />
                      </p>
                      <h3>{event.attributes.status}</h3>
                    </a>
                  </Link>
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
