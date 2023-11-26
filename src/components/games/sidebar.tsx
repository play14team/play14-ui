import Image from "next/image"
import Link from "next/link"
import { Game } from "../../models/graphql"
import Ratings from "../layout/ratings"

const GameSidebar = (props: { game: Game }) => {
  const { game } = props

  return (
    <aside className="services-details-info" style={{ marginTop: "15px" }}>
      <div className="services-contact-info" style={{ borderRadius: "10px" }}>
        <ul>
          <li>
            <div className="icon">
              <i className="bx bx-time"></i>
            </div>
            <span>Timebox</span>
            {game.timebox}
          </li>
          <li>
            <div className="icon">
              <i className="bx bx-user-circle"></i>
            </div>
            <span>Scale</span>
            {game.scale}
          </li>

          {game.ratings && game.ratings.energy && (
            <li>
              <div className="icon">
                <i className="bx bx-star"></i>
              </div>
              <span>Ratings</span>
              {game.ratings.energy != undefined && (
                <Ratings name="Energy" value={game.ratings.energy} />
              )}
              {game.ratings.connection != undefined && (
                <Ratings name="Connection" value={game.ratings.connection} />
              )}
              {game.ratings.silliness != undefined && (
                <Ratings name="Silliness" value={game.ratings.silliness} />
              )}
            </li>
          )}

          {game.firstPlayedAt && (
            <li>
              <div className="icon">
                <i className="bx bx-map"></i>
              </div>
              <span>First played</span>
              <Link
                href={`/events/${game.firstPlayedAt?.data?.attributes?.slug}`}
              >
                {game.firstPlayedAt.data?.attributes?.name}
              </Link>
            </li>
          )}

          {game.credits && (
            <li>
              <div className="icon">
                <i className="bx bx-award"></i>
              </div>
              <span>Credits</span>
              {game.credits}
            </li>
          )}

          <li>
            <div className="icon">
              <i className="bx bx-bulb"></i>
            </div>
            <span>Proposed by</span>
            {game.proposedBy?.data &&
              game.proposedBy.data.map((p) => {
                const player = p.attributes
                const url = `/players/${player?.slug}`
                const avatar = player?.avatar?.data?.attributes
                return (
                  <Link key={p.id} href={url} className="centered pt-3">
                    <Image
                      src={avatar?.url || "#"}
                      alt={avatar?.name || "avatar"}
                      width={200}
                      height={200}
                      priority
                      placeholder="blur"
                      blurDataURL={(avatar && avatar.blurhash) || undefined}
                      unoptimized
                    />
                    <h5 className="centered pt-2">{player?.name}</h5>
                  </Link>
                )
              })}
          </li>

          <li>
            <div className="icon">
              <i className="bx bx-edit"></i>
            </div>
            <span>Documented by</span>
            {game.documentedBy?.data &&
              game.documentedBy.data.map((p) => {
                const player = p.attributes
                const url = `/players/${player?.slug}`
                const avatar = player?.avatar?.data?.attributes
                return (
                  <Link key={p.id} href={url} className="centered pt-3">
                    <Image
                      src={avatar?.url || "#"}
                      alt={avatar?.name || "avatar"}
                      width={200}
                      height={200}
                      priority
                      placeholder="blur"
                      blurDataURL={(avatar && avatar.blurhash) || undefined}
                      unoptimized
                    />
                    <h5 className="centered pt-2">{player?.name}</h5>
                  </Link>
                )
              })}
          </li>
        </ul>
      </div>

      {game.resources && game.resources.data.length > 0 && (
        <div className="download-file">
          <h3>Resources</h3>

          <ul>
            {game.resources?.data.map((r) => {
              const resource = r.attributes
              const icon = `bx bxs-file-${resource?.ext}`
              return (
                <li key={r.id}>
                  <a href={resource?.url} target="_blank" rel="noreferrer">
                    {resource?.name} <i className={icon}></i>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </aside>
  )
}

export default GameSidebar
