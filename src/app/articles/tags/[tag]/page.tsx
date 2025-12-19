import Filters from "@/components/articles/filters"
import { getAllArticles } from "@/components/articles/get.action"
import ArticleGrid from "../../../../components/articles/grid"

export default async function ArticleTag(props: {
  params: Promise<{ tag: string }>
}) {
  const params = await props.params
  const articles = await getAllArticles(undefined, params.tag)

  return (
    <>
      <div className="centered pt-5 pb-5">
        <Filters
          name={`Found ${articles.length} articles with tag "${params.tag}"`}
        />
      </div>
      <div className="pt-70">
        <ArticleGrid articles={articles} />
      </div>
    </>
  )
}
