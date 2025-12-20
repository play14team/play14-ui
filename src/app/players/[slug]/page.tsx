import Page from "@/components/layout/page"
import PlayerDetails from "@/components/players/details"
import { SlugParamsProps } from "@/libs/slug-params"
import { getPlayer } from "../../../components/players/get.action"
import { notFound } from "next/navigation"

export const revalidate = 3600

// export async function generateStaticParams() {
//   const response = await getPlayerSlugs()
//   const players = dataAsArrayOf<PlayerEntity>(response.players)

//   return players.map((player) => ({
//     slug: player.attributes?.slug!,
//   }))
// }

export async function generateMetadata(props: SlugParamsProps) {
  const player = await getPlayer(props)

  if (!player) {
    return {
      title: "Player Not Found",
      description: "The requested player could not be found.",
    }
  }

  return {
    title: `Players | ${player.name}`,
    description: player.bio?.substring(0, 200),
    openGraph: {
      title: player.name,
      description: player.bio?.substring(0, 200),
      type: "article",
      images: player.avatar?.url,
    },
  }
}

export default async function Player(props: SlugParamsProps) {
  const player = await getPlayer(props)

  if (!player) {
    notFound()
  }

  return (
    <Page name={player.name}>
      <PlayerDetails player={player} />
    </Page>
  )
}
