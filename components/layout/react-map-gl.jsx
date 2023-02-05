import { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

const accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

class Map extends Component {
  state = {
    viewport: {
      width: "100vw",
      height: "100vh",
      latitude: 51.505,
      longitude: -0.09,
      zoom: 1.5,
    },
  };

  render() {
    return (
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={accessToken}
        scrollZoom={true}
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({ viewport })}
      />
    );
  }
}

export default Map;
