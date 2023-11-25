import Page from "@/components/layout/page"
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
    <Page name="Players">
      <div className="ptb-70">
        <PlayerGrid players={players} />
        <LoadMore pagination={pagination} />
      </div>
    </Page>
  )
}
