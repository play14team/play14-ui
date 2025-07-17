"use server"

import { query } from "@/libs/apollo-client"
import { SlugParamsProps } from "@/libs/slug-params"
import {
  Event,
  EventDocument,
  EventSlugsDocument,
  EventsDocument,
} from "@/models/graphql"
import moment from "moment"

export async function getEvents(page: number, pageSize: number) {
  return await query({
    query: EventsDocument,
    variables: { page, pageSize },
  })
}

export async function getEvent({ params }: SlugParamsProps) {
  const { slug } = await params
  const response = await query({
    query: EventDocument,
    variables: { slug },
  })

  return response.events?.data[0].attributes as Event
}

export async function getEventSlugs() {
  const today = moment().format()
  return await query({
    query: EventSlugsDocument,
    variables: { today: today },
  })
}
