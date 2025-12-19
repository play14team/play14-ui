"use server"

import { SlugParamsProps } from "@/libs/slug-params"
import { restQuery, normalizeConnection } from "@/libs/strapi-client"
import {
  playerItemPopulate,
  playerDetailsPopulate,
  playerNavPopulate,
} from "@/libs/strapi-populate"

// Types - will be replaced by OpenAPI generated types when available
interface UploadFile {
  name: string
  url: string
  width?: number
  height?: number
}

interface SocialNetwork {
  id: string
  url: string
  type: string
}

interface EventItem {
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

interface Player {
  documentId: string
  slug: string
  name: string
  position?: string
  company?: string
  tagline?: string
  bio?: string
  website?: string
  location?: string
  avatar?: UploadFile
  socialNetworks?: SocialNetwork[]
  attended?: EventItem[]
  hosted?: EventItem[]
  mentored?: EventItem[]
}

/**
 * Get paginated players list
 * REST equivalent of: players/grid.graphql
 */
export async function getPlayers(
  page: number,
  pageSize: number,
  position?: string,
) {
  const filters: Record<string, unknown> = {}
  if (position) {
    filters.position = { $eqi: position }
  }

  const response = await restQuery<Player[]>("players", {
    sort: ["name:asc"],
    pagination: { page, pageSize: Math.min(pageSize, 100) },
    filters,
    populate: playerItemPopulate,
  })

  // Normalize to match GraphQL _connection structure
  return {
    players_connection: normalizeConnection(response),
  }
}

/**
 * Get all players with optional position filter
 * Fetches all pages since Strapi limits pageSize to 100
 */
export async function getAllPlayers(position?: string) {
  const allPlayers: Player[] = []
  let page = 1
  const pageSize = 100

  const filters: Record<string, unknown> = {}
  if (position) {
    filters.position = { $eqi: position }
  }

  while (true) {
    const response = await restQuery<Player[]>("players", {
      sort: ["name:asc"],
      pagination: { page, pageSize },
      filters,
      populate: playerItemPopulate,
    })

    const players = response.data || []
    allPlayers.push(...players)

    if (players.length < pageSize) {
      break
    }
    page++
  }

  return allPlayers
}

/**
 * Get single player by slug
 * REST equivalent of: players/details.graphql
 */
export async function getPlayer({ params }: SlugParamsProps) {
  const { slug } = await params
  const response = await restQuery<Player[]>("players", {
    filters: {
      slug: { $eq: slug },
    },
    populate: playerDetailsPopulate,
  })

  return response.data?.[0] || null
}

/**
 * Get all player slugs for static generation
 * REST equivalent of: players/slugs.graphql
 */
export async function getPlayerSlugs() {
  const response = await restQuery<Array<{ slug: string }>>("players", {
    fields: ["slug"],
    pagination: { page: 1, pageSize: 5000 },
  })

  return {
    players: response.data || [],
  }
}

/**
 * Get all players for navigation
 * REST equivalent of: players/nav.graphql
 * Note: Strapi limits pageSize to 100, so we need to fetch all pages
 */
export async function getPlayerNav() {
  const allPlayers: Player[] = []
  let page = 1
  const pageSize = 100

  while (true) {
    const response = await restQuery<Player[]>("players", {
      sort: ["name:asc"],
      pagination: { page, pageSize },
      populate: playerNavPopulate,
    })

    const players = response.data || []
    allPlayers.push(...players)

    // If we got fewer than pageSize, we've reached the end
    if (players.length < pageSize) {
      break
    }
    page++
  }

  return allPlayers
}
