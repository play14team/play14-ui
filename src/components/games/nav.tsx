import { Game, UploadFile } from "@/models/strapi"
import DetailsNavigator, { NavLink } from "../layout/detailsnav"
import { getGameNav } from "./get.action"

export default async function GamesNavigator({ current }: { current: string }) {
  const games = (await getGameNav()) as Game[]
  const index = games.findIndex((a) => a.slug == current)

  // If game not found in list, show no navigation
  if (index === -1) {
    return <DetailsNavigator previous={null} next={null} entity="games" />
  }

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
