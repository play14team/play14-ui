import Filters from "@/components/players/filters"
import { dataAsArrayOf, query } from "@/libs/apollo-client"
import PlayerGrid from "../../../../components/players/grid"
import { PlayerEntity, PlayersDocument } from "../../../../models/graphql"

export default async function PlayerPosition({
  params,
}: {
  params: { position: string }
}) {
  const response = await query({
    query: PlayersDocument,
    variables: { page: 1, pageSize: 1000, position: params.position },
  })
  const players = dataAsArrayOf<PlayerEntity>(response.players)

  return (
    <>
      <div className="centered pt-5 pb-5">
        <Filters
          name={`Found ${players.length} players with position "${params.position}"`}
        />
      </div>
      <div className="pt-70">
        <PlayerGrid players={players} />
      </div>
    </>
  )
}
