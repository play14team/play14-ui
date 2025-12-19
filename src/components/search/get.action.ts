"use server"

import { restQuery } from "@/libs/strapi-client"
import {
  searchEventPopulate,
  searchArticlePopulate,
  searchGamePopulate,
  searchPlayerPopulate,
} from "@/libs/strapi-populate"

// Types - will be replaced by OpenAPI generated types when available
interface UploadFile {
  name: string
  url: string
  width?: number
  height?: number
}

interface Event {
  documentId: string
  slug: string
  name: string
  start: string
  end: string
  timezone?: string
  eventStatus: string
  defaultImage?: UploadFile
  location?: {
    name: string
    country: string
  }
}

interface Article {
  documentId: string
  slug: string
  title: string
  category?: string
  summary?: string
  publishedAt?: string
  defaultImage?: UploadFile
  author?: {
    name: string
    slug: string
    avatar?: UploadFile
  }
}

interface Game {
  documentId: string
  slug: string
  name: string
  category?: string
  summary?: string
  defaultImage?: UploadFile
  proposedBy?: Array<{
    name: string
    slug: string
    avatar?: UploadFile
  }>
}

interface Player {
  documentId: string
  slug: string
  name: string
  position?: string
  avatar?: UploadFile
}

/**
 * Search across events, articles, games, and players
 * REST equivalent of: search/search.graphql
 */
export async function search(input: string) {
  const [eventsRes, articlesRes, gamesRes, playersRes] = await Promise.all([
    // Search events
    restQuery<Event[]>("events", {
      filters: {
        $or: [
          { name: { $containsi: input } },
          { description: { $containsi: input } },
        ],
      },
      sort: ["start:desc"],
      pagination: { page: 1, pageSize: 100 },
      populate: searchEventPopulate,
    }),
    // Search articles
    restQuery<Article[]>("articles", {
      filters: {
        $or: [
          { title: { $containsi: input } },
          { summary: { $containsi: input } },
          { content: { $containsi: input } },
        ],
      },
      sort: ["publishedAt:desc"],
      pagination: { page: 1, pageSize: 100 },
      populate: searchArticlePopulate,
    }),
    // Search games
    restQuery<Game[]>("games", {
      filters: {
        $or: [
          { name: { $containsi: input } },
          { summary: { $containsi: input } },
          { description: { $containsi: input } },
        ],
      },
      sort: ["name:asc"],
      pagination: { page: 1, pageSize: 100 },
      populate: searchGamePopulate,
    }),
    // Search players
    restQuery<Player[]>("players", {
      filters: {
        $or: [{ name: { $containsi: input } }, { bio: { $containsi: input } }],
      },
      sort: ["name:asc"],
      pagination: { page: 1, pageSize: 100 },
      populate: searchPlayerPopulate,
    }),
  ])

  return {
    events: eventsRes.data || [],
    articles: articlesRes.data || [],
    games: gamesRes.data || [],
    players: playersRes.data || [],
  }
}
