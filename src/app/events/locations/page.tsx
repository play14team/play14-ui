import Filters from "@/components/events/filters"
import Locations from "@/components/events/locations"

export default function EventLocations() {
  return (
    <>
      <div className="centered pt-5 pb-5">
        <Filters name="Filter events by location" />
      </div>
      <Locations />
    </>
  )
}
