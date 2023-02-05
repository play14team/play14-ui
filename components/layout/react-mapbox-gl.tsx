import Image from "next/image";
import React, { useState } from "react";
import ReactMapboxGl, {
  Layer,
  Feature,
  Marker,
  ZoomControl,
  Popup,
  Cluster,
} from "react-mapbox-gl";

const Mapbox = ReactMapboxGl({
  accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "",
});

const MapboxGL = () => {
  const [lng, setLng] = useState(15);
  const [lat, setLat] = useState(40);

  return (
    <Mapbox
      style="mapbox://styles/mapbox/streets-v11"
      containerStyle={{
        height: "900px",
        width: "100%",
      }}
      center={[lng, lat]}
      zoom={[1.3]}
      onMove={(e) => {
        setLng(e.getCenter().lng);
        setLat(e.getCenter().lat);
      }}
    >
      <Marker coordinates={[15, 40]} anchor="bottom">
        <h1>marker</h1>
        <img src="../../public/markers/blue-marker.png" />
      </Marker>

      <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />

        {/* <Popup
          coordinates={[-0.13235092163085938, 51.518250335096376]}
          offset={[0, -38]}
        >
          <h1>Popup</h1>
        </Popup> */}

        {/* <Marker coordinates={[0, 0]} anchor="bottom">
          <Image
            src={"/markers/green-marker.png"}
            alt="green marker"
            width={20}
            height={60}
          />
        </Marker> */}
      </Layer>
      <ZoomControl />
    </Mapbox>
  );
};

export default MapboxGL;
