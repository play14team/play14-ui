"use server"

import { getClient } from "@/libs/apollo-client"
import { action } from "@/libs/safe-actions"
import { UpcomingEventsDocument } from "@/models/graphql"
import { z } from "zod"

const schema = z.object({
  today: z.string(),
})

export const getUpcomingEvents = action(schema, async ({ today }) => {
  const { data } = await getClient().query({
    query: UpcomingEventsDocument,
    variables: { today: today },
  })
  return data
})
