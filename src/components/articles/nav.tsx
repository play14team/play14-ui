import { Article, UploadFile } from "@/models/strapi"
import DetailsNavigator, { NavLink } from "../layout/detailsnav"
import { getArticleNav } from "./get.action"

export default async function ArticlesNavigator({
  current,
}: {
  current: string
}) {
  const articles = (await getArticleNav()) as Article[]
  const index = articles.findIndex((a) => a.slug == current)

  // If article not found in list, show no navigation
  if (index === -1) {
    return <DetailsNavigator previous={null} next={null} entity="articles" />
  }

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
