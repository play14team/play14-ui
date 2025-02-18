import ArticleGrid from "@/components/articles/grid"
import EventGrid from "@/components/events/grid"
import GameGrid from "@/components/games/grid"
import PlayerGrid from "@/components/players/grid"
import { dataAsArrayOf, query } from "@/libs/apollo-client"
import {
  ArticleEntity,
  EventEntity,
  GameEntity,
  PlayerEntity,
  SearchDocument,
} from "@/models/graphql"

export default async function Search({ input }: { input: string | undefined }) {
  if (!input) return

  const response = await query({
    query: SearchDocument,
    variables: { input },
  })

  const events = dataAsArrayOf<EventEntity>(
    response.search?.events || { data: [] },
  )
  const players = dataAsArrayOf<PlayerEntity>(
    response.search?.players || { data: [] },
  )
  const games = dataAsArrayOf<GameEntity>(
    response.search?.games || { data: [] },
  )
  const articles = dataAsArrayOf<ArticleEntity>(
    response.search?.articles || { data: [] },
  )

  return (
    <div className="pt-70">
      {events && events.length > 0 && (
        <div>
          <div className="d-flex justify-content-between">
            <h3>Events</h3>
            <p>{events.length} found</p>
          </div>
          <EventGrid events={events} />
        </div>
      )}
      {players && players.length > 0 && (
        <div>
          <div className="d-flex justify-content-between pb-70">
            <h3>Players</h3>
            <p>{players.length} found</p>
          </div>
          <PlayerGrid players={players} />
        </div>
      )}
      {games && games.length > 0 && (
        <div>
          <div className="d-flex justify-content-between">
            <h3>Games</h3>
            <p>{games.length} found</p>
          </div>
          <GameGrid games={games} />
        </div>
      )}
      {articles && articles.length > 0 && (
        <div>
          <div className="d-flex justify-content-between">
            <h3>Articles</h3>
            <p>{articles.length} found</p>
          </div>
          <ArticleGrid articles={articles} />
        </div>
      )}
      {events.length == 0 &&
        players.length == 0 &&
        games.length == 0 &&
        articles.length == 0 && (
          <h5 className="pb-70">No search result found</h5>
        )}
    </div>
  )
}
