import Image from "next/image"
import Link from "next/link"
import { FragmentType, graphql, useFragment } from "../../models"
import { PlayerItemFragmentDoc, UploadFile } from "../../models/graphql"
import SocialNetworks from "../layout/socialnetworks"

const PlayerCard = (props: {
  player: FragmentType<typeof PlayerItemFragmentDoc>
}) => {
  const player = useFragment(PlayerItemFragmentDoc, props.player)
  const url = player.slug ? `/players/${player.slug}` : "#"
  const avatar = player.avatar?.data?.attributes as UploadFile

  return (
    <div className="col-lg-3 col-sm-6 col-md-6">
      <div className="single-scientist-box">
        <div style={{ position: "relative", height: "300px" }}>
          {avatar && (
            <Link href={url}>
              <Image
                src={avatar.url}
                alt={avatar.name}
                placeholder="blur"
                blurDataURL={(avatar && avatar.blurhash) || undefined}
                priority
                fill
                style={{ objectFit: "cover" }}
              />
            </Link>
          )}
        </div>
        <div className="content">
          <Link href={url}>
            <h3>{player.name}</h3>
          </Link>
          <span>{player.position}</span>
          {player.socialNetworks && (
            <SocialNetworks socialNetworks={player.socialNetworks} />
          )}
        </div>
      </div>
    </div>
  )
}

export default PlayerCard