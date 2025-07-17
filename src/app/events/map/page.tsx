import EventMap from "@/components/events/map"
import Page from "@/components/layout/page"
import { dataAsArrayOf, query } from "@/libs/apollo-client"
import {
  EventEntity,
  EventEntityResponseCollection,
  MarkersDocument,
} from "@/models/graphql"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Events | Map",
}

export default async function EventMapPage() {
  const response = (await query({ query: MarkersDocument })) as {
    events?: EventEntityResponseCollection
  }
  const events = dataAsArrayOf<EventEntity>(response?.events || { data: [] })

  return (
    <Page name="Events map">
      <div className="pt-5 pb-100">
        <EventMap events={events} />
      </div>
    </Page>
  )
}
