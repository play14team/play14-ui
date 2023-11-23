import { getClient } from "@/libs/apollo-client"
import {
  Article,
  ArticleEntity,
  ArticleNavDocument,
  UploadFile,
} from "../../models/graphql"
import DetailsNavigator, { NavLink } from "../layout/detailsnav"

export default async function ArticlesNavigator({
  current,
}: {
  current: string
}) {
  const { data } = await getClient().query({ query: ArticleNavDocument })

  const articles = data.articles?.data as ArticleEntity[]
  const index = articles.findIndex((a) => a.attributes?.slug == current)
  const previous = index > 0 ? articles[index - 1] : null
  const next = index < articles.length - 1 ? articles[index + 1] : null

  return (
    <DetailsNavigator
      previous={getLink(previous?.attributes as Article) as NavLink}
      next={getLink(next?.attributes as Article) as NavLink}
      entity="articles"
    />
  )
}

const getLink = (article: Article): NavLink | null => {
  if (!article) return null

  return {
    slug: article.slug,
    name: article.title,
    image: article.defaultImage?.data?.attributes as UploadFile,
    date: article.publishedAt,
  }
}
