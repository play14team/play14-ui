import GameDetails from "@/components/games/details"
import Page from "@/components/layout/page"
import { getClient } from "@/libs/apollo-client"
import { SlugParamsProps } from "@/libs/slug-params"
import { Game, GameDocument, GameEntity } from "@/models/graphql"
import { getGameSlugs } from "../../../components/games/get.action"

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

async function getGame({ params }: SlugParamsProps) {
  const { slug } = params
  const { data } = await getClient().query({
    query: GameDocument,
    variables: { slug },
  })

  return data?.games?.data[0].attributes as Game
}
