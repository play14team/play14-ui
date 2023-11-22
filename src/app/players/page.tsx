import Page from "@/components/layout/page"
import PlayerGrid from "@/components/players/grid"
import { getClient } from "@/libs/apollo-client"
import { PlayerEntity, PlayersDocument } from "@/models/graphql"

export default async function PlayerPage() {
  const { data } = await getClient().query({
    query: PlayersDocument,
    variables: { page: 1, pageSize: 1000 },
  })

  const players = data?.players?.data as PlayerEntity[]
  //const pagination = data?.players?.meta.pagination as Pagination;

  return (
    <Page name="Players">
      {data && (
        <>
          {/* <Paging
            pagination={pagination}
            onNextPage={(nextPage) => setPage(nextPage)}
          /> */}
          <PlayerGrid players={players} />
          {/* <Paging
            pagination={pagination}
            onNextPage={(nextPage) => setPage(nextPage)}
          /> */}
        </>
      )}
    </Page>
  )
}
