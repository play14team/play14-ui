import { Game } from "../../models/graphql"
import GameCard from "./card"

const GameGrid = ({ games }: { games: Game[] }) => {
  return (
    <div className="courses-area">
      <div className="container">
        <div className="row">
          {games &&
            games.map((game) => <GameCard key={game.documentId} game={game} />)}
        </div>
      </div>
    </div>
  )
}

export default GameGrid
