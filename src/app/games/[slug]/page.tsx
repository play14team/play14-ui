import GameDetails from "@/components/games/details"
import Page from "@/components/layout/page"
import { SlugParamsProps } from "@/libs/slug-params"
import { GameEntity } from "@/models/graphql"
import { getGame, getGameSlugs } from "../../../components/games/get.action"

export async function generateStaticParams() {
  const { data } = await getGameSlugs()
  const games = data.games?.data as GameEntity[]

  return games.map((game) => ({
    slug: game.attributes?.slug!,
  }))
}

export async function generateMetadata(props: SlugParamsProps) {
  const game = await getGame(props)

  return {
    title: `#play14 - ${game.name}`,
    description: game.description,
  }
}

export default async function Game(props: SlugParamsProps) {
  const game = await getGame(props)

  return (
    <Page name={game && game.name}>{game && <GameDetails game={game} />}</Page>
  )
}