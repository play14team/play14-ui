import { GameEntity } from "../../models/graphql"
import GameCard from "./card"

const GameGrid = ({ games }: { games: GameEntity[] }) => {
  return (
    <div className="courses-area">
      <div className="container">
        <div className="row">
          {games &&
            games.map((game) => (
              <GameCard key={game.id} game={game.attributes!} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default GameGrid
