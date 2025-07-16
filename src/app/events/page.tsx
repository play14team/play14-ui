import Filters from "@/components/events/filters"
import { getEvents } from "@/components/events/get.action"
import EventGrid from "@/components/events/grid"
import LoadMore from "@/components/events/load-more"
import { dataAsArrayOf, getPagination } from "@/libs/apollo-client"
import { EventEntity, EventEntityResponseCollection } from "@/models/graphql"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Events",
}

export const revalidate = 3600

export default async function Events() {
  const response = (await getEvents(1, 18)) as {
    events?: EventEntityResponseCollection
  }
  const events = dataAsArrayOf<EventEntity>(response?.events || { data: [] })
  const pagination = response.events
    ? getPagination(response.events)
    : { total: 0, page: 1, pageSize: 18, pageCount: 1 }

  return (
    <>
      <div className="centered pt-5 pb-5">
        <Filters name="Events" />
        <p>Total: {pagination.total}</p>
      </div>
      <EventGrid events={events} />
      <LoadMore pagination={pagination} />
    </>
  )
}
