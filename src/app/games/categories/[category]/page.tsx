import Filters from "@/components/games/filters"
import { getClient } from "@/libs/apollo-client"
import { camelPad } from "@/libs/camelPad"
import GameGrid from "../../../../components/games/grid"
import { GameEntity, GamesDocument } from "../../../../models/graphql"

export default async function GameCategory({
  params,
}: {
  params: { category: string }
}) {
  const { data } = await getClient().query({
    query: GamesDocument,
    variables: { page: 1, pageSize: 1000, category: params.category },
  })

  const games = data?.games?.data as GameEntity[]

  const cat =
    games.length > 0
      ? camelPad(games[0].attributes?.category!)
      : camelPad(params.category)

  return (
    <>
      <div className="centered pt-5 pb-5">
        <Filters name={`Found ${games.length} games with category "${cat}"`} />
      </div>
      <div className="pt-70">{data && <GameGrid games={games} />}</div>
    </>
  )
}
