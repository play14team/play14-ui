import { useQuery } from "@apollo/client"
import {
  Game,
  GameEntity,
  GameNavDocument,
  UploadFile,
} from "../../models/graphql"
import DetailsNavigator, { NavLink } from "../layout/detailsnav"
import Loader from "../layout/loader"

const GamesNavigator = (props: { current: string }) => {
  const { data, loading } = useQuery(GameNavDocument)
  const { current } = props

  if (loading) return <Loader size="18vh" />
  if (!data) return

  const games = data.games?.data as GameEntity[]
  const index = games.findIndex((a) => a.attributes?.slug == current)
  const previous = index > 0 ? games[index - 1] : null
  const next = index < games.length - 1 ? games[index + 1] : null

  return (
    <DetailsNavigator
      previous={getLink(previous?.attributes as Game) as NavLink}
      next={getLink(next?.attributes as Game) as NavLink}
      entity="games"
    />
  )
}

const getLink = (game: Game): NavLink | null => {
  if (!game) return null

  return {
    slug: game.slug,
    name: game.name,
    image: game.defaultImage?.data?.attributes as UploadFile,
    date: game.publishedAt!,
  }
}

export default GamesNavigator
