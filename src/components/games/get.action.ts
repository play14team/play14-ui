"use server"

import { getClient } from "@/libs/apollo-client"
import { GameSlugsDocument, GamesDocument } from "@/models/graphql"

export async function getGames(page: number, pageSize: number) {
  return await getClient().query({
    query: GamesDocument,
    variables: { page, pageSize },
  })
}

export async function getGameSlugs() {
  return await getClient().query({
    query: GameSlugsDocument,
  })
}
