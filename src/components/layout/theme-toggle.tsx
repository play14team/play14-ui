"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  // Return placeholder with same dimensions to prevent layout shift
  if (!mounted) {
    return (
      <button className="theme-toggle" aria-label="Toggle theme" type="button">
        <i className="bx bx-moon" />
      </button>
    )
  }

  const isDark = resolvedTheme === "dark"

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      type="button"
    >
      <i className={`bx ${isDark ? "bx-sun" : "bx-moon"}`} />
    </button>
  )
}

export default ThemeToggle
