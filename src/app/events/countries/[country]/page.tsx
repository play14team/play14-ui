import Filters from "@/components/events/filters"
import { getEvents } from "@/components/events/get.action"
import Country from "@/components/layout/country"
import EventGrid from "../../../../components/events/grid"

export default async function EventCountry(props: {
  params: Promise<{ country: string }>
}) {
  const params = await props.params
  const response = await getEvents(
    1,
    1000,
    undefined,
    undefined,
    params.country,
  )
  const events = response.events_connection.nodes

  return (
    <>
      <div className="centered pt-5 pb-5">
        <Filters
          name={
            <>
              Found {events.length} events in{" "}
              <Country countryCode={params.country} flagPosition="after" />
            </>
          }
        />
      </div>
      <div className="pt-70">
        <EventGrid events={events} />
      </div>
    </>
  )
}
