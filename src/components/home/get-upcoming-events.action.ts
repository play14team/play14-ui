"use server"

import { query } from "@/libs/apollo-client"
import { action } from "@/libs/safe-actions"
import { UpcomingEventsDocument } from "@/models/graphql"
import { z } from "zod"

const schema = z.object({
  today: z.string(),
})

export const getUpcomingEvents = action
  .schema(schema)
  .action(async ({ parsedInput: { today } }) => {
    return await query({
      query: UpcomingEventsDocument,
      variables: { today: today },
    })
  })
