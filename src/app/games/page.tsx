import Filters from "@/components/games/filters"
import GameGrid from "@/components/games/grid"
import LoadMore from "@/components/games/load-more"
import { dataAsArrayOf, getPagination } from "@/libs/apollo-client"
import { GameEntity, GameEntityResponseCollection } from "@/models/graphql"
import { Metadata } from "next"
import { getGames } from "../../components/games/get.action"

export const metadata: Metadata = {
  title: "Games",
}

export const revalidate = 3600

export default async function Games() {
  const response = (await getGames(1, 18)) as {
    games?: GameEntityResponseCollection
  }
  const games = dataAsArrayOf<GameEntity>(response?.games || { data: [] })
  const pagination = response.games
    ? getPagination(response.games)
    : { total: 0, page: 1, pageSize: 18, pageCount: 1 }

  return (
    <>
      <div className="centered pt-5 pb-5">
        <Filters name="Games" />
        <p>Total: {pagination.total}</p>
      </div>
      <GameGrid games={games} />
      <LoadMore pagination={pagination} />
    </>
  )
}
