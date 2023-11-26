import Filters from "@/components/players/filters"
import PlayerGrid from "@/components/players/grid"
import LoadMore from "@/components/players/load-more"
import { Pagination, PlayerEntity } from "@/models/graphql"
import { Metadata } from "next"
import { getPlayers } from "../../components/players/get.action"

export const metadata: Metadata = {
  title: "Players",
}

export default async function Players() {
  const { data } = await getPlayers(1, 32)

  const players = data?.players?.data as PlayerEntity[]
  const pagination = data?.players?.meta.pagination as Pagination

  return (
    <>
      <div className="centered pt-5 pb-5">
        <Filters name="Players" />
      </div>
      <PlayerGrid players={players} />
      <LoadMore pagination={pagination} />
    </>
  )
}
