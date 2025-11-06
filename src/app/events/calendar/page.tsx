import EventCalendar, { CalendarEvent } from "@/components/events/calendar"
import Page from "@/components/layout/page"
import { query } from "@/libs/apollo-client"
import { Event, EventCalendarDocument } from "@/models/graphql"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Events | Calendar",
}

export default async function Calendar() {
  const response = (await query({ query: EventCalendarDocument })) as {
    events?: Event[]
  }
  const events = (response.events || []).map((event) => {
    if (!event) return {}
    return {
      title: (
        <div>
          <b>{event.name}</b> - {event.status}
          <br />
          {event.venue?.name}
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
