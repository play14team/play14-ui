import Filters from "@/components/players/filters"
import Positions from "@/components/players/positions"

export default function PlayerPositions() {
  return (
    <>
      <div className="centered pt-5 pb-5">
        <Filters name="Filter games by position" />
      </div>
      <Positions />
    </>
  )
}
