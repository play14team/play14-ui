"use server"

import { restQuery, normalizeEntity } from "@/libs/strapi-client"
import { homePopulate, eventItemPopulate } from "@/libs/strapi-populate"
import { getTestimonials } from "@/components/events/get.action"
import { Testimonial } from "@/models/strapi"
import { shuffleArray } from "@/libs/arrays"
import { HOME_TESTIMONIALS_COUNT } from "./constants"

// Types - will be replaced by OpenAPI generated types when available
interface UploadFile {
  name: string
  url: string
  width?: number
  height?: number
  hash?: string
  mime?: string
  provider?: string
  size?: number
}

interface Home {
  images?: UploadFile[]
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

interface Expectation {
  documentId: string
  title: string
  type: string
  icon: string
  content?: string
}

/**
 * Get home page data (images for gallery)
 * REST equivalent of: home/home.graphql
 */
export async function getHome() {
  const response = await restQuery<Home>("home", {
    populate: homePopulate,
  })
  return normalizeEntity(response)
}

/**
 * Get upcoming events
 * REST equivalent of: events/grid.graphql UpcomingEvents query
 */
export async function getUpcomingEvents(today: string) {
  const response = await restQuery<Event[]>("events", {
    sort: ["start:asc"],
    filters: {
      end: { $gte: today },
    },
    populate: eventItemPopulate,
  })
  return response.data || []
}

/**
 * Get expectations by type
 * REST equivalent of: home/expectations.graphql
 */
export async function getExpectations(type: string) {
  const response = await restQuery<Expectation[]>("expectations", {
    filters: {
      type: { $eq: type },
    },
  })
  return response.data || []
}

/**
 * Get random testimonials for home page
 * Shuffles server-side on each render (respects page revalidate cache)
 * Filters to only text testimonials with named authors (excludes audio and anonymous)
 */
export async function getRandomTestimonials(
  count: number = HOME_TESTIMONIALS_COUNT,
) {
  try {
    const allTestimonials = await getTestimonials()

    if (!allTestimonials || allTestimonials.length === 0) {
      return []
    }

    // Filter to only text testimonials (no audio) with named authors
    const textTestimonials = allTestimonials.filter(
      (testimonial) => !testimonial.audio && testimonial.author,
    )

    if (textTestimonials.length === 0) {
      return []
    }

    // Shuffle and return requested count
    return shuffleArray(textTestimonials).slice(0, count)
  } catch (error) {
    console.error("Failed to fetch random testimonials:", error)
    return []
  }
}
