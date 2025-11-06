import EventMap from "@/components/events/map"
import Page from "@/components/layout/page"
import { query } from "@/libs/apollo-client"
import { Event, MarkersDocument } from "@/models/graphql"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Events | Map",
}

export default async function EventMapPage() {
  const response = (await query({ query: MarkersDocument })) as {
    events?: Event[]
  }
  const events = response?.events || []

  return (
    <Page name="Events map">
      <div className="pt-5 pb-100">
        <EventMap events={events} />
      </div>
    </Page>
  )
}
