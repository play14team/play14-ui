import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { gql } from "@apollo/client";
import client from "../apollo-client";
import Moment from 'react-moment';
import 'moment-timezone';

const Home: NextPage<Props> = ({ events }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>#play14</title>
        <meta name="description" content="#play14 community web site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to #play14
        </h1>

        <p className={styles.description}>
          We believe in playfulness
        </p>

        <div className={styles.grid}>
          {
            events.map((event : Entity<Event> ) => {
              return (
                <a href="/event/{event.attributes.slug}" key={event.id} className={styles.card}>
                  <h2>{event.attributes.name}</h2>
                  <p>Start : <Moment format="DD MMM YYYY">{event.attributes.start}</Moment></p>
                  <p>End: <Moment format="DD MMM YYYY">{event.attributes.end}</Moment></p>
                </a>
              )
            })
          }
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home

interface Entity<T> {
  id : number
  attributes : T
}

interface Event {
  slug : string
  name : string
  start : Date
  end : Date
  status : string
}

interface Props {
  events: Entity<Event>[]
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
    `
  });

  return {
    props: {
      events: data.events.data
    }
  }
}
