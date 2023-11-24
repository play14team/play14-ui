import Image from "next/image"
import movement from "public/play14-movement.png"

const StaticEventMap = () => {
  return (
    <div>
      <Image src={movement} alt="#play14 movement" priority unoptimized />
    </div>
  )
}

export default StaticEventMap
