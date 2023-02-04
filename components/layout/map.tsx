import { divIcon } from "leaflet";
import Image from "next/image";
import Link from "next/link";
import { renderToStaticMarkup } from "react-dom/server";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import { marker } from "./marker";
const Map = () => {
  const iconMarkup = renderToStaticMarkup(
    <Image
      src="/markers/green-marker.png"
      alt="green marker"
      width={20}
      height={81}
    />
  );
  const customMarkerIcon = divIcon({
    html: iconMarkup,
    iconAnchor: [51.505, -0.09],
  });

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={2}
      scrollWheelZoom={true}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]} icon={customMarkerIcon}>
        <Popup>
          London 2015
          <hr />
          <Link href="/events/london-2015-09">Go to event</Link>
        </Popup>
        <Tooltip>This is a London event</Tooltip>
      </Marker>
    </MapContainer>
  );
};

export default Map;
