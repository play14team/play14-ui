import type { NextPage } from "next";
import EventDetails from "../../components/events/details";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import Loader from "../../components/layout/loader";
import { Event, EventDocument } from "../../models/graphql";
import ErrorMessage from "../../components/layout/error";
import Page from "../../components/layout/page";
import moment from "moment";

const EventDetailsPage: NextPage = () => {
  const router = useRouter();
  const slug = router.query.slug as string;
  const { data, loading, error } = useQuery(EventDocument, {
    variables: { slug: slug },
  });
  const event = data?.events?.data[0].attributes as Event;

  return (
    <Page
      name={event && event.name}
      description={
        event &&
        `${event.name} @ ${event.venue?.data?.attributes?.name} from ${moment(
          event.start
        ).format("MMMM Do")} to ${moment(event.end).format("MMMM Do YYYY")}`
      }
      hideName
    >
      {loading && <Loader />}
      {error && <ErrorMessage message={error.message} />}
      {event && <EventDetails event={event} />}
    </Page>
  );
};

export default EventDetailsPage;
