import Filters from "@/components/games/filters"
import GameGrid from "@/components/games/grid"
import LoadMore from "@/components/games/load-more"
import { dataAsArrayOf, getPagination } from "@/libs/apollo-client"
import { GameEntity } from "@/models/graphql"
import { Metadata } from "next"
import { getGames } from "../../components/games/get.action"

export const metadata: Metadata = {
  title: "Games",
}

export const revalidate = 3600

export default async function Games() {
  const response = await getGames(1, 18)
  const games = dataAsArrayOf<GameEntity>(response.games)
  const pagination = getPagination(response.games)

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
