import Filters from "@/components/games/filters"
import { dataAsArrayOf, query } from "@/libs/apollo-client"
import GameGrid from "../../../../components/games/grid"
import { GameEntity, GamesDocument } from "../../../../models/graphql"

export default async function GameTag({ params }: { params: { tag: string } }) {
  const tag = decodeURI(params.tag)
  const response = await query({
    query: GamesDocument,
    variables: { page: 1, pageSize: 1000, tag: tag },
  })
  const games = dataAsArrayOf<GameEntity>(response.games)

  return (
    <>
      <div className="centered pt-5 pb-5">
        <Filters name={`Found ${games.length} games with tag "${tag}"`} />
      </div>
      <div className="pt-70">
        <GameGrid games={games} />
      </div>
    </>
  )
}
