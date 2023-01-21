import Image from "next/image";
import Link from "next/link";
import { FragmentType, graphql, useFragment } from "../../models";
import { UploadFile } from "../../models/graphql";
import SocialNetworks from "../layout/socialnetworks";

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
  const url = player.slug ? `/players/${player.slug}` : "#";
  const avatar = player.avatar?.data?.attributes as UploadFile;

  return (
    <div className="col-lg-3 col-sm-6 col-md-6">
      <div className="single-scientist-box">
        {avatar && (
          <Link href={url}>
            <Image
              src={avatar.url}
              alt={avatar.name}
              width={500}
              height={500}
            />
          </Link>
        )}
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
  );
};

export default PlayerCard;
