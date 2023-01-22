import Head from "next/head";
import Image from "next/image";
import { FragmentType, graphql, useFragment } from "../../models";
import { Player, UploadFile } from "../../models/graphql";
import SocialNetworks from "../layout/socialnetworks";
import PlayerSidebar from "./sidebar";

const PlayerDetailsFragment = graphql(`
  fragment PlayerDetails on Player {
    slug
    name
    position
    company
    tagline
    bio
    city
    country
    website
    embeddedMapUrl
    avatar {
      data {
        attributes {
          name
          url
        }
      }
    }
    socialNetworks {
      url
      type
    }
  }
`);

const PlayerDetails = (props: {
  player: FragmentType<typeof PlayerDetailsFragment>;
}) => {
  const player = useFragment(PlayerDetailsFragment, props.player) as Player;

  const description = `${player.name} (${player.position})`;
  const avatar = player.avatar?.data?.attributes as UploadFile;

  return (
    <article>
      <Head>
        <title>#play14 - {player && player.name}</title>
        <meta name="description" content={description} />
      </Head>
      <section className="case-studies-details-area ptb-100">
        <h1>{player.name}</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="single-scientist-box">
                <Image
                  src={avatar.url || "#"}
                  alt={avatar.name}
                  width={350}
                  height={350}
                  priority
                />
                <div className="content">
                  {player.socialNetworks && (
                    <SocialNetworks socialNetworks={player.socialNetworks} />
                  )}
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              {player.embeddedMapUrl && (
                <div className="events-details-location">
                  <iframe title="Map" src={player.embeddedMapUrl}></iframe>
                </div>
              )}
            </div>

            <div className="col-lg-4 col-md-12">
              <PlayerSidebar player={player} />
            </div>
          </div>
          <div className="row">
            <div className="case-studies-details-desc">
              <h5>{player.tagline}</h5>
              {player.bio && <span className="sub-title">Biography</span>}
              <br />
              <p>{player.bio}</p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default PlayerDetails;
