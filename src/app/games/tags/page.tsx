import Filters from "@/components/games/filters"
import Tags from "@/components/games/tags"

export default function GameTags() {
  return (
    <>
      <div className="centered pt-5 pb-5">
        <Filters name="Filter games by tags" />
      </div>
      <Tags />
    </>
  )
}
