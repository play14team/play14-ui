import { getClient } from "@/libs/apollo-client"
import ArticleGrid from "../../../../components/articles/grid"
import Page from "../../../../components/layout/page"
import { ArticleEntity, ArticlesDocument } from "../../../../models/graphql"

export default async function ArticleTag({
  params,
}: {
  params: { tag: string }
}) {
  const { data } = await getClient().query({
    query: ArticlesDocument,
    variables: { page: 1, pageSize: 1000, tag: params.tag },
  })

  const articles = data?.articles?.data as ArticleEntity[]

  return (
    <Page name={`Articles - Tag : ${params.tag}`}>
      {data && <ArticleGrid articles={articles} />}
    </Page>
  )
}
