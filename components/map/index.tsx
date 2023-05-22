import Map, {
  Marker,
  Popup,
  FullscreenControl,
  NavigationControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapView = (props: {
  location: any;
  height?: string;
  zoom?: number;
  popup?: boolean;
}) => {
  const { height, zoom, popup } = props;
  const point = props.location.geometry;
  const longitude = point.coordinates[0];
  const latitude = point.coordinates[1];
  const address = props.location.place_name;

  const token =
    process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ||
    "pk.eyJ1IjoicGxheTE0IiwiYSI6ImNsaHk1dzRlNDB6Z2szbG1kMnJybHFpeWMifQ.gRYXSA5Gjoph0caYvDvHMA";

  return (
    <Map
      initialViewState={{
        latitude: latitude,
        longitude: longitude,
        zoom: zoom || 15,
      }}
      style={{ width: "100%", height: height || "500px" }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      mapboxAccessToken={token}
    >
      <FullscreenControl />
      <NavigationControl />

      <Marker
        longitude={longitude}
        latitude={latitude}
        color="#ffc900"
      ></Marker>

      {popup && (
        <Popup
          anchor="bottom-right"
          longitude={longitude}
          latitude={latitude}
          offset={[0, -35]}
          closeButton={false}
          closeOnClick={false}
        >
          {address}
        </Popup>
      )}
    </Map>
  );
};

export default MapView;
