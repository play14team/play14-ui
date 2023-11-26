import Filters from "@/components/events/filters"
import { getEvents } from "@/components/events/get.action"
import EventGrid from "@/components/events/grid"
import LoadMore from "@/components/events/load-more"
import { dataAsArrayOf, getPagination } from "@/libs/apollo-client"
import { EventEntity } from "@/models/graphql"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Events",
}

export default async function Events() {
  const response = await getEvents(1, 18)
  const events = dataAsArrayOf<EventEntity>(response.events)
  const pagination = getPagination(response.events)

  return (
    <>
      <div className="centered pt-5 pb-5">
        <Filters name="Events" />
      </div>
      <EventGrid events={events} />
      <LoadMore pagination={pagination} />
    </>
  )
}
