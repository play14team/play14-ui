import type { NextPage } from "next";
import EventDetails from "../../components/events/details";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import Loader from "../../components/layout/loader";
import { EventDocument } from "../../models/graphql";
import ErrorMessage from "../../components/layout/error";

const EventDetailsPage: NextPage = () => {
  const router = useRouter();
  const slug = router.query.slug as string;
  const { data, loading, error } = useQuery(EventDocument, {
    variables: { slug: slug },
  });
  const eventDetails = data?.events?.data[0].attributes;

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMessage message={error.message} />}
      {eventDetails && <EventDetails event={eventDetails} />}
    </>
  );
};

export default EventDetailsPage;
