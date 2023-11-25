import { getClient } from "@/libs/apollo-client"
import ArticleGrid from "../../../../components/articles/grid"
import Page from "../../../../components/layout/page"
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
    <Page name={`Articles with category "${params.category}"`}>
      <h3 className="centered">{articles.length} found</h3>
      <div className="pt-70">{data && <ArticleGrid articles={articles} />}</div>
    </Page>
  )
}
