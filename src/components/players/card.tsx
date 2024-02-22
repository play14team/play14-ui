import Image from "next/image"
import Link from "next/link"
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
                width={400}
                height={400}
                blurDataURL={avatar.blurhash!}
                placeholder="blur"
                sizes="100vw"
                className="shadow"
                style={{
                  objectFit: "cover",
                  border: "1px solid #ddd",
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
                src="/default-player.png"
                alt="default player image"
                className="shadow"
                width={500}
                height={500}
                style={{
                  objectFit: "cover",
                  border: "1px solid #ddd",
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
