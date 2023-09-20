import React from "react";
import { useState } from "react";

import L, { LatLng } from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { MapContainer, TileLayer } from "react-leaflet";

import { ClickMaker } from "@/components/atoms/ClickMaker";

import "leaflet/dist/leaflet.css";

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

const Map = (): JSX.Element => {
  const [center] = useState<LatLng>(new LatLng(35.68944, 139.69167));
  const [positions, setPositions] = useState<LatLng[]>([
    new LatLng(35.68944, 139.69167),
  ]);

  return (
    <MapContainer
      center={center}
      zoom={6}
      scrollWheelZoom={true}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ClickMaker
        positions={positions}
        setPositions={setPositions}
      ></ClickMaker>
    </MapContainer>
  );
};

export default Map;
