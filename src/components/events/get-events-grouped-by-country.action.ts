"use server"

import { restQuery } from "@/libs/strapi-client"

interface EventData {
  slug: string
  name: string
  start: string
  end: string
  eventStatus: string
  location?: {
    name?: string
    country?: string
  }
}

export interface EventsByCountry {
  [countryCode: string]: Array<{
    slug: string
    name: string
    start: number // Unix timestamp in milliseconds
    end: number // Unix timestamp in milliseconds
    status: string
    locationName: string
  }>
}

/**
 * Get events grouped by country code
 * Used to display event details in tooltips on the world map
 */
export async function getEventsGroupedByCountry(): Promise<EventsByCountry> {
  try {
    // Fetch all events with location data (paginated)
    let allEvents: EventData[] = []
    let page = 1
    const pageSize = 100
    let hasMore = true

    while (hasMore) {
      const response = await restQuery<EventData[]>("events", {
        fields: ["slug", "name", "start", "end", "eventStatus"],
        populate: {
          location: {
            fields: ["name", "country"],
          },
        },
        pagination: { page, pageSize },
      })

      const events = response.data || []
      allEvents = allEvents.concat(events)

      // Check if there are more pages
      const meta = response.meta
      hasMore = Boolean(
        meta &&
        meta.pagination &&
        meta.pagination.page < meta.pagination.pageCount,
      )
      page++
    }

    const events = allEvents

    // Group events by country code
    const grouped: EventsByCountry = {}

    events.forEach((event) => {
      const countryCode = event.location?.country?.toUpperCase()
      if (!countryCode) return

      if (!grouped[countryCode]) {
        grouped[countryCode] = []
      }

      grouped[countryCode].push({
        slug: event.slug,
        name: event.name,
        start: new Date(event.start).getTime(), // Convert to Unix timestamp
        end: new Date(event.end).getTime(), // Convert to Unix timestamp
        status: event.eventStatus,
        locationName: event.location?.name || "Unknown",
      })
    })

    // Sort events within each country by start date (newest first)
    Object.keys(grouped).forEach((countryCode) => {
      grouped[countryCode].sort((a, b) => b.start - a.start)
    })

    return grouped
  } catch (error) {
    console.error("Failed to fetch events grouped by country:", error)
    return {}
  }
}
