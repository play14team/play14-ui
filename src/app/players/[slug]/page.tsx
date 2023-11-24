import Page from "@/components/layout/page"
import PlayerDetails from "@/components/players/details"
import { SlugParamsProps } from "@/libs/slug-params"
import { PlayerEntity } from "@/models/graphql"
import {
  getPlayer,
  getPlayerSlugs,
} from "../../../components/players/get.action"

export async function generateStaticParams() {
  const { data } = await getPlayerSlugs()
  const players = data.players?.data as PlayerEntity[]

  return players.map((player) => ({
    slug: player.attributes?.slug!,
  }))
}

export async function generateMetadata(props: SlugParamsProps) {
  const player = await getPlayer(props)

  return {
    title: `#play14 - ${player.name}`,
    description: player.bio,
  }
}

export default async function Player(props: SlugParamsProps) {
  const player = await getPlayer(props)

  return (
    <Page name={player && player.name}>
      {player && <PlayerDetails player={player} />}
    </Page>
  )
}