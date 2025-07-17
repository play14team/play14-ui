import Filters from "@/components/games/filters"
import { dataAsArrayOf, query } from "@/libs/apollo-client"
import GameGrid from "../../../../components/games/grid"
import {
  GameEntity,
  GameEntityResponseCollection,
  GamesDocument,
} from "../../../../models/graphql"

export default async function GameTag(props: {
  params: Promise<{ tag: string }>
}) {
  const params = await props.params
  const tag = decodeURI(params.tag)
  const response = (await query({
    query: GamesDocument,
    variables: { page: 1, pageSize: 1000, tag: tag },
  })) as { games?: GameEntityResponseCollection }
  const games = dataAsArrayOf<GameEntity>(response?.games || { data: [] })

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
