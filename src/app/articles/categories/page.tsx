import Categories from "@/components/articles/categories"
import Filters from "@/components/articles/filters"

export default function ArticleCategories() {
  return (
    <>
      <div className="centered pt-5 pb-5">
        <Filters name="Filter games by categories" />
      </div>
      <Categories />
    </>
  )
}
