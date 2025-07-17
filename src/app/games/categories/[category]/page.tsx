import Filters from "@/components/games/filters"
import { dataAsArrayOf, query } from "@/libs/apollo-client"
import { camelPad } from "@/libs/camelPad"
import GameGrid from "../../../../components/games/grid"
import {
  GameEntity,
  GameEntityResponseCollection,
  GamesDocument,
} from "../../../../models/graphql"

export default async function GameCategory(props: {
  params: Promise<{ category: string }>
}) {
  const params = await props.params
  const response = (await query({
    query: GamesDocument,
    variables: { page: 1, pageSize: 1000, category: params.category },
  })) as { games?: GameEntityResponseCollection }
  const games = dataAsArrayOf<GameEntity>(response?.games || { data: [] })

  const cat =
    games.length > 0
      ? camelPad(games[0].attributes?.category ?? params.category)
      : camelPad(params.category)

  return (
    <>
      <div className="centered pt-5 pb-5">
        <Filters name={`Found ${games.length} games with category "${cat}"`} />
      </div>
      <div className="pt-70">
        <GameGrid games={games} />
      </div>
    </>
  )
}
