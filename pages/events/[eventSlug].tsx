import styles from "../../styles/Home.module.css";

import type { NextPage } from "next";
import Head from "next/head";
import Container from "../../components/container";
import client from "../../apollo-client";
import { gql } from "@apollo/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { EventProps } from "../../components/events/eventtypes";
import EventDetails from "../../components/events/eventdetails";

const EventDetailsPage: NextPage<EventProps> = ({ events }) => {
  const event = events[0];
  return (
    <>
      <Head>
        <title>#play14 - {}</title>
      </Head>
      <Container>
        <EventDetails
          slug={event.attributes.slug}
          name={event.attributes.name}
          start={event.attributes.start}
          end={event.attributes.end}
          status={event.attributes.status}
        />
      </Container>
    </>
  );
};

export default EventDetailsPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const query = gql`
    query getSlugs {
      events {
        data {
          attributes {
            slug
          }
        }
      }
    }
  `;
  const { data } = await client.query({ query: query });
  const eventSlugs: Entity<Event>[] = data.events.data;
  const paths = eventSlugs.map((event) => {
    const slug = event.attributes.slug;
    return {
      params: { eventSlug: slug },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const eventSlug = context.params?.eventSlug;

  // const query = gql`
  //   query getEvent($slug: String!) {
  //     events (filters: { slug: { eq: $slug } }) {
  //       data {
  //         id
  //         attributes {
  //           slug
  //           name
  //           start
  //           end
  //           status
  //         }
  //       }
  //     }
  //   }
  // `

  const query = gql`
    query getEvent {
      events (filters: { slug: { eq: "${eventSlug}" } }) {
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
  `;
  const { data } = await client.query({
    query: query,
    //variables: { "slug": {eventSlug} }
  });

  return {
    props: {
      events: data.events.data,
    },
    revalidate: 10,
  };
};
