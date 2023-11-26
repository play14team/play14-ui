import Filters from "@/components/events/filters"
import { getEvents } from "@/components/events/get.action"
import EventGrid from "@/components/events/grid"
import LoadMore from "@/components/events/load-more"
import { EventEntity, Pagination } from "@/models/graphql"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Events",
}

export default async function Events() {
  const { data } = await getEvents(1, 18)

  const events = data?.events?.data as EventEntity[]
  const pagination = data?.events?.meta.pagination as Pagination

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
