import { dataAsArrayOf, query } from "@/libs/apollo-client"
import {
  Event,
  EventEntity,
  EventNavDocument,
  UploadFile,
} from "../../models/graphql"
import DetailsNavigator, { NavLink } from "../layout/detailsnav"

export default async function EventsNavigator({
  current,
}: {
  current: string
}) {
  const response = await query({ query: EventNavDocument })
  const events = dataAsArrayOf<EventEntity>(response.events || { data: [] })
  const index = events.findIndex((a) => a.attributes?.slug == current)
  const previous = index > 0 ? events[index - 1] : null
  const next = index < events.length - 1 ? events[index + 1] : null

  return (
    <DetailsNavigator
      previous={getLink(previous?.attributes as Event) as NavLink}
      next={getLink(next?.attributes as Event) as NavLink}
      entity="events"
    />
  )
}

const getLink = (event: Event): NavLink | null => {
  if (!event) return null

  return {
    slug: event.slug,
    name: event.name,
    image: event.defaultImage?.data?.attributes as UploadFile,
    date: event.start!,
  }
}
