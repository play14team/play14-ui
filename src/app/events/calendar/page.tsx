import EventCalendar, { CalendarEvent } from "@/components/events/calendar"
import Page from "@/components/layout/page"
import { getClient } from "@/libs/apollo-client"
import { EventCalendarDocument } from "@/models/graphql"

export default async function Calendar() {
  const { data } = await getClient().query({ query: EventCalendarDocument })
  const events = data?.events?.data.map((e) => {
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
