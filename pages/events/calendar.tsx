import { useQuery } from "@apollo/client";
import { NextPage } from "next";
import Link from "next/link";
import EventCalendar from "../../components/events/calendar";
import EventTime from "../../components/events/time";
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
          <b>{event.name}</b> - <Link href={event.slug}>See details</Link>
          <br />
          <EventTime time={event.start} /> - <EventTime time={event.end} />
        </div>
      ),
      start: event.start,
      end: event.end,
      tooltip: event.name,
    };
  });
  return (
    <Page name="Event calendar" loading={loading} error={error}>
      <EventCalendar events={events} />
    </Page>
  );
};

export default EventCalendarPage;
