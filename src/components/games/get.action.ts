"use server"

import { query } from "@/libs/apollo-client"
import { SlugParamsProps } from "@/libs/slug-params"
import {
  Game,
  GameDocument,
  GameSlugsDocument,
  GamesDocument,
} from "@/models/graphql"

export async function getGames(page: number, pageSize: number) {
  return await query({
    query: GamesDocument,
    variables: { page, pageSize },
  })
}

export async function getGame({ params }: SlugParamsProps) {
  const { slug } = await params
  const response = await query({
    query: GameDocument,
    variables: { slug },
  })

  return response.games?.data[0].attributes as Game
}

export async function getGameSlugs() {
  return await query({
    query: GameSlugsDocument,
  })
}
