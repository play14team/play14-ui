import { dataAsArrayOf, query } from "@/libs/apollo-client"
import {
  Player,
  PlayerEntity,
  PlayerNavDocument,
  UploadFile,
} from "../../models/graphql"
import DetailsNavigator, { NavLink } from "../layout/detailsnav"

export default async function PlayersNavigator({
  current,
}: {
  current: string
}) {
  const response = await query({ query: PlayerNavDocument })
  const players = dataAsArrayOf<PlayerEntity>(response.players || { data: [] })
  const index = players.findIndex((a) => a.attributes?.slug == current)
  const previous = index > 0 ? players[index - 1] : null
  const next = index < players.length - 1 ? players[index + 1] : null

  return (
    <DetailsNavigator
      previous={getLink(previous?.attributes as Player) as NavLink}
      next={getLink(next?.attributes as Player) as NavLink}
      entity="players"
    />
  )
}

const getLink = (player: Player): NavLink | null => {
  if (!player) return null

  return {
    slug: player.slug,
    name: player.name,
    image: player.avatar?.data?.attributes as UploadFile,
  }
}
