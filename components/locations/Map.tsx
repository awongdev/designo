"use client";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

type CoordinatesT = {
  coordinates: { lat: number; long: number };
  popup: string;
};

const Map = ({ coordinates, popup }: CoordinatesT) => {
  const myIcon = L.icon({
    iconUrl: "/leaflet/marker-icon.png",
  });
  return (
    <>
      <MapContainer
        className="h-full min-h-[20rem] w-full"
        center={[coordinates.long, coordinates.lat]}
        zoom={16}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[coordinates.long, coordinates.lat]} icon={myIcon}>
          <Popup className="whitespace-pre-line">{popup}</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;
