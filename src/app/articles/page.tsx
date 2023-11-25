import ArticleGrid from "@/components/articles/grid"
import LoadMore from "@/components/articles/load-more"
import Page from "@/components/layout/page"
import { ArticleEntity, Pagination } from "@/models/graphql"
import { Metadata } from "next"
import { getArticles } from "../../components/articles/get.action"

export const metadata: Metadata = {
  title: "Articles",
}

export default async function Articles() {
  const { data } = await getArticles(1, 18)

  const articles = data?.articles?.data as ArticleEntity[]
  const pagination = data?.articles?.meta.pagination as Pagination

  return (
    <Page name="Articles">
      <div className="ptb-70">
        <ArticleGrid articles={articles} />
        <LoadMore pagination={pagination} />
      </div>
    </Page>
  )
}
