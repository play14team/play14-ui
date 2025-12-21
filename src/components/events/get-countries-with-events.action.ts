"use server"

import { restQuery } from "@/libs/strapi-client"

/**
 * Get list of unique country codes where events are located
 * Used to highlight countries on the world map
 */
export async function getCountriesWithEvents(): Promise<string[]> {
  try {
    // Fetch all events with minimal data (just location country) - paginated
    let allEvents: Array<{
      location?: {
        country?: string
      }
    }> = []
    let page = 1
    const pageSize = 100
    let hasMore = true

    while (hasMore) {
      const response = await restQuery<
        Array<{
          location?: {
            country?: string
          }
        }>
      >("events", {
        fields: ["documentId"],
        populate: {
          location: {
            fields: ["country"],
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

    // Extract unique country codes (ISO-2 format like "US", "FR", "DE")
    const countryCodes = new Set<string>()

    events.forEach((event) => {
      const countryCode = event.location?.country?.toUpperCase()
      if (countryCode) {
        countryCodes.add(countryCode)
      }
    })

    return Array.from(countryCodes).sort()
  } catch (error) {
    console.error("Failed to fetch countries with events:", error)
    return []
  }
}
