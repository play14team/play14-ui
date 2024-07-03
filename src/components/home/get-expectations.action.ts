"use server"

import { query } from "@/libs/apollo-client"
import { action } from "@/libs/safe-actions"
import { Enum_Expectation_Type, ExpectationsDocument } from "@/models/graphql"
import { z } from "zod"

const schema = z.object({
  type: z.nativeEnum(Enum_Expectation_Type),
})

export const getExpectations = action
  .schema(schema)
  .action(async ({ parsedInput: { type } }) => {
    return await query({
      query: ExpectationsDocument,
      variables: { type: type },
    })
  })
