import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Button from "../Button";
const containerStyle = {
  maxWidth: "669px",
  width: "100vw",
  height: "431px",
};

const center = {
  lat: 37.531807,
  lng: 127.001185,
};
const divStyle = {
  background: `white`,
};
export default function Map() {
  const [map, setMap] = React.useState(null);
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  return (
    <div className="md:w-max w-full ml-auto">
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_googleMapsApiKey}>
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexFlow: "column nowrap",
            padding: 0,
            gap: "2rem",
          }}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            // onLoad={onLoad}
            onUnmount={onUnmount}
          >
            <Marker position={center}>
              <InfoWindow position={center}>
                <div style={divStyle}>
                  <h1 className="text-2xl bold" style={{ color: "#0074D9" }}>
                    <a href="https://www.google.com/maps/dir//765-26+Hannam-dong,+Yongsan-gu,+Seoul/data=!4m8!4m7!1m0!1m5!1m1!1s0x357ca3b5c071359d:0x27fb0f2712027ce7!2m2!1d127.0011631!2d37.5316287">
                      &quot;elkpro cut&quot;
                    </a>
                  </h1>
                </div>
              </InfoWindow>
            </Marker>
          </GoogleMap>
          <a
            className="contents"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/dir//765-26+Hannam-dong,+Yongsan-gu,+Seoul/data=!4m8!4m7!1m0!1m5!1m1!1s0x357ca3b5c071359d:0x27fb0f2712027ce7!2m2!1d127.0011631!2d37.5316287"
          >
            <Button className="ml-auto">Get directions</Button>
          </a>
        </div>
      </LoadScript>
    </div>
  );
}
