"use client";
import { useEffect, useState } from "react";
import Leaflet from "leaflet";
import * as ReactLeaflet from "react-leaflet";
import "leaflet/dist/leaflet.css";

import styles from "./Map.module.scss";
import fetchData from "@/utils/fetchData";

const { MapContainer, TileLayer, Marker, Popup } = ReactLeaflet;
const DEFAULT_CENTER = [38.907132, -77.036546];

const Map = ({ children, className, width, height, ...rest }) => {
  let mapClassName = styles.map;
  const [destinations, setDestinations] = useState([]);

  if (className) {
    mapClassName = `${mapClassName} ${className}`;
  }

  useEffect(() => {
    (async function init() {
      delete Leaflet.Icon.Default.prototype._getIconUrl;
      Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: "leaflet/images/marker-icon-2x.png",
        iconUrl: "leaflet/images/marker-icon.png",
        shadowUrl: "leaflet/images/marker-shadow.png",
      });
    })();
    fetchData()
      .then((data) => {
        setDestinations(data.destinations);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <MapContainer className={mapClassName} {...rest}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {destinations?.map(({ id, name, location }) => (
        <Marker position={[location.latitude, location.longitude]} key={id}>
          <Popup>{name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
