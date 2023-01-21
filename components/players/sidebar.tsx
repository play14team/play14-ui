import Link from "next/link";
import { Player } from "../../models/graphql";
import Location from "../layout/location";

const PlayerSidebar = (props: { player: Player }) => {
  const { player } = props;
  return (
    <div className="case-studies-sidebar-sticky">
      <div className="case-studies-details-info">
        <ul>
          <li>
            <div className="icon">
              <i className="bx bx-user-pin"></i>
            </div>
            <span>Role</span>
            {player.position}
          </li>
          {player.company && (
            <li>
              <div className="icon">
                <i className="bx bx-building"></i>
              </div>
              <span>Company</span>
              {player.company}
            </li>
          )}

          {player.website && (
            <li>
              <div className="icon">
                <i className="bx bx-globe"></i>
              </div>
              <span>Website:</span>
              <Link
                href={player.website || "#"}
                target="_blank"
                rel="noreferrer"
              >
                {player.website}
              </Link>
            </li>
          )}

          {(player.city || player.country) && (
            <li>
              <div className="icon">
                <i className="bx bx-map"></i>
              </div>
              <span>Location</span>
              <Location city={player.city} country={player.country} />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default PlayerSidebar;
