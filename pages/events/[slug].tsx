import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import EventDetails from "../../components/events/details";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { Event, EventDocument, EventSlugsDocument } from "../../models/graphql";
import Page from "../../components/layout/page";
import moment from "moment";
import { client } from "../../graphql/apollo";

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({ query: EventSlugsDocument });

  const paths = data.events?.data?.map((s) => {
    const { slug } = s.attributes;
    return {
      params: { slug },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ event: Event }> = async (
  context
) => {
  const { slug } = context.params;
  const { data } = await client.query({
    query: EventDocument,
    variables: { slug: slug },
  });

  const event = data?.events?.data[0].attributes as Event;

  return {
    props: { event: event },
  };
};

const EventDetailsPage: NextPage = (props: { event: Event }) => {
  const event = props.event;

  return (
    <Page
      name={event && event.name}
      description={
        event &&
        `${event.name} @ ${event.venue?.data?.attributes?.name} 
        from ${moment(event.start).format("MMMM Do")} 
        to ${moment(event.end).format("MMMM Do YYYY")}`
      }
      hideName
    >
      {event && <EventDetails event={event} />}
    </Page>
  );
};

export default EventDetailsPage;
