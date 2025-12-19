import Filters from "@/components/players/filters"
import { getAllPlayers } from "@/components/players/get.action"
import PlayerGrid from "../../../../components/players/grid"

export default async function PlayerPosition(props: {
  params: Promise<{ position: string }>
}) {
  const params = await props.params
  const players = await getAllPlayers(params.position)

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
