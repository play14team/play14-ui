import Filters from "@/components/games/filters"
import { getAllGames } from "@/components/games/get.action"
import GameGrid from "../../../../components/games/grid"

export default async function GameTag(props: {
  params: Promise<{ tag: string }>
}) {
  const params = await props.params
  const tag = decodeURI(params.tag)
  const games = await getAllGames(undefined, tag)

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
