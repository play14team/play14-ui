import Link from "next/link";
import Image from "next/image";
import { Game } from "../../models/graphql";
import Moment from "react-moment";

const GameSidebar = (props: { game: Game }) => {
  const { game } = props;

  return (
    <div className="services-details-info">
      <div className="single-industries-serve-box">{game.category}</div>

      <div className="services-contact-info">
        <h3>Details</h3>
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

          <li>
            <div className="icon">
              <i className="bx bx-bulb"></i>
            </div>
            <span>Proposed by</span>
            {game.proposedBy?.data &&
              game.proposedBy.data.map((p) => {
                const player = p.attributes;
                const url = `/players/${player?.slug}`;
                const avatar = player?.avatar?.data?.attributes;
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
                    />
                    <h5 className="centered pt-2">{player?.name}</h5>
                  </Link>
                );
              })}
          </li>

          <li>
            <div className="icon">
              <i className="bx bx-edit"></i>
            </div>
            <span>Documented by</span>
            {game.documentedBy?.data &&
              game.documentedBy.data.map((p) => {
                const player = p.attributes;
                const url = `/players/${player?.slug}`;
                const avatar = player?.avatar?.data?.attributes;
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
                    />
                    <h5 className="centered pt-2">{player?.name}</h5>
                  </Link>
                );
              })}
          </li>

          <li>
            <div className="icon">
              <i className="bx bx-book-open"></i>
            </div>
            <span>Pubished</span>
            <Moment format="MMMM DD, YYYY">{game.publishedAt}</Moment>
          </li>
        </ul>
      </div>

      {game.resources.data.length > 0 && (
        <div className="download-file">
          <h3>Resources</h3>

          <ul>
            {game.resources.data.map((r) => {
              const resource = r.attributes;
              const icon = `bx bxs-file-${resource?.ext}`;
              return (
                <li key={r.id}>
                  <a href={resource?.url} target="_blank" rel="noreferrer">
                    {resource?.name} <i className={icon}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GameSidebar;
