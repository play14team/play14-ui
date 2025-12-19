import Filters from "@/components/articles/filters"
import { getArticles } from "@/components/articles/get.action"
import ArticleGrid from "../../../../components/articles/grid"

export default async function ArticleCategory(props: {
  params: Promise<{ category: string }>
}) {
  const params = await props.params
  const response = await getArticles(1, 1000, params.category)
  const articles = response.articles_connection.nodes

  return (
    <>
      <div className="centered pt-5 pb-5">
        <Filters
          name={`Found ${articles.length} articles with category "${params.category}"`}
        />
      </div>
      <div className="pt-70">
        <ArticleGrid articles={articles} />
      </div>
    </>
  )
}
