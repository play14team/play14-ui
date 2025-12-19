"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import { useEffect, useState } from "react"

interface LogoProps {
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

const Logo = ({
  width = 180,
  height = 60,
  className,
  priority = false,
}: LogoProps) => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Default to light mode logo during SSR/hydration
  const isDark = mounted && resolvedTheme === "dark"
  const logoSrc = isDark
    ? "/logo/play14_600x200_transparent-dark.png"
    : "/logo/play14_600x200_transparent-light.png"

  // Show a placeholder or the light logo during hydration to avoid flash
  if (!mounted) {
    return (
      <Image
        src="/logo/play14_600x200_transparent-light.png"
        alt="play14 logo"
        width={width}
        height={height}
        className={className}
        priority={priority}
        unoptimized
        style={{
          width: "auto",
          height: "auto",
          maxWidth: width,
          maxHeight: height,
        }}
      />
    )
  }

  return (
    <Image
      src={logoSrc}
      alt="play14 logo"
      width={width}
      height={height}
      className={className}
      priority={priority}
      unoptimized
      style={{
        width: "auto",
        height: "auto",
        maxWidth: width,
        maxHeight: height,
      }}
    />
  )
}

export default Logo
