import Image from "next/image"
import Link from "next/link"
import defaultPlayer from "public/default-player.png"
import { Player, UploadFile } from "../../models/graphql"
import SocialNetworks from "../layout/socialnetworks"

const PlayerCard = ({ player }: { player: Player }) => {
  const url = player.slug ? `/players/${player.slug}` : "#"
  const avatar = player.avatar?.data?.attributes as UploadFile

  return (
    <article
      id={player.name}
      key={player.name}
      className="col-lg-3 col-sm-6 col-md-6"
    >
      <div className="single-scientist-box">
        <div style={{ position: "relative", height: "300px" }}>
          {avatar && (
            <Link href={url}>
              <Image
                src={avatar.url}
                alt={avatar.name}
                placeholder="blur"
                blurDataURL={avatar.blurhash!}
                sizes="100vw"
                width={300}
                height={300}
                style={{
                  objectFit: "cover",
                  border: "1px solid #ddd",
                  boxShadow: "8px 8px #eee",
                  borderRadius: "15px",
                  maxHeight: "300px",
                }}
                unoptimized
              />
            </Link>
          )}
          {!avatar && (
            <Link href={url}>
              <Image
                src={defaultPlayer}
                alt="default player image"
                placeholder="blur"
                style={{
                  objectFit: "cover",
                  border: "1px solid #ddd",
                  boxShadow: "8px 8px #eee",
                  borderRadius: "15px",
                }}
                unoptimized
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
    </article>
  )
}

export default PlayerCard
