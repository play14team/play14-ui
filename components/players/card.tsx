import Image from "next/image";
import { FragmentType, graphql, useFragment } from "../../models";
import SocialNetworks from "../events/socialnetworks";

export const PlayerItemFragment = graphql(`
  fragment PlayerItem on Player {
    slug
    name
    position
    avatar {
      data {
        attributes {
          url
          name
        }
      }
    }
    socialNetworks {
      id
      url
      type
    }
  }
`);

const PlayerCard = (props: {
  player: FragmentType<typeof PlayerItemFragment>;
}) => {
  const player = useFragment(PlayerItemFragment, props.player);

  return (
    <div className="col-lg-2 col-sm-4 col-md-3">
      <div className="single-scientist-item-box">
        <div className="image">
          {player.avatar?.data?.attributes && (
            <Image
              src={player.avatar?.data?.attributes?.url}
              alt={player.avatar?.data?.attributes?.name}
              width={500}
              height={500}
            />
          )}
          {player.socialNetworks && (
            <SocialNetworks socialNetworks={player.socialNetworks} />
          )}
        </div>
        <div className="content">
          <h3>{player.name}</h3>
          <span>{player.position}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
