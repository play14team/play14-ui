import Image from "next/image";
import movement from "/public/play14-movement.png";

const EventMap = () => {
  return (
    <div>
      <Image src={movement} alt="#play14 movement" priority />
    </div>
  );
};

export default EventMap;
