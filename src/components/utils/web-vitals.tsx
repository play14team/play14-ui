"use client"

import { useReportWebVitals } from "next/web-vitals"

export function WebVitals() {
  useReportWebVitals((metric) => {
    if (!process.env.NEXT_PUBLIC_WEB_VITALS) return
    console.log("Web vitals", metric)
  })
  return <></>
}
