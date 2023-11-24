"use server"

import { getClient } from "@/libs/apollo-client"
import { SlugParamsProps } from "@/libs/slug-params"
import {
  Player,
  PlayerDocument,
  PlayerSlugsDocument,
  PlayersDocument,
} from "@/models/graphql"

export async function getPlayers(page: number, pageSize: number) {
  return await getClient().query({
    query: PlayersDocument,
    variables: { page, pageSize },
  })
}

export async function getPlayer({ params }: SlugParamsProps) {
  const { slug } = params
  const { data } = await getClient().query({
    query: PlayerDocument,
    variables: { slug },
  })

  return data?.players?.data[0].attributes as Player
}

export async function getPlayerSlugs() {
  return await getClient().query({
    query: PlayerSlugsDocument,
  })
}
