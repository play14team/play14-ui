import Filters from "@/components/games/filters"
import { getClient } from "@/libs/apollo-client"
import GameGrid from "../../../../components/games/grid"
import { GameEntity, GamesDocument } from "../../../../models/graphql"

export default async function GameTag({ params }: { params: { tag: string } }) {
  const { data } = await getClient().query({
    query: GamesDocument,
    variables: { page: 1, pageSize: 1000, tag: params.tag },
  })

  const games = data?.games?.data as GameEntity[]

  return (
    <>
      <div className="centered pt-5 pb-5">
        <Filters name={`Games with tag "${params.tag}"`} />
      </div>
      <h4 className="centered">Found {games.length} games with this tag</h4>
      <div className="pt-70">{data && <GameGrid games={games} />}</div>
    </>
  )
}
