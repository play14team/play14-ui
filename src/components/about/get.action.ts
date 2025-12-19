"use server"

import { restQuery, normalizeEntity } from "@/libs/strapi-client"
import { storyPopulate, playerItemPopulate } from "@/libs/strapi-populate"

// Types - will be replaced by OpenAPI generated types when available
interface UploadFile {
  name: string
  url: string
  width?: number
  height?: number
}

interface Format {
  openspace?: string
  lawOfTwoFeet?: string
  butterfly?: string
  bumblebee?: string
  schedule?: string
}

interface HistoryItem {
  id: string
  date?: string
  dateFormat?: string
  additionalText?: string
  title?: string
  description?: string
  image?: UploadFile
}

interface History {
  founders?: string
  keyMoments?: string
  intro?: string
  items?: HistoryItem[]
}

interface Player {
  documentId: string
  slug: string
  name: string
  position?: string
  avatar?: UploadFile
  socialNetworks?: Array<{
    id: string
    url: string
    type: string
  }>
}

/**
 * Get format page data
 * REST equivalent of: about/format.graphql
 */
export async function getFormat() {
  const response = await restQuery<Format>("format", {})
  return normalizeEntity(response)
}

/**
 * Get story page data (history + founders)
 * REST equivalent of: about/story.graphql
 * Note: This query fetches from two endpoints
 */
export async function getStory() {
  const [historyResponse, foundersResponse] = await Promise.all([
    restQuery<History>("history", {
      populate: storyPopulate,
    }),
    restQuery<Player[]>("players", {
      sort: ["name:asc"],
      filters: {
        position: { $eq: "Founder" },
      },
      populate: playerItemPopulate,
    }),
  ])

  return {
    history: normalizeEntity(historyResponse),
    founders: foundersResponse.data || [],
  }
}
