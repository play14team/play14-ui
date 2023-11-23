import EventMap from "@/components/events/map"
import Page from "@/components/layout/page"
import { getClient } from "@/libs/apollo-client"
import { EventEntity, MarkersDocument } from "@/models/graphql"

export default async function EventMapPage() {
  const { data } = await getClient().query({ query: MarkersDocument })
  const events = data?.events?.data as EventEntity[]

  return (
    <Page
      name="Events map"
      description="All the #play14 events on an interactive map"
    >
      <div className="pt-5 pb-100">
        <EventMap events={events} />
      </div>
    </Page>
  )
}
