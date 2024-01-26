import Filters from "@/components/articles/filters"
import ArticleGrid from "@/components/articles/grid"
import LoadMore from "@/components/articles/load-more"
import { dataAsArrayOf, getPagination } from "@/libs/apollo-client"
import { ArticleEntity } from "@/models/graphql"
import { Metadata } from "next"
import { getArticles } from "../../components/articles/get.action"

export const metadata: Metadata = {
  title: "Articles",
}

export default async function Articles() {
  const response = await getArticles(1, 18)
  const articles = dataAsArrayOf<ArticleEntity>(response.articles)
  const pagination = getPagination(response.articles)

  return (
    <>
      <div className="centered pt-5 pb-5">
        <Filters name="Articles" />
        <p>Total: {pagination.total}</p>
      </div>
      <ArticleGrid articles={articles} />
      <LoadMore pagination={pagination} />
    </>
  )
}
