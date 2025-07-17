import EventCalendar, { CalendarEvent } from "@/components/events/calendar"
import Page from "@/components/layout/page"
import { dataAsArrayOf, query } from "@/libs/apollo-client"
import {
  EventCalendarDocument,
  EventEntity,
  EventEntityResponseCollection,
} from "@/models/graphql"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Events | Calendar",
}

export default async function Calendar() {
  const response = (await query({ query: EventCalendarDocument })) as {
    events?: EventEntityResponseCollection
  }
  const events = dataAsArrayOf<EventEntity>(
    response.events || { data: [] },
  ).map((e) => {
    const event = e.attributes
    if (!event) return {}
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
    }
  }) as CalendarEvent[]

  return (
    <Page name="Event calendar">
      <EventCalendar events={events} />
    </Page>
  )
}
