"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import { useEffect, useState } from "react"

const Title = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Default to light mode logo during SSR/hydration
  const isDark = mounted && resolvedTheme === "dark"
  const logoSrc = isDark
    ? "/logo/play14_1500x500_transparent-dark.png"
    : "/logo/play14_1500x500_transparent-light.png"

  return (
    <div>
      <div className="d-flex justify-content-center pt-5">
        <Image
          src={logoSrc}
          alt="#play14 logo"
          width={600}
          height={200}
          unoptimized
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "min(600px, 90vw)",
          }}
        />
      </div>
      <div className="d-flex justify-content-center pt-5">
        <h1>
          <span className="orange">play</span>&nbsp;
          <span className="yellow">is</span>&nbsp;
          <span className="blue">the</span>&nbsp;
          <span className="green">way</span>&nbsp;
          <span className="grey">!</span>
        </h1>
      </div>
    </div>
  )
}

export default Title
