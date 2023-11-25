import Categories from "@/components/games/categories"
import Filters from "@/components/games/filters"

export default function GameCategories() {
  return (
    <>
      <div className="centered pt-5 pb-5">
        <Filters name="Filter games by categories" />
      </div>
      <Categories />
    </>
  )
}
