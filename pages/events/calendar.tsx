import { useQuery } from "@apollo/client";
import { NextPage } from "next";
import EventCalendar from "../../components/events/calendar";
import Page from "../../components/layout/page";
import { EventCalendarDocument } from "../../models/graphql";

const EventCalendarPage: NextPage = () => {
  const { data, loading, error } = useQuery(EventCalendarDocument);

  const events = data?.events?.data.map((e) => {
    const event = e.attributes;
    if (!event) return {};
    return {
      title: (
        <div>
          <b>{event.name}</b> - {event.status}
          <br />
          {event.venue?.data?.attributes?.name}
        </div>
      ),
      start: event.start,
      end: event.end,
      tooltip: event.name,
      slug: event.slug,
    };
  });
  return (
    <Page name="Event calendar" loading={loading} error={error}>
      <EventCalendar events={events} />
    </Page>
  );
};

export default EventCalendarPage;
