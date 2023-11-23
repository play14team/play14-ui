"use server"

import { getClient } from "@/libs/apollo-client"
import { PlayerSlugsDocument, PlayersDocument } from "@/models/graphql"

export async function getPlayers(page: number, pageSize: number) {
  return await getClient().query({
    query: PlayersDocument,
    variables: { page, pageSize },
  })
}

export async function getPlayerSlugs() {
  return await getClient().query({
    query: PlayerSlugsDocument,
  })
}
