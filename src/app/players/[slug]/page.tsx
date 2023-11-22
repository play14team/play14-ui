import Page from "@/components/layout/page"
import PlayerDetails from "@/components/players/details"
import { getClient } from "@/libs/apollo-client"
import { SlugParamsProps } from "@/libs/slug-params"
import { Player, PlayerDocument } from "@/models/graphql"

export default async function Player({ params }: SlugParamsProps) {
  const { slug } = params
  const { data } = await getClient().query({
    query: PlayerDocument,
    variables: { slug: slug },
  })

  const player = data?.players?.data[0].attributes as Player

  return (
    <Page
      name={player && player.name}
      description={player ? `${player.name} (${player.position})` : ""}
    >
      {player && <PlayerDetails player={player} />}
    </Page>
  )
}
