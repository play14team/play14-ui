import { GameEntity } from "../../models/graphql"
import GameCard from "./card"

const GameGrid = (props: { games: GameEntity[] }) => {
  const { games } = props

  return (
    <div className="courses-area">
      <div className="container">
        <div className="row">
          {games &&
            games.map(
              (game: GameEntity) =>
                game.attributes && (
                  <GameCard key={game.id} game={game.attributes} />
                ),
            )}
        </div>
      </div>
    </div>
  )
}

export default GameGrid
