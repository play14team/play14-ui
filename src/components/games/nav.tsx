import { dataAsArrayOf, query } from "@/libs/apollo-client"
import {
  Game,
  GameEntity,
  GameNavDocument,
  UploadFile,
} from "../../models/graphql"
import DetailsNavigator, { NavLink } from "../layout/detailsnav"

export default async function GamesNavigator({ current }: { current: string }) {
  const response = await query({ query: GameNavDocument })
  const games = dataAsArrayOf<GameEntity>(response.games || { data: [] })
  const index = games.findIndex((a) => a.attributes?.slug == current)
  const previous = index > 0 ? games[index - 1] : null
  const next = index < games.length - 1 ? games[index + 1] : null

  return (
    <DetailsNavigator
      previous={getLink(previous?.attributes as Game) as NavLink}
      next={getLink(next?.attributes as Game) as NavLink}
      entity="games"
    />
  )
}

const getLink = (game: Game): NavLink | null => {
  if (!game) return null

  return {
    slug: game.slug,
    name: game.name,
    image: game.defaultImage?.data?.attributes as UploadFile,
  }
}
