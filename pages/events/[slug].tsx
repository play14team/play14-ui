import type { NextPage } from "next";
import EventDetails from "../../components/events/details";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { graphql } from "../../models";
import Loader from "../../components/layout/loader";

const EventQuery = graphql(`
  query EventQuery($slug: String!) {
    events(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          ...EventDetails
        }
      }
    }
  }
`);

const EventDetailsPage: NextPage = () => {
  const router = useRouter();
  const slug: string = router.query.slug as string;
  const { data, loading, error } = useQuery(EventQuery, {
    variables: { slug: slug },
  });

  if (loading) return <Loader />;
  if (error) {
    console.log(error);
    return <>{error.message}</>;
  }

  const eventDetails = data?.events?.data[0].attributes;
  if (!eventDetails) {
    return <>Event {slug} not found!</>;
  }

  return <EventDetails event={eventDetails} />;
};

export default EventDetailsPage;
