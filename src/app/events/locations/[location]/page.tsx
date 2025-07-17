import Filters from "@/components/events/filters"
import { dataAsArrayOf, query } from "@/libs/apollo-client"
import EventGrid from "../../../../components/events/grid"
import {
  EventEntity,
  EventEntityResponseCollection,
  EventsDocument,
} from "../../../../models/graphql"

export default async function EventLocation(props: {
  params: Promise<{ location: string }>
}) {
  const params = await props.params
  const response = (await query({
    query: EventsDocument,
    variables: { page: 1, pageSize: 1000, location: params.location },
  })) as { events?: EventEntityResponseCollection }
  const events = dataAsArrayOf<EventEntity>(response?.events || { data: [] })

  return (
    <>
      <div className="centered pt-5 pb-5">
        <Filters
          name={`Found ${events.length} events in ${events[0].attributes?.location?.data?.attributes?.name}`}
        />
      </div>
      <div className="pt-70">
        <EventGrid events={events} />
      </div>
    </>
  )
}
