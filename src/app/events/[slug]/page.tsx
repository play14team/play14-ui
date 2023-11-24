import EventDetails from "@/components/events/details"
import { getEvent, getEventSlugs } from "@/components/events/get.action"
import Page from "@/components/layout/page"
import { SlugParamsProps } from "@/libs/slug-params"
import { EventEntity } from "@/models/graphql"

export async function generateStaticParams() {
  const { data } = await getEventSlugs()
  const events = data.events?.data as EventEntity[]

  return events.map((event) => ({
    slug: event.attributes?.slug!,
  }))
}

export async function generateMetadata(props: SlugParamsProps) {
  const event = await getEvent(props)

  return {
    title: `#play14 - ${event.name}`,
    description: event.description,
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
