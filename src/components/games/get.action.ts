"use server"

import { getClient } from "@/libs/apollo-client"
import { SlugParamsProps } from "@/libs/slug-params"
import {
  Game,
  GameDocument,
  GameSlugsDocument,
  GamesDocument,
} from "@/models/graphql"

export async function getGames(page: number, pageSize: number) {
  return await getClient().query({
    query: GamesDocument,
    variables: { page, pageSize },
  })
}

export async function getGame({ params }: SlugParamsProps) {
  const { slug } = params
  const { data } = await getClient().query({
    query: GameDocument,
    variables: { slug },
  })

  return data?.games?.data[0].attributes as Game
}

export async function getGameSlugs() {
  return await getClient().query({
    query: GameSlugsDocument,
  })
}
