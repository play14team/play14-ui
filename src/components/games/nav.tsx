import { query } from "@/libs/apollo-client"
import { Game, GameNavDocument, UploadFile } from "../../models/graphql"
import DetailsNavigator, { NavLink } from "../layout/detailsnav"

export default async function GamesNavigator({ current }: { current: string }) {
  const response = await query({ query: GameNavDocument })
  const games = (response.games || []) as Game[]
  const index = games.findIndex((a) => a.slug == current)
  const previous = index > 0 ? games[index - 1] : null
  const next = index < games.length - 1 ? games[index + 1] : null

  return (
    <DetailsNavigator
      previous={getLink(previous as Game) as NavLink}
      next={getLink(next as Game) as NavLink}
      entity="games"
    />
  )
}

const getLink = (game: Game): NavLink | null => {
  if (!game) return null

  return {
    slug: game.slug,
    name: game.name,
    image: game.defaultImage as UploadFile,
  }
}
