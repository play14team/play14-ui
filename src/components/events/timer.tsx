"use client"

import React from "react"

interface TimerProps {
  date: Date | string
}

const UpcomingEventTimer = ({ date }: TimerProps) => {
  const [days, setDays] = React.useState("")
  const [hours, setHours] = React.useState("")
  const [minutes, setMinutes] = React.useState("")
  const [seconds, setSeconds] = React.useState("")

  const updateCountdown = React.useCallback(() => {
    const endTimeParse = Date.parse(date.toString()) / 1000
    const now = new Date()
    const nowParse = Date.parse(now.toString()) / 1000
    const timeLeft = endTimeParse - nowParse
    const d = Math.floor(timeLeft / 86400)
    const h = Math.floor((timeLeft - d * 86400) / 3600)
    const m = Math.floor((timeLeft - d * 86400 - h * 3600) / 60)
    const s = Math.floor(timeLeft - d * 86400 - h * 3600 - m * 60)

    setDays(d.toString())
    setHours(h.toString().padStart(2, "0"))
    setMinutes(m.toString().padStart(2, "0"))
    setSeconds(s.toString().padStart(2, "0"))
  }, [date])

  React.useEffect(() => {
    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [updateCountdown])

  return (
    <div id="timer" className="flex-wrap d-flex justify-content-center">
      <div
        id="days"
        className="align-items-center flex-column d-flex justify-content-center"
      >
        {days} <span>Days</span>
      </div>
      <div
        id="hours"
        className="align-items-center flex-column d-flex justify-content-center"
      >
        {hours} <span>Hours</span>
      </div>
      <div
        id="minutes"
        className="align-items-center flex-column d-flex justify-content-center"
      >
        {minutes} <span>Minutes</span>
      </div>
      <div
        id="seconds"
        className="align-items-center flex-column d-flex justify-content-center"
      >
        {seconds} <span>Seconds</span>
      </div>
    </div>
  )
}

export default UpcomingEventTimer
