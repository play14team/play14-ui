import Filters from "@/components/events/filters"
import { getAllEvents } from "@/components/events/get.action"
import EventGrid from "../../../../components/events/grid"

export default async function EventLocation(props: {
  params: Promise<{ location: string }>
}) {
  const params = await props.params
  const events = await getAllEvents(undefined, params.location)

  return (
    <>
      <div className="centered pt-5 pb-5">
        <Filters
          name={`Found ${events.length} events in ${events[0]?.location?.name}`}
        />
      </div>
      <div className="pt-70">
        <EventGrid events={events} />
      </div>
    </>
  )
}
