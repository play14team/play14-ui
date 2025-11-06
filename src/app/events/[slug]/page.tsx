import EventDetails from "@/components/events/details"
import { getEvent } from "@/components/events/get.action"
import Page from "@/components/layout/page"
import { formatDate } from "@/libs/dates"
import { SlugParamsProps } from "@/libs/slug-params"

export const revalidate = 3600

// export async function generateStaticParams() {
//   const response = await getEventSlugs()
//   const events = dataAsArrayOf<EventEntity>(response.events)

//   return events.map((event) => ({
//     slug: event.attributes?.slug!,
//   }))
// }

export async function generateMetadata(props: SlugParamsProps) {
  const event = await getEvent(props)
  const images = (event.images?.filter(Boolean) as any)?.map(
    (i: any) => i.url,
  ) as string[]
  let description = formatDate(event.start, event.end, event.timezone!, true)
  if (event.venue && event.venue?.location) {
    description += ` | ${event.venue?.name} | ${event.venue?.location?.place_name}`
  }

  return {
    title: `Events | ${event.name}`,
    description: description,
    openGraph: {
      title: event.name,
      description: description,
      type: "article",
      publishedTime: event.publishedAt,
      authors: (event.hosts?.filter(Boolean) as any)?.map((h: any) => h.name),
      images: [event.defaultImage?.url].concat(images),
    },
  }
}

export default async function Event(props: SlugParamsProps) {
  const event = await getEvent(props)

  return (
    <Page name={event && event.name} hideName={true}>
      {event && <EventDetails event={event} />}
    </Page>
  )
}
