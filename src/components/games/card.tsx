import game1 from "@/styles/images/gallery/gallery5.jpg"
import Image from "next/image"
import Link from "next/link"
import { Game } from "../../models/graphql"

const GameCard = ({ game }: { game: Game }) => {
  const url = `/games/${encodeURIComponent(game.slug)}`
  const image = game.defaultImage.data?.attributes
  const proposedby = game.proposedBy?.data

  return (
    <article id={game.name} key={game.name} className="col-lg-4 col-md-6">
      <div className="single-courses-box">
        <div className="courses-image">
          <Link href={url} className="d-block image">
            <Image
              src={(image && image.url) || game1}
              alt={(image && image.name) || "image"}
              width={400}
              height={400}
              priority
              placeholder="blur"
              blurDataURL={(image && image.blurhash) || undefined}
              style={{
                maxWidth: "100%",
                objectFit: "cover",
              }}
              unoptimized
            />
          </Link>
          {
            <div className="price shadow" style={{ fontSize: "12px" }}>
              {game.category}
            </div>
          }
        </div>
        <div className="courses-content">
          {proposedby &&
            proposedby.map((player) => {
              const playerImage = player.attributes?.avatar?.data?.attributes
              return (
                player &&
                player.attributes && (
                  <div className="course-author d-flex align-items-center">
                    {playerImage && (
                      <Image
                        src={playerImage.url || "#"}
                        width={75}
                        height={75}
                        priority
                        placeholder="blur"
                        blurDataURL={
                          (playerImage && playerImage.blurhash) || undefined
                        }
                        className="rounded-circle"
                        alt={game.name}
                        unoptimized
                      />
                    )}
                    <Link href={`/players/${player.attributes.slug}`}>
                      <span>&nbsp;{player.attributes.name}</span>
                    </Link>
                  </div>
                )
              )
            })}

          <h3>
            <Link href={url}>{game.name}</Link>
          </h3>
          <p>
            {game.summary && game.summary.length > 200
              ? game.summary.substring(0, 200).concat("...")
              : game.summary}
          </p>
          <ul className="courses-box-footer d-flex justify-content-between align-items-center">
            <li>
              <i className="bx bx-time"></i> {game.timebox}
            </li>
            <li>
              <i className="flaticon-team"></i>{" "}
              {game.scale && game.scale?.length > 20
                ? game.scale?.substring(0, 17).concat("...")
                : game.scale}
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}

export default GameCard
