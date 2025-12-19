import Filters from "@/components/events/filters"
import { getAllEvents } from "@/components/events/get.action"
import Country from "@/components/layout/country"
import EventGrid from "../../../../components/events/grid"

export default async function EventCountry(props: {
  params: Promise<{ country: string }>
}) {
  const params = await props.params
  const events = await getAllEvents(undefined, undefined, params.country)

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
