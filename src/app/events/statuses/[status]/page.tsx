import Filters from "@/components/events/filters"
import { query } from "@/libs/apollo-client"
import EventGrid from "../../../../components/events/grid"
import { Event, EventsDocument } from "../../../../models/graphql"

export default async function EventLocation(props: {
  params: Promise<{ status: string }>
}) {
  const params = await props.params
  const response = (await query({
    query: EventsDocument,
    variables: { page: 1, pageSize: 1000, status: params.status },
  })) as { events?: Event[] }
  const events = response?.events || []

  return (
    <>
      <div className="centered pt-5 pb-5">
        <Filters
          name={`Found ${events.length} events with status "${params.status}"`}
        />
      </div>
      <div className="pt-70">
        <EventGrid events={events} />
      </div>
    </>
  )
}
