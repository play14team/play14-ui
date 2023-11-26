import Countries from "@/components/events/countries"
import Filters from "@/components/events/filters"

export default function EventCountries() {
  return (
    <>
      <div className="centered pt-5 pb-5">
        <Filters name="Filter events by country" />
      </div>
      <Countries />
    </>
  )
}
