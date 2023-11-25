import { getClient } from "@/libs/apollo-client"
import { camelPad } from "@/libs/camelPad"
import GameGrid from "../../../../components/games/grid"
import Page from "../../../../components/layout/page"
import { GameEntity, GamesDocument } from "../../../../models/graphql"

export default async function GameCategory({
  params,
}: {
  params: { category: string }
}) {
  const { data } = await getClient().query({
    query: GamesDocument,
    variables: { page: 1, pageSize: 1000, category: params.category },
  })

  const games = data?.games?.data as GameEntity[]

  const cat =
    games.length > 0
      ? camelPad(games[0].attributes?.category!)
      : camelPad(params.category)

  return (
    <Page name={`Games with category "${cat}"`}>
      <h3 className="centered">{games.length} found</h3>
      <div className="pt-70">{data && <GameGrid games={games} />}</div>
    </Page>
  )
}
