import Filters from "@/components/games/filters"
import GameGrid from "@/components/games/grid"
import LoadMore from "@/components/games/load-more"
import { Game } from "@/models/strapi"
import { Metadata } from "next"
import { getGames } from "../../components/games/get.action"

export const metadata: Metadata = {
  title: "Games",
}

export const revalidate = 3600

export default async function Games() {
  const response = (await getGames(1, 18)) as {
    games_connection?: {
      nodes: Game[]
      pageInfo: {
        page: number
        pageSize: number
        total: number
        pageCount: number
      }
    }
  }
  const games = (response?.games_connection?.nodes || []) as Game[]
  const pagination = response?.games_connection?.pageInfo || {
    total: 0,
    page: 1,
    pageSize: 18,
    pageCount: 1,
  }

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
