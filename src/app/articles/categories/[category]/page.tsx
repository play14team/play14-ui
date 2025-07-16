import Filters from "@/components/articles/filters"
import { dataAsArrayOf, query } from "@/libs/apollo-client"
import ArticleGrid from "../../../../components/articles/grid"
import {
  ArticleEntity,
  ArticleEntityResponseCollection,
  ArticlesDocument,
} from "../../../../models/graphql"

export default async function ArticleCategory(props: {
  params: Promise<{ category: string }>
}) {
  const params = await props.params
  const response = (await query({
    query: ArticlesDocument,
    variables: { page: 1, pageSize: 1000, category: params.category },
  })) as { articles?: ArticleEntityResponseCollection }
  const articles = dataAsArrayOf<ArticleEntity>(
    response.articles || { data: [] },
  )

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
