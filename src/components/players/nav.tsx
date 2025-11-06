import { query } from "@/libs/apollo-client"
import { Player, PlayerNavDocument, UploadFile } from "../../models/graphql"
import DetailsNavigator, { NavLink } from "../layout/detailsnav"

export default async function PlayersNavigator({
  current,
}: {
  current: string
}) {
  const response = await query({ query: PlayerNavDocument })
  const players = (response.players || []) as Player[]
  const index = players.findIndex((a) => a.slug == current)
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
