import React from 'react';
import 'src/components/HomeUser/Main/Map/map.scss';


// leaflet
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

const position = [47.081012, 2.398782];

const Map = () => {
  return (
    <LeafletMap center={position} zoom={6} id="mapHomeUser">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <Marker position={position}>
        <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
      </Marker>
    </LeafletMap>
  );
};

export default Map;
