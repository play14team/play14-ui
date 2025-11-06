import { query } from "@/libs/apollo-client"
import { Event, EventNavDocument, UploadFile } from "../../models/graphql"
import DetailsNavigator, { NavLink } from "../layout/detailsnav"

export default async function EventsNavigator({
  current,
}: {
  current: string
}) {
  const response = await query({ query: EventNavDocument })
  // In Strapi 5, events is directly an array
  const events = (response.events || []) as Event[]
  const index = events.findIndex((a) => a.slug == current)
  const previous = index > 0 ? events[index - 1] : null
  const next = index < events.length - 1 ? events[index + 1] : null

  return (
    <DetailsNavigator
      previous={getLink(previous as Event) as NavLink}
      next={getLink(next as Event) as NavLink}
      entity="events"
    />
  )
}

const getLink = (event: Event): NavLink | null => {
  if (!event) return null

  return {
    slug: event.slug,
    name: event.name,
    image: event.defaultImage as UploadFile,
    date: event.start!,
  }
}
