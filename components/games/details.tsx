import Head from "next/head";
import Image from "next/image";
import { Game, UploadFile } from "../../models/graphql";
import GameSidebar from "./sidebar";
import Html from "../layout/html";
import GamesNavigator from "./detailsnav";
import Gallery from "../layout/gallery";

const GameDetails = (props: { game: Game }) => {
  const { game } = props;
  const image = game.defaultImage?.data?.attributes as UploadFile;

  return (
    <div className="services-details-area pb-100">
      <GamesNavigator current={game.slug} />
      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="services-details-desc">
              <div className="row align-items-center align-items-stretch">
                <div className="col-lg-6 col-md-6">
                  <div className="image">
                    <Image
                      src={image.url || "#"}
                      alt={image.name}
                      width={400}
                      height={400}
                      priority
                      placeholder="blur"
                      blurDataURL={(image && image.blurhash) || undefined}
                      style={{
                        maxWidth: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="content">
                    <h3>Tags</h3>
                    <ul>
                      {game.tags &&
                        game.tags.map((tag) => (
                          <li key={tag?.id}>{tag?.value}</li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="row">
                <h3>Summary</h3>
                <p>{game.summary}</p>
              </div>

              {game.materials.length > 0 && (
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

              {game.preparationSteps.length > 0 && (
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

              {game.safety.length > 0 && (
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

              <hr></hr>

              <div className="content">
                <Html>{game.description}</Html>
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
  );
};

export default GameDetails;
