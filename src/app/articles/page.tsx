import Filters from "@/components/articles/filters"
import ArticleGrid from "@/components/articles/grid"
import LoadMore from "@/components/articles/load-more"
import { dataAsArrayOf, getPagination } from "@/libs/apollo-client"
import {
  ArticleEntity,
  ArticleEntityResponseCollection,
} from "@/models/graphql"
import { Metadata } from "next"
import { getArticles } from "../../components/articles/get.action"

export const metadata: Metadata = {
  title: "Articles",
}

export const revalidate = 3600

export default async function Articles() {
  const response = (await getArticles(1, 18)) as {
    articles?: ArticleEntityResponseCollection
  }
  const articles = dataAsArrayOf<ArticleEntity>(
    response.articles || { data: [] },
  )
  const pagination = response.articles
    ? getPagination(response.articles)
    : { total: 0, page: 1, pageSize: 18, pageCount: 1 }

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
