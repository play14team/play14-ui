import { PlayerEntity } from "../../models/graphql"
import PlayerCard from "./card"

const PlayerGrid = ({
  title,
  players,
}: {
  title?: string
  players: PlayerEntity[]
}) => {
  return (
    <section className="scientist-area">
      <div className="container">
        {title && players.length > 0 && (
          <div className="section-title">
            <span className="sub-title">{title}</span>
          </div>
        )}
        <div className="row">
          {players &&
            players.map((player) => (
              <PlayerCard key={player.id} player={player.attributes!} />
            ))}
        </div>
      </div>
    </section>
  )
}

export default PlayerGrid
