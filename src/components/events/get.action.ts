"use server"

import { getClient } from "@/libs/apollo-client"
import { SlugParamsProps } from "@/libs/slug-params"
import {
  Event,
  EventDocument,
  EventSlugsDocument,
  EventsDocument,
} from "@/models/graphql"

export async function getEvents(page: number, pageSize: number) {
  return await getClient().query({
    query: EventsDocument,
    variables: { page, pageSize },
  })
}

export async function getEvent({ params }: SlugParamsProps) {
  const { slug } = params
  const { data } = await getClient().query({
    query: EventDocument,
    variables: { slug },
  })

  return data?.events?.data[0].attributes as Event
}

export async function getEventSlugs() {
  return await getClient().query({
    query: EventSlugsDocument,
  })
}
