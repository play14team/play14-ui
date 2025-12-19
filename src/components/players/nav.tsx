import { Player, UploadFile } from "@/models/strapi"
import DetailsNavigator, { NavLink } from "../layout/detailsnav"
import { getPlayerNav } from "./get.action"

export default async function PlayersNavigator({
  current,
}: {
  current: string
}) {
  const players = (await getPlayerNav()) as Player[]
  const index = players.findIndex((a) => a.slug === current)

  // If player not found in list, show no navigation
  if (index === -1) {
    return <DetailsNavigator previous={null} next={null} entity="players" />
  }

  const previous = index > 0 ? players[index - 1] : null
  const next = index < players.length - 1 ? players[index + 1] : null

  return (
    <DetailsNavigator
      previous={getLink(previous as Player) as NavLink}
      next={getLink(next as Player) as NavLink}
      entity="players"
    />
  )
}

const getLink = (player: Player): NavLink | null => {
  if (!player) return null

  return {
    slug: player.slug,
    name: player.name,
    image: player.avatar as UploadFile,
  }
}
