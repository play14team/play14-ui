import Image from "next/image";
import movement from "/public/play14-movement.png";
import dynamic from "next/dynamic";
import Loader from "../layout/loader";

const EventMap = () => {
  const MapWithNoSSR = dynamic(() => import("../layout/map"), {
    ssr: false,
    loading: () => <Loader />,
  });

  return (
    <div>
      {/* <Image src={movement} alt="#play14 movement" priority /> */}
      <MapWithNoSSR />
    </div>
  );
};

export default EventMap;
