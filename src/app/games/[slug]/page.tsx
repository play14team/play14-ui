import GameDetails from "@/components/games/details"
import Page from "@/components/layout/page"
import { dataAsArrayOf } from "@/libs/apollo-client"
import { SlugParamsProps } from "@/libs/slug-params"
import { GameEntity, GameEntityResponseCollection } from "@/models/graphql"
import { getGame, getGameSlugs } from "../../../components/games/get.action"

export const revalidate = 3600

export async function generateStaticParams() {
  const response = (await getGameSlugs()) as {
    games?: GameEntityResponseCollection
  }
  const games = dataAsArrayOf<GameEntity>(response?.games || { data: [] })

  return games.map((game) => ({
    slug: game.attributes?.slug,
  }))
}

export async function generateMetadata(props: SlugParamsProps) {
  const game = await getGame(props)
  const images = game.images.data.map((i) => i.attributes?.url) as string[]

  return {
    title: `Games | ${game.name}`,
    description: game.summary,
    openGraph: {
      title: game.name,
      description: game.summary,
      type: "article",
      publishedTime: game.publishedAt,
      authors: game.documentedBy?.data.map((p) => p.attributes?.name),
      images: [game.defaultImage.data?.attributes?.url].concat(images),
    },
  }
}

export default async function Game(props: SlugParamsProps) {
  const game = await getGame(props)

  return (
    <Page name={game && game.name}>{game && <GameDetails game={game} />}</Page>
  )
}
