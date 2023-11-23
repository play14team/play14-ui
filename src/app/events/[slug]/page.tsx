import EventDetails from "@/components/events/details"
import Page from "@/components/layout/page"
import { getClient } from "@/libs/apollo-client"
import { SlugParamsProps } from "@/libs/slug-params"
import { Event, EventDocument, EventEntity } from "@/models/graphql"
import { getEventSlugs } from "../../../components/events/get.action"

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

async function getEvent({ params }: SlugParamsProps) {
  const { slug } = params
  const { data } = await getClient().query({
    query: EventDocument,
    variables: { slug },
  })

  return data?.events?.data[0].attributes as Event
}
