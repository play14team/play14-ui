import Filters from "@/components/events/filters"
import Statuses from "@/components/events/statuses"

export default function EventLocations() {
  return (
    <>
      <div className="centered pt-5 pb-5">
        <Filters name="Filter events by status" />
      </div>
      <Statuses />
    </>
  )
}
