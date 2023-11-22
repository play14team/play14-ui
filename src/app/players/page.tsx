import Page from "@/components/layout/page"
import PlayerGrid from "@/components/players/grid"
import LoadMore from "@/components/players/load-more"
import { Pagination, PlayerEntity } from "@/models/graphql"
import { getPlayers } from "../../components/players/get-players.action"

export default async function PlayerPage() {
  const pageSize = 60
  const { data } = await getPlayers(1, pageSize)

  const players = data?.players?.data as PlayerEntity[]
  const pagination = data?.players?.meta.pagination as Pagination

  return (
    <Page name="Players">
      {data && (
        <>
          <PlayerGrid players={players} />
          <LoadMore pagination={pagination} />
        </>
      )}
    </Page>
  )
}
