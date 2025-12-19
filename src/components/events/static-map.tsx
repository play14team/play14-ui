"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import { useEffect, useState } from "react"

const StaticEventMap = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Default to light mode during SSR/hydration
  const isDark = mounted && resolvedTheme === "dark"
  const imageSrc = isDark
    ? "/play14-movement-dark.png"
    : "/play14-movement-light.png"

  return (
    <div>
      <Image
        src={imageSrc}
        alt="#play14 movement"
        width={1221}
        height={765}
        priority
        unoptimized
      />
    </div>
  )
}

export default StaticEventMap
