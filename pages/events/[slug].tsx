import type { NextPage } from "next";
import EventDetails from "../../components/events/details";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import Loader from "../../components/layout/loader";
import { EventDocument } from "../../models/graphql";

const EventDetailsPage: NextPage = () => {
  const router = useRouter();
  const slug = router.query.slug as string;
  const { data, loading, error } = useQuery(EventDocument, {
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
