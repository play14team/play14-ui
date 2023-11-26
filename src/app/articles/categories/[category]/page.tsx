import Filters from "@/components/articles/filters"
import { getClient } from "@/libs/apollo-client"
import ArticleGrid from "../../../../components/articles/grid"
import { ArticleEntity, ArticlesDocument } from "../../../../models/graphql"

export default async function ArticleCategory({
  params,
}: {
  params: { category: string }
}) {
  const { data } = await getClient().query({
    query: ArticlesDocument,
    variables: { page: 1, pageSize: 1000, category: params.category },
  })

  const articles = data?.articles?.data as ArticleEntity[]

  return (
    <>
      <div className="centered pt-5 pb-5">
        <Filters
          name={`Found ${articles.length} articles with category "${params.category}"`}
        />
      </div>
      <div className="pt-70">{data && <ArticleGrid articles={articles} />}</div>
    </>
  )
}
