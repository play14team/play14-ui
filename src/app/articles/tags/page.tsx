import Filters from "@/components/articles/filters"
import Tags from "@/components/articles/tags"

export default function ArticleTags() {
  return (
    <>
      <div className="centered pt-5 pb-5">
        <Filters name="Filter articles by tags" />
      </div>
      <Tags />
    </>
  )
}
