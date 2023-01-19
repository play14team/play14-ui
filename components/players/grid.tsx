import PlayerCard from "./card";

const PlayerGrid = (props: { title?: string; players: any }) => {
  const { title, players } = props;

  if (!players || players.data.length === 0) {
    return <></>;
  }

  return (
    <section className="scientist-area pb-70">
      <div className="container">
        {title && (
          <div className="section-title">
            <span className="sub-title">{title}</span>
          </div>
        )}
        <div className="row">
          {players &&
            players.data.map(
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
