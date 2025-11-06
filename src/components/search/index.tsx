import ArticleGrid from "@/components/articles/grid"
import EventGrid from "@/components/events/grid"
import GameGrid from "@/components/games/grid"
import PlayerGrid from "@/components/players/grid"
import { query } from "@/libs/apollo-client"
import { Article, Event, Game, Player, SearchDocument } from "@/models/graphql"

export default async function Search({ input }: { input: string | undefined }) {
  if (!input) return

  const response = await query({
    query: SearchDocument,
    variables: { input },
  })

  // Search plugin uses connection query structure with nodes
  const events = (response.search?.events?.nodes || []) as Event[]
  const players = (response.search?.players?.nodes || []) as Player[]
  const articles = (response.search?.articles?.nodes || []) as Article[]
  const games = (response.search?.games?.nodes || []) as Game[]

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
