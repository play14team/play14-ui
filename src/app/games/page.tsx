import GameGrid from "@/components/games/grid"
import LoadMore from "@/components/games/load-more"
import Page from "@/components/layout/page"
import { GameEntity, Pagination } from "@/models/graphql"
import { getGames } from "../../components/games/get.action"

export default async function Games() {
  const { data } = await getGames(1, 60)

  const games = data?.games?.data as GameEntity[]
  const pagination = data?.games?.meta.pagination as Pagination

  return (
    <Page name="Games">
      <div className="ptb-70">
        <GameGrid games={games} />
        <LoadMore pagination={pagination} />
      </div>
    </Page>
  )
}
