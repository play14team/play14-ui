import EventDetails from "@/components/events/details"
import { getEvent, getEventSlugs } from "@/components/events/get.action"
import Page from "@/components/layout/page"
import { dataAsArrayOf } from "@/libs/apollo-client"
import { SlugParamsProps } from "@/libs/slug-params"
import { EventEntity } from "@/models/graphql"

export async function generateStaticParams() {
  const response = await getEventSlugs()
  const events = dataAsArrayOf<EventEntity>(response.events)

  return events.map((event) => ({
    slug: event.attributes?.slug!,
  }))
}

export async function generateMetadata(props: SlugParamsProps) {
  const event = await getEvent(props)
  const images = event.images?.data.map((i) => i.attributes?.url!) as string[]

  return {
    title: `Events | ${event.name}`,
    description: event.description?.substring(0, 200),
    openGraph: {
      title: event.name,
      description: event.description?.substring(0, 200),
      type: "article",
      publishedTime: event.publishedAt,
      authors: event.hosts?.data.map((h) => h.attributes?.name),
      images: [event.defaultImage.data?.attributes?.url!].concat(images),
    },
  }
}

export default async function Event(props: SlugParamsProps) {
  const event = await getEvent(props)

  return (
    <Page name={event && event.name}>
      {event && <EventDetails event={event} />}
    </Page>
  )
}
