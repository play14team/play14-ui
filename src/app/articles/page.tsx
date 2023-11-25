import Filters from "@/components/articles/filters"
import ArticleGrid from "@/components/articles/grid"
import LoadMore from "@/components/articles/load-more"
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
    <>
      <div className="centered pt-5 pb-5">
        <Filters name="Articles" />
      </div>
      <ArticleGrid articles={articles} />
      <LoadMore pagination={pagination} />
    </>
  )
}
