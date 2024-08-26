import React, { useState, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import ReactMapGL from "react-map-gl";

type Props = {};

mapboxgl.accessToken =
  "pk.eyJ1IjoicG9vbXNpcmEiLCJhIjoiY2x6ajdzcnEyMG9vMDJ2cHhkbnp4dThjOSJ9.q98baVlbLATw6CGl9IIw_Q";

const BushfireAreaMap = (props: Props) => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100vh",
    latitude: 37.7749,
    longitude: -122.4194,
    zoom: 10,
  });

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map", // Container ID
      style: "mapbox://styles/mapbox/streets-v11", // Style URL
      center: [viewport.longitude, viewport.latitude], // Starting position [lng, lat]
      zoom: viewport.zoom, // Starting zoom
    });

    // You can add controls, markers, etc., here if needed.

    return () => map.remove(); // Clean up on unmount
  }, []);

  return (
    <div id="map" style={{ width: "100%", height: "100vh" }}>
      {/* <ReactMapGL
        {...viewport}
        mapboxAccessToken={mapboxgl.accessToken} // Use the access token directly
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      /> */}
      map
    </div>
  );
};

export default BushfireAreaMap;
