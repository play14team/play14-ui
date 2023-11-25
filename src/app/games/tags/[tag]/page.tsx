import { getClient } from "@/libs/apollo-client"
import GameGrid from "../../../../components/games/grid"
import Page from "../../../../components/layout/page"
import { GameEntity, GamesDocument } from "../../../../models/graphql"

export default async function GameTag({ params }: { params: { tag: string } }) {
  const { data } = await getClient().query({
    query: GamesDocument,
    variables: { page: 1, pageSize: 1000, tag: params.tag },
  })

  const games = data?.games?.data as GameEntity[]

  return (
    <Page name={`Games with tag "${params.tag}"`}>
      <h3 className="centered">{games.length} found</h3>
      <div className="pt-70">{data && <GameGrid games={games} />}</div>
    </Page>
  )
}
