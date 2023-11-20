import { useQuery } from "@apollo/client"
import {
  Article,
  ArticleEntity,
  ArticleNavDocument,
  UploadFile,
} from "../../models/graphql"
import DetailsNavigator, { NavLink } from "../layout/detailsnav"
import Loader from "../layout/loader"

const ArticlesNavigator = (props: { current: string }) => {
  const { data, loading } = useQuery(ArticleNavDocument)
  const { current } = props

  if (loading) return <Loader size="18vh" />
  if (!data) return

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

const getLink = (game: Article): NavLink | null => {
  if (!game) return null

  return {
    slug: game.slug,
    name: game.title,
    image: game.defaultImage?.data?.attributes as UploadFile,
    date: game.publishedAt!,
  }
}

export default ArticlesNavigator
