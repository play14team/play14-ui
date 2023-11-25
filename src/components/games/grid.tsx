import { GameEntity } from "../../models/graphql"
import GameCard from "./card"

const GameGrid = ({ games }: { games: GameEntity[] }) => {
  return (
    <div className="courses-area">
      <div className="container">
        <div className="row">
          {games.map((g) => {
            return <GameCard key={g.id} game={g.attributes} />
          })}
        </div>
      </div>
    </div>
  )
}

export default GameGrid
