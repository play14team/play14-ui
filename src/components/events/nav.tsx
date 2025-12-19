import { Event, UploadFile } from "@/models/strapi"
import DetailsNavigator, { NavLink } from "../layout/detailsnav"
import { getEventNav } from "./get.action"

export default async function EventsNavigator({
  current,
}: {
  current: string
}) {
  const events = (await getEventNav()) as Event[]
  const index = events.findIndex((a) => a.slug == current)

  // If event not found in list, show no navigation
  if (index === -1) {
    return <DetailsNavigator previous={null} next={null} entity="events" />
  }

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
