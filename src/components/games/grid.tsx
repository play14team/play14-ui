import { GameEntity } from "../../models/graphql"
import GameCard from "./card"

const GameGrid = (props: { games: GameEntity[] }) => {
  const { games } = props

  return (
    <div className="courses-area pt-70 pb-70">
      <div className="container">
        <div className="row">
          {games &&
            games.map(
              (game: any) =>
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
