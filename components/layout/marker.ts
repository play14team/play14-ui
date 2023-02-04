import L from "leaflet";
import greenMarker from "../../public/markers/green-marker.png";

const marker = new L.Icon({
  iconUrl: require("../../public/markers/green-marker.png"),
  iconRetinaUrl: require("../../public/markers/green-marker.png"),
  iconAnchor: undefined,
  popupAnchor: undefined,
  shadowUrl: undefined,
  shadowSize: undefined,
  shadowAnchor: undefined,
  iconSize: new L.Point(50, 81),
  className: "leaflet-div-icon",
});

export { marker };
