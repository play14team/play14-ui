"use server"

import { SlugParamsProps } from "@/libs/slug-params"
import { restQuery, normalizeConnection } from "@/libs/strapi-client"
import {
  gameItemPopulate,
  gameDetailsPopulate,
  gameNavPopulate,
} from "@/libs/strapi-populate"

// Types - will be replaced by OpenAPI generated types when available
interface UploadFile {
  name: string
  url: string
  width?: number
  height?: number
}

interface Tag {
  id: string
  value: string
}

interface Player {
  name: string
  slug: string
  avatar?: UploadFile
}

interface Game {
  documentId: string
  slug: string
  name: string
  category?: string
  scale?: string
  timebox?: string
  summary?: string
  credits?: string
  description?: string
  publishedAt?: string
  tags?: Tag[]
  materials?: Array<{ id: string; value: string }>
  preparationSteps?: Array<{ id: string; value: string }>
  safety?: Array<{ id: string; key: string; value: string }>
  defaultImage?: UploadFile
  images?: UploadFile[]
  resources?: Array<{ name: string; url: string }>
  firstPlayedAt?: { name: string; slug: string }
  documentedBy?: Player
  proposedBy?: Player
  ratings?: { energy: number; connection: number; silliness: number }
}

/**
 * Get paginated games list
 * REST equivalent of: games/grid.graphql
 */
export async function getGames(
  page: number,
  pageSize: number,
  category?: string,
  tag?: string,
) {
  const filters: Record<string, unknown> = {}
  if (category) {
    filters.category = { $eqi: category }
  }
  if (tag) {
    filters.tags = { value: { $eqi: tag } }
  }

  const response = await restQuery<Game[]>("games", {
    sort: ["name:asc"],
    pagination: { page, pageSize },
    filters,
    populate: gameItemPopulate,
  })

  // Normalize to match GraphQL _connection structure
  return {
    games_connection: normalizeConnection(response),
  }
}

/**
 * Get single game by slug
 * REST equivalent of: games/details.graphql
 */
export async function getGame({ params }: SlugParamsProps) {
  const { slug } = await params
  const response = await restQuery<Game[]>("games", {
    filters: {
      slug: { $eq: slug },
    },
    populate: gameDetailsPopulate,
  })

  return response.data?.[0] || null
}

/**
 * Get all game slugs for static generation
 * REST equivalent of: games/slugs.graphql
 */
export async function getGameSlugs() {
  const response = await restQuery<Array<{ slug: string }>>("games", {
    fields: ["slug"],
    pagination: { page: 1, pageSize: 5000 },
  })

  return {
    games: response.data || [],
  }
}

/**
 * Get all games for navigation
 * REST equivalent of: games/nav.graphql
 */
export async function getGameNav() {
  const response = await restQuery<Game[]>("games", {
    sort: ["name:asc"],
    pagination: { page: 1, pageSize: 5000 },
    populate: gameNavPopulate,
  })

  return response.data || []
}
