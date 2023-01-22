import { PlayerEntity } from "../../models/graphql";
import PlayerCard from "./card";

const PlayerGrid = (props: { title?: string; players: PlayerEntity[] }) => {
  const { title, players } = props;

  return (
    <section className="scientist-area pb-70">
      <div className="container">
        {title && players.length > 0 && (
          <div className="section-title">
            <span className="sub-title">{title}</span>
          </div>
        )}
        <div className="row">
          {players &&
            players.map(
              (player: any) =>
                player.attributes && (
                  <PlayerCard key={player.id} player={player.attributes} />
                )
            )}
        </div>
      </div>
    </section>
  );
};

export default PlayerGrid;
