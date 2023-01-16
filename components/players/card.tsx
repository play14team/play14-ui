import Image from "next/image";
import Link from "next/link";
import { FragmentType, graphql, useFragment } from "../../models";
import { Player } from "../../models/graphql";

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

  function mapIcon(type: string) {
    if (type === "Email") return "bx bx-envelope";

    return `bx bxl-${type.toLowerCase()}`;
  }

  return (
    <div className="col-lg-4 col-sm-6 col-md-6">
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
          <ul className="social">
            {player.socialNetworks?.map((socialNetwork) => {
              return (
                <li key={socialNetwork?.id}>
                  <Link
                    href={socialNetwork?.url || "#"}
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className={mapIcon(socialNetwork?.type as string)}></i>
                  </Link>
                </li>
              );
            })}
          </ul>
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
