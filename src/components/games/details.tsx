import { camelPad } from "@/libs/camelPad"
import moment from "moment"
import Image from "next/image"
import Link from "next/link"
import { Game, UploadFile } from "../../models/graphql"
import Gallery from "../layout/gallery"
import HtmlContent from "../layout/html-content"
import GamesNavigator from "./nav"
import GameSidebar from "./sidebar"

const GameDetails = (props: { game: Game }) => {
  const { game } = props
  const image = game.defaultImage?.data?.attributes as UploadFile

  return (
    <div className="services-details-area pb-100">
      <GamesNavigator current={game.slug} />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="services-details-desc">
              <div className="row align-items-center align-items-stretch">
                <div className="image">
                  <Image
                    src={image.url || "#"}
                    alt={image.name}
                    width={1000}
                    height={1000}
                    priority
                    placeholder="blur"
                    blurDataURL={(image && image.blurhash) || undefined}
                    className="shadow"
                    style={{
                      maxWidth: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                    unoptimized
                  />
                </div>
              </div>

              <div className="blog-details-desc">
                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <i className="bx bx-folder-open"></i>
                        <span>Category</span>
                        <Link
                          href={`/games/categories/${game.category.toLowerCase()}`}
                        >
                          {camelPad(game.category)}
                        </Link>
                      </li>
                      <li>
                        <i className="bx bx-calendar"></i>
                        <span>Published</span>
                        <Link href="#">
                          {moment(game.publishedAt).format("MMM Do, YYYY")}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="article-footer">
                  {game.tags?.map((tag) => (
                    <div key={tag?.id} className="article-tags">
                      <span>
                        <i className="bx bx-purchase-tag"></i>
                      </span>

                      <Link key={tag?.id} href={`/games/tags/${tag?.value}`}>
                        {tag?.value}
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="article-footer">
                  <div className="content">
                    <h2>Summary</h2>
                    <p>{game.summary}</p>
                  </div>

                  {game.materials && game.materials.length > 0 && (
                    <div className="col-lg-12 col-md-12">
                      <div className="content">
                        <h3>Materials</h3>
                        <ul>
                          {game.materials.map((m) => (
                            <li key={m?.id}>{m?.value}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {game.preparationSteps &&
                    game.preparationSteps.length > 0 && (
                      <div className="col-lg-12 col-md-12">
                        <div className="content">
                          <h3>Preparation</h3>
                          <ul>
                            {game.preparationSteps.map((p) => (
                              <li key={p?.id}>{p?.value}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                  {game.safety && game.safety.length > 0 && (
                    <div className="col-lg-12 col-md-12">
                      <div className="content">
                        <h3>Safety</h3>
                        <ul>
                          {game.safety.map((s) => (
                            <li key={s?.id}>
                              <strong>{s?.key}</strong>: {s?.value}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                <div className="article-footer"></div>
              </div>

              <div className="content">
                <HtmlContent>{game.description}</HtmlContent>
              </div>

              {game.images && game.images.data.length > 1 && (
                <div className="row pt-70">
                  <h2>Images</h2>
                  <Gallery images={game.images.data} />
                </div>
              )}
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <GameSidebar game={game} />
          </div>

          {/* <h3>Game metrics</h3>
                  <div className="col-lg-12 col-md-12">
                      {
                          game.metrics.map(metric => {
                              return (
                                  <div>
                                      <div className="side">
                                          <div>{metric.name}</div>
                                      </div>
                                      <div className="middle">
                                          <div className="bar-container">
                                              <div className={`bar-${(metric.value/20)}`}></div>
                                          </div>
                                      </div>
                                  </div>
                              )
                          })
                      }
                  </div> */}
        </div>
      </div>
    </div>
  )
}

export default GameDetails
