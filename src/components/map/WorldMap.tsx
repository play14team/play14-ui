"use client"

import { useCallback, useEffect, useRef, useState } from "react"

interface WorldMapProps {
  selected?: string[]
  countryColors?: Record<string, string> // Map of country code to color
  onClick?: (countryCode: string) => void
  onMouseEnter?: (countryCode: string) => void
  onMouseLeave?: () => void
  className?: string
  tooltipContent?: React.ReactNode // Tooltip to render inside fullscreen container
  onFullscreenChange?: (isFullscreen: boolean) => void
  onSearchToggle?: () => void
  showSearch?: boolean
  searchContent?: React.ReactNode // Search bar to render in controls
}

export default function WorldMap({
  selected = [],
  countryColors = {},
  onClick,
  onMouseEnter,
  onMouseLeave,
  className = "",
  tooltipContent,
  onFullscreenChange,
  onSearchToggle,
  showSearch = false,
  searchContent,
}: WorldMapProps) {
  const svgRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)

  // Function to apply country colors
  const applyCountryColors = useCallback(() => {
    if (!svgRef.current) return

    const svgElement = svgRef.current.querySelector("svg")
    if (!svgElement) return

    const paths = svgElement.querySelectorAll("path[data-country-code]")

    paths.forEach((path) => {
      const countryCode = path.getAttribute("data-country-code")
      if (!countryCode) return

      const isSelected = selected.includes(countryCode.toUpperCase())
      const htmlPath = path as HTMLElement

      if (isSelected) {
        // Use provided color or fallback to default blue
        const color = countryColors[countryCode.toUpperCase()] || "#00a0dc"

        htmlPath.style.fill = color
        htmlPath.style.stroke = "#000000"
        htmlPath.style.strokeWidth = "0.5"
        htmlPath.classList.add("selected-country")
      } else {
        htmlPath.style.fill = "#ececec"
        htmlPath.style.stroke = "#000000"
        htmlPath.style.strokeWidth = "0.2"
        htmlPath.classList.remove("selected-country")
      }
    })
  }, [selected, countryColors])

  useEffect(() => {
    if (!svgRef.current) return

    // Load SVG from public folder
    fetch("/map/world.svg")
      .then((response) => response.text())
      .then((svgContent) => {
        if (!svgRef.current) return

        // Parse SVG and remove Svelte-specific attributes
        const parser = new DOMParser()
        const svgDoc = parser.parseFromString(svgContent, "image/svg+xml")
        const svgElement = svgDoc.documentElement

        // Remove Svelte-specific attributes
        svgElement.removeAttribute("bind:this")
        svgElement.removeAttribute("onclick")
        svgElement.removeAttribute("onmouseover")
        svgElement.removeAttribute("onmouseout")
        svgElement.removeAttribute("onfocus")
        svgElement.removeAttribute("onblur")
        svgElement.removeAttribute("onkeydown")
        svgElement.removeAttribute("class")

        // Add React-friendly attributes
        svgElement.setAttribute("role", "img")
        svgElement.setAttribute("aria-label", "Interactive world map")
        if (className) {
          svgElement.setAttribute("class", className)
        }

        // Clear container and append SVG
        svgRef.current.innerHTML = ""
        svgRef.current.appendChild(svgElement)

        // Add mouseleave listener to the entire SVG to close tooltip
        // when mouse leaves the map entirely
        if (onMouseLeave) {
          svgElement.addEventListener("mouseleave", onMouseLeave)
        }

        // Add event listeners to all paths
        const paths = svgElement.querySelectorAll("path[data-country-code]")

        paths.forEach((path) => {
          const countryCode = path.getAttribute("data-country-code")
          if (!countryCode) return

          // Handle click
          if (onClick) {
            path.addEventListener("click", () => {
              onClick(countryCode)
            })
          }

          // Handle mouse enter
          if (onMouseEnter) {
            path.addEventListener("mouseenter", () => {
              onMouseEnter(countryCode)
            })
          }

          // Add cursor pointer for interactive maps
          if (onClick) {
            ;(path as HTMLElement).style.cursor = "pointer"
          }
        })

        // Apply initial colors after SVG is loaded
        applyCountryColors()
      })
      .catch((error) => {
        console.error("Failed to load world map SVG:", error)
      })
  }, [onClick, onMouseEnter, onMouseLeave, className, applyCountryColors])

  // Update selected countries styling when selected prop or countryColors changes
  useEffect(() => {
    applyCountryColors()
  }, [applyCountryColors])

  // Fullscreen handler
  const toggleFullscreen = async () => {
    if (!containerRef.current) return

    try {
      if (!isFullscreen) {
        // Enter fullscreen
        if (containerRef.current.requestFullscreen) {
          await containerRef.current.requestFullscreen()
        }
      } else {
        // Exit fullscreen
        if (document.exitFullscreen) {
          await document.exitFullscreen()
        }
      }
    } catch (error) {
      console.error("Fullscreen error:", error)
    }
  }

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFs = !!document.fullscreenElement
      setIsFullscreen(isFs)
      onFullscreenChange?.(isFs)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [onFullscreenChange])

  // Handle mouse move for tooltip
  const handleMouseMove = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement
    const isOverCountry =
      target.tagName === "path" && target.hasAttribute("data-country-code")

    if (!isOverCountry && onMouseLeave) {
      onMouseLeave()
    }
  }

  return (
    <div ref={containerRef} className="map-with-controls">
      <div
        ref={svgRef}
        className="world-map-container"
        onMouseLeave={onMouseLeave}
        onMouseMove={handleMouseMove}
      />
      <div className="map-controls">
        {searchContent && (
          <div className="map-search-content">{searchContent}</div>
        )}
        {onSearchToggle && (
          <button
            onClick={onSearchToggle}
            className="map-control-button"
            aria-label={showSearch ? "Hide search" : "Show search"}
            title={showSearch ? "Hide search" : "Show search"}
          >
            {showSearch ? (
              <svg
                width="20"
                height="20"
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
            ) : (
              <svg
                width="20"
                height="20"
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
            )}
          </button>
        )}
        <button
          onClick={toggleFullscreen}
          className="map-control-button"
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          {isFullscreen ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 3H3v5M12 3h5v5M12 17h5v-5M8 17H3v-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8V3h5M17 8V3h-5M17 12v5h-5M3 12v5h5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
      {/* Render tooltip inside fullscreen container when in fullscreen mode */}
      {isFullscreen && tooltipContent}
    </div>
  )
}
