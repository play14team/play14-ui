"use server"

import { SlugParamsProps } from "@/libs/slug-params"
import { restQuery, normalizeConnection } from "@/libs/strapi-client"
import {
  eventItemPopulate,
  eventDetailsPopulate,
  eventNavPopulate,
  eventMarkersPopulate,
  eventCalendarPopulate,
  testimonialsPopulate,
} from "@/libs/strapi-populate"
import moment from "moment"

// Types - will be replaced by OpenAPI generated types when available
interface UploadFile {
  name: string
  url: string
  width?: number
  height?: number
}

interface GeoLocation {
  lat?: number
  lng?: number
  place_name?: string
  geometry?: {
    coordinates: [number, number]
    type?: string
  }
  // Allow additional Mapbox properties
  id?: string
  text?: string
  type?: string
  center?: [number, number]
  address?: string
  context?: unknown[]
  relevance?: number
  place_type?: string[]
  properties?: Record<string, unknown>
  [key: string]: unknown
}

interface Location {
  slug?: string
  name: string
  country: string
  location?: GeoLocation
}

interface Venue {
  documentId?: string
  name: string
  website?: string
  location?: GeoLocation
  addressDetails?: string
}

interface Player {
  documentId: string
  slug: string
  name: string
  position?: string
  avatar?: UploadFile
  socialNetworks?: Array<{ id: string; url: string; type: string }>
}

interface Event {
  documentId: string
  slug: string
  name: string
  start: string
  end: string
  timezone?: string
  eventStatus: string
  description?: string
  contactEmail?: string
  publishedAt?: string
  defaultImage?: UploadFile
  images?: UploadFile[]
  location?: Location
  venue?: Venue
  timetable?: Array<{
    id: string
    day: string
    description?: string
    timeslots?: Array<{ id: string; time: string; description?: string }>
  }>
  registration?: { link?: string; widgetCode?: string }
  sponsorships?: Array<{
    id: string
    category: string
    sponsors?: Array<{
      name: string
      url?: string
      logo?: UploadFile
      socialNetworks?: Array<{ id: string; type: string; url: string }>
    }>
  }>
  hosts?: Player[]
  mentors?: Player[]
  players?: Player[]
  media?: Array<{ id: string; url: string; type: string }>
}

interface Testimonial {
  documentId: string
  content: string
  url?: string
  audio?: { name: string; url: string }
  author?: {
    name: string
    slug: string
    tagline?: string
    avatar?: UploadFile
  }
}

/**
 * Get paginated events list
 * REST equivalent of: events/grid.graphql
 */
export async function getEvents(
  page: number,
  pageSize: number,
  status?: string,
  location?: string,
  country?: string,
) {
  const filters: Record<string, unknown> = {}
  if (status) {
    filters.eventStatus = { $eqi: status }
  }
  if (location) {
    filters.location = {
      ...((filters.location as object) || {}),
      slug: { $eqi: location },
    }
  }
  if (country) {
    filters.location = {
      ...((filters.location as object) || {}),
      country: { $eqi: country },
    }
  }

  const response = await restQuery<Event[]>("events", {
    sort: ["start:desc"],
    pagination: { page, pageSize: Math.min(pageSize, 100) },
    filters,
    populate: eventItemPopulate,
  })

  // Normalize to match GraphQL _connection structure
  return {
    events_connection: normalizeConnection(response),
  }
}

/**
 * Get all events with optional filters
 * Fetches all pages since Strapi limits pageSize to 100
 */
export async function getAllEvents(
  status?: string,
  location?: string,
  country?: string,
) {
  const allEvents: Event[] = []
  let page = 1
  const pageSize = 100

  const filters: Record<string, unknown> = {}
  if (status) {
    filters.eventStatus = { $eqi: status }
  }
  if (location) {
    filters.location = {
      ...((filters.location as object) || {}),
      slug: { $eqi: location },
    }
  }
  if (country) {
    filters.location = {
      ...((filters.location as object) || {}),
      country: { $eqi: country },
    }
  }

  while (true) {
    const response = await restQuery<Event[]>("events", {
      sort: ["start:desc"],
      pagination: { page, pageSize },
      filters,
      populate: eventItemPopulate,
    })

    const events = response.data || []
    allEvents.push(...events)

    if (events.length < pageSize) {
      break
    }
    page++
  }

  return allEvents
}

/**
 * Get single event by slug
 * REST equivalent of: events/details.graphql
 */
export async function getEvent({ params }: SlugParamsProps) {
  const { slug } = await params
  const response = await restQuery<Event[]>("events", {
    filters: {
      slug: { $eq: slug },
    },
    populate: eventDetailsPopulate,
  })

  return response.data?.[0] || null
}

/**
 * Get all event slugs for static generation (past events only)
 * REST equivalent of: events/slugs.graphql
 */
export async function getEventSlugs() {
  const today = moment().format()
  const response = await restQuery<Array<{ slug: string }>>("events", {
    fields: ["slug"],
    filters: {
      end: { $lt: today },
    },
    pagination: { page: 1, pageSize: 5000 },
  })

  return {
    events: response.data || [],
  }
}

/**
 * Get all events for navigation
 * REST equivalent of: events/nav.graphql
 * Note: Strapi limits pageSize to 100, so we need to fetch all pages
 */
export async function getEventNav() {
  const allEvents: Event[] = []
  let page = 1
  const pageSize = 100

  while (true) {
    const response = await restQuery<Event[]>("events", {
      sort: ["start:desc"],
      pagination: { page, pageSize },
      populate: eventNavPopulate,
    })

    const events = response.data || []
    allEvents.push(...events)

    if (events.length < pageSize) {
      break
    }
    page++
  }

  return allEvents
}

/**
 * Get events for map markers
 * REST equivalent of: events/markers.graphql
 */
export async function getEventMarkers() {
  // Fetch all events and filter client-side since Strapi JSON field filtering is complex
  const response = await restQuery<Event[]>("events", {
    sort: ["start:asc"],
    filters: {
      eventStatus: { $ne: "Cancelled" },
    },
    pagination: { page: 1, pageSize: 5000 },
    populate: eventMarkersPopulate,
  })

  const allEvents = response.data || []

  // Filter events that have venue location coordinates
  const eventsWithLocation = allEvents.filter((event) => {
    const location = event.venue?.location
    if (!location) return false

    // Check for Mapbox format (geometry.coordinates)
    if ("geometry" in location && location.geometry?.coordinates) {
      const [lng, lat] = location.geometry.coordinates
      return lng !== undefined && lat !== undefined
    }

    // Check for simple format (lat/lng)
    if ("lng" in location && "lat" in location) {
      return location.lng !== undefined && location.lat !== undefined
    }

    return false
  })

  return eventsWithLocation
}

/**
 * Get events for calendar
 * REST equivalent of: events/calendar.graphql
 */
export async function getEventCalendar() {
  const response = await restQuery<Event[]>("events", {
    sort: ["start:desc"],
    pagination: { page: 1, pageSize: 5000 },
    populate: eventCalendarPopulate,
  })

  return response.data || []
}

/**
 * Get testimonials
 * REST equivalent of: events/testimonials.graphql
 */
export async function getTestimonials() {
  const response = await restQuery<Testimonial[]>("testimonials", {
    pagination: { page: 1, pageSize: 5000 },
    populate: testimonialsPopulate,
  })

  return response.data || []
}

/**
 * Get hosting content
 * REST equivalent of: events/hosting.graphql
 */
export async function getHosting() {
  const response = await restQuery<{ content: string }>("hosting", {})

  return response.data
}
