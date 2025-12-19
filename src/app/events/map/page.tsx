import { getEventMarkers } from "@/components/events/get.action"
import EventMap from "@/components/events/map"
import Page from "@/components/layout/page"
import { Event } from "@/models/strapi"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Events | Map",
}

export default async function EventMapPage() {
  const events = (await getEventMarkers()) as Event[]

  return (
    <Page name="Events map">
      <div className="pt-5 pb-100">
        <EventMap events={events} />
      </div>
    </Page>
  )
}
