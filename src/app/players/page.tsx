import Filters from "@/components/players/filters"
import PlayerGrid from "@/components/players/grid"
import LoadMore from "@/components/players/load-more"
import { dataAsArrayOf, getPagination } from "@/libs/apollo-client"
import { PlayerEntity, PlayerEntityResponseCollection } from "@/models/graphql"
import { Metadata } from "next"
import { getPlayers } from "../../components/players/get.action"

export const metadata: Metadata = {
  title: "Players",
}

export const revalidate = 3600

export default async function Players() {
  const response = (await getPlayers(1, 32)) as {
    players?: PlayerEntityResponseCollection
  }
  const players = dataAsArrayOf<PlayerEntity>(response?.players || { data: [] })
  const pagination = response.players
    ? getPagination(response.players)
    : { total: 0, page: 1, pageSize: 18, pageCount: 1 }

  return (
    <>
      <div className="centered pt-5 pb-5">
        <Filters name="Players" />
        <p>Total: {pagination.total}</p>
      </div>
      <PlayerGrid players={players} />
      <LoadMore pagination={pagination} />
    </>
  )
}
