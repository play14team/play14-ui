import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const endpoint =
  "https://api.mapbox.com/styles/v1/play14/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=" +
  process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
const Map = () => {
  return (
    <MapContainer
      bounds={[40.8054, -74.0241]}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=MY_ACCESS_TOKEN`}
      />
      <Marker position={[40.8054, -74.0241]}>
        <Popup>Hey ! I live here</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
