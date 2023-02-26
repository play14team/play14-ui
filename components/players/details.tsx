import Head from "next/head";
import Image from "next/image";
import { FragmentType, graphql, useFragment } from "../../models";
import {
  Player,
  PlayerDetailsFragmentDoc,
  UploadFile,
} from "../../models/graphql";
import SocialNetworks from "../layout/socialnetworks";
import PlayerSidebar from "./sidebar";
import openTabSection from "../../libs/tabs";
import Html from "../layout/html";
import EventGrid from "../events/grid";
import PlayersNavigator from "./detailsnav";
import Map from "../map";

const PlayerDetails = (props: {
  player: FragmentType<typeof PlayerDetailsFragmentDoc>;
}) => {
  const player = useFragment(PlayerDetailsFragmentDoc, props.player) as Player;

  const description = `${player.name} (${player.position})`;
  const avatar = player.avatar?.data?.attributes as UploadFile;
  const attended = player.attended?.data;
  const hosted = player.hosted?.data;
  const mentored = player.mentored?.data;

  return (
    <>
      <Head>
        <title>#play14 - {player && player.name}</title>
        <meta name="description" content={description} />
      </Head>
      <section className="case-studies-details-area pt-70 pb-100">
        <div className="container">
          <h1>{player.name}</h1>
          <PlayersNavigator current={player.slug} />
          <div className="row pt-5">
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
              <PlayerSidebar player={player} />
            </div>

            <div className="col-lg-4 col-md-12 px-4">
              {player.location && (
                <div className="events-details-location">
                  <Map location={player.location} height={"450px"} zoom={10} />
                </div>
              )}
            </div>
          </div>
          <div className="row">
            {/* tabs */}
            <div className="row">
              <div className="courses-details-desc">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li
                    onClick={(e) => openTabSection(e, "tab1")}
                    className="current"
                  >
                    Biography
                  </li>
                  <li onClick={(e) => openTabSection(e, "tab2")}>
                    Attended{" "}
                    {attended && attended.length > 0
                      ? `(${attended.length})`
                      : ""}
                  </li>
                  <li onClick={(e) => openTabSection(e, "tab3")}>
                    Hosted{" "}
                    {hosted && hosted.length > 0 ? `(${hosted.length})` : ""}
                  </li>
                  <li onClick={(e) => openTabSection(e, "tab4")}>
                    Mentored{" "}
                    {mentored && mentored.length > 0
                      ? `(${mentored.length})`
                      : ""}
                  </li>
                </ul>

                <div className="tab-content">
                  {/* tab1 */}
                  <div id="tab1" className="tab-pane tabs_item">
                    {(player.bio && <Html>{player.bio}</Html>) || (
                      <p>This player is pretty shy with their life story!</p>
                    )}
                  </div>

                  {/* tab2 */}
                  <div id="tab2" className="tab-pane tabs_item">
                    {(attended && attended.length > 0 && (
                      <EventGrid events={attended} />
                    )) || <p>This player has not attended any event yet</p>}
                  </div>

                  {/* tab3 */}
                  <div id="tab3" className="tab-pane tabs_item">
                    {(hosted && hosted.length > 0 && (
                      <EventGrid events={hosted} />
                    )) || <p>This player has not hosted any event yet</p>}
                  </div>

                  {/* tab4 */}
                  <div id="tab4" className="tab-pane tabs_item">
                    {(mentored && mentored.length > 0 && (
                      <EventGrid events={mentored} />
                    )) || <p>This player has not mentored any event yet</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlayerDetails;
