import { getEvents } from "@/components/events/get-events.action"
import EventGrid from "@/components/events/grid"
import LoadMore from "@/components/events/load-more"
import Page from "@/components/layout/page"
import { EventEntity, Pagination } from "@/models/graphql"

export default async function Events() {
  const { data } = await getEvents(1, 18)

  const events = data?.events?.data as EventEntity[]
  const pagination = data?.events?.meta.pagination as Pagination

  return (
    <Page name="Events">
      <div className="ptb-70">
        <EventGrid events={events} />
        <LoadMore pagination={pagination} />
      </div>
    </Page>
  )
}
