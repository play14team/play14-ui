import { query } from "@/libs/apollo-client"
import { Article, ArticleNavDocument, UploadFile } from "../../models/graphql"
import DetailsNavigator, { NavLink } from "../layout/detailsnav"

export default async function ArticlesNavigator({
  current,
}: {
  current: string
}) {
  const response = await query({ query: ArticleNavDocument })
  const articles = (response.articles || []) as Article[]
  const index = articles.findIndex((a) => a.slug == current)
  const previous = index > 0 ? articles[index - 1] : null
  const next = index < articles.length - 1 ? articles[index + 1] : null

  return (
    <DetailsNavigator
      previous={getLink(previous as Article) as NavLink}
      next={getLink(next as Article) as NavLink}
      entity="articles"
    />
  )
}

const getLink = (article: Article): NavLink | null => {
  if (!article) return null

  return {
    slug: article.slug,
    name: article.title,
    image: article.defaultImage as UploadFile,
    date: article.publishedAt,
  }
}
