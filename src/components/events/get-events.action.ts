"use server"

import { getClient } from "@/libs/apollo-client"
import { EventSlugsDocument, EventsDocument } from "@/models/graphql"

export async function getEvents(page: number, pageSize: number) {
  return await getClient().query({
    query: EventsDocument,
    variables: { page, pageSize },
  })
}

export async function getEventSlugs() {
  return await getClient().query({
    query: EventSlugsDocument,
  })
}
