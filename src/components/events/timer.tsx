"use client"

import React from "react"

interface TimerProps {
  date: Date
}

const UpcomingEventTimer = ({ date }: TimerProps) => {
  const [days, setDays] = React.useState("")
  const [hours, setHours] = React.useState("")
  const [minutes, setMinutes] = React.useState("")
  const [seconds, setSeconds] = React.useState("")

  React.useEffect(() => {
    const interval = setInterval(() => {
      commingSoonTime()
    }, 1000)
    return () => clearInterval(interval)
  })

  const commingSoonTime = () => {
    let endTimeParse = Date.parse(date.toString()) / 1000
    let now = new Date()
    let nowParse = Date.parse(now.toString()) / 1000
    let timeLeft = endTimeParse - nowParse
    let days = Math.floor(timeLeft / 86400)
    let hours = Math.floor((timeLeft - days * 86400) / 3600)
    let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60)
    let seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60,
    )

    const daysString = days.toString()
    const hoursString = hours.toString().padStart(2, "0")
    const minutesString = minutes.toString().padStart(2, "0")
    const secondsString = seconds.toString().padStart(2, "0")

    setDays(daysString)
    setHours(hoursString)
    setMinutes(minutesString)
    setSeconds(secondsString)
  }

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
