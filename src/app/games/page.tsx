import GameGrid from "@/components/games/grid"
import LoadMore from "@/components/games/load-more"
import Page from "@/components/layout/page"
import { GameEntity, Pagination } from "@/models/graphql"
import { Metadata } from "next"
import { getGames } from "../../components/games/get.action"

export const metadata: Metadata = {
  title: "Games",
}

export default async function Games() {
  const { data } = await getGames(1, 18)

  const games = data?.games?.data as GameEntity[]
  const pagination = data?.games?.meta.pagination as Pagination

  return (
    <Page name="Games">
      <div className="ptb-70">
        {/* <Tags /> */}
        <GameGrid games={games} />
        <LoadMore pagination={pagination} />
      </div>
    </Page>
  )
}
