import Filters from "@/components/games/filters"
import { getGames } from "@/components/games/get.action"
import { camelPad } from "@/libs/camelPad"
import GameGrid from "../../../../components/games/grid"

export default async function GameCategory(props: {
  params: Promise<{ category: string }>
}) {
  const params = await props.params
  const response = await getGames(1, 1000, params.category)
  const games = response.games_connection.nodes

  const cat =
    games.length > 0
      ? camelPad(games[0].category ?? params.category)
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
