"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { useRouter } from "next/navigation"
import countries from "i18n-iso-countries"
import en from "i18n-iso-countries/langs/en.json"
import WorldMap from "@/components/map/WorldMap"
import { getCountriesWithEvents } from "./get-countries-with-events.action"
import {
  getEventsGroupedByCountry,
  type EventsByCountry,
} from "./get-events-grouped-by-country.action"
import "./EventsWorldMap.scss"

// Register English locale for country names
countries.registerLocale(en)

interface EventsWorldMapProps {
  interactive?: boolean
  onCountryClick?: (countryCode: string) => void
}

export default function EventsWorldMap({
  interactive = true,
  onCountryClick,
}: EventsWorldMapProps) {
  const router = useRouter()
  const [selectedCountries, setSelectedCountries] = useState<string[]>([])
  const [eventsByCountry, setEventsByCountry] = useState<EventsByCountry>({})
  const [countryColors, setCountryColors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Tooltip state
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)
  const [tooltipX, setTooltipX] = useState(0)
  const [tooltipY, setTooltipY] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const [isMapFullscreen, setIsMapFullscreen] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredCountries, setFilteredCountries] = useState<string[]>([])
  const [showNoResults, setShowNoResults] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  // Track if component is mounted for portal
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Detect browser zoom level (including trackpad pinch zoom)
  useEffect(() => {
    function detectZoom() {
      // For CSS-based zoom (trackpad pinch), compare visual viewport to layout viewport
      if (window.visualViewport) {
        const visualWidth = window.visualViewport.width
        const layoutWidth = document.documentElement.clientWidth
        // Prevent division by zero and ensure valid zoom value
        const zoom = visualWidth > 0 ? layoutWidth / visualWidth : 1
        setZoomLevel(zoom)
      } else {
        // Fallback to device pixel ratio for traditional browser zoom
        setZoomLevel(window.devicePixelRatio || 1)
      }
    }

    // Initial detection
    detectZoom()

    // Listen for resize events (which fire when zooming)
    window.addEventListener("resize", detectZoom)

    // Also listen for visual viewport changes (more accurate for trackpad zoom)
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", detectZoom)
      window.visualViewport.addEventListener("scroll", detectZoom)
    }

    return () => {
      window.removeEventListener("resize", detectZoom)
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", detectZoom)
        window.visualViewport.removeEventListener("scroll", detectZoom)
      }
    }
  }, [])

  // Filter countries based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredCountries([])
      setShowNoResults(false)
      return
    }

    const query = searchQuery.toLowerCase().trim()
    const matches = selectedCountries.filter((countryCode) => {
      const countryName = getCountryName(countryCode).toLowerCase()
      return (
        countryName.includes(query) || countryCode.toLowerCase().includes(query)
      )
    })

    setFilteredCountries(matches)
    setShowNoResults(matches.length === 0)
  }, [searchQuery, selectedCountries])

  // Fetch data on mount
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true)
        const [countryCodes, groupedEvents] = await Promise.all([
          getCountriesWithEvents(),
          getEventsGroupedByCountry(),
        ])

        setSelectedCountries(countryCodes)
        setEventsByCountry(groupedEvents)

        // Status to color mapping
        const statusColorMap: Record<string, string> = {
          Over: "#7ac143", // green
          Announced: "#ffc20e", // yellow
          Open: "#f47920", // orange
          Cancelled: "#ed1c24", // red
        }

        // Status priority: Open > Announced > Over > Cancelled
        const statusPriority: Record<string, number> = {
          Open: 4,
          Announced: 3,
          Over: 2,
          Cancelled: 1,
        }

        // Calculate colors for each country based on highest priority event status
        const colors: Record<string, string> = {}
        Object.entries(groupedEvents).forEach(([countryCode, events]) => {
          if (events.length > 0) {
            // Find the event with the highest priority status
            let highestPriority = 0
            let priorityStatus = events[0].status

            events.forEach((event) => {
              const priority = statusPriority[event.status] || 0
              if (priority > highestPriority) {
                highestPriority = priority
                priorityStatus = event.status
              }
            })

            colors[countryCode] = statusColorMap[priorityStatus] || "#00a0dc"
          }
        })
        setCountryColors(colors)
        setError(null)
      } catch (err) {
        console.error("Failed to load event locations:", err)
        setError("Failed to load event locations. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  // Handle mouse move for tooltip positioning
  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      setTooltipX(event.clientX)
      setTooltipY(event.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Format date for display
  function formatDate(timestamp: number): string {
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  // Format date range for display
  function formatDateRange(start: number, end: number): string {
    const startDate = new Date(start)
    const endDate = new Date(end)

    // If same date, show only once
    if (startDate.toDateString() === endDate.toDateString()) {
      return formatDate(start)
    }

    // If same month and year, show abbreviated format
    if (
      startDate.getMonth() === endDate.getMonth() &&
      startDate.getFullYear() === endDate.getFullYear()
    ) {
      return `${startDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })} - ${endDate.getDate()}, ${endDate.getFullYear()}`
    }

    // If same year, show abbreviated format
    if (startDate.getFullYear() === endDate.getFullYear()) {
      return `${startDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })} - ${endDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })}, ${endDate.getFullYear()}`
    }

    // Different years, show full format
    return `${formatDate(start)} - ${formatDate(end)}`
  }

  // Get country name from ISO code
  function getCountryName(code: string): string {
    return countries.getName(code, "en") || code.toUpperCase()
  }

  // Handle country click
  function handleCountryClick(countryCode: string) {
    if (!interactive) return

    const hasEvents = selectedCountries.includes(countryCode.toUpperCase())

    if (hasEvents) {
      // Navigate to events page filtered by country
      router.push(`/events/countries/${countryCode.toUpperCase()}`)
      onCountryClick?.(countryCode)
    } else {
      console.log(`Country ${countryCode} has no #play14 events`)
    }
  }

  // Handle mouse enter on country
  function handleCountryMouseEnter(countryCode: string) {
    // Always show tooltip for any country (with or without events)
    setHoveredCountry(countryCode.toUpperCase())
  }

  // Handle mouse leave on country
  function handleCountryMouseLeave() {
    setHoveredCountry(null)
  }

  // Handle search input change
  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value)
  }

  // Clear search
  function clearSearch() {
    setSearchQuery("")
  }

  // Toggle search visibility
  function toggleSearch() {
    setShowSearch((prev) => !prev)
    // Clear search when hiding
    if (showSearch) {
      setSearchQuery("")
    }
  }

  // Determine which countries to display on the map
  const displayedCountries =
    filteredCountries.length > 0 ? filteredCountries : selectedCountries

  // Render tooltip content
  const tooltipContent = hoveredCountry && (
    <div
      className="tooltip-container"
      style={{
        left: `${tooltipX + 10}px`,
        top: `${tooltipY - 10}px`,
        transform: `scale(${1 / zoomLevel})`,
        transformOrigin: "top left",
      }}
      data-country={hoveredCountry}
    >
      <div className="country-events">
        <h3 className="country-name">{getCountryName(hoveredCountry)}</h3>

        {eventsByCountry[hoveredCountry] ? (
          <>
            <div className="events-count">
              {eventsByCountry[hoveredCountry].length} event
              {eventsByCountry[hoveredCountry].length !== 1 ? "s" : ""}
            </div>

            <div className="events-list">
              {eventsByCountry[hoveredCountry].slice(0, 5).map((event) => (
                <div key={event.slug} className="event-item">
                  <div className="event-name">{event.name}</div>
                  <div className="event-details">
                    <div className="event-location">{event.locationName}</div>
                    <div className="event-date">
                      {formatDateRange(event.start, event.end)}
                    </div>
                  </div>
                  <span
                    className={`event-status status-${event.status.toLowerCase()}`}
                  >
                    {event.status}
                  </span>
                </div>
              ))}

              {eventsByCountry[hoveredCountry].length > 5 && (
                <div className="more-events">
                  +{eventsByCountry[hoveredCountry].length - 5} more event
                  {eventsByCountry[hoveredCountry].length - 5 !== 1 ? "s" : ""}
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="no-events">No #play14 events</div>
        )}
      </div>
    </div>
  )

  return (
    <section className="events-world-map-wrapper">
      <h2 id="eventsWorldMapTitle" className="events-world-map-title">
        Events all around the world
      </h2>

      <div
        className="events-world-map"
        role="region"
        aria-labelledby="eventsWorldMapTitle"
        aria-label="World map showing countries with #play14 events"
      >
        {error ? (
          <div className="error-message">{error}</div>
        ) : isLoading ? (
          <div className="loading-message">Loading event locations...</div>
        ) : (
          <div className="map-wrapper">
            <WorldMap
              selected={displayedCountries}
              countryColors={countryColors}
              onClick={interactive ? handleCountryClick : undefined}
              onMouseEnter={handleCountryMouseEnter}
              onMouseLeave={handleCountryMouseLeave}
              className="world-map-svg"
              tooltipContent={tooltipContent}
              onFullscreenChange={setIsMapFullscreen}
              onSearchToggle={toggleSearch}
              showSearch={showSearch}
              searchContent={
                showSearch ? (
                  <div className="country-search-container inline">
                    <div className="search-input-wrapper">
                      <svg
                        className="search-icon"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                      </svg>
                      <input
                        type="text"
                        className="search-input"
                        placeholder="Search countries..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        aria-label="Search countries with events"
                        autoFocus
                      />
                      {searchQuery && (
                        <button
                          className="clear-search-button"
                          onClick={clearSearch}
                          aria-label="Clear search"
                          type="button"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        </button>
                      )}
                    </div>
                    {showNoResults && (
                      <div className="no-search-results">
                        No countries found matching &quot;{searchQuery}&quot;
                      </div>
                    )}
                    {filteredCountries.length > 0 && (
                      <div className="search-results-count">
                        {filteredCountries.length} countr
                        {filteredCountries.length === 1 ? "y" : "ies"}
                      </div>
                    )}
                  </div>
                ) : undefined
              }
            />
          </div>
        )}
      </div>

      <div className="map-legend">
        <span className="legend-item">
          <span
            className="legend-color"
            style={{ backgroundColor: "#7ac143" }}
          ></span>
          Over
        </span>
        <span className="legend-item">
          <span
            className="legend-color"
            style={{ backgroundColor: "#ffc20e" }}
          ></span>
          Announced
        </span>
        <span className="legend-item">
          <span
            className="legend-color"
            style={{ backgroundColor: "#f47920" }}
          ></span>
          Open
        </span>
        <span className="legend-item">
          <span
            className="legend-color"
            style={{ backgroundColor: "#ed1c24" }}
          ></span>
          Cancelled
        </span>
      </div>

      {/* Render tooltip via portal only when NOT in fullscreen */}
      {!isMapFullscreen &&
        isMounted &&
        tooltipContent &&
        createPortal(tooltipContent, document.body)}
    </section>
  )
}
